
import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";


const I18nContext = createContext();

export function I18nProvider({ children }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ t, lang: i18n.language, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
