import React from "react";
import { useTranslation } from "react-i18next";
import { FiBarChart2, FiPlusCircle } from "react-icons/fi";

function ChangeEquity() {
  const { t } = useTranslation();
  const data = {
    beginning: { shareCapital: 500000, retainedEarnings: 102500 },
    netIncome: { shareCapital: 0, retainedEarnings: 54000 },
    dividends: { shareCapital: 0, retainedEarnings: 0 },
  };

  const totals = {
    beginning: data.beginning.shareCapital + data.beginning.retainedEarnings,
    netIncome: data.netIncome.shareCapital + data.netIncome.retainedEarnings,
    dividends: data.dividends.shareCapital + data.dividends.retainedEarnings,
  };

  const ending = {
    shareCapital:
      data.beginning.shareCapital +
      data.netIncome.shareCapital +
      data.dividends.shareCapital,
    retainedEarnings:
      data.beginning.retainedEarnings +
      data.netIncome.retainedEarnings +
      data.dividends.retainedEarnings,
  };

  function formatAZN(value) {
    return value === 0 ? "-" : `₼${value.toLocaleString("en-US")}`;
  }

  return (
    <div className="border border-gray-300 space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-lg sm:text-xl font-semibold">{t('pages.accounting.financialReports.equityChanges.title')}</p>
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
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.description')}</th>
              <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.shareCapital')}</th>
              <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.retainedEarnings')}</th>
              <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.totalEquity')}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.equityChanges.rows.beginning')}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(data.beginning.shareCapital)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(data.beginning.retainedEarnings)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(totals.beginning)}</td>
            </tr>
            <tr className="border-b">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.equityChanges.rows.netIncome')}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(data.netIncome.shareCapital)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(data.netIncome.retainedEarnings)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(totals.netIncome)}</td>
            </tr>
            <tr className="border-b">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.equityChanges.rows.dividends')}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(data.dividends.shareCapital)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(data.dividends.retainedEarnings)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(totals.dividends)}</td>
            </tr>
            <tr className="border-t-2 font-bold">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.equityChanges.rows.ending')}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(ending.shareCapital)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(ending.retainedEarnings)}</td>
              <td className="p-1 sm:p-2 text-right">{formatAZN(ending.shareCapital + ending.retainedEarnings)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChangeEquity;