import React from "react";
import { useTranslation } from "react-i18next";

function XercLimiti() {
  const { t } = useTranslation();
  const cariXerc = 67890;
  const limit = 80000;
  const faiz = Math.round((cariXerc / limit) * 100);

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D] rounded-xl shadow-sm p-5 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
        {t("pages.ai.dashboard.expenseLimit.title")}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {t("pages.ai.dashboard.expenseLimit.subtitle")}
      </p>

      <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        <span>
          ₼{cariXerc.toLocaleString()} / ₼{limit.toLocaleString()}
        </span>
        <span className="text-gray-700 dark:text-gray-200 font-semibold">{faiz}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gray-900 dark:bg-red-500 h-full rounded-full"
          style={{ width: `${faiz}%` }}
        ></div>
      </div>
    </div>
  );
}

export default XercLimiti;


