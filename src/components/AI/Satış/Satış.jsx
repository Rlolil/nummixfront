import React from 'react'
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Chart1 from './Chart1';
import ProductCustomer from './ProductCustomer';
import SatisDovrleri from './SatisDovrleri';
import { useTranslation } from "react-i18next";
import SettingsButton from '../../SettingsButton.jsx/SettingsButton';

const Satış = () => {
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
    <div className="container mx-auto px-2 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-700 rounded-xl shadow-sm p-5 flex justify-between items-center"
          >
            <div className="space-y-3">
              <h2 className="text-gray-500 dark:text-gray-300 text-sm font-medium">{s.title}</h2>
              <p className="text-[20px] font-semibold text-gray-800 dark:text-white">{s.value}</p>
              <div
                className={`flex items-center text-sm ${s.positive ? "text-green-600" : "text-red-500"}`}
              >
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-zinc-700 p-3 rounded-full">{s.icon}</div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 shadow-sm mt-10 p-4 flex flex-col">
        <h3 className="text-gray-700 dark:text-white font-medium mb-2">
          {t("pages.ai.salesAi.salesTrend.title")}
        </h3>
        <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">
          {t("pages.ai.salesAi.salesTrend.subtitle")}
        </p>

        <div className="flex-1">
          <div className="bg-green-50 dark:bg-green-900/20 text-sm text-gray-800 dark:text-gray-100 p-3 rounded-lg mt-4 mb-4">
            <strong>{t("pages.ai.common.aiAnalysisLabel")}</strong>{" "}
            {t("pages.ai.salesAi.salesTrend.aiText", { avg: "72,667 AZN", max: "75,000 AZN" })}
          </div>
          <Chart1 />
        </div>
      </div>

      <ProductCustomer />
      <SatisDovrleri />

      <SettingsButton/>
    </div>
  );
};

export default Satış;
