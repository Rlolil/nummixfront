import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BalanceSheet from "./balancesheet";
import IncomeStatement from "./income";
import CashFlow from "./cashflow";
import ChangeEquity from "./changesequity";

export default function FinancialReports() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("balance-sheet");

  const tabs = [
    { id: "balance-sheet", label: t('pages.accounting.financialReports.tabs.balanceSheet') },
    { id: "income-statement", label: t('pages.accounting.financialReports.tabs.incomeStatement') },
    { id: "cash-flow", label: t('pages.accounting.financialReports.tabs.cashFlow') },
    { id: "equity-changes", label: t('pages.accounting.financialReports.tabs.equityChanges') },
  ];

  const exportPDF = () => {
    console.log("Export PDF clicked!");
    alert("PDF export coming soon...");
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="container mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.accounting.tabs.financialReports')}</h2>
            <p className="text-gray-500 text-sm sm:text-base">{t('pages.accounting.financialReports.subtitle', { defaultValue: 'Standard financial statements' })}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 sm:mt-0">
            <select
              defaultValue="Q3 2025"
              className="border rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm bg-gray-100 text-black w-full sm:w-auto"
            >
              <option>{t('common.quarter', { quarter: 'Q1', year: 2025, defaultValue: 'Q1 2025' })}</option>
              <option>{t('common.quarter', { quarter: 'Q2', year: 2025, defaultValue: 'Q2 2025' })}</option>
              <option>{t('common.quarter', { quarter: 'Q3', year: 2025, defaultValue: 'Q3 2025' })}</option>
              <option>{t('common.quarter', { quarter: 'Q4', year: 2025, defaultValue: 'Q4 2025' })}</option>
            </select>
            <button
              onClick={exportPDF}
              className="flex items-center gap-2 border font-bold px-2 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-gray-100 w-full sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              {t('common.exportPdf')}
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 bg-gray-100 rounded-2xl px-1 sm:px-2 py-2 overflow-x-auto text-xs sm:text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1 sm:py-2 rounded-2xl text-center transition ${
                  activeTab === tab.id
                    ? "bg-white text-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-4 sm:mt-6">
            {activeTab === "balance-sheet" && <BalanceSheet />}
            {activeTab === "income-statement" && <IncomeStatement />}
            {activeTab === "cash-flow" && <CashFlow />}
            {activeTab === "equity-changes" && <ChangeEquity />}
          </div>
        </div>
      </div>
    </div>
  );
}