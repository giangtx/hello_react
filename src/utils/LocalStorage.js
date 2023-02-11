const LANGUAGE = 'language';

export const getLanguage = () => {
  const value = localStorage.getItem(LANGUAGE);
  if (value) {
    return value;
  }
  return 'vn';
}

export const setLanguage = (lang) => {
  localStorage.setItem(LANGUAGE, lang);
}