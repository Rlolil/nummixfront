import { AiOutlineDownload, AiOutlineSend } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function SimplifiedTax() {
  const { t } = useTranslation();
  return (
    <div className="border border-gray-300 p-3 sm:p-4 space-y-4 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-medium">{t('pages.accounting.taxReports.tabs.simplified')}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{t('common.monthYear', { month: 'September', year: 2025, defaultValue: 'September {{year}}' })}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border rounded hover:bg-gray-100 text-xs sm:text-sm">
            <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5" /> {t('common.export') || 'Export'}
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded hover:bg-gray-900 text-xs sm:text-sm">
            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" /> {t('pages.accounting.taxReports.actions.submitToDsmf')}
          </button>
        </div>
      </div>
      <div className="my-4 sm:my-8">
        <p className="text-gray-600 text-center text-sm sm:text-base">
          {t('pages.accounting.taxReports.simplified.notApplicable')}
        </p>
      </div>
    </div>
  );
}

export default SimplifiedTax;