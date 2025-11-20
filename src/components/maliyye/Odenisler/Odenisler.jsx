// import React, { useState } from "react";
// import { BiExport } from "react-icons/bi";
// import { FiPlus } from "react-icons/fi";
// import OdenisTab from "./OdenisTab";
// import DaxilolmaTab from "./DaxilolmaTab";
// import { useTranslation } from "react-i18next";
// import NewPlanModal from "./NewPlanModal";

// const Odenisler = () => {
//   const [activeTab, setActiveTab] = useState("odenis");
//   const [isOpen, setIsOpen] = useState(false)
//   const { t } = useTranslation();


//   const cards = [
//     { key: "payable", amount: "26,800 AZN", color: "text-red-500" },
//     { key: "receivable", amount: "45,500 AZN", color: "text-green-500" },
//     { key: "overduePayments", amount: "1", color: "text-gray-900" },
//     { key: "overdueReceivables", amount: "1", color: "text-gray-900" },
//   ];

//   const schedule = [
//     {
//       date: "2025-10-08",
//       type: "receipt",
//       name: "XYZ Trading - Gecikmiş",
//       urgent: true,
//       amount: "+8,500 AZN",
//       color: "text-green-600",
//     },
//     {
//       date: "2025-10-10",
//       type: "receipt",
//       name: "ABC Corporation",
//       amount: "+15,000 AZN",
//       color: "text-green-600",
//     },
//     {
//       date: "2025-10-12",
//       type: "payment",
//       name: "OfficeWorld",
//       amount: "-2,300 AZN",
//       color: "text-red-600",
//     },
//     {
//       date: "2025-10-14",
//       type: "receipt",
//       name: "Tech Solutions",
//       amount: "+22,000 AZN",
//       color: "text-green-600",
//     },
//     {
//       date: "2025-10-15",
//       type: "payment",
//       name: "Marketing Pro",
//       amount: "-8,000 AZN",
//       color: "text-red-600",
//     },
//   ];

//   if(isOpen){
//     document.body.style.overflow = "hidden"
//   }else{
//     document.body.style.overflow = "auto"
//   }
//   return (
//     <div className="container mx-auto px-2 py-4">
//       <div className="flex flex-col md:flex-row justify-between mb-4 sm:items-center">
//         <div>
//           <h1 className="text-[24px] font-semibold">{t('pages.finance.payments.title')}</h1>
//           <p className="text-[#717182] text-[16px] mt-2 mb-5">{t('pages.finance.payments.subtitle')}</p>
//         </div>
//         <button onClick={() => setIsOpen(true) } className="flex gap-3 text-[14px] items-center border-2 bg-black text-white rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-gray-800 transition">
//           <FiPlus /> {t('pages.finance.payments.newPlan')}
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {cards.map((card, index) => (
//           <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
//             <div className="flex justify-between items-center mb-8">
//               <p className="text-gray-600 font-medium">{t(`pages.finance.payments.cards.${card.key}.title`)}</p>
//             </div>
//             <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
//             <p className="text-sm text-gray-500 mt-1">{t(`pages.finance.payments.cards.${card.key}.desc`)}</p>
//           </div>
//         ))}
//       </div>

//       <div className="inline-flex p-1 mt-6 mb-6 overflow-hidden rounded-full bg-gray-200">
//         <button
//           onClick={() => setActiveTab("odenis")}
//           className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
//           ${activeTab === "odenis"
//               ? "bg-white text-black shadow-sm rounded-full"
//               : "text-gray-600 hover:text-black"}`}
//         >
//           {t('pages.finance.payments.tabs.outflows')}
//         </button>
//         <button
//           onClick={() => setActiveTab("daxilolma")}
//           className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
//           ${activeTab === "daxilolma"
//               ? "bg-white text-black shadow-sm rounded-full"
//               : "text-gray-600 hover:text-black"}`}
//         >
//           {t('pages.finance.payments.tabs.inflows')}
//         </button>
//       </div>

//       {activeTab === "odenis" && <OdenisTab />}
//       {activeTab === "daxilolma" && <DaxilolmaTab />}

//       <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
//         <h2 className="text-lg font-semibold mb-1">{t('pages.finance.payments.schedule.title')}</h2>
//         <p className="text-gray-500 text-sm mb-5">{t('pages.finance.payments.schedule.subtitle')}</p>

//         <div className="flex flex-col md:divide-y md:divide-gray-300">
//           {schedule.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col md:flex-row md:justify-between border-b border-gray-300 items-start md:items-center py-3 text-[15px] gap-2"
//             >
//               <div className="flex flex-wrap items-center gap-2 md:gap-4">
//                 <span className="text-gray-500 w-[90px]">{item.date}</span>
//                 <span
//                   className={`px-3 py-1 text-xs font-medium rounded-md ${item.type === "payment"
//                     ? "bg-gray-100 text-gray-800"
//                     : "bg-black text-white"
//                     }`}
//                 >
//                   {item.type === 'payment' ? t('pages.finance.payments.types.payment') : t('pages.finance.payments.types.receipt')}
//                 </span>
//                 <span className="text-gray-800 font-medium">{item.name}</span>
//                 {item.urgent && (
//                   <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap">
//                     {t('pages.finance.payments.schedule.urgent')}
//                   </span>
//                 )}
//               </div>
//               <span className={`font-semibold mt-2 md:mt-0 ${item.color}`}>
//                 {item.amount}
//               </span>
//             </div>

//           ))}
//         </div>

//       </div>
//       {isOpen && <NewPlanModal onClose={() => setIsOpen(false)} />}
//     </div>
//   );
// };

// export default Odenisler;


import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import OdenisTab from "./OdenisTab";
import DaxilolmaTab from "./DaxilolmaTab";
import { useTranslation } from "react-i18next";
import NewPlanModal from "./NewPlanModal";
import { paymentsSchedule } from "../../../services";

const Odenisler = () => {
  const [activeTab, setActiveTab] = useState("odenis");
  const [isOpen, setIsOpen] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const { t } = useTranslation();

  const cards = [
    { key: "payable", amount: "26,800 AZN", color: "text-red-600" },
    { key: "receivable", amount: "45,500 AZN", color: "text-green-600" },
    { key: "overduePayments", amount: "1", color: "text-[#001233] dark:text-white" },
    { key: "overdueReceivables", amount: "1", color: "text-[#001233] dark:text-white" },
  ];

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const data = await paymentsSchedule();
        setSchedule(data);
      } catch (err) {
        console.error("Schedule loading error:", err);
      }
    };
    fetchSchedule();
  }, []);

  if (isOpen) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return (
    <div className="container mx-auto text-[#001233] dark:text-white">
      <div className="flex flex-col md:flex-row justify-between mb-4 sm:items-center">
        <div>
          <h1 className="text-[24px] font-semibold">{t('pages.finance.payments.title')}</h1>
          <p className="text-[#5C677D] dark:text-[#7D8597] text-[16px] mt-2 mb-5">
            {t('pages.finance.payments.subtitle')}
          </p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex gap-3 text-[14px] items-center border-2 bg-[#0466CB] text-white dark:bg-[#0453A4] dark:text-white rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-[#0453A4] dark:hover:bg-[#0466CB] transition"
        >
          <FiPlus /> {t('pages.finance.payments.newPlan')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#33415C] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-5"
          >
            <p className="text-[#5C677D] dark:text-white font-medium mb-8">
              {t(`pages.finance.payments.cards.${card.key}.title`)}
            </p>
            <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
            <p className="text-sm text-[#7D8597] dark:text-[#7D8597] mt-1">
              {t(`pages.finance.payments.cards.${card.key}.desc`)}
            </p>
          </div>
        ))}
      </div>

      <div className="inline-flex mt-5 mb-5 p-1 overflow-hidden rounded-full bg-[#979DAC] dark:bg-[#33415C]">
        <button
          onClick={() => setActiveTab("odenis")}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
      ${activeTab === "odenis"
              ? "bg-[#FFFFFF] dark:bg-[#001845] text-[#0466CB] dark:text-[#FFFFFF] shadow-sm"
              : "text-[#001233] dark:text-[#FFFFFF] hover:text-[#0466CB] dark:hover:text-[#0466CB]"
            }`}
        >
          {t('pages.finance.payments.tabs.outflows')}
        </button>
        <button
          onClick={() => setActiveTab("daxilolma")}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
      ${activeTab === "daxilolma"
              ? "bg-[#FFFFFF] dark:bg-[#001845] text-[#0466CB] dark:text-[#FFFFFF] shadow-sm"
              : "text-[#001233] dark:text-[#FFFFFF] hover:text-[#0466CB] dark:hover:text-[#0466CB]"
            }`}
        >
          {t('pages.finance.payments.tabs.inflows')}
        </button>
      </div>

      {activeTab === "odenis" && <OdenisTab />}
      {activeTab === "daxilolma" && <DaxilolmaTab />}

      <div className="mt-10 bg-white dark:bg-[#002855] border border-[#979DAC] dark:border-[#33415C] rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-1 text-[#001233] dark:text-white">
          {t('pages.finance.payments.schedule.title')}
        </h2>
        <p className="text-[#5C677D] dark:text-[#7D8597] text-sm mb-5">
          {t('pages.finance.payments.schedule.subtitle')}
        </p>

        <div className="flex flex-col md:divide-y md:divide-[#979DAC] dark:md:divide-[#33415C]">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:justify-between border-b border-[#979DAC] dark:border-[#33415C] items-start md:items-center py-3 text-[15px] gap-2"
            >
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="text-[#5C677D] dark:text-[#7D8597] w-[90px]">{item.date}</span>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-md ${item.type === "payment"
                      ? "bg-[#979DAC] dark:bg-[#001845] text-[#001233] dark:text-white"
                      : "bg-[#0466CB] dark:bg-[#0453A4] text-white"
                    }`}
                >
                  {item.type === 'payment'
                    ? t('pages.finance.payments.types.payment')
                    : t('pages.finance.payments.types.receipt')}
                </span>
                <span className="text-[#001233] dark:text-white font-medium">{item.name}</span>
                {item.urgent && (
                  <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap">
                    {t('pages.finance.payments.schedule.urgent')}
                  </span>
                )}
              </div>
              <span className={`font-semibold mt-2 md:mt-0 ${item.color}`}>{item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {isOpen && <NewPlanModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Odenisler;
