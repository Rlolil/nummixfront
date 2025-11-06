// import React from 'react'
// import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
// import { MdAttachMoney } from "react-icons/md";
// import { BsBoxSeam, BsCart3 } from "react-icons/bs";
// import Chart2 from './Chart2';
// import ProgressBar from './ProgressBar';
// import RiskAnaliz from './RiskAnaliz';
// import Chart3 from './Chart3';
// import { useTranslation } from "react-i18next";

// const Hr = () => {
//   const { t } = useTranslation();
//   const data = {
//     stats: [
//       {
//         title: t("pages.ai.dashboard.stats.monthlyProfit"),
//         value: "₼45,231",
//         change: "+18.5%",
//         positive: true,
//         icon: <MdAttachMoney className="text-green-500 text-[28px]" />,
//       },
//       {
//         title: t("pages.ai.dashboard.stats.salesVolume"),
//         value: "₼128,456",
//         change: "+12.3%",
//         positive: true,
//         icon: <BsCart3 className="text-blue-500 text-[28px]" />,
//       },
//       {
//         title: t("pages.ai.dashboard.stats.inventoryValue"),
//         value: "₼67,890",
//         change: "-5.2%",
//         positive: false,
//         icon: <BsBoxSeam className="text-purple-500 text-[28px]" />,
//       },
//       {
//         title: t("pages.ai.dashboard.stats.payrollFund"),
//         value: "₼23,450",
//         change: "+8.1%",
//         positive: true,
//         icon: <FiUsers className="text-orange-400 text-[28px]" />,
//       },
//     ],
//   }
//   return (
//     <div className="container mx-auto px-2 py-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {data.stats.map((s, i) => (
//           <div
//             key={i}
//             className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 flex justify-between items-center"
//           >
//             <div className="space-y-3">
//               <h2 className="text-gray-500 text-sm font-medium">{s.title}</h2>
//               <p className="text-[20px] font-semibold text-gray-800">{s.value}</p>
//               <div
//                 className={`flex items-center text-sm ${s.positive ? "text-green-600" : "text-red-500"}`}
//               >
//                 {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
//                 <span className="ml-1">{s.change}</span>
//               </div>
//             </div>
//             <div className="bg-gray-100 p-3 rounded-full">{s.icon}</div>
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 items-stretch">
//         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col h-full">
//           <h3 className="text-gray-700 font-medium mb-2">{t("pages.ai.hrAi.attendanceByDept.title")}</h3>
//           <p className="text-gray-400 text-sm mb-3">{t("pages.ai.hrAi.attendanceByDept.subtitle")}</p>

//           <div className="bg-red-100 text-sm border border-red-300 text-gray-800 p-3 rounded-lg mb-4 mt-4">
//             <strong>{t("pages.ai.common.warningLabel")}</strong> {t("pages.ai.hrAi.attendanceByDept.warningText")}
//           </div>
//           <ProgressBar />
//         </div>

//         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col h-full">
//           <h3 className="text-gray-700 font-medium mb-2">{t("pages.ai.hrAi.expenseDistribution.title")}</h3>
//           <p className="text-gray-400 text-sm mb-3">{t("pages.ai.hrAi.expenseDistribution.subtitle")}</p>

//           <div className="flex-grow flex items-center justify-center">
//             <div className="w-full h-[300px]">
//               <Chart2 />
//             </div>
//           </div>
//         </div>
//       </div>

//       <RiskAnaliz />
//       <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4  flex flex-col">
//         <h3 className="text-gray-700 font-medium mb-2">{t("pages.ai.hrAi.departmentPerformance.title")}</h3>
//         <p className="text-gray-400 text-sm mb-3">{t("pages.ai.hrAi.departmentPerformance.subtitle")}</p>

//         <div className="flex-1">
//           <Chart3 />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Hr

import React from 'react'
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Chart2 from './Chart2';
import ProgressBar from './ProgressBar';
import RiskAnaliz from './RiskAnaliz';
import Chart3 from './Chart3';
import { useTranslation } from "react-i18next";

const Hr = () => {
  const { t } = useTranslation();
  const data = {
    stats: [
      {
        title: t("pages.ai.dashboard.stats.monthlyProfit"),
        value: "₼45,231",
        change: "+18.5%",
        positive: true,
        icon: <MdAttachMoney className="text-green-500 text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.salesVolume"),
        value: "₼128,456",
        change: "+12.3%",
        positive: true,
        icon: <BsCart3 className="text-blue-500 text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.inventoryValue"),
        value: "₼67,890",
        change: "-5.2%",
        positive: false,
        icon: <BsBoxSeam className="text-purple-500 text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.payrollFund"),
        value: "₼23,450",
        change: "+8.1%",
        positive: true,
        icon: <FiUsers className="text-orange-400 text-[28px]" />,
      },
    ],
  }

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-700 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm p-5 flex justify-between items-center transition-colors"
          >
            <div className="space-y-3">
              <h2 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{s.title}</h2>
              <p className="text-[20px] font-semibold text-gray-800 dark:text-gray-100">{s.value}</p>
              <div
                className={`flex items-center text-sm ${
                  s.positive ? "text-green-600" : "text-red-500"
                }`}
              >
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">{s.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 items-stretch">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 flex flex-col h-full transition-colors">
          <h3 className="text-gray-700 dark:text-gray-100 font-medium mb-2">{t("pages.ai.hrAi.attendanceByDept.title")}</h3>
          <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{t("pages.ai.hrAi.attendanceByDept.subtitle")}</p>

          <div className="bg-red-100 dark:bg-red-900/30 text-sm border border-red-300 dark:border-red-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg mb-4 mt-4">
            <strong>{t("pages.ai.common.warningLabel")}</strong> {t("pages.ai.hrAi.attendanceByDept.warningText")}
          </div>
          <ProgressBar />
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 flex flex-col h-full transition-colors">
          <h3 className="text-gray-700 dark:text-gray-100 font-medium mb-2">{t("pages.ai.hrAi.expenseDistribution.title")}</h3>
          <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{t("pages.ai.hrAi.expenseDistribution.subtitle")}</p>

          <div className="flex-grow flex items-center justify-center">
            <div className="w-full h-[300px]">
              <Chart2 />
            </div>
          </div>
        </div>
      </div>

      <RiskAnaliz />

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 flex flex-col transition-colors">
        <h3 className="text-gray-700 dark:text-gray-100 font-medium mb-2">{t("pages.ai.hrAi.departmentPerformance.title")}</h3>
        <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{t("pages.ai.hrAi.departmentPerformance.subtitle")}</p>

        <div className="flex-1">
          <Chart3 />
        </div>
      </div>
    </div>
  )
}

export default Hr
