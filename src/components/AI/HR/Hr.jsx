import React from 'react';
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Chart2 from './Chart2';
import ProgressBar from './ProgressBar';
import RiskAnaliz from './RiskAnaliz';
import Chart3 from './Chart3';
import { useTranslation } from "react-i18next";

const Hr = () => {
  const { t } = useTranslation();

  const data = {
    stats: [
      {
        title: t("pages.ai.dashboard.stats.monthlyProfit"),
        value: "₼45,231",
        change: "+18.5%",
        positive: true,
        icon: <MdAttachMoney className="text-[#0466CB] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.salesVolume"),
        value: "₼128,456",
        change: "+12.3%",
        positive: true,
        icon: <BsCart3 className="text-[#023E7D] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.inventoryValue"),
        value: "₼67,890",
        change: "-5.2%",
        positive: false,
        icon: <BsBoxSeam className="text-[#33415C] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.payrollFund"),
        value: "₼23,450",
        change: "+8.1%",
        positive: true,
        icon: <FiUsers className="text-[#0453A4] text-[28px]" />,
      },
    ],
  }

  return (
    <div className="container mx-auto  bg-[#FFFFFF] dark:bg-[#001233] text-[#001233] dark:text-white  transition-colors">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D] rounded-xl shadow-sm p-5 flex justify-between items-center transition-colors"
          >
            <div className="space-y-3">
              <h2 className="text-[#7D8597] dark:text-[#5C677D] text-sm font-medium">{s.title}</h2>
              <p className="text-[#001233] dark:text-[#FFFFFF] text-[20px] font-semibold">{s.value}</p>
              <div
                className={`flex items-center text-sm ${
                  s.positive ? "text-green-600" : "text-red-500"
                }`}
              >
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-[#F0F0F0] dark:bg-[#001845] p-3 rounded-full">{s.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 items-stretch">
        <div className="bg-[#FFFFFF] dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-4 flex flex-col h-full transition-colors">
          <h3 className="text-[#023E7D] dark:text-[#0466CB] font-medium mb-2">{t("pages.ai.hrAi.attendanceByDept.title")}</h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">{t("pages.ai.hrAi.attendanceByDept.subtitle")}</p>

          <div className="bg-red-100 dark:bg-red-900/30 text-sm border border-red-300 dark:border-red-700 text-[#001233] dark:text-[#FFFFFF] p-3 rounded-lg mb-4 mt-4">
            <strong>{t("pages.ai.common.warningLabel")}</strong> {t("pages.ai.hrAi.attendanceByDept.warningText")}
          </div>
          <ProgressBar />
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-4 flex flex-col h-full transition-colors">
          <h3 className="text-[#023E7D] dark:text-[#0466CB] font-medium mb-2">{t("pages.ai.hrAi.expenseDistribution.title")}</h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">{t("pages.ai.hrAi.expenseDistribution.subtitle")}</p>

          <div className="flex-grow flex items-center justify-center">
            <div className="w-full h-[300px]">
              <Chart2 />
            </div>
          </div>
        </div>
      </div>

      <RiskAnaliz />

      <div className="bg-[#FFFFFF] dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-4 flex flex-col transition-colors mt-6">
        <h3 className="text-[#023E7D] dark:text-[#0466CB] font-medium mb-2">{t("pages.ai.hrAi.departmentPerformance.title")}</h3>
        <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">{t("pages.ai.hrAi.departmentPerformance.subtitle")}</p>

        <div className="flex-1">
          <Chart3 />
        </div>
      </div>
    </div>
  )
}

export default Hr;
