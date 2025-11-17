import React from "react";
import { useTranslation } from "react-i18next";

const SatisHedefi = () => {
  const { t } = useTranslation();
  const cariSatis = 128456;
  const hedef = 120000;
  const faiz = Math.round((cariSatis / hedef) * 100);

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D] rounded-xl shadow-sm p-5 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
        {t("pages.ai.dashboard.salesTarget.title")}
      </h2>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {t("pages.ai.dashboard.salesTarget.subtitle")}
      </p>

      <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        <span>
          ₼{cariSatis.toLocaleString()} / ₼{hedef.toLocaleString()}
        </span>
        <span className="text-green-600 font-semibold">{faiz}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-[#023E7D] dark:bg-green-500 h-full rounded-full"
          style={{ width: `${faiz}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SatisHedefi;
