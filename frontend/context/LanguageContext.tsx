"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "AZ" | "RU" | "EN";
interface Dictionary {
  [key: string]: string | string[] | Dictionary | undefined;
}

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const dictionaries: Record<Language, () => Promise<Dictionary>> = {
  AZ: () => import("@/i18n/dictionaries/az.json").then((m) => m.default),
  RU: () => import("@/i18n/dictionaries/ru.json").then((m) => m.default),
  EN: () => import("@/i18n/dictionaries/en.json").then((m) => m.default),
};

const defaultAzDictionary: Dictionary = {
  header: {
    create_store: "Mağaza Yarat",
    create_listing: "Elan Yarat",
    login: "Daxil ol",
    register: "Qeydiyyat",
    search: "Axtarış",
  },
};

function getSavedLanguage(): Language {
  if (typeof window === "undefined") {
    return "AZ";
  }

  const saved = window.localStorage.getItem("VELA_LANG");
  return saved === "AZ" || saved === "RU" || saved === "EN" ? saved : "AZ";
}

function getNestedValue(source: Dictionary | string | string[] | undefined, keys: string[]) {
  let current = source;

  for (const key of keys) {
    if (!current || typeof current === "string" || Array.isArray(current)) {
      return undefined;
    }

    current = current[key];
  }

  return typeof current === "string" ? current : undefined;
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getSavedLanguage);
  const [dictionary, setDictionary] = useState<Dictionary>(defaultAzDictionary);

  useEffect(() => {
    let isMounted = true;

    dictionaries[language]()
      .then((dict) => {
        if (!isMounted) {
          return;
        }

        setDictionary(dict);
        document.documentElement.lang = language.toLowerCase();
      })
      .catch((error) => {
        console.error("Failed to load dict", error);
      });

    return () => {
      isMounted = false;
    };
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem("VELA_LANG", lang);
    } catch {}
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    return getNestedValue(dictionary, keys) || getNestedValue(defaultAzDictionary, keys) || key;
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
