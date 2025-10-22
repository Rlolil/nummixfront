import React from "react";
import { useTranslation } from "react-i18next";

const RiskAnaliz = () => {
    const { t } = useTranslation();
    const data = [
        {
            title: "Marketinq Şöbəsi",
            employees: 12,
            reasons: [
                "Orta maaş aşağıdır",
                "İş yükü yüksəkdir",
                "Son 2 ayda 2 işçi çıxıb",
            ],
            aiAdvice: "Maaş artımı və bonus sistemi tətbiq edilməlidir",
            riskKey: "high",
            color: "bg-red-50 border-red-200 ",
            tagColor: "bg-red-600 text-white",
        },
        {
            title: "Satış Şöbəsi",
            employees: 18,
            reasons: ["Komisyon sistemi təkmilləşdirilməlidir"],
            aiAdvice: "Performans bonusları yenidən qurulmalıdır",
            riskKey: "medium",
            color: "bg-amber-50 border-amber-200",
            tagColor: "bg-black text-white",
        },
        {
            title: "Texniki Şöbə",
            employees: 15,
            reasons: ["Kollektiv stabil"],
            aiAdvice: "Hal-hazırda əlavə tədbirlər tələb olunmur",
            riskKey: "low",
            color: "bg-green-50 border-green-200",
            tagColor: "bg-gray-100 text-gray-700",
        },
    ];

    return (
        <div className="container mx-auto py-4">
            <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 mb-6">
                <h2 className="text-lg font-semibold mb-2">{t("pages.ai.hrAi.risk.title")}</h2>
                <p className="text-gray-600 mb-6">{t("pages.ai.hrAi.risk.subtitle")}</p>

                {data.map((dept, index) => (
                    <div
                        key={index}
                        className={`border rounded-2xl p-5 mb-5 shadow-sm ${dept.color}`}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-semibold">{dept.title}</h3>
                            <span className={`text-sm px-3 py-1 rounded-full ${dept.tagColor}`}>
                                {t(`pages.ai.hrAi.risk.level.${dept.riskKey}`)}
                            </span>
                        </div>

                        <p className="text-sm mb-1 text-gray-600">{dept.employees} {t("pages.ai.common.employeesSuffix")}</p>

                        <div className="mb-3">
                            <p className="font-medium mb-1">{t("pages.ai.hrAi.risk.reasons")}</p>
                            <ul className="list-disc list-inside space-y-1">
                                {dept.reasons.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>

                        <p className="font-semibold">
                            {t("pages.ai.common.aiRecommendation")} {" "}
                            <span className="font-normal">{dept.aiAdvice}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiskAnaliz;
