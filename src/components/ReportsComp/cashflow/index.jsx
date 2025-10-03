import React from "react";
import CashFlowChart from "../cashflowcharts";
import { useTranslation } from "react-i18next";

function CashFlow() {
  const  {t}  = useTranslation()
  return (
    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("Total_Inflow")}
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
            <p className="text-gray-600 text-xs">{t("Last_days", { days: 30 })}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("Total_Outflow")}
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
            <p className="text-gray-600 text-xs">{t("Last_days", { days: 30 })}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("Net_Cash_Flow")}
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
            <p className="text-gray-600 text-xs">{t("Last_days", { days: 30 })}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("Daily_Average")}
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
            <p className="text-gray-600 text-xs">{t("Per_Day")}</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 mt-3 sm:mt-4">
        <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
          {t("Day_Cash_Flow_Trend")}
        </h2>
        <CashFlowChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200">
          <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
            {t("Account_Balances")}
          </h2>
          <div className="border border-gray-200 flex items-center justify-between rounded-lg p-3 sm:p-4">
            <div>
              <p className="font-medium text-xs sm:text-sm">{t("Total_Balance")}</p>
              <p className="text-gray-600 text-xs">{t("Across_all_accounts")}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-base sm:text-lg">₼0</p>
              <p className="bg-black text-white font-medium rounded-lg px-2 py-1 text-xs">
                0 {t("Accounts")}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4">
          <h2 className="text-base sm:text-lg font-medium">
            {t("Cash_Flow_Insights")}
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs sm:text-sm">
                {t("Cash_Flow_Trend")}
              </p>
              <p className="bg-black text-white rounded-lg p-1.5 text-xs">
                {t("Positive")}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs sm:text-sm">
                {t("Flow_Consistency")}
              </p>
              <p className="bg-gray-200 text-black rounded-lg p-1.5 text-xs">
                {t("Low_Activity")}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs sm:text-sm">{t("Balance_Health")}</p>
              <p className="bg-black text-white rounded-lg p-1.5 text-xs">
                {t("Healthy")}
              </p>
            </div>
          </div>
          <hr className="my-3 sm:my-4 text-gray-300" />
          <p className="text-gray-600 text-xs sm:text-sm">
            {t("Your_cash_flow_is_positive_Consider_investing_excess_funds_or_building_reserves")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CashFlow;
