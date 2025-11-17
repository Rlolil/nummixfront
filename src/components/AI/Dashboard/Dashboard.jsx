import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import SatisHedefi from "./SatisHedefi";
import XercLimiti from "./XercLimiti";
import { useTranslation } from "react-i18next";
import SettingsButton from "../../SettingsButton.jsx/SettingsButton";

const Dashboard = () => {
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
        icon: <BsCart3 className="text-[#023E7D] dark:text-[#FFFFFF] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.inventoryValue"),
        value: "₼67,890",
        change: "-5.2%",
        positive: false,
        icon: <BsBoxSeam className="text-[#7D8597] dark:text-[#D7E3FC] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.payrollFund"),
        value: "₼23,450",
        change: "+8.1%",
        positive: true,
        icon: <FiUsers className="text-[#0466CB] text-[28px]" />,
      },
    ],

    alerts: [
      {
        title: t("pages.ai.dashboard.alerts.items.criticalStock.title"),
        impact: t("pages.ai.common.impact.high"),
        borderColor: "border-orange-300",
        bgColor: "bg-orange-50 dark:bg-[#33415C]/20",
        badgeColor: "bg-red-500 text-white",
        text: t("pages.ai.dashboard.alerts.items.criticalStock.text"),
      },
      {
        title: t("pages.ai.dashboard.alerts.items.vatDueSoon.title"),
        impact: t("pages.ai.common.impact.medium"),
        borderColor: "border-blue-300",
        bgColor: "bg-blue-50 dark:bg-[#33415C]/20",
        badgeColor: "bg-black text-white",
        text: t("pages.ai.dashboard.alerts.items.vatDueSoon.text"),
      },
      {
        title: t("pages.ai.dashboard.alerts.items.salesTarget.title"),
        impact: t("pages.ai.common.impact.low"),
        borderColor: "border-green-300",
        bgColor: "bg-green-50 dark:bg-[#33415C]/20",
        badgeColor: "bg-gray-300 text-gray-800",
        text: t("pages.ai.dashboard.alerts.items.salesTarget.text"),
      },
    ],

    aiAnalysis: [
      {
        title: t("pages.ai.dashboard.aiResults.items.revenueGrowth.title"),
        text: t("pages.ai.dashboard.aiResults.items.revenueGrowth.text"),
        impact: t("pages.ai.common.impact.high"),
        badgeColor: "bg-red-500 text-white",
      },
      {
        title: t("pages.ai.dashboard.aiResults.items.customerBehavior.title"),
        text: t("pages.ai.dashboard.aiResults.items.customerBehavior.text"),
        impact: t("pages.ai.common.impact.medium"),
        badgeColor: "bg-gray-200 dark:bg-[#5C677D] text-gray-700 dark:text-white",
      },
      {
        title: t("pages.ai.dashboard.aiResults.items.salesTrend.title"),
        text: t("pages.ai.dashboard.aiResults.items.salesTrend.text"),
        impact: t("pages.ai.common.impact.medium"),
        badgeColor: "bg-gray-200 dark:bg-[#5C677D] text-gray-700 dark:text-white",
      },
      {
        title: t("pages.ai.dashboard.aiResults.items.staffTurnover.title"),
        text: t("pages.ai.dashboard.aiResults.items.staffTurnover.text"),
        impact: t("pages.ai.common.impact.high"),
        badgeColor: "bg-red-500 text-white",
      },
    ],
  };

  return (
    <div className="container mx-auto bg-[#FFFFFF] dark:bg-[#001233] text-[#001233] dark:text-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D] rounded-xl shadow-sm p-5 flex justify-between items-center"
          >
            <div className="space-y-3">
              <h2 className="text-[#7D8597] dark:text-[#D7E3FC] text-sm font-medium">{s.title}</h2>
              <p className="text-[20px] font-semibold text-[#023E7D] dark:text-white">{s.value}</p>

              <div className={`flex items-center text-sm ${s.positive ? "text-green-600" : "text-red-500"}`}>
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>

            <div className="bg-[#E8F1FD] dark:bg-[#002855] p-3 rounded-full">
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D] rounded-xl shadow-sm p-5 mb-6">
        <h2 className="text-[16px] font-semibold text-[#023E7D] dark:text-white mb-2">
          {t("pages.ai.dashboard.alerts.title")}
        </h2>

        <p className="text-[#7D8597] dark:text-[#D7E3FC] text-sm mb-4">
          {t("pages.ai.dashboard.alerts.subtitle")}
        </p>

        {data.alerts.map((a, i) => (
          <div
            key={i}
            className={`border-l-4 ${a.borderColor} ${a.bgColor} border border-[#979DAC] dark:border-[#5C677D] p-4 mb-4 rounded-lg`}
          >
            <h3 className="font-semibold text-[#023E7D] dark:text-white flex items-center gap-2">
              <span>{a.title}</span>
              <span className={`${a.badgeColor} text-xs px-2 py-0.5 rounded-full`}>
                {a.impact}
              </span>
            </h3>

            <p className="text-[#7D8597] dark:text-[#D7E3FC] text-sm mt-2">
              {a.text}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D] rounded-xl shadow-sm p-5">
        <h2 className="text-[16px] font-semibold text-[#023E7D] dark:text-white mb-2">
          {t("pages.ai.dashboard.aiResults.title")}
        </h2>

        <p className="text-[#7D8597] dark:text-[#D7E3FC] text-sm mb-6">
          {t("pages.ai.dashboard.aiResults.subtitle")}
        </p>

        <div className="space-y-6">
          {data.aiAnalysis.map((r, i) => (
            <div key={i} className="flex justify-between items-start border-l-4 border-[#0466CB] dark:border-[#0466CB] pl-4">
              <div>
                <h3 className="font-semibold text-[#023E7D] dark:text-white">{r.title}</h3>
                <p className="text-[#7D8597] dark:text-[#D7E3FC] text-sm mt-1">{r.text}</p>
              </div>

              <span className={`${r.badgeColor} text-xs px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0`}>
                {r.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-7">
        <SatisHedefi />
        <XercLimiti />
      </div>

      <SettingsButton />
    </div>
  );
};

export default Dashboard;
