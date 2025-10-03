import React from "react";
import { useTranslation } from "react-i18next";

function ProfitLoss() {
  const {t} = useTranslation();
  return (
    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
      <div className="border border-gray-300 p-3 sm:p-4 shadow-sm rounded-lg flex flex-col gap-3 sm:gap-4">
        <h3 className="font-semibold text-lg sm:text-xl">
          {t("Profit_Loss_Statement")} - {t("September")} 2025
        </h3>
        <div className="flex justify-between items-center">
          <div className="space-y-2 sm:space-y-3 text-left">
            <p className="text-green-600 text-base sm:text-lg font-medium">{t("Revenue")}</p>
            <p className="text-gray-600 text-xs sm:text-sm">{t("No_revenue_recorded_this_month")}</p>
          </div>
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
            className="h-5 sm:h-6 w-5 sm:w-6 text-green-600"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>
        <hr className="text-gray-300" />
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg font-medium">{t("Total_Revenue")}</p>
            <p className="text-green-600 text-base sm:text-lg">₼0</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-2 sm:space-y-3 text-left">
              <p className="text-red-600 text-base sm:text-lg font-medium">{t("Expenses")}</p>
              <p className="text-gray-600 text-xs sm:text-sm">{t("No_expenses_recorded_this_month")}</p>
            </div>
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
              className="h-5 sm:h-6 w-5 sm:w-6 text-red-600"
            >
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>
          </div>
        </div>
        <hr className="text-gray-300" />
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg font-medium">{t("Total_Expenses")}</p>
            <p className="text-red-600 text-base sm:text-lg">₼0</p>
          </div>
          <div className="bg-gray-100 w-full flex items-center justify-between rounded-lg mt-1 sm:mt-2 p-2 sm:p-3">
            <div className="space-y-1 sm:space-y-2">
              <p className="font-medium text-xs sm:text-sm">{t("Gross_Profit")}</p>
              <p className="text-xs sm:text-sm">{t("Profit_Margin")}</p>
            </div>
            <div className="text-right space-y-1 sm:space-y-2">
              <p className="text-base sm:text-lg font-bold text-green-600">₼0</p>
              <p className="text-base sm:text-lg font-bold">0.0%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="border border-gray-300 p-3 sm:p-4 shadow-sm rounded-lg flex flex-col gap-3 sm:gap-4">
          <p className="font-medium text-xs sm:text-sm">{t("Revenue_Analysis")}</p>
          <p className="text-gray-600 text-xs sm:text-sm">{t("No_revenue_data_available")}</p>
        </div>
        <div className="border border-gray-300 p-3 sm:p-4 shadow-sm rounded-lg flex flex-col gap-3 sm:gap-4">
          <p className="font-medium text-xs sm:text-sm">{t("Expense_Analysis")}</p>
          <p className="text-gray-600 text-xs sm:text-sm">{t("No_expense_data_available")}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfitLoss;