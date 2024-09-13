import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE } from '../../utilities/constants'
import { appLanguages } from '../../utilities/languageData'
import { languageData } from '../../utilities'
import { getItem, setItem } from '../../services/assynsStorage'

type LanguageDataType = {
  locale: string;
  translation: object;
}

// CHANGE LANGUAGE 
const setLanguageAsync = async (lang: string) => {
  await setItem('languagecode', lang);
};
export const onLanguageSelect = async (langId: string, setflag?: any, flag?: boolean) => {
  let lang = appLanguages.find((item: any) => item.code === langId);
  // console.log(appLanguages, 'appLanguages', langId)
  if (lang) {
    await i18n.changeLanguage(lang.code);
    await setLanguageAsync(lang.code);
    setflag(!flag);
  }
};
// CHANGE LANGUAGE 

export const fetchTranslations = async () => {
  const translations = languageData
  let selectedLocale = null

  if (translations.length) {
    if (translations.length) {
      translations.forEach((translation: LanguageDataType) => {
        i18n.addResourceBundle(translation.locale, 'translation', translation.translation, true, true)
      })

      const locales = translations.map((translation) => translation.locale)

      let lang: string;

      try {
        lang = await getItem('languagecode', DEFAULT_LANGUAGE)
      } catch (error) {
        console.log(error)
      }

      selectedLocale = locales.find((locale: string) => locale === lang)
    }

    if (selectedLocale) {
      await setItem('languagecode', selectedLocale)

      i18n.changeLanguage(selectedLocale)
    } else {
      await setItem('languagecode', DEFAULT_LANGUAGE)
    }
  }
  return true
}

export const translate = (value: string) => i18n.t(value)

// Set fallback language to mumbo jumbo so it displays missing tags
i18n.use(initReactI18next).init(
  {
    debug: true,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: 'en',
    resources: {
    },
  },
)

export default i18n