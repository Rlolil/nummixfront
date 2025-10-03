import React from 'react'
import Headers from './headers'
import Cards from './cards'
import Tabs from './tabs'
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import TransactionsHeaders from './headers';
import { useTranslation } from 'react-i18next';


export default function Transactions() {
  const { t } = useTranslation();
  const cardsData = [
    {
      title: t("Total_Transactions"),
      numberdes: "0",
      description: t("All_time"),
      icon: <HiMiniArrowsUpDown />,
    },
    {
      title: t("Total_Income"),
      numberdes: "0",
      description: `0 ${t("transactions")}`,
      icon:<HiMiniArrowTrendingUp />,

    },
    {
      title: t("Total_Expenses"),
      numberdes: "₼ 0",
      description: `0 ${t("transactions")}`,
      icon: <HiMiniArrowTrendingDown />
,
    },
    {
      title: t("Net_Balance"),
      numberdes: "₼ 0",
      description: `${t("Income")} - ${t("Expenses")}`,
      icon: <HiMiniArrowsUpDown />,

    },
  ];
  return (
    <main className='sm:ml-[6.25rem]'>
      <div className='container px-4 mx-auto'>
        <TransactionsHeaders />
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3 lg:gap-3 overflow-hidden">
          {cardsData.map((data, index) => (
            <Cards
              key={index}
              title={data.title}
              icons={data.icon}
              numberdes={data.numberdes}
              description={data.description}
            />
          ))}
        </div>
        <Tabs />
      </div>
    </main>
  ) 
}


