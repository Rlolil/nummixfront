import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalDocuments = () => {
  const { t } = useTranslation('app');
  return (
    <div className="space-y-6 text-[#001233] dark:text-white">
      {/* Şəxsi Sənədlər */}
      <div className="bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white flex flex-col gap-6 rounded-xl border border-[#33415C] dark:border-[#979DAC] p-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-[#023E7D] dark:text-white">{t('pages.hr.portal.documents.title')}</h4>
        </div>

        {/* Document List */}
        <div className="space-y-3">
          {/* First Document */}
          <div className="flex items-center justify-between p-4 bg-[#F5F8FF] dark:bg-[#001233] rounded-lg border border-[#979DAC]">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-8 h-8 text-blue-600 dark:text-blue-400">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <div>
                <p className="text-[#001233] dark:text-white">{t('pages.hr.portal.documents.contract')}</p>
                <p className="text-sm text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.portal.documents.uploadedAt')}: 2019-06-01</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-md h-8 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 mr-2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              {t('pages.hr.portal.documents.download')}
            </button>
          </div>

          {/* Second Document */}
          <div className="flex items-center justify-between p-4 bg-[#F5F8FF] dark:bg-[#001233] rounded-lg border border-[#979DAC]">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-8 h-8 text-green-600 dark:text-green-400">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <div>
                <p className="text-[#001233] dark:text-white">{t('pages.hr.portal.documents.medicalCertificate')}</p>
                <p className="text-sm text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.portal.documents.validity')}: 2025-12-31</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center text-sm font-medium bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 rounded-md h-8 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 mr-2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              {t('pages.hr.portal.documents.download')}
            </button>
          </div>

          {/* Third Document */}
          <div className="flex items-center justify-between p-4 bg-[#F5F8FF] dark:bg-[#001233] rounded-lg border border-[#979DAC]">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-8 h-8 text-purple-600 dark:text-purple-400">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <div>
                <p className="text-[#001233] dark:text-white">{t('pages.hr.portal.documents.idCopy')}</p>
                <p className="text-sm text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.portal.documents.uploadedAt')}: 2023-05-15</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 rounded-md h-8 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 mr-2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              {t('pages.hr.portal.documents.download')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDocuments;
