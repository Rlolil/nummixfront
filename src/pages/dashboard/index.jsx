import { useTranslation } from "react-i18next";
import "../../utils/i18n/i18n.js";
function Dashboard() {
  const { t } = useTranslation();
  return (
    <div className="p-3 sm:p-4 max-w-[1320px] sm:ml-[100px] sm:mt-0 mt-[80px] mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            {t("welcome")}, UserName
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {t("financial_overview")}
          </p>
        </div>
        <div className="mt-3 lg:mt-0 flex items-center gap-2 sm:gap-3">
          <button className="shadow-sm bg-white border border-gray-200 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center hover:bg-gray-100 transition-colors duration-200">
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
              className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            {t("generate_ai_analysis")}
          </button>
          <a href="https://portal.asxm.gov.az/login" target="_blank" rel="noopener noreferrer">
            <button className="shadow-sm bg-white border border-gray-200 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              E-Taxes
            </button>
          </a>
          <a href="https://e-social.gov.az/az" target="_blank" rel="noopener noreferrer">
            <button className="shadow-sm bg-white border border-gray-200 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              E-Sosial
            </button>
          </a>
          <a href="https://sosial.gov.az/az" target="_blank" rel="noopener noreferrer">
            <button className="shadow-sm bg-white border border-gray-200 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              ƏMAS
            </button>
          </a>
          <a href="https://customs.gov.az/" target="_blank" rel="noopener noreferrer">
            <button className="shadow-sm bg-white border border-gray-200 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              Gömrük
            </button>
          </a>
          <a href="https://www.etender.gov.az/" target="_blank" rel="noopener noreferrer">
            <button className="shadow-sm bg-white border border-gray-200 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              E-Tender
            </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("total_balance")}
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
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-black text-lg sm:text-xl">₼0</p>
            <p className="text-gray-600 text-xs sm:text-sm">{t("across_accounts")}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("monthly_income")}
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
            <p className="font-bold text-green-600 text-lg sm:text-xl">+₼0</p>
            <p className="text-gray-600 text-xs sm:text-sm">{t("this_month")}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("monthly_expenses")}
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
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-bold text-red-600 text-lg sm:text-xl">-₼0</p>
            <p className="text-gray-600 text-xs sm:text-sm">{t("this_month")}</p>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("net_cash_flow")}
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
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
          </div>
          <div>
            <p className="font-bold text-green-600 text-lg sm:text-xl">₼0</p>
            <p className="text-gray-600 text-xs sm:text-sm">{t("this_month")}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 h-[250px] sm:h-[300px]">
          <p className="text-black font-medium text-xs sm:text-sm">
            {t("recent_transactions")}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm">
            {t("no_recent_transactions")}
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 border border-gray-200 flex flex-col gap-3 sm:gap-4 h-[250px] sm:h-[300px]">
          <div className="flex items-center gap-1 sm:gap-2">
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
              className="h-4 sm:h-5 w-4 sm:w-5"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
            <p className="text-black font-medium text-xs sm:text-sm">
              {t("ai_insights")}
            </p>
          </div>
          <div className="text-center mt-3 sm:mt-4 space-y-3 sm:space-y-4 flex flex-col items-center justify-center flex-grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 sm:h-10 w-8 sm:w-10 mx-auto mb-2 sm:mb-3"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
            <p className="text-gray-600 text-xs sm:text-sm">
              {t("no_ai_insights")}
            </p>
            <button className="shadow-sm bg-white border border-gray-200 text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              {t("generate_ai_analysis")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;