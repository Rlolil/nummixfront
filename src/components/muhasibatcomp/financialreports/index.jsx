import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BalanceSheet from "./balancesheet";
import IncomeStatement from "./income";
import CashFlow from "./cashflow";
import ChangeEquity from "./changesequity";

export default function FinancialReports() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("balance-sheet");
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

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
    <div className="flex-1 overflow-auto bg-[#FFFFFF] text-[#001233] dark:bg-[#001233] dark:text-white">
      <div className="container mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#023E7D] dark:text-[#89A4D6]">{t('pages.accounting.tabs.financialReports')}</h2>
            <p className="text-[#7D8597] dark:text-[#B0B8C5] text-sm sm:text-base">{t('pages.accounting.financialReports.subtitle', { defaultValue: 'Standard financial statements' })}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 sm:mt-0">
            <select
              defaultValue="Q3 2025"
              className="border border-[#33415C] dark:border-[#979DAC] rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm bg-[#FFFFFF] dark:bg-[#002855] text-[#001233] dark:text-white w-full sm:w-auto"
            >
              <option>{t('common.quarter', { quarter: 'Q1', year: 2025, defaultValue: 'Q1 2025' })}</option>
              <option>{t('common.quarter', { quarter: 'Q2', year: 2025, defaultValue: 'Q2 2025' })}</option>
              <option>{t('common.quarter', { quarter: 'Q3', year: 2025, defaultValue: 'Q3 2025' })}</option>
              <option>{t('common.quarter', { quarter: 'Q4', year: 2025, defaultValue: 'Q4 2025' })}</option>
            </select>
            <button
              onClick={exportPDF}
              className="flex items-center gap-2 border  border-[#33415C] dark:border-[#979DAC] font-bold px-2 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm bg-[#FFFFFF] dark:bg-[#002855] text-[#001233] dark:text-white hover:bg-[#0453A4] hover:text-white transition-colors w-full sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black dark:text-white"
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
        {/* Cards section removed per request; only tabs remain */
        }
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#FFFFFF] dark:bg-[#002855] border border-[#33415C] dark:border-[#979DAC] rounded-2xl px-1 sm:px-2 py-2 overflow-x-auto text-xs sm:text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1 sm:py-2 rounded-2xl text-center transition ${
                  activeTab === tab.id
                    ? "bg-[#0466CB] text-white font-semibold dark:bg-[#023E7D]"
                    : "text-[#001233] dark:text-[#E0E0E0] hover:bg-[#0453A4] hover:text-white dark:hover:bg-[#0453A4]"
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

      {/* Card edit/delete modal removed */}
    </div>
  );
}