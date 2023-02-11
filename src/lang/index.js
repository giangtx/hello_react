import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage, setLanguage } from '../utils/LocalStorage';

// tiếng anh
import en from './en';
// tiếng việt
import vn from './vn';

const resources = {
  en: {
    translation: en,
  },
  vn: {
    translation: vn,
  }
}

// khơi tạo cho midllware thay đổi ngôn ngữ
i18n.use(initReactI18next)
    .init({
      resources,
      // giá trị mặc định ngôn ngữ lấy từ local storage
      fallbackLng: getLanguage(),
      debug: true,
      interpolation: {
        escapeValue: false // not needed for react as it escapes by default
      }
    });

export const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  // lưu giá trị ngôn ngữ vào local storage
  setLanguage(lang);
}

export default i18n;