// import React, { useState } from 'react'
// import { BiExport } from "react-icons/bi";
// import { FiPlus } from "react-icons/fi";
// import Chart from './Chart';
// import Categories from './Categories';
// import Departmenler from './Departmenler';
// import { useTranslation } from 'react-i18next';
// import YeniBudceModal from './YeniBudceModal';

// const Budce = () => {
//   const [activeTab, setActiveTab] = useState("category")
//   const [isOpen, setIsOpen] = useState(false)

//   if (isOpen) {
//     document.body.style.overflow = "hidden"
//   } else {
//     document.body.style.overflow = "auto"
//   }
//   const { t } = useTranslation()
//   const cards = [
//     { key: 'planned', amount: '73,000 AZN', color: 'text-gray-900', descKey: 'plannedDesc' },
//     { key: 'actual', amount: '71,000 AZN', color: 'text-gray-900', descKey: 'actualDesc' },
//     { key: 'variance', amount: '2,000 AZN', color: 'text-green-500', descKey: 'varianceDesc' },
//     { key: 'utilization', amount: '97.3%', color: 'text-gray-900', progress: 97.3 },
//   ]

//   return (
//     <div className="container mx-auto px-2 py-4">
//       <div className='flex flex-col md:flex-row justify-between mb-5 sm:items-center'>
//         <div>
//           <h1 className="text-[24px] font-semibold">{t('pages.finance.budgeting.title')}</h1>
//           <p className="text-[#717182] text-[16px] mt-2 mb-5">{t('pages.finance.budgeting.subtitle')}</p>
//         </div>
//         <div className='flex gap-4'>
//           <button className='flex gap-3 text-[14px] items-center border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition'>
//             <BiExport /> {t('pages.finance.budgeting.report')}
//           </button>
//           <button onClick={() => setIsOpen(true)} className='flex gap-3 text-[14px] items-center border-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition'>
//             <FiPlus /> {t('pages.finance.budgeting.newBudget')}
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {cards.map((card, index) => (
//           <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
//             <p className="text-gray-600 font-medium mb-8">{t(`pages.finance.budgeting.cards.${card.key}.title`)}</p>

//             {card.key === 'utilization' ? (
//               <>
//                 <p className={`text-3xl mb-3 ${card.color}`}>{card.amount}</p>
//                 <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
//                   <div
//                     className="bg-black h-2 rounded-full transition-all duration-700"
//                     style={{ width: `${card.progress}%` }}
//                   ></div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
//                 <p className="text-sm text-gray-500 mt-1">{t(`pages.finance.budgeting.cards.${card.key}.desc`)}</p>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-10 p-4  flex flex-col">
//         <h3 className="text-gray-700 font-medium mb-2">{t('pages.finance.budgeting.yearly.title')}</h3>
//         <p className="text-gray-400 text-sm mb-3">{t('pages.finance.budgeting.yearly.subtitle')}</p>

//         <div className="flex-1">
//           <Chart />
//         </div>
//       </div>

//       <div className="inline-flex mt-10 overflow-hidden rounded-full bg-gray-200">
//         <button
//           onClick={() => setActiveTab("category")}
//           className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
//           ${activeTab === "category"
//               ? "bg-white text-black shadow-sm rounded-full"
//               : "text-gray-600 hover:text-black"}`}
//         >
//           {t('pages.finance.budgeting.tabs.categories')}
//         </button>
//         <button
//           onClick={() => setActiveTab("department")}
//           className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
//           ${activeTab === "department"
//               ? "bg-white text-black shadow-sm rounded-full"
//               : "text-gray-600 hover:text-black"}`}
//         >
//           {t('pages.finance.budgeting.tabs.departments')}
//         </button>
//       </div>

//       {activeTab === "category" && <Categories />}
//       {activeTab === "department" && <Departmenler />}


//       {isOpen && <YeniBudceModal onClose={() => setIsOpen(false)} />}
//     </div>
//   )
// }

// export default Budce


import React, { useState } from 'react'
import { BiExport } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import Chart from './Chart';
import Categories from './Categories';
import Departmenler from './Departmenler';
import { useTranslation } from 'react-i18next';
import YeniBudceModal from './YeniBudceModal';

const Budce = () => {
  const [activeTab, setActiveTab] = useState("category")
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
  const { t } = useTranslation()
  const cards = [
    { key: 'planned', amount: '73,000 AZN', color: 'text-gray-900 dark:text-gray-100', descKey: 'plannedDesc' },
    { key: 'actual', amount: '71,000 AZN', color: 'text-gray-900 dark:text-gray-100', descKey: 'actualDesc' },
    { key: 'variance', amount: '2,000 AZN', color: 'text-green-500', descKey: 'varianceDesc' },
    { key: 'utilization', amount: '97.3%', color: 'text-gray-900 dark:text-gray-100', progress: 97.3 },
  ]

  return (
    <div className="container mx-auto px-2 py-4 text-gray-900 dark:text-gray-100">
      <div className='flex flex-col md:flex-row justify-between mb-5 sm:items-center'>
        <div>
          <h1 className="text-[24px] font-semibold">{t('pages.finance.budgeting.title')}</h1>
          <p className="text-[#717182] dark:text-gray-400 text-[16px] mt-2 mb-5">{t('pages.finance.budgeting.subtitle')}</p>
        </div>
        <div className='flex gap-4'>
          <button className='flex gap-3 text-[14px] items-center border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition'>
            <BiExport /> {t('pages.finance.budgeting.report')}
          </button>
          <button onClick={() => setIsOpen(true)} className='flex gap-3 text-[14px] items-center border-2 bg-black text-white dark:bg-white dark:text-black rounded-lg px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition'>
            <FiPlus /> {t('pages.finance.budgeting.newBudget')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-5">
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-8">{t(`pages.finance.budgeting.cards.${card.key}.title`)}</p>

            {card.key === 'utilization' ? (
              <>
                <p className={`text-3xl mb-3 ${card.color}`}>{card.amount}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-black dark:bg-white h-2 rounded-full transition-all duration-700"
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <>
                <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t(`pages.finance.budgeting.cards.${card.key}.desc`)}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mt-10 p-4 flex flex-col">
        <h3 className="text-gray-700 dark:text-gray-200 font-medium mb-2">{t('pages.finance.budgeting.yearly.title')}</h3>
        <p className="text-gray-400 text-sm mb-3">{t('pages.finance.budgeting.yearly.subtitle')}</p>
        <div className="flex-1">
          <Chart />
        </div>
      </div>

      <div className="inline-flex mt-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <button
          onClick={() => setActiveTab("category")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
          ${activeTab === "category"
              ? "bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm rounded-full"
              : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
        >
          {t('pages.finance.budgeting.tabs.categories')}
        </button>
        <button
          onClick={() => setActiveTab("department")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
          ${activeTab === "department"
              ? "bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm rounded-full"
              : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"}`}
        >
          {t('pages.finance.budgeting.tabs.departments')}
        </button>
      </div>

      {activeTab === "category" && <Categories />}
      {activeTab === "department" && <Departmenler />}

      {isOpen && <YeniBudceModal onClose={() => setIsOpen(false)} />}
    </div>
  )
}

export default Budce
