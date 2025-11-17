import { AiOutlineDownload, AiOutlineSend } from "react-icons/ai";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function SimplifiedTax() {
  const { t } = useTranslation();
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);
  return (
    <div className="border border-[#33415C] p-3 sm:p-4 space-y-4 rounded-xl shadow-sm bg-[#FFFFFF] text-[#001233]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-medium text-[#023E7D]">{t('pages.accounting.taxReports.tabs.simplified')}</h3>
          <p className="text-[#7D8597] text-sm sm:text-base">{t('common.monthYear', { month: 'September', year: 2025, defaultValue: 'September {{year}}' })}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-[#33415C] rounded bg-[#FFFFFF] hover:bg-[#0453A4] hover:text-white transition-colors text-xs sm:text-sm">
            <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5" /> {t('common.export') || 'Export'}
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0466CB] text-white rounded hover:bg-[#0453A4] text-xs sm:text-sm">
            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" /> {t('pages.accounting.taxReports.actions.submitToDsmf')}
          </button>
        </div>
      </div>
      <div className="my-4 sm:my-8">
        <p className="text-[#7D8597] text-center text-sm sm:text-base">
          {t('pages.accounting.taxReports.simplified.notApplicable')}
        </p>
      </div>
    </div>
  );
}

export default SimplifiedTax;