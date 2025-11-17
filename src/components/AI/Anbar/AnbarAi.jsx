import React from "react";
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Xeberdarliq from "./Xeberdarliq";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Techizad from "./Techizad";
import { useTranslation } from "react-i18next";

const AnbarAi = () => {
  const { t } = useTranslation();
  const data = {
    stats: [
      {
        title: t("pages.ai.dashboard.stats.monthlyProfit"),
        value: "₼45,231",
        change: "+18.5%",
        positive: true,
        icon: <MdAttachMoney className="text-green-500 text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.salesVolume"),
        value: "₼128,456",
        change: "+12.3%",
        positive: true,
        icon: <BsCart3 className="text-blue-500 text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.inventoryValue"),
        value: "₼67,890",
        change: "-5.2%",
        positive: false,
        icon: <BsBoxSeam className="text-purple-500 text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.payrollFund"),
        value: "₼23,450",
        change: "+8.1%",
        positive: true,
        icon: <FiUsers className="text-orange-400 text-[28px]" />,
      },
    ],
  };

  return (
    <div className="container mx-auto  bg-[#FFFFFF] dark:bg-[#001233] text-[#001233] dark:text-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D]  rounded-xl shadow-sm p-5 flex justify-between items-center"
          >
            <div className="space-y-3">
              <h2 className="text-[#7D8597] dark:text-[#D7E3FC] text-sm font-medium">{s.title}</h2>
              <p className="text-[20px] font-semibold text-[#023E7D] dark:text-[#FFFFFF]">{s.value}</p>
              <div
                className={`flex items-center text-sm ${s.positive ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}
              >
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-[#2E3A52] p-3 rounded-full">{s.icon}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D]   rounded-xl shadow-sm p-5 mb-6">
        <Xeberdarliq />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 ">
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D]  rounded-xl  shadow-sm p-4 flex flex-col">
          <h3 className="text-gray-700 dark:text-[#FFFFFF] font-medium mb-2">{t("pages.ai.warehouse.cashFlow.title")}</h3>
          <p className="text-gray-400 dark:text-[#C0C0C0] text-sm mb-3">{t("pages.ai.warehouse.cashFlow.subtitle")}</p>
          <div className="bg-orange-50 dark:bg-orange-900/30 text-sm text-gray-800 dark:text-[#FFFFFF] p-3 rounded-lg mt-4 mb-4">
            <strong>{t("pages.ai.common.aiAnalysisLabel")}</strong> {t("pages.ai.warehouse.cashFlow.aiText")}
          </div>
          <Chart1 />
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D]  rounded-xl shadow-sm p-4 flex flex-col items-center">
          <h3 className="text-gray-700 dark:text-[#FFFFFF] font-medium mb-2">{t("pages.ai.warehouse.expenseDistribution.title")}</h3>
          <p className="text-gray-400 dark:text-[#C0C0C0] text-sm mb-3">{t("pages.ai.warehouse.expenseDistribution.subtitle")}</p>
          <div className="w-full flex items-center justify-center mt-10">
            <Chart2 />
          </div>
        </div>
      </div>

      <Techizad />
    </div>
  );
};

export default AnbarAi;
