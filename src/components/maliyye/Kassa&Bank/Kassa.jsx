import React, { useState } from 'react';
import { BiExport } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import KassaEmeliyyatlari from './KassaEmeliyyatlari';
import BankEmeliyyatlari from './BankEmeliyyatlari';
import KassaModal from './KassaModal';

const Kassa = () => {
  const [activeTab, setActiveTab] = useState("kassa");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const cards = [
    { title: "Kapital Bank - AZN", amount: "85,000 AZN", desc: "AZ21AIIB********", color: "text-gray-900" },
    { title: "Rabitəbank - AZN", amount: "37,000 AZN", desc: "AZ98RBTB********", color: "text-gray-900" },
    { title: "Kapital Bank - USD", amount: "37,000 AZN", desc: "AZ45AIIB********", color: "text-gray-900" }
  ];

  return (
    <div className="container mx-auto px-2 py-4">
      <div className='flex justify-between items-center'>
        <div>
          <h1 className="text-[24px] font-semibold">Kassa və Bank Əməliyyatları</h1>
          <p className="text-[#717182] text-[16px] mt-2 mb-5">Nağd və nağdsız pul əməliyyatlarının idarə edilməsi</p>
        </div>
        <div className='flex gap-4'>
          <button className='flex gap-3 text-[14px] items-center border-1 border-gray-300 rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-gray-100 transition'>
            <BiExport /> Bank çıxarışı yüklə
          </button>
           <button 
            onClick={() => setIsModalOpen(true)} 
            className='flex gap-3 text-[14px] items-center border-2 bg-black text-white rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-gray-800 transition'>
            <FiPlus /> Yeni Əməliyyat
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 font-medium">{card.title}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
            <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
          </div>
        ))}
      </div>

      <div className="inline-flex mt-5 mb-5 overflow-hidden rounded-full bg-gray-200">
        <button
          onClick={() => setActiveTab("kassa")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
            ${activeTab === "kassa" ? "bg-white text-black shadow-sm rounded-full" : "text-gray-600 hover:text-black"}`}>
          Kassa Əməliyyatları
        </button>
        <button
          onClick={() => setActiveTab("bank")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
            ${activeTab === "bank" ? "bg-white text-black shadow-sm rounded-full" : "text-gray-600 hover:text-black"}`}>
          Bank Əməliyyatları
        </button>
      </div>

      {activeTab === "kassa" && <KassaEmeliyyatlari />}
      {activeTab === "bank" && <BankEmeliyyatlari />}

      {isModalOpen && <KassaModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Kassa;
