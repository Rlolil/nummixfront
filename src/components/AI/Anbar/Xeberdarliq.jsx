import React from "react";
import { useTranslation } from "react-i18next";
import SettingsButton from "../../SettingsButton.jsx/SettingsButton";

const alerts = [
  {
    name: "Premium Paket",
    mevcut: 12,
    minimum: 15,
    gun: 8,
    ai: "50",
    statusKey: "critical",
    color: "red",
  },
  {
    name: "Standart Lisenziya",
    mevcut: 8,
    minimum: 10,
    gun: 5,
    ai: "30",
    statusKey: "critical",
    color: "red",
  },
  {
    name: "Texniki Dəstək Paket",
    mevcut: 28,
    minimum: 25,
    gun: 15,
    ai: "40",
    statusKey: "warning",
    color: "orange",
  },
  {
    name: "Enterprise Modul",
    mevcut: 45,
    minimum: 30,
    gun: 25,
    ai: "",
    statusKey: "normal",
    color: "green",
  },
];

const Xeberdarliq = () => {
  const { t } = useTranslation();

  const getColorClass = (color) => {
    switch (color) {
      case "red":
        return "bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800 text-red-600 dark:text-red-400";
      case "orange":
        return "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800 text-orange-600 dark:text-orange-400";
      default:
        return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 text-green-600 dark:text-green-400";
    }
  };

  const getStatusClass = (statusKey) => {
    switch (statusKey) {
      case "critical":
        return "bg-red-600 text-white";
      case "warning":
        return "bg-orange-600 text-white dark:bg-orange-700";
      default:
        return "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200";
    }
  };

  return (
    <div className=" bg-gray-50 dark:bg-[#33415C] rounded-xl shadow-sm transition-colors">
      <h2 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">
        {t("pages.ai.warehouse.stockAlerts.title")}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
        {t("pages.ai.warehouse.stockAlerts.subtitle")}
      </p>

      <div className="flex flex-col gap-4">
        {alerts.map((item, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border ${getColorClass(item.color)} transition-colors`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className={getColorClass(item.color)}>⚠️</span>
                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                  {item.name}
                </h3>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusClass(item.statusKey)}`}>
                {t(`pages.ai.warehouse.stockAlerts.status.${item.statusKey}`)}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {t("pages.ai.warehouse.stockAlerts.current")}: <b>{item.mevcut}</b> •{" "}
              {t("pages.ai.warehouse.stockAlerts.minimum")}: <b>{item.minimum}</b>
            </p>

            <div className="flex justify-between mb-1">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("pages.ai.warehouse.stockAlerts.timeToDeplete")}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {item.gun} {t("pages.ai.common.days")}
              </p>
            </div>

            <div className="h-2 w-full bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden mb-2">
              <div
                className={`h-full ${item.color === "red" ? "bg-red-600" : item.color === "orange" ? "bg-orange-500" : "bg-green-500"}`}
                style={{ width: `${Math.min((item.minimum / item.mevcut) * 100, 100)}%` }}
              ></div>
            </div>

            <div className="flex justify-end text-sm">
              {item.statusKey !== "normal" && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md transition">
                  {t("pages.ai.warehouse.stockAlerts.orderNow")}
                </button>
              )}
            </div>

            {item.ai && (
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                <span className="font-semibold text-black dark:text-gray-100">
                  {t("pages.ai.common.aiRecommendation")}
                </span>{" "}
                {t("pages.ai.warehouse.stockAlerts.orderSuggestion", { count: item.ai })}
              </p>
            )}
          </div>
        ))}
      </div>
      <SettingsButton />
    </div>
  );
};

export default Xeberdarliq;
