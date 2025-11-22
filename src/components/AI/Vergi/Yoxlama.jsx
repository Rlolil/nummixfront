import React from "react";
import { CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Yoxlama = () => {
  const { t } = useTranslation();

  const tasks = [
    {
      title: t("pages.ai.taxAi.tasks.list.vatReturn.title"),
      date: t("pages.ai.taxAi.tasks.list.vatReturn.date"),
      status: "Tamamlandı",
      icon: <CheckCircle className="text-green-500 w-5 h-5" />,
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      title: t("pages.ai.taxAi.tasks.list.incomeTax.title"),
      date: t("pages.ai.taxAi.tasks.list.incomeTax.date"),
      status: "Gözləyir",
      icon: <Calendar className="text-blue-500 w-5 h-5" />,
      badgeColor: "bg-blue-900 text-white",
    },
    {
      title: t("pages.ai.taxAi.tasks.list.socialInsurance.title"),
      date: t("pages.ai.taxAi.tasks.list.socialInsurance.date"),
      status: "Tamamlandı",
      icon: <CheckCircle className="text-green-500 w-5 h-5" />,
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      title: t("pages.ai.taxAi.tasks.list.employeeIncome.title"),
      date: t("pages.ai.taxAi.tasks.list.employeeIncome.date"),
      status: "Gecikmə",
      icon: <AlertCircle className="text-red-500 w-5 h-5" />,
      badgeColor: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-sm transition"
          >
            <div className="flex items-start gap-3">
              {task.icon}
              <div>
                <p className="font-medium dark:text-gray-300 text-gray-800">{task.title}</p>
                <p className="text-sm text-gray-500">{task.date}</p>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-lg text-sm font-medium ${task.badgeColor}`}>
              {task.status === "Tamamlandı"
                ? t("pages.ai.taxAi.tasks.status.completed")
                : task.status === "Gözləyir"
                ? t("pages.ai.taxAi.tasks.status.pending")
                : t("pages.ai.taxAi.tasks.status.delayed")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yoxlama;
