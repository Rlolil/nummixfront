import React from "react";
import { FiTrendingUp, FiTrendingDown, FiAlertCircle } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import { useTranslation } from "react-i18next";

const MaliyyeAI = () => {
  const { t } = useTranslation();

  const data = {
    stats: [
      {
        title: t("pages.ai.dashboard.stats.monthlyProfit"),
        value: "₼45,231",
        change: "+18.5%",
        positive: true,
        icon: <MdAttachMoney className="text-[#00B050] text-[28px]" />,
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
        icon: <BsBoxSeam className="text-[#FF6B6B] text-[28px]" />,
      },
    ],
    debts: [
      { name: "ABC Şirkəti", days: t("pages.ai.financeAi.debts.daysPassed", { count: 15 }), amount: "₼12,500", typeKey: "receivable", statusKey: "" },
      { name: "XYZ MMC", days: t("pages.ai.financeAi.debts.daysPassed", { count: 45 }), amount: "₼8,900", typeKey: "receivable", statusKey: "risk" },
      { name: "Supply Co", days: t("pages.ai.financeAi.debts.daysPassed", { count: 5 }), amount: "₼15,600", typeKey: "payable", statusKey: "" },
      { name: "Tech Solutions", days: t("pages.ai.financeAi.debts.daysPassed", { count: 62 }), amount: "₼22,000", typeKey: "payable", statusKey: "critical" },
    ],
  };

  return (
    <div className="container mx-auto bg-[#F8FAFF] dark:bg-[#001233]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
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

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm mt-8 p-5">
        <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-semibold mb-2">{t("pages.ai.financeAi.incomeExpense.title")}</h3>
        <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-4">{t("pages.ai.financeAi.incomeExpense.subtitle")}</p>
        <div className="flex-1">
          <div className="bg-[#E8F1FD] dark:bg-[#002855] text-sm text-[#023E7D] dark:text-[#FFFFFF] p-3 rounded-lg mb-4">
            <strong>{t("pages.ai.common.aiAnalysisLabel")}</strong> {t("pages.ai.financeAi.incomeExpense.aiText", { avg: "72,667 AZN", max: "75,000 AZN" })}
          </div>
          <Chart1 />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm p-4 flex flex-col">
          <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-medium mb-2">{t("pages.ai.financeAi.cashFlow.title")}</h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">{t("pages.ai.financeAi.cashFlow.subtitle")}</p>
          <Chart2 />
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm p-4 flex flex-col">
          <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-medium mb-2">{t("pages.ai.financeAi.expenseDistribution.title")}</h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">{t("pages.ai.financeAi.expenseDistribution.subtitle")}</p>
          <div className="w-full h-[300px]">
            <Chart3 />
          </div>
        </div>
      </div>

      <div className="bg-[#E8F1FD] dark:bg-[#002855] border border-[#979DAC] rounded-xl shadow-sm mt-8 p-5">
        <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-semibold mb-2">{t("pages.ai.financeAi.debts.title")}</h3>
        <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-4">{t("pages.ai.financeAi.debts.subtitle")}</p>
        <div className="space-y-4">
          {data.debts.map((item, i) => (
            <div key={i} className="flex justify-between items-center bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl p-4 hover:shadow-md transition">
              <div className="flex items-start gap-3">
                {(item.statusKey === "risk" || item.statusKey === "critical" || item.typeKey === "payable") && <FiAlertCircle className="text-[#FF6B6B] text-lg mt-[2px]" />}
                <div>
                  <h4 className="font-medium text-[#023E7D] dark:text-[#FFFFFF]">{item.name}</h4>
                  <p className="text-[#7D8597] dark:text-[#5C677D] text-sm">{item.days}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-semibold text-[#023E7D] dark:text-[#FFFFFF]">{item.amount}</span>
                <div className="flex gap-2 mt-1">
                  {item.statusKey && (
                    <span className={`text-xs font-medium px-2 py-[2px] rounded-lg ${item.statusKey === "risk" ? "bg-[#FF6B6B] text-white" : item.statusKey === "critical" ? "bg-[#D00000] text-white" : ""}`}>
                      {t(`pages.ai.financeAi.debts.status.${item.statusKey}`)}
                    </span>
                  )}
                  <span className={`text-xs font-medium px-2 py-[2px] rounded-lg ${item.typeKey === "receivable" ? "bg-[#023E7D] text-white" : "bg-[#FF6B6B] text-white"}`}>
                    {t(`pages.ai.financeAi.debts.type.${item.typeKey}`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MaliyyeAI;
