"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "AZ" | "RU" | "EN";
type Dictionary = Record<string, any>;

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Lüğətlərin asinxron yüklənməsi (Dynamic Import) ki, sayt ilk vaxtdan ağırlaşmasın
const dictionaries: Record<Language, () => Promise<Dictionary>> = {
  AZ: () => import("@/i18n/dictionaries/az.json").then((m) => m.default),
  RU: () => import("@/i18n/dictionaries/ru.json").then((m) => m.default),
  EN: () => import("@/i18n/dictionaries/en.json").then((m) => m.default),
};

// Başlanğıc fallback ki, "t" işləyərkən erro verməsin yüklənənə qədər
const defaultAzDictionary = {
  header: {
    create_store: "Mağaza Yarat",
    create_listing: "Elan Yarat",
    login: "Daxil ol",
    register: "Qeydiyyat",
    search: "Axtarış"
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("AZ");
  const [dictionary, setDictionary] = useState<Dictionary>(defaultAzDictionary); // preload az

  // 1. App açılanda seçilmiş dili localStorage-dən götürürük
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("VELA_LANG") as Language;
      if (savedLang && ["AZ", "RU", "EN"].includes(savedLang)) {
        setLanguageState(savedLang);
      }
    } catch (error) {
      console.error("Language API error", error);
    }
  }, []);

  // 2. Dil dəyişən kimi Lüğəti fetch edirik
  useEffect(() => {
    let isMounted = true;
    dictionaries[language]().then((dict) => {
      if (isMounted) setDictionary(dict);
      // document tag-ini dəyişirik a11y üçün
      document.documentElement.lang = language.toLowerCase();
    }).catch((err) => console.error("Failed to load dict", err));
    return () => {
      isMounted = false;
    };
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("VELA_LANG", lang);
    } catch (error) {}
  };

  // Köməkçi funksiya: "header.login" kimi iç-içə gələn adları lüğətdən tapır
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = dictionary;
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    if (value === undefined) {
      // Yüklənmədiyində və ya tapılmayanda fallback kimi açarın özünü qaytar(və ya defaultAz)
      let fallback: any = defaultAzDictionary;
      for (const k of keys) {
        if (fallback === undefined) break;
        fallback = fallback[k];
      }
      return fallback || key; // "header.login" yerinə əks çıxış
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
