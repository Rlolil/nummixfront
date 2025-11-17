import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  { id: 1, name: "Premium Paket", sales: "45 satış", price: "67,500 ₼", percent: "+25%" },
  { id: 2, name: "Standart Xidmət", sales: "128 satış", price: "51,200 ₼", percent: "+18%" },
  { id: 3, name: "Enterprise Lisenziya", sales: "12 satış", price: "48,000 ₼", percent: "+42%" },
  { id: 4, name: "Əlavə Modullar", sales: "89 satış", price: "35,600 ₼", percent: "+12%" },
  { id: 5, name: "Texniki Dəstək", sales: "156 satış", price: "31,200 ₼", percent: "+8%" },
];

const customers = [
  { id: "A", name: "ABC Holding", orders: "15 alış • 2 gün əvvəl", price: "42,500 ₼" },
  { id: "X", name: "XYZ Corporation", orders: "12 alış • 5 gün əvvəl", price: "38,900 ₼" },
  { id: "T", name: "Tech Solutions MMC", orders: "18 alış • 1 gün əvvəl", price: "35,200 ₼" },
  { id: "D", name: "Digital Agency", orders: "9 alış • 3 gün əvvəl", price: "28,700 ₼" },
  { id: "R", name: "Retail Plus", orders: "14 alış • 1 həftə əvvəl", price: "25,600 ₼" },
];

const ProductCustomer = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl shadow-sm border border-[#979DAC] dark:border-[#5C677D] p-5">
        <h2 className="text-lg font-semibold text-[#023E7D] dark:text-[#FFFFFF]">
          {t("pages.ai.salesAi.products.title")}
        </h2>
        <p className="text-sm text-[#7D8597] dark:text-[#C0C0C0] mb-4">
          {t("pages.ai.salesAi.products.subtitle")}
        </p>

        <div className="space-y-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-[#979DAC] dark:border-[#5C677D] rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-[#2E3A52] transition"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 font-semibold text-sm">
                  {item.id}
                </span>
                <div>
                  <p className="font-medium text-[#023E7D] dark:text-[#FFFFFF]">{item.name}</p>
                  <p className="text-xs text-[#7D8597] dark:text-[#C0C0C0]">{item.sales}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#023E7D] dark:text-[#FFFFFF]">{item.price}</p>
                <p className="text-green-600 dark:text-green-400 text-xs">{item.percent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl shadow-sm border border-[#979DAC] dark:border-[#5C677D] p-5">
        <h2 className="text-lg font-semibold text-[#023E7D] dark:text-[#FFFFFF]">
          {t("pages.ai.salesAi.customers.title")}
        </h2>
        <p className="text-sm text-[#7D8597] dark:text-[#C0C0C0] mb-4">
          {t("pages.ai.salesAi.customers.subtitle")}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-3 rounded-lg text-sm mb-4">
          <strong>{t("pages.ai.common.aiAnalysisLabel")}</strong>{" "}
          {t("pages.ai.salesAi.customers.aiText", { percent: "42%" })}
        </div>

        <div className="space-y-3">
          {customers.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-[#979DAC] dark:border-[#5C677D] rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-[#2E3A52] transition"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 font-semibold">
                  {c.id}
                </span>
                <div>
                  <p className="font-medium text-[#023E7D] dark:text-[#FFFFFF]">{c.name}</p>
                  <p className="text-xs text-[#7D8597] dark:text-[#C0C0C0]">{c.orders}</p>
                </div>
              </div>
              <p className="font-bold text-[#023E7D] dark:text-[#FFFFFF]">{c.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductCustomer;
