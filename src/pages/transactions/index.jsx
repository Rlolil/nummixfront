import React from 'react'
import Headers from './headers'
import Cards from './cards'
import Tabs from './tabs'
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import TransactionsHeaders from './headers';


export default function Transactions() {
  const cardsData = [
    {
      title: "Total Transactions",
      numberdes: "0",
      description: "All time",
      icon: <HiMiniArrowsUpDown />,
    },
    {
      title: "Total Income",
      numberdes: "0",
      description: "0 transactions",
      icon:<HiMiniArrowTrendingUp />,

    },
    {
      title: "Total Expenses",
      numberdes: "₼ 0",
      description: "0 transactions",
      icon: <HiMiniArrowTrendingDown />
,
    },
    {
      title: "Net flow",
      numberdes: "₼ 0",
      description: "Income - Expenses",
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


