import React from "react";
import { CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const tasks = [
  {
    title: "Aylıq ƏDV bəyannaməsi",
    date: "Son tarix: 20 Sentyabr",
    status: "Tamamlandı",
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "Rüblük gəlir vergisi hesabatı",
    date: "Son tarix: 15 Oktyabr",
    status: "Gözləyir",
    icon: <Calendar className="text-blue-500 w-5 h-5" />,
    badgeColor: "bg-blue-900 text-white",
  },
  {
    title: "Sosial sığorta ayırmaları",
    date: "Son tarix: 25 Sentyabr",
    status: "Tamamlandı",
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "İşçilərin gəlir məlumatları",
    date: "Gecikmə: 2 gün",
    status: "Gecikmə",
    icon: <AlertCircle className="text-red-500 w-5 h-5" />,
    badgeColor: "bg-red-100 text-red-700",
  },
];

const Yoxlama = () => {
  const { t } = useTranslation();
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
