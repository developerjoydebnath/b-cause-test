import SelectLanguage from "@/components/language-select";
import Select from "@/components/select";
import { t } from "@/hooks/t";
import { getDictionary } from "../actions/dictionary";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const { dictionary, error } = await getDictionary(sp.lang as string);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <input
            className="flex h-10 items-center justify-start rounded border px-3 py-1.5 outline-none transition-all focus:border-black"
            type="search"
            placeholder={t("Search", dictionary)}
          />
          <button className="flex h-10 items-center justify-start rounded border bg-gray-100 px-3 py-1.5 outline-none transition-all hover:bg-gray-200 active:bg-gray-100">
            {t("Clear", dictionary)}
          </button>

          <p>{t("Monthly, daily, by day Sales Reports", dictionary)}</p>
        </div>

        <div className="flex items-center gap-2">
          <label>{t("Language", dictionary)}</label>
          <SelectLanguage sp={sp} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Select options={[2025, 2024]} />
        <Select options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
        <Select options={[t("Team Name", dictionary) || ""]} />
        <Select options={[t("Company Type", dictionary) || ""]} />
        <Select options={[t("New/existing", dictionary) || ""]} />
      </div>
    </div>
  );
}
