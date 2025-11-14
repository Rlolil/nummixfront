// import React from "react";
// import { useTranslation } from "react-i18next";

// const BudgetChart = () => {
//   const { t } = useTranslation();

//   const data = [
//     { key: "salary", used: 24500, planned: 25000, percent: 98 },
//     { key: "office", used: 9200, planned: 8000, percent: 115, extra: 1200, noRed: true },
//     { key: "marketing", used: 10500, planned: 12000, percent: 87.5 },
//     { key: "it", used: 5800, planned: 6000, percent: 96.7 },
//   ];

//   return (
//     <div className="bg-white p-6 rounded-xl shadow border border-gray-200 mt-7 mx-auto">
//       <h2 className="text-lg font-semibold text-gray-800 mb-1">
//         {t('pages.finance.controlPanel.budget.title', 'Budget Overview - Current Month')}
//       </h2>
//       <p className="text-gray-500 mb-6">
//         {t('pages.finance.controlPanel.budget.subtitle', 'Comparison of planned vs actual expenses')}
//       </p>

//       {data.map((item, index) => (
//         <div key={index} className="mb-6">
//           <div className="flex items-center justify-between mb-1">
//             <h3 className="text-gray-800 font-medium">{t(`pages.finance.common.categories.${item.key}`, item.key)}</h3>
//             <p className="text-gray-600 text-sm">
//               {item.used.toLocaleString()} / {item.planned.toLocaleString()} AZN
//             </p>
//           </div>

//           <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
//             <div
//               className={`h-2.5 rounded-full ${item.percent > 100 && !item.noRed
//                   ? "bg-red-600"
//                   : "bg-gray-900"
//                 }`}
//               style={{
//                 width: `${Math.min(item.percent, 100)}%`,
//               }}
//             ></div>
//           </div>

//           <div className="text-sm text-gray-600 mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
//             <div className="flex items-center gap-2">
//               <span>{t('pages.finance.controlPanel.budget.usedPercent', { percent: item.percent }, `${item.percent}% used`)}</span>
//               {item.extra && (
//                 <span className="bg-red-600 text-white text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
//                   {t('pages.finance.budgeting.labels.overBudget', 'Over budget')}
//                 </span>
//               )}
//             </div>

//             {item.extra && (
//               <span className="text-gray-500 text-sm whitespace-nowrap">
//                 {t('pages.finance.controlPanel.budget.extraOver', { amount: item.extra.toLocaleString() }, `(${item.extra.toLocaleString()} AZN over)`)}
//               </span>
//             )}
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default BudgetChart;


import React from "react";
import { useTranslation } from "react-i18next";

const BudgetChart = () => {
  const { t } = useTranslation();

  const data = [
    { key: "salary", used: 24500, planned: 25000, percent: 98 },
    { key: "office", used: 9200, planned: 8000, percent: 115, extra: 1200, noRed: true },
    { key: "marketing", used: 10500, planned: 12000, percent: 87.5 },
    { key: "it", used: 5800, planned: 6000, percent: 96.7 },
  ];

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#002855] p-6 rounded-xl shadow border border-[#979DAC] dark:border-[#33415C] mt-7 mx-auto">
      <h2 className="text-[#023E7D] dark:text-[#FFFFFF] text-lg font-semibold mb-1">
        {t('pages.finance.controlPanel.budget.title', 'Budget Overview - Current Month')}
      </h2>
      <p className="text-[#7D8597] dark:text-[#5C677D] mb-6">
        {t('pages.finance.controlPanel.budget.subtitle', 'Comparison of planned vs actual expenses')}
      </p>

      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-[#5C677D] dark:text-[#979DAC] font-medium">
              {t(`pages.finance.common.categories.${item.key}`, item.key)}
            </h3>
            <p className="text-[#7D8597] dark:text-[#7D8597] text-sm">
              {item.used.toLocaleString()} / {item.planned.toLocaleString()} AZN
            </p>
          </div>

          <div className="relative w-full bg-[#979DAC] dark:bg-[#33415C] h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-2.5 rounded-full ${
                item.percent > 100 && !item.noRed ? "bg-[#D00000]" : "bg-[#0466CB] dark:bg-[#0466CB]"
              }`}
              style={{ width: `${Math.min(item.percent, 100)}%` }}
            ></div>
          </div>

          <div className="text-sm text-[#5C677D] dark:text-[#979DAC] mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
            <div className="flex items-center gap-2">
              <span>
                {t(
                  'pages.finance.controlPanel.budget.usedPercent',
                  { percent: item.percent },
                  `${item.percent}% used`
                )}
              </span>

              {item.extra && (
                <span className="bg-[#D00000] text-[#FFFFFF] text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                  {t('pages.finance.budgeting.labels.overBudget', 'Over budget')}
                </span>
              )}
            </div>

            {item.extra && (
              <span className="text-[#7D8597] dark:text-[#7D8597] text-sm whitespace-nowrap">
                {t(
                  'pages.finance.controlPanel.budget.extraOver',
                  { amount: item.extra.toLocaleString() },
                  `(${item.extra.toLocaleString()} AZN over)`
                )}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetChart;
