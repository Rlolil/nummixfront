import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const FLAGS = {
  az: '🇦🇿',
  en: '🇬🇧',
  ru: '🇷🇺'
}

export default function LanguageSwitcher({ compact = false, className = '' }) {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const current = i18n.resolvedLanguage || i18n.language || 'az'

  const items = useMemo(() => (
    [
      { code: 'az', label: t('lang.az', { ns: 'translation',  keySeparator:false }) },
      { code: 'en', label: t('lang.en', { ns: 'translation',  keySeparator:false }) },
      { code: 'ru', label: t('lang.ru', { ns: 'translation',  keySeparator:false }) }
    ]
  ), [t])

  useEffect(() => {
    const onKey = (e) => {
      // Ctrl+Shift+L to cycle languages
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault()
        const order = ['az', 'en', 'ru']
        const idx = order.indexOf(current)
        const next = order[(idx + 1) % order.length]
        i18n.changeLanguage(next)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, i18n])

  const change = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  if (compact) {
    return (
      <button onClick={() => setOpen(!open)} className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-md border hover:bg-gray-50 ${className}`}>
        <span>{FLAGS[current]}</span>
        <span className="text-sm hidden sm:inline">{current.toUpperCase()}</span>
        {open && (
          <div className="absolute right-0 top-full mt-1 w-36 bg-white border rounded-md shadow-lg z-50">
            {items.map(it => (
              <div
                key={it.code}
                role="button"
                tabIndex={0}
                onClick={() => change(it.code)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); change(it.code); } }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 ${current === it.code ? 'font-semibold' : ''}`}>
                <span>{FLAGS[it.code]}</span>
                <span className="text-sm">{it.label}</span>
              </div>
            ))}
          </div>
        )}
      </button>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border hover:bg-gray-50">
        <span>{FLAGS[current]}</span>
        <span className="text-sm">{t('pages.langSwitcher.current', { defaultValue: 'Language' })}: {current.toUpperCase()}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white border rounded-md shadow-lg z-50">
          {items.map(it => (
            <div
              key={it.code}
              role="button"
              tabIndex={0}
              onClick={() => change(it.code)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); change(it.code); } }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 ${current === it.code ? 'font-semibold' : ''}`}>
              <span>{FLAGS[it.code]}</span>
              <span className="text-sm">{it.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
