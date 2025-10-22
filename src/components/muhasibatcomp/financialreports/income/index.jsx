import React from "react";
import { useTranslation } from "react-i18next";

function IncomeStatement() {
  const { t } = useTranslation();
  return (
    <div className="border border-gray-300 space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-lg sm:text-xl font-semibold">{t('pages.accounting.financialReports.income.title')}</p>
          <p className="text-gray-600 text-sm sm:text-base">{t('pages.accounting.financialReports.common.forPeriodEnding', { date: 'September 30, 2025' })}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.columns.revenue')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.salesRevenue701')}</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.serviceRevenue711')}</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.totalRevenue')}</td>
                <td className="text-right p-1 sm:p-2">15,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.columns.costOfSales')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.costOfSales601')}</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.grossProfit')}</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.columns.operatingExpenses')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.payroll543')}</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.socialContributions551')}</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.administrativeExpenses731')}</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.salesExpenses741')}</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.rows.operatingExpenses721')}</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.totalOperatingExpenses')}</td>
                <td className="text-right p-1 sm:p-2">35,000.00</td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2 font-bold text-lg sm:text-2xl">{t('pages.accounting.financialReports.income.totals.netIncome')}</td>
                <td className="text-right p-1 sm:p-2">-30,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IncomeStatement;