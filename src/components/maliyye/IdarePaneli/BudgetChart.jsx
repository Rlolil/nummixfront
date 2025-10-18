import React from "react";

const BudgetChart = () => {
  const data = [
    {
      title: "Maaşlar",
      used: 24500,
      planned: 25000,
      percent: 98,
    },
    {
      title: "Ofis xərcləri",
      used: 9200,
      planned: 8000,
      percent: 115,
      extra: 1200,
      noRed: true,
    },
    {
      title: "Marketing",
      used: 10500,
      planned: 12000,
      percent: 87.5,
    },
    {
      title: "IT",
      used: 5800,
      planned: 6000,
      percent: 96.7,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200 mt-7 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        Büdcə İcmalı - Cari Ay
      </h2>
      <p className="text-gray-500 mb-6">
        Planlaşdırılan və faktiki xərclərin müqayisəsi
      </p>

      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-gray-800 font-medium">{item.title}</h3>
            <p className="text-gray-600 text-sm">
              {item.used.toLocaleString()} / {item.planned.toLocaleString()} AZN
            </p>
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

          <div className="text-sm text-gray-600 mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
            <div className="flex items-center gap-2">
              <span>{item.percent}% istifadə edilib</span>
              {item.extra && (
                <span className="bg-red-600 text-white text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Artıq xərcl
                </span>
              )}
            </div>

            {item.extra && (
              <span className="text-gray-500 text-sm whitespace-nowrap">
                ({item.extra.toLocaleString()} AZN artıq)
              </span>
            )}
          </div>

        </div>
      ))}
    </div>
  );
};

export default BudgetChart;
