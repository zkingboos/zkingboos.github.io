import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LocalizedText {
  en: string;
  pt: string;
}

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  l: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "pt" : "en"));

  const l = (text: LocalizedText) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, l }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
