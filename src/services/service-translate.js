import { I18n } from "i18n-js";
import Cookies from 'js-cookie';

import en from '../languages/english.json'
import es from '../languages/spanish.json'
import pt from '../languages/portuguese.json'

const i18n = new I18n();

async function ChangeLanguage(lang) {
    console.log(lang, 'aqui')
    if (lang === '') {
        i18n.locale = 'en'
    } else {
        i18n.locale = lang;
    }
    Cookies.set('Translate', lang, { expires: 7 })
}

i18n.translations = { en, pt, es };
i18n.fallbacks = true;
i18n.locale = 'en';

async function getDefaultLanguage() {
    const defaultLanguage = Cookies.get('Translate');
    if (!defaultLanguage) {
        return;
    }
    return defaultLanguage;
}

export const translate = (key, options) => i18n.t(key, options);
export { getDefaultLanguage };
export default ChangeLanguage;