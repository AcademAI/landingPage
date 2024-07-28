import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ENG'); // состояние выбранного языка

  const handleLanguageChange = () => {
    // функция для изменения языка 
    setLanguage(language === 'ENG' ? 'RU' : 'ENG');
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};