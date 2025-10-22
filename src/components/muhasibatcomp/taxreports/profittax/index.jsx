import { AiOutlineDownload, AiOutlineSend } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function ProfitTax() {
  const { t } = useTranslation();
  return (
    <div className="border border-gray-300 p-3 sm:p-4 space-y-4 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-medium">{t('pages.accounting.taxReports.tabs.profit')}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{t('common.quarter', { quarter: 'Q3', year: 2025, defaultValue: 'Q3 2025' })}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border rounded hover:bg-gray-100 text-xs sm:text-sm">
            <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5" /> {t('common.export') || 'Export'}
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black text-white rounded hover:bg-gray-900 text-xs sm:text-sm">
            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" /> {t('pages.accounting.taxReports.actions.submitDeclaration')}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.totalRevenue')}</td>
              <td className="p-1 sm:p-2 text-right">₼1,200,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.income.labels.lessCostOfSales', { defaultValue: 'Less: Cost of Sales' })}</td>
              <td className="p-1 sm:p-2 text-right">₼800,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.totals.grossProfit')}</td>
              <td className="p-1 sm:p-2 text-right">₼400,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.income.labels.lessOperatingExpenses', { defaultValue: 'Less: Operating Expenses' })}</td>
              <td className="p-1 sm:p-2 text-right">₼150,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-1 sm:p-2 font-medium">{t('pages.accounting.taxReports.profit.taxableIncome')}</td>
              <td className="p-1 sm:p-2 text-right">₼250,000</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-1 sm:p-2">{t('pages.accounting.taxReports.profit.taxRate')}</td>
              <td className="p-1 sm:p-2 text-right">20%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t font-bold text-lg sm:text-2xl">
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