// import React from "react";
// import { useTranslation } from 'react-i18next'
// import { FiTrendingUp, FiTrendingDown, FiAlertCircle } from "react-icons/fi";

// const FinansSabiti = () => {
//   const { t } = useTranslation()
//   const indicators = [
//     { name: t('pages.finance.analytics.stability.indicators.liquidity'), value: 95, color: "bg-green-500" },
//     { name: t('pages.finance.analytics.stability.indicators.profitability'), value: 82, color: "bg-green-400" },
//     { name: t('pages.finance.analytics.stability.indicators.debtManagement'), value: 88, color: "bg-green-500" },
//     { name: t('pages.finance.analytics.stability.indicators.budgetControl'), value: 75, color: "bg-yellow-500" },
//   ];

//   const advices = [
//     {
//       icon: <FiTrendingUp className="text-green-600" />,
//       title: t('pages.finance.analytics.stability.advices.investment.title'),
//       text: t('pages.finance.analytics.stability.advices.investment.text'),
//       bg: "bg-green-50 border-green-200",
//     },
//     {
//       icon: <FiTrendingDown className="text-blue-600" />,
//       title: t('pages.finance.analytics.stability.advices.budgetOptimization.title'),
//       text: t('pages.finance.analytics.stability.advices.budgetOptimization.text'),
//       bg: "bg-blue-50 border-blue-200",
//     },
//     {
//       icon: <FiAlertCircle className="text-yellow-600" />,
//       title: t('pages.finance.analytics.stability.advices.attention.title'),
//       text: t('pages.finance.analytics.stability.advices.attention.text'),
//       bg: "bg-yellow-50 border-yellow-200",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
//       <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
//         <h2 className="text-lg font-semibold text-gray-800">{t('pages.finance.analytics.stability.title')}</h2>
//         <p className="text-sm text-gray-500 mt-1 mb-5">{t('pages.finance.analytics.stability.subtitle')}</p>

//         <div className="space-y-5">
//           {indicators.map((item, i) => (
//             <div key={i}>
//               <div className="flex justify-between mb-1 text-sm">
//                 <span className="font-medium text-gray-700">{item.name}</span>
//                 <span className="text-gray-600">{item.value}/100</span>
//               </div>
//               <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
//                 <div
//                   className={`${item.color} h-2.5 rounded-full transition-all duration-500 ease-in-out`}
//                   style={{ width: `${Math.min(item.value, 100)}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-between items-center mt-6 pt-4 border-t">
//           <span className="font-semibold text-gray-700">{t('pages.finance.analytics.stability.totalScore')}</span>
//           <div className="flex items-center gap-2">
//             <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">{t('pages.finance.analytics.stability.excellent')}</span>
//             <span className="text-2xl font-semibold text-gray-900">
//               85/100
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
//         <h2 className="text-lg font-semibold text-gray-800">{t('pages.finance.analytics.stability.recommendationsTitle')}</h2>
//         <p className="text-sm text-gray-500 mt-1 mb-4">{t('pages.finance.analytics.stability.recommendationsSubtitle')}</p>

//         <div className="space-y-3">
//           {advices.map((item, i) => (
//             <div
//               key={i}
//               className={`${item.bg} border rounded-lg p-4 flex items-start gap-3`}
//             >
//               <div className="text-xl">{item.icon}</div>
//               <div>
//                 <p className="text-sm font-semibold text-gray-800">
//                   {item.title}
//                 </p>
//                 <p className="text-sm text-gray-600">{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinansSabiti;

import React from "react";
import { useTranslation } from 'react-i18next'
import { FiTrendingUp, FiTrendingDown, FiAlertCircle } from "react-icons/fi";

const FinansSabiti = () => {
  const { t } = useTranslation()
  const indicators = [
    { name: t('pages.finance.analytics.stability.indicators.liquidity'), value: 95, color: "bg-green-500" },
    { name: t('pages.finance.analytics.stability.indicators.profitability'), value: 82, color: "bg-green-400" },
    { name: t('pages.finance.analytics.stability.indicators.debtManagement'), value: 88, color: "bg-green-500" },
    { name: t('pages.finance.analytics.stability.indicators.budgetControl'), value: 75, color: "bg-yellow-500" },
  ];

  const advices = [
    {
      icon: <FiTrendingUp className="text-green-600" />,
      title: t('pages.finance.analytics.stability.advices.investment.title'),
      text: t('pages.finance.analytics.stability.advices.investment.text'),
      bg: "bg-green-200/10 border-green-200",
    },
    {
      icon: <FiTrendingDown className="text-blue-600" />,
      title: t('pages.finance.analytics.stability.advices.budgetOptimization.title'),
      text: t('pages.finance.analytics.stability.advices.budgetOptimization.text'),
      bg: "bg-blue-200/20 border-blue-200",
    },
    {
      icon: <FiAlertCircle className="text-yellow-600" />,
      title: t('pages.finance.analytics.stability.advices.attention.title'),
      text: t('pages.finance.analytics.stability.advices.attention.text'),
      bg: "bg-yellow-200/20 border-yellow-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{t('pages.finance.analytics.stability.title')}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-5">{t('pages.finance.analytics.stability.subtitle')}</p>

        <div className="space-y-5">
          {indicators.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-200">{item.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{item.value}/100</span>
              </div>
              <div className="relative w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-2.5 rounded-full transition-all duration-500 ease-in-out`}
                  style={{ width: `${Math.min(item.value, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="font-semibold text-gray-700 dark:text-gray-200">{t('pages.finance.analytics.stability.totalScore')}</span>
          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">{t('pages.finance.analytics.stability.excellent')}</span>
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">
              85/100
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{t('pages.finance.analytics.stability.recommendationsTitle')}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">{t('pages.finance.analytics.stability.recommendationsSubtitle')}</p>

        <div className="space-y-3">
          {advices.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} dark:bg-opacity-20 border rounded-lg p-4 flex items-start gap-3 dark:border-gray-600`}
            >
              <div className="text-xl">{item.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinansSabiti;

