import React from "react";
import { useTranslation } from "react-i18next";

const Optimallasdirma = () => {
  const { t } = useTranslation();

  const recommendations = [
    {
      title: t("pages.ai.taxAi.optimization.items.rdExpenses.title"),
      level: "Asan",
      description: t("pages.ai.taxAi.optimization.items.rdExpenses.description"),
      saving: "2,300",
    },
    {
      title: t("pages.ai.taxAi.optimization.items.depreciation.title"),
      level: "Orta",
      description: t("pages.ai.taxAi.optimization.items.depreciation.description"),
      saving: "4,500",
    },
    {
      title: t("pages.ai.taxAi.optimization.items.socialPackages.title"),
      level: "Asan",
      description: t("pages.ai.taxAi.optimization.items.socialPackages.description"),
      saving: "1,800",
    },
  ];

  return (
    <div className="p-4  bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {t("pages.ai.taxAi.optimization.title")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
        {t("pages.ai.taxAi.optimization.subtitle")}
      </p>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                  {item.title}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    item.level === "Asan"
                      ? "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300"
                      : "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300"
                  }`}
                >
                  {t(
                    `pages.ai.taxAi.optimization.level.${
                      item.level === "Asan" ? "easy" : "medium"
                    }`
                  )}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
                {item.description}
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-4 py-1.5 rounded-md transition">
                {t("pages.ai.taxAi.optimization.moreInfo")}
              </button>
            </div>
            <div className="text-right sm:text-left">
              <p className="text-green-700 dark:text-green-400 font-semibold text-sm sm:text-base">
                +₼{item.saving}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {t("pages.ai.taxAi.optimization.saving")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-sm sm:text-base text-blue-800 dark:text-blue-300 p-3 sm:p-4 rounded-md transition-colors">
        <p>
          <strong>{t("pages.ai.taxAi.optimization.noteTitle")}</strong>{" "}
          {t("pages.ai.taxAi.optimization.noteText")}
        </p>
      </div>
    </div>
  );
};

export default Optimallasdirma;

