// ** I18n Imports
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const en = new URL("../../../assets/data/locales/en.json", import.meta.url).href;
const id = new URL("../../../assets/data/locales/id.json", import.meta.url).href;

const defaultLang: string = localStorage.getItem("i18nextLng") ?? "en";

const languages: { [key: string]: string } = {
	en,
	id,
};

i18n
	// Enables the i18next backend
	.use(Backend)

	// Enable automatic language detection
	.use(LanguageDetector)

	// Enables the hook initialization module
	.use(initReactI18next)
	.init({
		lng: defaultLang,
		backend: {
			// translation file path
			//loadPath: `${import.meta.env.BASE_URL}/assets/data/locales/{{lng}}.json`,
			loadPath: (lng: string) => languages[lng],
		},
		fallbackLng: "en",
		debug: false,
		keySeparator: false,
		react: {
			useSuspense: false,
		},
		interpolation: {
			escapeValue: false,
			formatSeparator: ",",
		},
	});

export default i18n;
