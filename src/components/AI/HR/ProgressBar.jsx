import React from "react";

const ProgressBar = () => {
    const data = [
        {
            title: "Satış",
            percent: 92,

        },
        {
            title: "Ofis xərcləri",
            percent: 95,
            noRed: true,
        },
        {
            title: "Marketing",
            percent: 88,
            gecikme: 12,
            noRed: true,
        },
        {
            title: "IT ve Texnologiya",
            percent: 97,
            noRed: true,

        },
        {
            title: "Satinalma",
            percent: 94,
            noRed: true,
        }
    ];

    return (
        <div >


            {data.map((item, index) => (
                <div key={index} className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="text-gray-800 font-medium">{item.title}</h3>
                        <h3 className="text-gray-800 font-medium">{item.percent}%</h3>
                    </div>

                    <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                            className={`h-2.5 rounded-full ${item.percent > 100 && !item.noRed
                                ? "bg-red-600"
                                : "bg-gray-900"
                                }`}
                            style={{
                                width: `${Math.min(item.percent, 100)}%`,
                            }}
                        ></div>
                    </div>

                    {item.gecikme && (
                        <span className="text-red-500">
                            Gecikme:{item.gecikme}%
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
