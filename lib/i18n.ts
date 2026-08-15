import ru from "@/content/dictionaries/ru.json";
import en from "@/content/dictionaries/en.json";

export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

const dictionaries = { ru, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
