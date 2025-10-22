import { AiOutlineDownload, AiOutlineSend } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function VatDeclaration({ taxData, totalInput, totalOutput, vatPayable }) {
  const { t } = useTranslation();
  const formatAZN = (value) => `₼${value.toLocaleString("en-US")}`;

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-4xl mx-auto border border-gray-300 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-medium">{t('pages.accounting.taxReports.tabs.vat')}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{t('common.monthYear', { month: 'September', year: 2025, defaultValue: 'September {{year}}' })}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 text-xs sm:text-sm">
            <AiOutlineDownload className="w-4 h-4 sm:w-5 sm:h-5" /> {t('common.export') || 'Export'}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 text-xs sm:text-sm">
            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" /> {t('pages.accounting.taxReports.actions.submitToEgov')}
          </button>
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">{t('pages.accounting.taxReports.vat.output')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full border text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 min-w-[120px]">{t('pages.accounting.taxReports.vat.columns.description')}</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">{t('pages.accounting.taxReports.vat.columns.baseAmount')}</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">{t('pages.accounting.taxReports.vat.columns.vatAmount')}</th>
              </tr>
            </thead>
            <tbody>
              {taxData.vat.output.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-1 sm:p-2">{t(`pages.accounting.taxReports.vat.items.output.${idx}`, { defaultValue: row.desc })}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.base)}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.vat)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">{t('pages.accounting.taxReports.vat.input')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full border text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 min-w-[120px]">{t('pages.accounting.taxReports.vat.columns.description')}</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">{t('pages.accounting.taxReports.vat.columns.baseAmount')}</th>
                <th className="text-right p-1 sm:p-2 min-w-[100px]">{t('pages.accounting.taxReports.vat.columns.vatAmount')}</th>
              </tr>
            </thead>
            <tbody>
              {taxData.vat.input.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-1 sm:p-2">{t(`pages.accounting.taxReports.vat.items.input.${idx}`, { defaultValue: row.desc })}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.base)}</td>
                  <td className="p-1 sm:p-2 text-right">{formatAZN(row.vat)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-3 sm:p-4 md:p-6 border rounded-lg bg-gray-50">
        <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">{t('pages.accounting.taxReports.vat.summary')}</h3>
        <div className="flex flex-col sm:flex-row justify-between mb-1 text-xs sm:text-sm">
          <span>{t('pages.accounting.taxReports.vat.totalOutput')}</span>
          <span>{formatAZN(totalOutput)}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-1 text-xs sm:text-sm">
          <span>{t('pages.accounting.taxReports.vat.lessTotalInput')}</span>
          <span>{formatAZN(totalInput)}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between font-bold text-base sm:text-lg md:text-xl border-t pt-2">
          <span>{t('pages.accounting.taxReports.vat.vatPayable')}</span>
          <span>{formatAZN(vatPayable)}</span>
        </div>
      </div>
    </div>
  );
}

export default VatDeclaration;