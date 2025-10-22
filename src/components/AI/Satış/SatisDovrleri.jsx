import React from "react";
import Chart2 from "./Chart2";
import { useTranslation } from "react-i18next";

const SatisDovrleri = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

      <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-5">
        <h2 className="text-lg font-semibold mb-1">{t("pages.ai.salesAi.salesCycles.title")}</h2>
        <p className="text-sm text-gray-500 mb-4">{t("pages.ai.salesAi.salesCycles.subtitle")}</p>

        <div className="bg-purple-50 border border-purple-200 rounded-md p-4 text-sm mb-4">
          <span className="font-semibold text-purple-700">{t("pages.ai.common.aiRecommendation")}</span>{" "}
          {t("pages.ai.salesAi.salesCycles.recommendation")}
        </div>

        <div className="w-full h-64 flex items-center justify-center rounded-md text-gray-400 text-sm">
          <Chart2 />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-5">
  <h2 className="text-lg font-semibold mb-1">{t("pages.ai.salesAi.campaigns.title")}</h2>
  <p className="text-sm text-gray-500 mb-4">{t("pages.ai.salesAi.campaigns.subtitle")}</p>

        <div className="space-y-4">

          <div className="flex justify-between items-center border border-gray-300 rounded-md p-4">
            <div>
              <p className="font-medium">{t("pages.ai.salesAi.campaigns.items.springSale")}</p>
              <span className="text-gray-500 text-sm">{t("pages.ai.salesAi.common.salesCount", { count: 156 })}</span>
            </div>
            <div className="text-right">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">{t("pages.ai.salesAi.campaigns.discount", { percent: "15%" })}</span>
              <p className="text-green-600 font-medium text-sm mt-1">{t("pages.ai.salesAi.campaigns.roi", { value: "+340%" })}</p>
            </div>
          </div>

          <div className="flex justify-between items-center border border-gray-300 rounded-md p-4">
            <div>
              <p className="font-medium">{t("pages.ai.salesAi.campaigns.items.vipProgram")}</p>
              <span className="text-gray-500 text-sm">{t("pages.ai.salesAi.common.salesCount", { count: 89 })}</span>
            </div>
            <div className="text-right">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">{t("pages.ai.salesAi.campaigns.discount", { percent: "10%" })}</span>
              <p className="text-green-600 font-medium text-sm mt-1">{t("pages.ai.salesAi.campaigns.roi", { value: "+220%" })}</p>
            </div>
          </div>

          <div className="flex justify-between items-center border border-gray-300 rounded-md p-4">
            <div>
              <p className="font-medium">{t("pages.ai.salesAi.campaigns.items.bulkDiscount")}</p>
              <span className="text-gray-500 text-sm">{t("pages.ai.salesAi.common.salesCount", { count: 45 })}</span>
            </div>
            <div className="text-right">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">{t("pages.ai.salesAi.campaigns.discount", { percent: "20%" })}</span>
              <p className="text-green-600 font-medium text-sm mt-1">{t("pages.ai.salesAi.campaigns.roi", { value: "+180%" })}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisDovrleri;
