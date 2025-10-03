import React from "react";
import { useTranslation } from "react-i18next";

function AccountBalance() {
  const {t} = useTranslation();
  return (
    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">{t("Total_Balance")}</p>
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
            <p className="font-bold text-lg sm:text-xl">₼0</p>
            <p className="text-gray-600 text-xs">{t("Across_all_accounts")}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">{t("Active_Accounts")}</p>
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
            <p className="font-bold text-green-600 text-lg sm:text-xl">0</p>
            <p className="text-gray-600 text-xs">0 {t("Inactive_Accounts")}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">{t("Low_Balance_Alerts")}</p>
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
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-green-600 text-lg sm:text-xl">0</p>
            <p className="text-gray-600 text-xs">{t("Accounts_below")} ₼1,000</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">{t("Currencies")}</p>
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
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-bold text-black text-lg sm:text-xl">0</p>
            <p className="text-gray-600 text-xs">{t("Different_currencies")}</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 p-3 sm:p-4 shadow-sm rounded-lg flex flex-col gap-3 sm:gap-4">
        <p className="font-medium text-xs sm:text-sm">{t("Account_Details")}</p>
      </div>
    </div>
  );
}

export default AccountBalance;