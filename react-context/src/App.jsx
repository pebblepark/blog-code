import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const I18nContext = createContext(null);

function App() {
  const [locale, setLocale] = useState('en');
  const changeLocale = useCallback(
    (locale) => {
      setLocale(locale);
    },
    [setLocale]
  );

  return (
    <I18nContext.Provider value={{ locale, changeLocale }}>
      <LanguageButton />
    </I18nContext.Provider>
  );
}

const LanguageButton = () => {
  const { locale, changeLocale } = useContext(I18nContext);

  useEffect(() => {
    console.log('현재 언어:', locale);
  }, [locale]);

  const nextLanguage = useMemo(() => (locale === 'en' ? 'ko' : 'en'), [locale]);

  return (
    <button onClick={() => changeLocale(nextLanguage)}>{nextLanguage}</button>
  );
};

export default App;
