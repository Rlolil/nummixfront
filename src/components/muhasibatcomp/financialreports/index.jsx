import React, { useState } from "react";
import BalanceSheet from "./balancesheet";
import IncomeStatement from "./income";
import CashFlow from "./cashflow";
import ChangeEquity from "./changesequity";

export default function FinancialReports() {
  const [activeTab, setActiveTab] = useState("balance-sheet");

  const tabs = [
    { id: "balance-sheet", label: "Balance Sheet" },
    { id: "income-statement", label: "Income Statement" },
    { id: "cash-flow", label: "Cash Flow" },
    { id: "equity-changes", label: "Changes in Equity" },
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
            <h2 className="text-2xl sm:text-3xl font-semibold">Financial Reports</h2>
            <p className="text-gray-500 text-sm sm:text-base">Standard financial statements</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 sm:mt-0">
            <select
              defaultValue="Q3 2025"
              className="border rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm bg-gray-100 text-black w-full sm:w-auto"
            >
              <option>Q1 2025</option>
              <option>Q2 2025</option>
              <option>Q3 2025</option>
              <option>Q4 2025</option>
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
              Export PDF
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