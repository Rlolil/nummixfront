import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import DarkMode from '../../components/SettingsButton.jsx/DarkMode'

// Local storage helpers
const readJSON = (key, fallback) => {
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) : fallback
  } catch {
    return fallback
  }
}
const writeJSON = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    // Swallow storage errors (quota/private mode)
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('settings: writeJSON failed', e)
    }
  }
}

function Settings() {
  const { t } = useTranslation()

  // Profile (local-only for now)
  const [profile, setProfile] = useState(() => readJSON('settings.profile', { name: '', email: '' }))
  const [profileSaved, setProfileSaved] = useState(false)

  // Theme
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // Preferences
  const defaultPrefs = useMemo(() => ({
    currency: 'AZN',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1,234.56',
  }), [])
  const [prefs, setPrefs] = useState(() => readJSON('settings.prefs', defaultPrefs))
  const [prefsSaved, setPrefsSaved] = useState(false)

  // Notifications
  const [noti, setNoti] = useState(() => readJSON('settings.notifications', { inApp: true, email: true, push: false }))
  const [notiSaved, setNotiSaved] = useState(false)

  // Security (local validation only)
  const [sec, setSec] = useState({ current: '', next: '', confirm: '' })
  const [secMsg, setSecMsg] = useState('')

  // Handlers
  const saveProfile = (e) => {
    e?.preventDefault?.()
    writeJSON('settings.profile', profile)
    setProfileSaved(true)
    setTimeout(() => setProfileSaved(false), 2000)
  }

  const savePrefs = (e) => {
    e?.preventDefault?.()
    writeJSON('settings.prefs', prefs)
    setPrefsSaved(true)
    setTimeout(() => setPrefsSaved(false), 2000)
  }

  const saveNoti = (e) => {
    e?.preventDefault?.()
    writeJSON('settings.notifications', noti)
    setNotiSaved(true)
    setTimeout(() => setNotiSaved(false), 2000)
  }

  const changePassword = (e) => {
    e?.preventDefault?.()
    setSecMsg('')
    if (!sec.next || !sec.confirm) {
      setSecMsg(t('pages.settings.security.missing', { defaultValue: 'Please enter the new password twice.' }))
      return
    }
    if (sec.next.length < 6) {
      setSecMsg(t('pages.settings.security.tooShort', { defaultValue: 'New password must be at least 6 characters.' }))
      return
    }
    if (sec.next !== sec.confirm) {
      setSecMsg(t('pages.settings.security.notMatch', { defaultValue: 'Passwords do not match.' }))
      return
    }
    // No backend; pretend success
    setSec({ current: '', next: '', confirm: '' })
    setSecMsg(t('pages.settings.security.changed', { defaultValue: 'Password updated (local only).' }))
  }

  const resetAll = () => {
    try {
      localStorage.removeItem('settings.profile')
      localStorage.removeItem('settings.prefs')
      localStorage.removeItem('settings.notifications')
    } catch (e) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('settings: reset failed', e)
      }
    }
    setProfile({ name: '', email: '' })
    setPrefs(defaultPrefs)
    setNoti({ inApp: true, email: true, push: false })
  }

  return (
    <div className="sm:ml-[100px] ml-0 p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t('pages.settings.title', { defaultValue: 'Settings' })}</h1>
        <p className="text-gray-600">{t('pages.settings.subtitle', { defaultValue: 'Manage your account and preferences' })}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile */}
        <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-1">{t('pages.settings.profile.title', { defaultValue: 'Profile' })}</h2>
          <p className="text-sm text-gray-500 mb-4">{t('pages.settings.profile.subtitle', { defaultValue: 'Update your basic information' })}</p>
          <form onSubmit={saveProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('common.name', { defaultValue: 'Name' })}</label>
              <input
                value={profile.name}
                onChange={(e) => setProfile(p => ({ ...p, name: e.target.value }))}
                type="text"
                placeholder={t('placeholders.name', { defaultValue: 'Your name' })}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('common.email', { defaultValue: 'Email' })}</label>
              <input
                value={profile.email}
                onChange={(e) => setProfile(p => ({ ...p, email: e.target.value }))}
                type="email"
                placeholder={t('placeholders.email', { defaultValue: 'you@example.com' })}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800">
                {t('common.save', { defaultValue: 'Save' })}
              </button>
              {profileSaved && <span className="text-sm text-green-600">{t('common.saved', { defaultValue: 'Saved' })}</span>}
            </div>
          </form>
        </section>

        {/* Security */}
        <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-1">{t('pages.settings.security.title', { defaultValue: 'Security' })}</h2>
          <p className="text-sm text-gray-500 mb-4">{t('pages.settings.security.subtitle', { defaultValue: 'Change your password' })}</p>
          <form onSubmit={changePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('pages.settings.security.current', { defaultValue: 'Current password' })}</label>
              <input
                value={sec.current}
                onChange={(e) => setSec(s => ({ ...s, current: e.target.value }))}
                type="password"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">{t('pages.settings.security.new', { defaultValue: 'New password' })}</label>
                <input
                  value={sec.next}
                  onChange={(e) => setSec(s => ({ ...s, next: e.target.value }))}
                  type="password"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t('pages.settings.security.confirm', { defaultValue: 'Confirm new password' })}</label>
                <input
                  value={sec.confirm}
                  onChange={(e) => setSec(s => ({ ...s, confirm: e.target.value }))}
                  type="password"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>
            {secMsg && <p className="text-sm text-gray-600">{secMsg}</p>}
            <button type="submit" className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800">
              {t('pages.settings.security.update', { defaultValue: 'Update password' })}
            </button>
          </form>
        </section>

        {/* Language & Theme */}
        <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-1">{t('pages.settings.appearance.title', { defaultValue: 'Language & Appearance' })}</h2>
          <p className="text-sm text-gray-500 mb-4">{t('pages.settings.appearance.subtitle', { defaultValue: 'Choose language and theme' })}</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">{t('pages.settings.language', { defaultValue: 'Language' })}</label>
              <LanguageSwitcher compact className="w-max" />
              <p className="text-xs text-gray-500 mt-2">{t('pages.settings.languageHint', { defaultValue: 'Switch language instantly; remembered on this device.' })}</p>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">{t('pages.settings.theme', { defaultValue: 'Theme' })}</label>
              <DarkMode theme={theme} setTheme={setTheme} />
              <p className="text-xs text-gray-500 mt-2">{t('pages.settings.themeHint', { defaultValue: 'Dark mode uses your saved preference.' })}</p>
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-1">{t('pages.settings.preferences.title', { defaultValue: 'Preferences' })}</h2>
          <p className="text-sm text-gray-500 mb-4">{t('pages.settings.preferences.subtitle', { defaultValue: 'Regional and formatting options' })}</p>
          <form onSubmit={savePrefs} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('pages.settings.preferences.currency', { defaultValue: 'Default currency' })}</label>
              <select
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                value={prefs.currency}
                onChange={(e) => setPrefs(p => ({ ...p, currency: e.target.value }))}
              >
                {['AZN', 'USD', 'EUR', 'TRY', 'RUB'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('pages.settings.preferences.dateFormat', { defaultValue: 'Date format' })}</label>
              <select
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                value={prefs.dateFormat}
                onChange={(e) => setPrefs(p => ({ ...p, dateFormat: e.target.value }))}
              >
                {['DD.MM.YYYY', 'YYYY-MM-DD', 'MM/DD/YYYY'].map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('pages.settings.preferences.numberFormat', { defaultValue: 'Number format' })}</label>
              <select
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                value={prefs.numberFormat}
                onChange={(e) => setPrefs(p => ({ ...p, numberFormat: e.target.value }))}
              >
                {[
                  { k: '1,234.56', l: t('pages.settings.preferences.us', { defaultValue: '1,234.56 (US)' }) },
                  { k: '1 234,56', l: t('pages.settings.preferences.eu', { defaultValue: '1 234,56 (EU)' }) },
                ].map(opt => (
                  <option key={opt.k} value={opt.k}>{opt.l}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <div className="flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800">
                  {t('common.save', { defaultValue: 'Save' })}
                </button>
                {prefsSaved && <span className="text-sm text-green-600">{t('common.saved', { defaultValue: 'Saved' })}</span>}
              </div>
            </div>
          </form>
        </section>

        {/* Notifications */}
        <section className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-1">{t('pages.settings.notifications.title', { defaultValue: 'Notifications' })}</h2>
          <p className="text-sm text-gray-500 mb-4">{t('pages.settings.notifications.subtitle', { defaultValue: 'Choose how you want to be notified' })}</p>
          <form onSubmit={saveNoti} className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4" checked={!!noti.inApp} onChange={(e) => setNoti(s => ({ ...s, inApp: e.target.checked }))} />
              <span className="text-sm">{t('pages.settings.notifications.inApp', { defaultValue: 'In-app alerts' })}</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4" checked={!!noti.email} onChange={(e) => setNoti(s => ({ ...s, email: e.target.checked }))} />
              <span className="text-sm">{t('pages.settings.notifications.email', { defaultValue: 'Email updates' })}</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4" checked={!!noti.push} onChange={(e) => setNoti(s => ({ ...s, push: e.target.checked }))} />
              <span className="text-sm">{t('pages.settings.notifications.push', { defaultValue: 'Push notifications' })}</span>
            </label>
            <div className="flex items-center gap-3 pt-2">
              <button type="submit" className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800">
                {t('common.save', { defaultValue: 'Save' })}
              </button>
              {notiSaved && <span className="text-sm text-green-600">{t('common.saved', { defaultValue: 'Saved' })}</span>}
            </div>
          </form>
        </section>
      </div>

      {/* Danger/Reset */}
      <div className="bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-900 rounded-xl p-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-base font-semibold text-red-600">{t('pages.settings.reset.title', { defaultValue: 'Reset settings' })}</h3>
            <p className="text-sm text-gray-500">{t('pages.settings.reset.subtitle', { defaultValue: 'Clear saved profile, preferences and notifications from this device' })}</p>
          </div>
          <button onClick={resetAll} className="px-4 py-2 rounded-md bg-red-600 text-white text-sm hover:bg-red-700">
            {t('pages.settings.reset.action', { defaultValue: 'Reset' })}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings