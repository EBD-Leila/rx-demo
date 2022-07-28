import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';
const lng = 'zh';
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    Welcome: 'Welcome to React',
                },
            },
            zh: {
                translation: {
                    Welcome: '欢迎进入react',
                },
            },
        },
        lng: lng,
        fallbackLng: lng,


        interpolation: {
            escapeValue: false,
        },
    });
export default i18n