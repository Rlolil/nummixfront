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
    { key: 'planned', amount: '73,000 AZN', color: 'text-[#001233] dark:text-white', descKey: 'plannedDesc' },
    { key: 'actual', amount: '71,000 AZN', color: 'text-[#001233] dark:text-white', descKey: 'actualDesc' },
    { key: 'variance', amount: '2,000 AZN', color: 'text-[#0466CB] dark:text-[#0466CB]', descKey: 'varianceDesc' },
    { key: 'utilization', amount: '97.3%', color: 'text-[#001233] dark:text-white', progress: 97.3 },
  ]

  return (
    <div className="container mx-auto text-[#001233] dark:text-white">

      <div className='flex flex-col md:flex-row justify-between mb-5 sm:items-center'>
        <div>
          <h1 className="text-[24px] font-semibold">{t('pages.finance.budgeting.title')}</h1>
          <p className="text-[#7D8597] dark:text-[#7D8597] text-[16px] mt-2 mb-5">
            {t('pages.finance.budgeting.subtitle')}
          </p>
        </div>

        <div className='flex gap-4'>
          <button className='flex gap-3 text-[14px] items-center border border-[#33415C] dark:border-[#33415C] rounded-lg px-4 py-2
            hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/20 transition'>
            <BiExport /> {t('pages.finance.budgeting.report')}
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className='flex gap-3 text-[14px] items-center border-2 bg-[#0466CB] text-white dark:bg-[#0453A4] dark:text-white rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-[#0453A4] dark:hover:bg-[#0466CB] transition'>
            <FiPlus /> {t('pages.finance.budgeting.newBudget')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm p-5"
          >
            <p className="text-[#5C677D] dark:text-[#7D8597] font-medium mb-8">
              {t(`pages.finance.budgeting.cards.${card.key}.title`)}
            </p>

            {card.key === 'utilization' ? (
              <>
                <p className={`text-3xl mb-3 ${card.color}`}>{card.amount}</p>

                <div className="w-full bg-[#979DAC]/40 dark:bg-[#5C677D] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#0466CB] dark:bg-white h-2 rounded-full transition-all duration-700"
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <>
                <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
                <p className="text-sm text-[#7D8597] dark:text-[#979DAC] mt-1">
                  {t(`pages.finance.budgeting.cards.${card.key}.desc`)}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC]  rounded-xl  shadow-sm mt-10 p-4 flex flex-col">
        <h3 className="text-[#001233] dark:text-white font-medium mb-2">
          {t('pages.finance.budgeting.yearly.title')}
        </h3>
        <p className="text-[#7D8597] text-sm mb-3">{t('pages.finance.budgeting.yearly.subtitle')}</p>

        <div className="flex-1">
          <Chart />
        </div>
      </div>

      <div className="inline-flex mt-10 overflow-hidden rounded-full bg-[#979DAC]/40 dark:bg-[#5C677D]">

        <button
          onClick={() => setActiveTab("category")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 rounded-full
            ${activeTab === "category"
              ? "bg-[#FFFFFF] dark:bg-[#001845] text-[#0466CB] dark:text-[#FFFFFF] shadow-sm" : "text-[#001233] dark:text-[#FFFFFF] hover:text-[#0466CB] dark:hover:text-[#0466CB]"}`}
        >
          {t('pages.finance.budgeting.tabs.categories')}
        </button>

        <button
          onClick={() => setActiveTab("department")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 rounded-full
            ${activeTab === "department"
              ? "bg-[#FFFFFF] dark:bg-[#001845] text-[#0466CB] dark:text-[#FFFFFF] shadow-sm" : "text-[#001233] dark:text-[#FFFFFF] hover:text-[#0466CB] dark:hover:text-[#0466CB]"}`}
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
