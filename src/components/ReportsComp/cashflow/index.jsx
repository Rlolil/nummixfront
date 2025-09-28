import React from "react";
import CashFlowChart from "../cashflowcharts";

function CashFlow() {
  return (
    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Total Inflow
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
              className="h-4 sm:h-5 w-4 sm:w-5 text-green-600"
            >
              <path d="M17 7 7 17"></path>
              <path d="M17 17H7V7"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-green-600 text-lg sm:text-xl">₼0</p>
            <p className="text-gray-600 text-xs">Last 30 days</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Total Outflow
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
              className="h-4 sm:h-5 w-4 sm:w-5 text-red-600"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-red-600 text-lg sm:text-xl">₼0</p>
            <p className="text-gray-600 text-xs">Last 30 days</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Net Cash Flow
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
            <p className="text-gray-600 text-xs">Last 30 days</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              Daily Average
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
            <p className="text-gray-600 text-xs">Per Day</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 mt-3 sm:mt-4">
        <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
          30-Day Cash Flow Trend
        </h2>
        <CashFlowChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200">
          <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
            Account Balances
          </h2>
          <div className="border border-gray-200 flex items-center justify-between rounded-lg p-3 sm:p-4">
            <div>
              <p className="font-medium text-xs sm:text-sm">Total Balance</p>
              <p className="text-gray-600 text-xs">Across all accounts</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-base sm:text-lg">₼0</p>
              <p className="bg-black text-white font-medium rounded-lg px-2 py-1 text-xs">
                0 accounts
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4">
          <h2 className="text-base sm:text-lg font-medium">
            Cash Flow Analysis
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs sm:text-sm">
                Cash Flow Trend
              </p>
              <p className="bg-black text-white rounded-lg p-1.5 text-xs">
                Positive
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs sm:text-sm">
                Flow Consistency
              </p>
              <p className="bg-gray-200 text-black rounded-lg p-1.5 text-xs">
                Low Activity
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs sm:text-sm">Balance Health</p>
              <p className="bg-black text-white rounded-lg p-1.5 text-xs">
                Healthy
              </p>
            </div>
          </div>
          <hr className="my-3 sm:my-4 text-gray-300" />
          <p className="text-gray-600 text-xs sm:text-sm">
            Your cash flow is positive. Consider investing excess funds or
            building reserves.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CashFlow;
