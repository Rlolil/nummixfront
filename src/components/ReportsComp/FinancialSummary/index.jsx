import React from "react";
import ReportsCharts from "../ReportsCharts";

function FinancialSummary() {
  return (
    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Net Profit
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
            <p className="text-gray-600 text-xs">This Month</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Active Accounts
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
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-black text-lg sm:text-xl">0</p>
            <p className="text-gray-600 text-xs">₼0 total balance</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Total Customers
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-black text-lg sm:text-xl">0</p>
            <p className="text-gray-600 text-xs">Customer Base</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Pending Invoices
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
            <p className="font-bold text-red-600 text-lg sm:text-xl">0</p>
            <p className="text-gray-600 text-xs">Awaiting payment</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200">
        <p className="font-medium text-sm sm:text-base">
          6-Month Financial Performance
        </p>
        <div className="mt-2 sm:mt-3">
          <ReportsCharts />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4">
          <h2 className="text-base sm:text-lg font-medium">
            Financial Health Score
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                label: "Profit Margin",
                value: "0%",
                bgColor: "bg-gray-200",
                textColor: "text-black",
              },
              {
                label: "Cash Flow",
                value: "Positive",
                bgColor: "bg-black",
                textColor: "text-white",
              },
              {
                label: "Account Diversity",
                value: "Limited",
                bgColor: "bg-gray-200",
                textColor: "text-black",
              },
              {
                label: "Invoice Management",
                value: "Good",
                bgColor: "bg-black",
                textColor: "text-white",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
                <p
                  className={`${item.bgColor} ${item.textColor} rounded-lg p-1.5 text-xs`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4">
          <h2 className="text-base sm:text-lg font-medium">Quick Insights</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                icon: (
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
                    className="h-4 sm:h-5 w-4 sm:w-5 text-green-600 mt-0.5"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                ),
                title: "Revenue Growth",
                subtext: "Insufficient data for comparison",
              },
              {
                icon: (
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
                    className="h-4 sm:h-5 w-4 sm:w-5 text-red-600 mt-0.5"
                  >
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                    <polyline points="16 17 22 17 22 11"></polyline>
                  </svg>
                ),
                title: "Expense Control",
                subtext: "No revenue to compare",
              },
              {
                icon: (
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
                    className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mt-0.5"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                ),
                title: "Transaction Volume",
                subtext: "0 transactions this month",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4">
                {item.icon}
                <div className="text-xs sm:text-sm">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-600">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialSummary;
