import React from "react";
import Chart2 from "./Chart2";
import { useTranslation } from "react-i18next";

const SatisDovrleri = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl shadow-sm border border-[#979DAC] dark:border-[#5C677D] p-5">
        <h2 className="text-lg font-semibold mb-1 text-[#023E7D] dark:text-[#FFFFFF]">
          {t("pages.ai.salesAi.salesCycles.title")}
        </h2>
        <p className="text-sm text-[#7D8597] dark:text-[#C0C0C0] mb-4">
          {t("pages.ai.salesAi.salesCycles.subtitle")}
        </p>

        <div className="bg-[#EAE6FF] dark:bg-[#4B367C]/30 border border-[#B7A1FF] dark:border-[#7A5DC7] rounded-md p-4 text-sm mb-4">
          <span className="font-semibold text-[#6F42C1] dark:text-[#D8BFFD]">
            {t("pages.ai.common.aiRecommendation")}
          </span>{" "}
          <span className="dark:text-[#C0C0C0]">
            {t("pages.ai.salesAi.salesCycles.recommendation")}
          </span>
        </div>

        <div className="w-full h-64 flex items-center justify-center rounded-md text-[#7D8597] dark:text-[#C0C0C0] text-sm">
          <Chart2 />
        </div>
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl shadow-sm border border-[#979DAC] dark:border-[#5C677D] p-5">
        <h2 className="text-lg font-semibold mb-1 text-[#023E7D] dark:text-[#FFFFFF]">
          {t("pages.ai.salesAi.campaigns.title")}
        </h2>
        <p className="text-sm text-[#7D8597] dark:text-[#C0C0C0] mb-4">
          {t("pages.ai.salesAi.campaigns.subtitle")}
        </p>

        <div className="space-y-4">

          {[
            { name: "springSale", count: 156, discount: "15%", roi: "+340%" },
            { name: "vipProgram", count: 89, discount: "10%", roi: "+220%" },
            { name: "bulkDiscount", count: 45, discount: "20%", roi: "+180%" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border border-[#979DAC] dark:border-[#5C677D] rounded-md p-4">
              <div>
                <p className="font-medium text-[#023E7D] dark:text-[#FFFFFF]">
                  {t(`pages.ai.salesAi.campaigns.items.${item.name}`)}
                </p>
                <span className="text-sm text-[#7D8597] dark:text-[#C0C0C0]">
                  {t("pages.ai.salesAi.common.salesCount", { count: item.count })}
                </span>
              </div>
              <div className="text-right">
                <span className="bg-[#FFE6D9] dark:bg-[#7A3F00]/30 text-[#FF6B00] dark:text-[#FFB366] text-xs px-2 py-1 rounded">
                  {t("pages.ai.salesAi.campaigns.discount", { percent: item.discount })}
                </span>
                <p className="text-[#00B050] dark:text-[#00FF80] font-medium text-sm mt-1">
                  {t("pages.ai.salesAi.campaigns.roi", { value: item.roi })}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SatisDovrleri;
