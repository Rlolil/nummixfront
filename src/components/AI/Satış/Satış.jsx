import React from 'react';
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Chart1 from './Chart1';
import ProductCustomer from './ProductCustomer';
import SatisDovrleri from './SatisDovrleri';
import { useTranslation } from "react-i18next";

const Satis = () => {
  const { t } = useTranslation();
  const data = {
    stats: [
      { title: t("pages.ai.dashboard.stats.monthlyProfit"), value: "₼45,231", change: "+18.5%", positive: true, icon: <MdAttachMoney className="text-[#00B050] text-[28px]" /> },
      { title: t("pages.ai.dashboard.stats.salesVolume"), value: "₼128,456", change: "+12.3%", positive: true, icon: <BsCart3 className="text-[#023E7D] text-[28px]" /> },
      { title: t("pages.ai.dashboard.stats.inventoryValue"), value: "₼67,890", change: "-5.2%", positive: false, icon: <BsBoxSeam className="text-[#FF6B6B] text-[28px]" /> },
      { title: t("pages.ai.dashboard.stats.payrollFund"), value: "₼23,450", change: "+8.1%", positive: true, icon: <FiUsers className="text-[#FF9F00] text-[28px]" /> },
    ],
  };

  return (
    <div className="container mx-auto bg-[#F8FAFF] dark:bg-[#001233]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {data.stats.map((s, i) => (
          <div key={i} className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm p-5 flex justify-between items-center">
            <div className="space-y-2">
              <h2 className="text-[#5C677D] dark:text-[#FFFFFF] text-sm font-medium">{s.title}</h2>
              <p className="text-2xl font-semibold text-[#023E7D] dark:text-[#0466CB]">{s.value}</p>
              <div className={`flex items-center text-sm ${s.positive ? "text-[#00B050]" : "text-[#FF6B6B]"}`}>
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-[#E8F1FD] dark:bg-[#002855] p-3 rounded-full">{s.icon}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm mt-10 p-5 flex flex-col">
        <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-semibold mb-2">
          {t("pages.ai.salesAi.salesTrend.title")}
        </h3>
        <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-4">
          {t("pages.ai.salesAi.salesTrend.subtitle")}
        </p>

        <div className="flex-1">
          <div className="bg-[#DFF3E3] dark:bg-[#004D1A]/20 text-sm text-[#023E7D] dark:text-[#FFFFFF] p-3 rounded-lg mb-4">
            <strong>{t("pages.ai.common.aiAnalysisLabel")}</strong>{" "}
            {t("pages.ai.salesAi.salesTrend.aiText", { avg: "72,667 AZN", max: "75,000 AZN" })}
          </div>
          <Chart1 />
        </div>
      </div>

      <ProductCustomer />
      <SatisDovrleri />

    </div>
  );
};

export default Satis;
