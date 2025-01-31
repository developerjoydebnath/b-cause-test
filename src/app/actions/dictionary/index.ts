"use server";

import en from "@/data/language/en.json";
import ja from "@/data/language/ja.json";

export const getDictionary = async (
  lang: "en" | "ja" | (string & {}) | undefined | null = "ja",
) => {
  if (!lang) {
    return {
      dictionary: null,
      error: "Please select a language!",
    };
  }

  if (lang !== "en" && lang !== "ja") {
    return {
      dictionary: null,
      error: "Language not supported!",
    };
  }

  const dictionary = lang === "en" ? en : ja;

  return {
    dictionary,
    error: null,
  };
};
