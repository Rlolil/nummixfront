import React from "react";
import { useTranslation } from "react-i18next";

const suppliers = [
  {
    name: "Tech Supply Co",
    delivery: 95,
    quality: 98,
    delay: "0.5",
    statusKey: "excellent",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Digital Partners",
    delivery: 88,
    quality: 92,
    delay: "2.3",
    statusKey: "good",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "Global Solutions",
    delivery: 72,
    quality: 85,
    delay: "5.8",
    statusKey: "average",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    name: "Quick Logistics",
    delivery: 65,
    quality: 78,
    delay: "8.2",
    statusKey: "poor",
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
  },
];

const Techizad = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6 mt-10 bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D]  rounded-xl shadow-sm transition-colors">
      <h2 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">
        {t("pages.ai.warehouse.suppliers.title")}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {t("pages.ai.warehouse.suppliers.subtitle")}
      </p>

      <div className="space-y-4">
        {suppliers.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                {item.name}
              </h3>
              <span
                className={`px-3 py-0.5 rounded-full text-xs font-medium ${item.color}`}
              >
                {t(`pages.ai.warehouse.suppliers.status.${item.statusKey}`)}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="w-full md:w-1/2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                  <span>{t("pages.ai.warehouse.suppliers.onTimeDelivery")}</span>
                  <span className="text-gray-700 dark:text-gray-100 font-medium">
                    {item.delivery}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gray-900 dark:bg-gray-300 h-2 rounded-full"
                    style={{ width: `${item.delivery}%` }}
                  ></div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                  <span>{t("pages.ai.warehouse.suppliers.quality")}</span>
                  <span className="text-gray-700 dark:text-gray-100 font-medium">
                    {item.quality}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gray-900 dark:bg-gray-300 h-2 rounded-full"
                    style={{ width: `${item.quality}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end text-xs text-gray-500 dark:text-gray-400 mt-3">
              <span className="text-gray-600 dark:text-gray-300 font-medium mr-1">
                {t("pages.ai.warehouse.suppliers.avgDelay")}:
              </span>
              <span className="text-gray-800 dark:text-gray-100">
                {item.delay} {t("pages.ai.common.days")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techizad;

