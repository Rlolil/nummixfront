import React from "react";
import { useTranslation } from "react-i18next";

const taxes = [
  {
    name: "ƏDV",
    amount: "₼8,450",
    dueDate: "12 Oktyabr 2025",
    remainingDays: 3,
    color: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
    warning: true,
    delay: "₼422.5",
  },
  {
    name: "Gəlir Vergisi",
    amount: "₼12,300",
    dueDate: "15 Oktyabr 2025",
    remainingDays: 6,
    color: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
    warning: true,
    delay: "₼615",
  },
  {
    name: "Sosial Sığorta",
    amount: "₼5,670",
    dueDate: "20 Oktyabr 2025",
    remainingDays: 11,
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    warning: false,
  },
  {
    name: "Əmlak Vergisi",
    amount: "₼3,200",
    dueDate: "25 Oktyabr 2025",
    remainingDays: 16,
    color: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800",
    warning: false,
  },
];

const VergiOdenis = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-4">
      <div className="bg-[#FFFFFF] dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-5 mb-6">
        <h2 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-100">
          {t("pages.ai.taxAi.upcomingPayments.title")}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm sm:text-base">
          {t("pages.ai.taxAi.upcomingPayments.subtitle")}
        </p>

        <div className="space-y-5">
          {taxes.map((tax, index) => (
            <div
              key={index}
              className={`border ${tax.color} rounded-2xl shadow-sm p-5 transition hover:shadow-md`}
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3">
                <div className="flex items-start gap-2">
                  {tax.warning ? (
                    <span className="text-red-600 text-lg">⚠️</span>
                  ) : (
                    <span className="text-blue-600 text-lg">ℹ️</span>
                  )}
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{tax.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("pages.ai.taxAi.upcomingPayments.dueDate", { date: tax.dueDate })}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <p className="font-semibold text-gray-800 dark:text-gray-300">{tax.amount}</p>
                  <span
                    className={`text-xs sm:text-sm px-2 py-1 rounded-full ${
                      tax.remainingDays <= 3
                        ? "bg-red-600 text-white"
                        : tax.remainingDays <= 7
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {t("pages.ai.taxAi.upcomingPayments.daysLeft", { count: tax.remainingDays })}
                  </span>
                </div>
              </div>

              {tax.delay && (
                <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                  <strong>{t("pages.ai.taxAi.upcomingPayments.aiWarning")}</strong>{" "}
                  {t("pages.ai.taxAi.upcomingPayments.latePenalty", { amount: tax.delay })}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white dark:text-gray-300 font-medium px-5 py-2 rounded-lg transition w-full sm:w-1/2">
                  {t("pages.ai.taxAi.upcomingPayments.payNow")}
                </button>
                <button className="border bg-white dark:bg-gray-800  border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400 font-medium px-5 py-2 rounded-lg transition w-full sm:w-1/2">
                  {t("pages.ai.taxAi.upcomingPayments.remind")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VergiOdenis;

