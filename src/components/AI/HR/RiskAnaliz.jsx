import React from "react";

const RiskAnaliz = () => {
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
            risk: "Yüksək Risk",
            color: "bg-red-50 border-red-200 ",
            tagColor: "bg-red-600 text-white",
        },
        {
            title: "Satış Şöbəsi",
            employees: 18,
            reasons: ["Komisyon sistemi təkmilləşdirilməlidir"],
            aiAdvice: "Performans bonusları yenidən qurulmalıdır",
            risk: "Orta Risk",
            color: "bg-amber-50 border-amber-200",
            tagColor: "bg-black text-white",
        },
        {
            title: "Texniki Şöbə",
            employees: 15,
            reasons: ["Kollektiv stabil"],
            aiAdvice: "Hal-hazırda əlavə tədbirlər tələb olunmur",
            risk: "Aşağı Risk",
            color: "bg-green-50 border-green-200",
            tagColor: "bg-gray-100 text-gray-700",
        },
    ];

    return (
        <div className="container mx-auto py-4">
            <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 mb-6">
                <h2 className="text-lg font-semibold mb-2">İşçi İtkisi Risk Analizi</h2>
                <p className="text-gray-600 mb-6">
                    AI tərəfindən müəyyən edilmiş yüksək riskli şöbələr
                </p>

                {data.map((dept, index) => (
                    <div
                        key={index}
                        className={`border rounded-2xl p-5 mb-5 shadow-sm ${dept.color}`}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-semibold">{dept.title}</h3>
                            <span className={`text-sm px-3 py-1 rounded-full ${dept.tagColor}`}>
                                {dept.risk}
                            </span>
                        </div>

                        <p className="text-sm mb-1 text-gray-600">{dept.employees} işçi</p>

                        <div className="mb-3">
                            <p className="font-medium mb-1">Səbəblər:</p>
                            <ul className="list-disc list-inside space-y-1">
                                {dept.reasons.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>

                        <p className="font-semibold">
                            AI Tövsiyəsi:{" "}
                            <span className="font-normal">{dept.aiAdvice}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiskAnaliz;
