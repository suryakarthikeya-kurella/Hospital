import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";
import { translations, type SupportedLanguage, languageLabels } from "./translations";

type I18nContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  languages: { code: SupportedLanguage; label: string }[];
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const detectInitial = (): SupportedLanguage => {
    const fromStorage = (localStorage.getItem("lang") as SupportedLanguage | null);
    if (fromStorage && translations[fromStorage]) return fromStorage;
    const nav = navigator.language.toLowerCase();
    if (nav.startsWith("hi")) return "hi";
    if (nav.startsWith("te")) return "te";
    return "en";
  };

  const [language, setLanguageState] = useState<SupportedLanguage>(detectInitial);

  useEffect(() => {
    localStorage.setItem("lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: SupportedLanguage) => setLanguageState(lang);

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>) => {
      const dict = translations[language] || translations.en;
      const str = dict[key] ?? translations.en[key] ?? key;
      return interpolate(str, vars);
    };
  }, [language]);

  const languages = useMemo(
    () => (Object.keys(languageLabels) as SupportedLanguage[]).map((code) => ({ code, label: languageLabels[code] })),
    []
  );

  const value: I18nContextValue = { language, setLanguage, t, languages };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};


