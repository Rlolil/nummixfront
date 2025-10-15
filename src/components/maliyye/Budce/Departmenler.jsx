import React from "react";

const Departmenler = () => {
    const data = [
        {
            title: "Satış və Marketing",
            total: 32000,
            budget: 35000,
            items: [
                { name: "Reklam", spent: 14200, budget: 15000 },
                { name: "Promosyon", spent: 7500, budget: 8000 },
                { name: "Tədbirlər", spent: 10300, budget: 12000 },
            ],
        },
        {
            title: "İT və Texnologiya",
            total: 16500,
            budget: 18000,
            items: [
                { name: "Proqram təminatı", spent: 7200, budget: 8000 },
                { name: "Avadanlıq", spent: 6800, budget: 7000 },
                { name: "Cloud xidmətlər", spent: 2500, budget: 3000 },
            ],
        },
        {
            title: "Əməliyyatlar",
            total: 21700,
            budget: 20000,
            items: [
                { name: "Ofis xərcləri", spent: 9200, budget: 8000 },
                { name: "Kommunal xidmətlər", spent: 5100, budget: 5000 },
                { name: "Təmizlik", spent: 1900, budget: 2000 },
                { name: "Təmir", spent: 5500, budget: 5000 },
            ],
        },
    ];

    return (
        <div className="space-y-6 p-6">
            {data.map((dep, i) => {
                const depPercent = (dep.total / dep.budget) * 100;

                return (
                    <div
                        key={i}
                        className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-[17px] font-medium text-gray-900">
                                {dep.title}
                            </h2>
                            <div className="flex items-center gap-2">
                                <p
                                    className={`text-sm font-medium text-gray-500
                                        }`}
                                >
                                    {dep.total.toLocaleString()} /{" "}
                                    {dep.budget.toLocaleString()} AZN
                                </p>
                                {depPercent > 100 && (
                                    <span className="bg-red-600 text-white text-xs font-medium px-2 py-[2px] rounded-md">
                                        Artıq xərc
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mb-5">
                            <div
                                className={`h-2.5 rounded-full ${depPercent > 100 ? "bg-red-600" : "bg-gray-900"
                                    }`}
                                style={{
                                    width: `${Math.min(depPercent, 100)}%`,
                                }}
                            ></div>
                        </div>

                        <div className="space-y-3">
                            {dep.items.map((item, j) => {
                                const itemPercent = (item.spent / item.budget) * 100;
                                return (
                                    <div key={j} className="flex items-center justify-between">
                                        <span className="text-[15px] text-gray-700 w-32">
                                            {item.name}
                                        </span>

                                        <div className="flex ">
                                            <div className="flex-1 mx-3">
                                                <div className="relative w-[150px] bg-gray-200 h-2.5 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-2.5 rounded-full  bg-gray-900
                                                            }`}
                                                        style={{
                                                            width: `${Math.min(itemPercent, 100)}%`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <span className="text-[15px] text-gray-700 text-right w-[110px]">
                                                {item.spent.toLocaleString()} /{" "}
                                                {item.budget.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Departmenler;
