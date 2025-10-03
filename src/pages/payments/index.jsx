import React from 'react'
import Headers from './headers'
import Cards from './cards'
import Tabs from './tabs'
import { MdArrowOutward } from 'react-icons/md';
import { LuArrowDownLeft, LuCreditCard } from 'react-icons/lu';
import { GoClock } from 'react-icons/go';
import { useTranslation } from 'react-i18next';


export default function Payments() {
  const {t} = useTranslation();
  const cardsData = [
    {
      title: t('Total_Payments'),
      numberdes: "0",
      description: t('this_month'),
      icon: <MdArrowOutward />,
    },
    {
      title: t('Received'),
      numberdes: "0",
      description: t('this_month'),
      icon: <LuArrowDownLeft />,
    },
    {
      title: t('Pending'),
      numberdes: "0",
      description: t('Awaiting_processing'),
      icon: <GoClock />,
    },
    {
      title: t('Monthly_Total'),
      numberdes: "₼ 0",
      description: t('Outgoing_payments'),
      icon: <LuCreditCard />,
    },
  ];
  return (
    <main className='sm:ml-[6.25rem]'>
      <div className='container px-4 mx-auto'>
        <Headers />
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


