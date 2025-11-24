// import React, { useState } from 'react';
// import { BiExport } from "react-icons/bi";
// import { FiPlus } from "react-icons/fi";
// import KassaEmeliyyatlari from './KassaEmeliyyatlari';
// import BankEmeliyyatlari from './BankEmeliyyatlari';
// import KassaModal from './KassaModal';
// import { useTranslation } from "react-i18next";

// const Kassa = () => {
//   const [activeTab, setActiveTab] = useState("kassa");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { t } = useTranslation();


//   const cards = [
//     { title: "Kapital Bank - AZN", amount: "85,000 AZN", desc: "AZ21AIIB********", color: "text-gray-900" },
//     { title: "Rabitəbank - AZN", amount: "37,000 AZN", desc: "AZ98RBTB********", color: "text-gray-900" },
//     { title: "Kapital Bank - USD", amount: "37,000 AZN", desc: "AZ45AIIB********", color: "text-gray-900" }
//   ];

//   if(isModalOpen){
//     document.body.style.overflow = "hidden"
//   }else{
//     document.body.style.overflow = "auto"
//   }

//   return (
//     <div className="container mx-auto px-2 py-4">
//       <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
//         <div>
//           <h1 className="text-[24px] font-semibold">{t('pages.finance.cashBank.title')}</h1>
//           <p className="text-[#717182] text-[16px] mt-2 mb-5">{t('pages.finance.cashBank.subtitle')}</p>
//         </div>
//         <div className='flex flex-col mb-3 sm:flex-row gap-4'>
//           <button className='flex gap-3 text-[14px] items-center border-1 border-gray-300 rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-gray-100 transition'>
//             <BiExport /> {t('pages.finance.cashBank.uploadStatement')}
//           </button>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className='flex gap-3 text-[14px] items-center border-2 bg-black text-white rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-gray-800 transition'>
//             <FiPlus /> {t('pages.finance.cashBank.newOperation')}
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {cards.map((card, index) => (
//           <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
//             <div className="flex justify-between items-center">
//               <p className="text-gray-600 font-medium">{card.title}</p>
//             </div>
//             <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
//             <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
//           </div>
//         ))}
//       </div>

//       <div className="inline-flex mt-5 mb-5 p-1 overflow-hidden rounded-full bg-gray-200">
//         <button
//           onClick={() => setActiveTab("kassa")}
//           className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
//             ${activeTab === "kassa" ? "bg-white text-black shadow-sm rounded-full" : "text-gray-600 hover:text-black"}`}>
//           {t('pages.finance.cashBank.tabs.cash')}
//         </button>
//         <button
//           onClick={() => setActiveTab("bank")}
//           className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
//             ${activeTab === "bank" ? "bg-white text-black shadow-sm rounded-full" : "text-gray-600 hover:text-black"}`}>
//           {t('pages.finance.cashBank.tabs.bank')}
//         </button>
//       </div>
//       {/* <div className="flex mt-5 mb-5 gap-1 sm:gap-2 bg-gray-200 p-1 rounded-full justify-center">
//         <button
//           onClick={() => setActiveTab("kassa")}
//           className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
//       ${activeTab === "kassa" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"}`}
//         >
//           Kassa Əməliyyatları
//         </button>
//         <button
//           onClick={() => setActiveTab("bank")}
//           className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
//       ${activeTab === "bank" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"}`}
//         >
//           Bank Əməliyyatları
//         </button>
//       </div> */}

//       {activeTab === "kassa" && <KassaEmeliyyatlari />}
//       {activeTab === "bank" && <BankEmeliyyatlari />}

//       {isModalOpen && <KassaModal onClose={() => setIsModalOpen(false)} />}
//     </div>
//   );
// }

// export default Kassa;


import React, { useState, useEffect } from 'react';
import { BiExport } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import KassaEmeliyyatlari from './KassaEmeliyyatlari';
import BankEmeliyyatlari from './BankEmeliyyatlari';
import KassaModal from './KassaModal';
import { useTranslation } from "react-i18next";
import { getOperations, createOperation, updateOperation } from "../../../services/index";

const Kassa = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("kassa");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kassaData, setKassaData] = useState([]);
  const [bankData, setBankData] = useState([]);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOperations();
        console.log("gelen data:", data);
                
        setKassaData(data.filter(item => item.type === "cash"));
        setBankData(data.filter(item => item.type === "bank"));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const addOperation = async (data) => {    
    try {
      const savedData = await createOperation(data);      
      if (data.type === "cash") setKassaData(prev => [...prev, savedData]);
      else setBankData(prev => [...prev, savedData]);
    } catch (err) {
      console.error(err);
      alert("Əməliyyat əlavə oluna bilmədi!");
    }
  };

  const updateOperationHandler = async (updatedData) => {
    if (!editingData) return;
    try {
      const updated = await updateOperation(editingData._id, updatedData);
      if (editingData.operationType === "Kassa" || editingData.operationType === "cash") {
        setKassaData(kassaData.map(item => item._id === editingData._id ? updated : item));
      } else {
        setBankData(bankData.map(item => item._id === editingData._id ? updated : item));
      }
      setEditingData(null);
    } catch (err) {
      console.error(err);
      alert("Əməliyyat yenilənə bilmədi!");
    }
  };

  const cards = [
    { title: "Kapital Bank - AZN", amount: "85,000 AZN", desc: "AZ21AIIB********" },
    { title: "Rabitəbank - AZN", amount: "37,000 AZN", desc: "AZ98RBTB********" },
    { title: "Kapital Bank - USD", amount: "37,000 AZN", desc: "AZ45AIIB********" }
  ];

  return (
    <div className="container mx-auto bg-[#FFFFFF] dark:bg-[#001233] min-h-screen p-5">

      <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-5'>
        <div>
          <h1 className="text-[24px] font-semibold text-[#023E7D] dark:text-[#FFFFFF]">{t('pages.finance.cashBank.title')}</h1>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-[16px] mt-2">{t('pages.finance.cashBank.subtitle')}</p>
        </div>
        <div className='flex flex-col mb-3 sm:flex-row gap-4'>
          <button className='flex gap-3 text-[14px] items-center border border-[#979DAC] dark:border-[#33415C] rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-[#0453A4] hover:text-[#FFFFFF] transition'>
            <BiExport className="text-[#001233] dark:text-[#FFFFFF]" /> {t('pages.finance.cashBank.uploadStatement')}
          </button>
          <button
            onClick={() => { setEditingData(null); setIsModalOpen(true); }}
            className='flex gap-3 text-[14px] items-center border-2 bg-[#0466CB] text-[#FFFFFF] rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-[#0453A4] transition'>
            <FiPlus /> {t('pages.finance.cashBank.newOperation')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl border border-[#979DAC] dark:border-[#33415C] shadow-sm p-5">
            <div className="flex justify-between items-center">
              <p className="text-[#001233] dark:text-[#FFFFFF] font-medium">{card.title}</p>
            </div>
            <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mt-1">{card.desc}</p>
            <p className="text-3xl mt-5 text-[#023E7D] dark:text-[#0466CB]">{card.amount}</p>
          </div>
        ))}
      </div>

      <div className="inline-flex mt-5 mb-5 p-1 overflow-hidden rounded-full bg-[#979DAC] dark:bg-[#33415C]">
        <button
          onClick={() => setActiveTab("kassa")}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
            ${activeTab === "kassa" ? "bg-[#FFFFFF] dark:bg-[#001845] text-[#0466CB] dark:text-[#FFFFFF] shadow-sm" : "text-[#001233] dark:text-[#FFFFFF] hover:text-[#0466CB] dark:hover:text-[#0466CB]"}`}>
          {t('pages.finance.cashBank.tabs.cash')}
        </button>
        <button
          onClick={() => setActiveTab("bank")}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
            ${activeTab === "bank" ? "bg-[#FFFFFF] dark:bg-[#001845] text-[#0466CB] dark:text-[#FFFFFF] shadow-sm" : "text-[#001233] dark:text-[#FFFFFF] hover:text-[#0466CB] dark:hover:text-[#0466CB]"}`}>
          {t('pages.finance.cashBank.tabs.bank')}
        </button>
      </div>

      {activeTab === "kassa" && (
        <KassaEmeliyyatlari
          kassaData={kassaData}
          setKassaData={setKassaData}
          setEditingData={setEditingData}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {activeTab === "bank" && (
        <BankEmeliyyatlari
          bankData={bankData}
          setBankData={setBankData}
          setEditingData={setEditingData}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {isModalOpen && (
        <KassaModal
          onClose={() => setIsModalOpen(false)}
          onSave={addOperation}
          onUpdate={updateOperationHandler}
          editData={editingData}
        />
      )}

    </div>
  );
};

export default Kassa;