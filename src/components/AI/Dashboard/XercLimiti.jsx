import React from "react";
import { useTranslation } from "react-i18next";

const XercLimiti = () => {
  const { t } = useTranslation();
  const cariXerc = 67890;
  const limit = 80000;
  const faiz = Math.round((cariXerc / limit) * 100);

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{t("pages.ai.dashboard.expenseLimit.title")}</h2>
      <p className="text-sm text-gray-500 mb-4">{t("pages.ai.dashboard.expenseLimit.subtitle")}</p>

      <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
        <span>₼{cariXerc.toLocaleString()} / ₼{limit.toLocaleString()}</span>
        <span className="text-gray-700 font-semibold">{faiz}%</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gray-900 h-full rounded-full"
          style={{ width: `${faiz}%` }}
        ></div>
      </div>
    </div>
  );
};

export default XercLimiti;
