// i18n initialization for React (Vite)
// Loads translations from public/locales/{{lng}}/{{ns}}.json
// Supported languages: az, en, ru

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

// Namespaces available in public/locales/<lng>/: app.json, translation.json
const namespaces = ['app', 'translation']

// Initialize i18next
i18n
	// detect user language (localStorage, <html lang>, browser)
	.use(LanguageDetector)
	// load translations from /public/locales
	.use(HttpBackend)
	// pass the i18n instance to react-i18next
	.use(initReactI18next)
	.init({
		// Core
		supportedLngs: ['az', 'en', 'ru'],
		fallbackLng: 'en',
		ns: namespaces,
		defaultNS: 'app', // use app as default; fall back to translation if not found
		fallbackNS: 'translation',

		// Backend config: Vite serves files from public/ at '/'
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},

		// Preload and detection config
		// preload ensures 'en' resources are requested at init time
		preload: ['en'],
		// load only language (so 'en-US' will resolve to 'en')
		load: 'languageOnly',

		// Detection config
		detection: {
			order: ['localStorage', 'htmlTag', 'navigator', 'path', 'subdomain'],
			caches: ['localStorage'],
		},

		// Interpolation
		interpolation: {
			escapeValue: false, // react already escapes
		},

		// React integration
		react: {
			useSuspense: true,
		},

		// Debug only in development
		debug: import.meta?.env?.MODE === 'development',
	}, (err) => {
		// Diagnostics: useful when some keys don't show in a particular language
		try {
			const isDebug = !!(import.meta?.env?.MODE === 'development')
			console.log('[i18n] initialized', { err, resolvedLanguage: i18n.resolvedLanguage, language: i18n.language, languages: i18n.languages })
			console.log('[i18n] options', { load: i18n.options.load, preload: i18n.options.preload, backend: !!i18n.options.backend })

			// Removed forced 'en' override to allow user-selected languages (e.g. 'ru') to persist in development.

			// Check existence of a known key in both namespaces
			namespaces.forEach((ns) => {
				const exists = i18n.exists('pages.accounting.dashboard', { ns, lng: 'en' })
				console.log(`[i18n] key pages.accounting.dashboard exists in ns=${ns} for en:`, exists)
			})

			// Log loaded resource store (if available)
			i18n.loadNamespaces(namespaces, () => {
				console.log('[i18n] store languages:', Object.keys(i18n.store.data || {}))
				if (i18n.store.data && i18n.store.data.en) {
					console.log('[i18n] en namespaces:', Object.keys(i18n.store.data.en))
				}
			})
		} catch (e) {
			console.error('[i18n] diagnostics error', e)
		}
	})

// Keep <html lang> in sync with current language
if (typeof document !== 'undefined') {
	const applyHtmlLang = (lng) => {
		try {
			const code = lng || i18n.resolvedLanguage || i18n.language || 'en'
			document.documentElement.setAttribute('lang', code)
			// If you add RTL languages in future, also set dir accordingly
			const rtlLangs = new Set(['ar', 'fa', 'he'])
			document.documentElement.setAttribute('dir', rtlLangs.has(code) ? 'rtl' : 'ltr')
		} catch {}
	}
	applyHtmlLang()
	i18n.on('languageChanged', (lng) => applyHtmlLang(lng))
}

export default i18n

