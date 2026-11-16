import { createContext, useContext } from "react";

export type Language = "es" | "en";
export type Localized = Record<Language, string>;
export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "es", setLanguage: () => undefined });

export function useLanguage() {
  const context = useContext(LanguageContext);
  return {
    ...context,
    t: (es: string, en: string) => (context.language === "es" ? es : en),
  };
}
