import { useCallback, useEffect, useState } from "react";

export function useLanguage({
  languages,
  defaultLanguage,
  storageKey = "language",
}) {
  const [language, setLanguageState] = useState(() => {
    const savedLanguage = localStorage.getItem(storageKey);

    if (savedLanguage && languages.includes(savedLanguage)) {
      return savedLanguage;
    }

    return defaultLanguage;
  });

  const setLanguage = useCallback(
    (newLanguage) => {
      if (!languages.includes(newLanguage)) {
        throw new Error(`Unsupported language: ${newLanguage}`);
      }

      setLanguageState(newLanguage);
      localStorage.setItem(storageKey, newLanguage);
    },
    [languages, storageKey]
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return [language, setLanguage];
}
