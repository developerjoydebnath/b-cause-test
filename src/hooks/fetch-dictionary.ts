import { getDictionary } from "@/app/actions/dictionary";

export const fetchDictionary = async (lang: string) => {
  const { dictionary } = await getDictionary(lang);
  return dictionary;
};
