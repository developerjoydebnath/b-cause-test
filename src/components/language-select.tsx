"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function SelectLanguage({
  sp,
}: {
  sp: { [key: string]: string | string[] | undefined };
}) {
  const [lang, setLang] = React.useState(sp?.lang || "ja");
  const router = useRouter();

  // language change handler
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);

    router.push(`?lang=${e.target.value}`);
  };

  return (
    <select
      className="h-10 rounded border px-3 py-1.5 outline-none"
      value={lang}
      onChange={handleLanguageChange}
    >
      <option value="ja">JA</option>
      <option value="en">EN</option>
    </select>
  );
}
