import { AiOutlineDownload, AiOutlineSend } from "react-icons/ai";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function ProfitTax() {
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
          <h3 className="text-base sm:text-lg font-medium text-[#023E7D]">{t('pages.accounting.taxReports.tabs.profit')}</h3>
          <p className="text-[#7D8597] text-sm sm:text-base">{t('common.quarter', { quarter: 'Q3', year: 2025, defaultValue: 'Q3 2025' })}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-[#33415C] rounded bg-[#FFFFFF] hover:bg-[#0453A4] hover:text-white transition-colors text-xs sm:text-sm">
            <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5" /> {t('common.export') || 'Export'}
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0466CB] text-white rounded hover:bg-[#0453A4] text-xs sm:text-sm">
            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" /> {t('pages.accounting.taxReports.actions.submitDeclaration')}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <tbody>
            <tr className="border-b border-[#979DAC]">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.totalRevenue')}</td>
              <td className="p-1 sm:p-2 text-right">₼1,200,000</td>
            </tr>
            <tr className="border-b border-[#979DAC]">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.income.labels.lessCostOfSales', { defaultValue: 'Less: Cost of Sales' })}</td>
              <td className="p-1 sm:p-2 text-right">₼800,000</td>
            </tr>
            <tr className="border-b border-[#979DAC]">
              <td className="p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.totals.grossProfit')}</td>
              <td className="p-1 sm:p-2 text-right">₼400,000</td>
            </tr>
            <tr className="border-b border-[#979DAC]">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.income.labels.lessOperatingExpenses', { defaultValue: 'Less: Operating Expenses' })}</td>
              <td className="p-1 sm:p-2 text-right">₼150,000</td>
            </tr>
            <tr className="border-b border-[#979DAC]">
              <td className="p-1 sm:p-2 font-medium">{t('pages.accounting.taxReports.profit.taxableIncome')}</td>
              <td className="p-1 sm:p-2 text-right">₼250,000</td>
            </tr>
            <tr className="border-b border-[#979DAC]">
              <td className="p-1 sm:p-2">{t('pages.accounting.taxReports.profit.taxRate')}</td>
              <td className="p-1 sm:p-2 text-right">20%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t border-[#979DAC] font-bold text-lg sm:text-2xl">
              <td className="p-1 sm:p-2">{t('pages.accounting.taxReports.profit.taxPayable')}</td>
              <td className="p-1 sm:p-2 text-right">₼50,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ProfitTax;