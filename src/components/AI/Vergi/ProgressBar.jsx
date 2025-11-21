import React from "react";
import { useTranslation } from "react-i18next";

const ProgressBar = () => {
  const { t } = useTranslation();

  const data = [
    { title: t("pages.ai.hrAi.departments.sales"), percent: 92 },
    { title: t("pages.ai.hrAi.departments.officeExpenses"), percent: 95, noRed: true },
    { title: t("pages.ai.hrAi.departments.marketing"), percent: 88, noRed: true },
  ];

  return (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-gray-800 dark:text-gray-100">
              {item.title}
            </h3>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {item.percent}%
            </span>
          </div>

          <div className="relative w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                item.percent > 100 && !item.noRed
                  ? "bg-red-600"
                  : "bg-gray-900 dark:bg-gray-100"
              }`}
              style={{ width: `${Math.min(item.percent, 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

