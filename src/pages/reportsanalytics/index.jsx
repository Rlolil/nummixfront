import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import FinancialSummary from "../../components/ReportsComp/FinancialSummary";
import CashFlow from "../../components/ReportsComp/cashflow";
import ProfitLoss from "../../components/ReportsComp/profitloss";
import AccountBalance from "../../components/ReportsComp/accountbalance";
function ReportsAnalytics() {
  const [activeTab, setActiveTab] = useState("Financial Summary");
  const [selectedRange, setSelectedRange] = useState("Current Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="max-w-[1320px] ml-[100px] mx-auto p-4">
      <div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              Reports & Analytics
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Comprehensive financial reports and business insights
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-white border border-gray-200 flex items-center justify-between w-full sm:w-36 hover:bg-gray-100 gap-2 p-2 sm:p-2.5 rounded-md text-xs sm:text-sm transition-colors duration-200"
              >
                {selectedRange}
                <FiChevronDown className="text-base sm:text-lg" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-md mt-1 p-2 rounded-md z-50 w-full sm:w-36 max-h-56 overflow-y-auto">
                  {[
                    "Last Month",
                    "Last 3 Months",
                    "Last 6 Months",
                    "Last Year",
                    "Custom Range",
                  ].map((range) => (
                    <li
                      key={range}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-xs sm:text-sm transition-colors duration-200"
                      onClick={() => {
                        setSelectedRange(range);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {range}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="bg-white font-medium border border-gray-200 flex items-center justify-center gap-2 p-2 sm:p-2.5 rounded-md text-xs sm:text-sm w-full sm:w-auto hover:bg-gray-100 transition-colors duration-200">
              <FiDownload className="text-base sm:text-lg" />
              Export PDF
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <p className="text-black font-medium text-xs sm:text-sm">
                Monthly Revenue
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <div>
              <p className="font-bold text-green-600 text-lg sm:text-xl">₼0</p>
              <p className="text-gray-600 text-xs">0 transactions</p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <p className="text-black font-medium text-xs sm:text-sm">
                Monthly Expenses
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-red-600 text-lg sm:text-xl">₼0</p>
              <p className="text-gray-600 text-xs">0 transactions</p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <p className="text-black font-medium text-xs sm:text-sm">
                Total Balance
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground"
              >
                <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-black text-lg sm:text-xl">₼0</p>
              <p className="text-gray-600 text-xs">Across 0 accounts</p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <p className="text-black font-medium text-xs sm:text-sm">
                Invoice Revenue
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-blue-600 text-lg sm:text-xl">₼0</p>
              <p className="text-gray-600 text-xs">0 paid invoices</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row flex-wrap lg:flex-nowrap bg-gray-100 gap-2 sm:gap-3 p-2 rounded-lg mt-4 sm:mt-6">
            {[
              "Financial Summary",
              "Cash Flow",
              "Profit & Loss",
              "Accounts Balance",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border flex-1 ${
                  activeTab === tab ? "bg-white border-gray-200" : "border-none"
                } rounded-lg py-1.5 px-2 sm:px-3 text-xs sm:text-sm hover:bg-gray-50 transition-colors duration-200 min-w-[100px] whitespace-nowrap`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-3 sm:mt-4">
            {activeTab === "Financial Summary" && <FinancialSummary />}
            {activeTab === "Cash Flow" && <CashFlow />}
            {activeTab === "Profit & Loss" && <ProfitLoss />}
            {activeTab === "Accounts Balance" && <AccountBalance />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsAnalytics;
