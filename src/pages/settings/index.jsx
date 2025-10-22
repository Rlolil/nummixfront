import React from 'react'
import { useTranslation } from 'react-i18next'

function Settings() {
  const { t } = useTranslation()
  return (
    <div className="sm:ml-[100px] ml-0 p-6">
      <h1 className="text-2xl font-semibold">{t('pages.settings.title')}</h1>
      <p className="text-gray-600">{t('pages.settings.subtitle')}</p>
    </div>
  )
}

export default Settings