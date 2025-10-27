import React from "react";
import { useTranslation } from "react-i18next";

const suppliers = [
  {
    name: "Tech Supply Co",
    delivery: 95,
    quality: 98,
    delay: "0.5",
    statusKey: "excellent",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Digital Partners",
    delivery: 88,
    quality: 92,
    delay: "2.3",
    statusKey: "good",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Global Solutions",
    delivery: 72,
    quality: 85,
    delay: "5.8",
    statusKey: "average",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Quick Logistics",
    delivery: 65,
    quality: 78,
    delay: "8.2",
    statusKey: "poor",
    color: "bg-red-100 text-red-600",
  },
];

const Techizad = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-1 text-gray-800">
        {t("pages.ai.warehouse.suppliers.title")}
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        {t("pages.ai.warehouse.suppliers.subtitle")}
      </p>

      <div className="space-y-4">
        {suppliers.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <span
                className={`px-3 py-0.5 rounded-full text-xs font-medium ${item.color}`}
              >
                {t(`pages.ai.warehouse.suppliers.status.${item.statusKey}`)}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="w-full md:w-1/2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{t("pages.ai.warehouse.suppliers.onTimeDelivery")}</span>
                  <span className="text-gray-700 font-medium">{item.delivery}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full"
                    style={{ width: `${item.delivery}%` }}
                  ></div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{t("pages.ai.warehouse.suppliers.quality")}</span>
                  <span className="text-gray-700 font-medium">{item.quality}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full"
                    style={{ width: `${item.quality}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-end text-xs text-gray-500 mt-3">
              <span className="text-gray-600 font-medium mr-1">{t("pages.ai.warehouse.suppliers.avgDelay")}:</span>
              <span className="text-gray-800">{item.delay} {t("pages.ai.common.days")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techizad;
