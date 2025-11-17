// import React from 'react'
// import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
// import { MdAttachMoney } from "react-icons/md";
// import { BsBoxSeam, BsCart3 } from "react-icons/bs";
// import VergiOdenis from './VergiOdenis';
// import Chart from './Chart';
// import Optimallasdirma from './Optimallasdirma';
// import ProgressBar from './ProgressBar';
// import Yoxlama from './Yoxlama';
// import { useTranslation } from "react-i18next";

// const Vergi = () => {
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
//       <VergiOdenis />
//       <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
//         <h3 className="text-gray-700 font-medium mb-2">{t("pages.ai.taxAi.history.title")}</h3>
//         <p className="text-gray-400 text-sm mb-3">{t("pages.ai.taxAi.history.subtitle")}</p>
//         <Chart />
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
//         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
//           <h3 className="text-gray-700 font-medium mb-2">{t("pages.ai.taxAi.progress.title")}</h3>
//           <p className="text-gray-400 text-sm mb-3">{t("pages.ai.taxAi.progress.subtitle")}</p>
//           <ProgressBar />
//         </div>
//         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 ">
//           <h3 className="text-gray-700 font-medium mb-2">{t("pages.ai.taxAi.tasks.title")}</h3>
//           <p className="text-gray-400 text-sm mb-3">{t("pages.ai.taxAi.tasks.subtitle")}</p>
//           <Yoxlama />
//         </div>
//       </div>
//       <div className="bg-white border border-gray-300 rounded-xl shadow-sm mt-7 p-3 mb-6">
//         <Optimallasdirma />
//       </div>
//     </div>
//   )
// }

// export default Vergi

import React from "react";
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import VergiOdenis from "./VergiOdenis";
import Chart from "./Chart";
import Optimallasdirma from "./Optimallasdirma";
import ProgressBar from "./ProgressBar";
import Yoxlama from "./Yoxlama";
import { useTranslation } from "react-i18next";
import SettingsButton from "../../SettingsButton.jsx/SettingsButton";

const Vergi = () => {
  const { t } = useTranslation();

  const data = {
    stats: [
      {
        title: t("pages.ai.dashboard.stats.monthlyProfit"),
        value: "₼45,231",
        change: "+18.5%",
        positive: true,
        icon: <MdAttachMoney className="text-[#0466CB] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.salesVolume"),
        value: "₼128,456",
        change: "+12.3%",
        positive: true,
        icon: <BsCart3 className="text-[#023E7D] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.inventoryValue"),
        value: "₼67,890",
        change: "-5.2%",
        positive: false,
        icon: <BsBoxSeam className="text-[#33415C] text-[28px]" />,
      },
      {
        title: t("pages.ai.dashboard.stats.payrollFund"),
        value: "₼23,450",
        change: "+8.1%",
        positive: true,
        icon: <FiUsers className="text-[#0453A4] text-[28px]" />,
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 py-4 bg-[#FFFFFF] dark:bg-[#001233] transition-colors">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#5C677D] rounded-xl shadow-sm p-5 flex justify-between items-center transition-colors"
          >
            <div className="space-y-3">
              <h2 className="text-[#7D8597] dark:text-[#5C677D] text-sm font-medium">
                {s.title}
              </h2>
              <p className="text-[#001233] dark:text-[#FFFFFF] text-[20px] font-semibold">
                {s.value}
              </p>
              <div
                className={`flex items-center text-sm ${
                  s.positive ? "text-green-600" : "text-red-500"
                }`}
              >
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-[#F0F0F0] dark:bg-[#001845] p-3 rounded-full">
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      <VergiOdenis />

      <div className="bg-[#FFFFFF] dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-4 flex flex-col">
        <h3 className="text-[#023E7D] dark:text-[#0466CB] font-medium mb-2">
          {t("pages.ai.taxAi.history.title")}
        </h3>
        <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">
          {t("pages.ai.taxAi.history.subtitle")}
        </p>
        <Chart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <div className="bg-[#FFFFFF] dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-4 flex flex-col">
          <h3 className="text-[#023E7D] dark:text-[#0466CB] font-medium mb-2">
            {t("pages.ai.taxAi.progress.title")}
          </h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">
            {t("pages.ai.taxAi.progress.subtitle")}
          </p>
          <ProgressBar />
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-4">
          <h3 className="text-[#023E7D] dark:text-[#0466CB] font-medium mb-2">
            {t("pages.ai.taxAi.tasks.title")}
          </h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">
            {t("pages.ai.taxAi.tasks.subtitle")}
          </p>
          <Yoxlama />
        </div>
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#002855] border border-[#979DAC] dark:border-[#33415C] rounded-xl shadow-sm mt-7 p-3 mb-6">
        <Optimallasdirma />
      </div>
      <SettingsButton/>
    </div>
  );
};

export default Vergi;
