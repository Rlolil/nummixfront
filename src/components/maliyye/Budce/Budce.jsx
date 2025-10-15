import React, { useState } from 'react'
import { BiExport } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import Chart from './Chart';
import Categories from './Categories';
import Departmenler from './Departmenler';

const Budce = () => {
  const [activeTab, setActiveTab] = useState("category")
  const cards = [
    { title: "Plan (Bu ay)", amount: "73,000 AZN", desc: "Planlaşdırılmış xərclər", color: "text-gray-900" },
    { title: "Faktiki", amount: "71,000 AZN", desc: "Real xərclər", color: "text-gray-900" },
    { title: "Fərq", amount: "2,000 AZN", desc: "-2.7% qənaət", color: "text-green-500" },
    { title: "İstifadə dərəcəsi", amount: "97.3%", desc: "", color: "text-gray-900", progress: 97.3 },
  ]

  return (
    <div className="container mx-auto px-2 py-4">
      <div className='flex justify-between items-center'>
        <div>
          <h1 className="text-[24px] font-semibold">Büdcə Planlaması və Nəzarət</h1>
          <p className="text-[#717182] text-[16px] mt-2 mb-5">
            Gəlir və xərclərin planlaşdırılması və faktiki göstəricilərlə müqayisəsi
          </p>
        </div>
        <div className='flex gap-4'>
          <button className='flex gap-3 text-[14px] items-center border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition'>
            <BiExport /> Hesabat
          </button>
          <button className='flex gap-3 text-[14px] items-center border-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition'>
            <FiPlus /> Yeni büdcə
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <p className="text-gray-600 font-medium mb-8">{card.title}</p>

            {card.title === "İstifadə dərəcəsi" ? (
              <>
                <p className={`text-3xl mb-3 ${card.color}`}>{card.amount}</p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-black h-2 rounded-full transition-all duration-700"
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <>
                <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
                <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-10 p-4  flex flex-col">
        <h3 className="text-gray-700 font-medium mb-2">İllik Büdcə Performansı</h3>
        <p className="text-gray-400 text-sm mb-3">Planlaşdırılan və faktiki xərclərin müqayisəsi</p>

        <div className="flex-1">
          <Chart />
        </div>
      </div>

      <div className="inline-flex mt-10 overflow-hidden rounded-full bg-gray-200">
        <button
          onClick={() => setActiveTab("category")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
          ${activeTab === "category"
              ? "bg-white text-black shadow-sm rounded-full"
              : "text-gray-600 hover:text-black"}`}
        >
          Kateqoriyalar
        </button>
        <button
          onClick={() => setActiveTab("department")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
          ${activeTab === "department"
              ? "bg-white text-black shadow-sm rounded-full"
              : "text-gray-600 hover:text-black"}`}
        >
          Departmentlər
        </button>
      </div>

      {activeTab === "category" && <Categories />}
      {activeTab === "department" && <Departmenler/>}

      

    </div>
  )
}

export default Budce
