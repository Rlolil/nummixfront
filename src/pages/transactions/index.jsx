import React from 'react'
import Headers from './headers'
import Cards from './cards'
import Tabs from './tabs'
import { MdArrowOutward } from 'react-icons/md';
import { LuArrowDownLeft, LuCreditCard } from 'react-icons/lu';
import { GoClock } from 'react-icons/go';
import TransactionsHeaders from './headers';

export default function Transactions() {
  const cardsData = [
    {
      title: "Total Payments",
      numberdes: "0",
      description: "This month",
      icon: <MdArrowOutward />,
    },
    {
      title: "Recevied",
      numberdes: "0",
      description: "This month",
      icon: <LuArrowDownLeft />,
    },
    {
      title: "Pending",
      numberdes: "0",
      description: "Awaiting processing",
      icon: <GoClock />,
    },
    {
      title: "Monthly Total",
      numberdes: "₼ 0",
      description: "Outgoing payments",
      icon: <LuCreditCard />,
    },
  ];
  return (
    <main className='ml-[100px]'>
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


