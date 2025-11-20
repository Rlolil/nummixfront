// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { FaPencil } from "react-icons/fa6";
// import { FaRegTrashAlt } from "react-icons/fa";

// const KassaEmeliyyatlari = () => {
//   const { t } = useTranslation();

//   const kassaData = [
//     { date: "2025-10-08", type: "Daxilolma", cat: "Satış", desc: "Satışdan nağd daxilolma", amount: "+5,000 AZN" },
//     { date: "2025-10-07", type: "Çıxış", cat: "Ofis xərcləri", desc: "Ofis ləvazimatları", amount: "-1,200 AZN" },
//     { date: "2025-10-06", type: "Çıxış", cat: "Logistika", desc: "Kuryer xidmətləri", amount: "-800 AZN" },
//     { date: "2025-10-05", type: "Daxilolma", cat: "Satış", desc: "Müştəri ödənişi", amount: "+3,500 AZN" },
//   ];

//   return (
//     <div className="rounded-xl">
//       <div className='block md:hidden text-[16px] mb-5'>
//         <h1 className='font-semibold text-[#023E7D] dark:text-[#FFFFFF]'>{t('pages.finance.cashBank.tabs.cash')}</h1>
//         <h1 className='text-[#7D8597] dark:text-[#5C677D]'>{t('pages.finance.cashBank.cash.subtitle')}</h1>
//       </div>

//       <div className="hidden md:block p-5 overflow-x-auto border border-[#979DAC] dark:border-[#33415C] rounded-xl bg-[#FFFFFF] dark:bg-[#002855]">
//         <div className='hidden md:block text-[16px] mb-5'>
//           <h1 className='font-semibold text-[#023E7D] dark:text-[#FFFFFF]'>{t('pages.finance.cashBank.tabs.cash')}</h1>
//           <h1 className='text-[#7D8597] dark:text-[#5C677D]'>{t('pages.finance.cashBank.cash.subtitle')}</h1>
//         </div>
//         <table className="w-full text-left border-collapse text-[#001233] dark:text-[#FFFFFF]">
//           <thead>
//             <tr className="text-sm text-[#5C677D] dark:text-[#7D8597]">
//               <th className="py-3">{t('pages.finance.common.date')}</th>
//               <th className="py-3">{t('pages.finance.common.type')}</th>
//               <th className="py-3">{t('pages.finance.common.category')}</th>
//               <th className="py-3">{t('pages.finance.common.description')}</th>
//               <th className="py-3 text-right">{t('pages.finance.common.amount')}</th>
//             </tr>
//           </thead>
//           <tbody className="text-sm">
//             {kassaData.map((item, i) => (
//               <tr key={i} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/20 transition">
//                 <td className="py-3">{item.date}</td>
//                 <td className="py-3">
//                   <span className={`px-3 py-1 rounded-md text-xs font-medium ${item.type === "Daxilolma"
//                       ? "text-[#FFFFFF] bg-[#0466CB] dark:bg-[#FFFFFF] dark:text-[#001233]"
//                       : "bg-[#979DAC] text-[#001233] dark:bg-[#001845] dark:text-[#FFFFFF]"
//                     }`}>
//                     {item.type === 'Daxilolma' ? t('pages.finance.common.inflow') : t('pages.finance.common.outflow')}
//                   </span>
//                 </td>
//                 <td className="py-3">{item.cat}</td>
//                 <td className="py-3">{item.desc}</td>
//                 <td className={`py-3 text-right font-medium ${item.amount.startsWith('+') ? "text-[#0466CB]" : "text-[#D00000]"}`}>
//                   {item.amount}
//                 </td>
//                 <td>
//                   <FaPencil className="ml-2" />
//                 </td>
//                 <td>
//                   <FaRegTrashAlt />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="md:hidden flex flex-col gap-4">
//         {kassaData.map((item, i) => (
//           <div key={i} className="border border-[#979DAC] dark:border-[#33415C] rounded-xl p-4 shadow-sm bg-[#FFFFFF] dark:bg-[#002855]">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t('pages.finance.common.date')}:</span>
//               <span className="font-medium text-[#001233] dark:text-[#FFFFFF]">{item.date}</span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t('pages.finance.common.type')}:</span>
//               <span className={`px-2 py-1 rounded-md text-xs font-medium ${item.type === "Daxilolma"
//                   ? "text-[#FFFFFF] bg-[#0466CB] dark:bg-[#FFFFFF] dark:text-[#001233]"
//                   : "bg-[#979DAC] text-[#001233] dark:bg-[#001845] dark:text-[#FFFFFF]"
//                 }`}>
//                 {item.type === 'Daxilolma' ? t('pages.finance.common.inflow') : t('pages.finance.common.outflow')}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t('pages.finance.common.category')}:</span>
//               <span className="text-[#001233] dark:text-[#FFFFFF]">{item.cat}</span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t('pages.finance.common.description')}:</span>
//               <span className="text-[#001233] dark:text-[#FFFFFF]">{item.desc}</span>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t('pages.finance.common.amount')}:</span>
//               <span className={`font-medium ${item.amount.startsWith('+') ? "text-[#0466CB]" : "text-[#D00000]"}`}>{item.amount}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KassaEmeliyyatlari;


import React from "react";
import { useTranslation } from "react-i18next";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteOperation } from "../../../services/index";

const KassaEmeliyyatlari = ({ kassaData, setKassaData, setEditingData, setIsModalOpen }) => {
  const { t } = useTranslation();

  const deleteItem = async (i) => {
    const item = kassaData[i];
    try {
      await deleteOperation(item.id);
      setKassaData(prev => prev.filter(it => it.id !== item.id));
    } catch (err) {
      console.error(err);
      alert("Əməliyyat silinə bilmədi!");
    }
  };

  const editItem = (i) => {
    setEditingData(kassaData[i]);
    setIsModalOpen(true);
  };

  return (
    <div className="rounded-xl">
      <div className="hidden md:block p-5 overflow-x-auto border border-[#979DAC] dark:border-[#33415C] rounded-xl bg-[#FFFFFF] dark:bg-[#002855]">
        <table className="w-full text-left border-collapse text-[#001233] dark:text-[#FFFFFF]">
          <thead>
            <tr className="text-sm text-[#5C677D] dark:text-[#7D8597]">
              <th className="py-3">{t("pages.finance.common.date")}</th>
              <th className="py-3">{t("pages.finance.common.type")}</th>
              <th className="py-3">{t("pages.finance.common.category")}</th>
              <th className="py-3">{t("pages.finance.common.description")}</th>
              <th className="py-3 text-right">{t("pages.finance.common.amount")}</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {kassaData.map((item, i) => (
              <tr key={i} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/20 transition">
                <td className="py-3">{item.date}</td>
                <td className="py-3">
                  <span className={`px-3 py-1 rounded-md text-xs font-medium ${item.type === "Gəlir" ? "text-[#FFFFFF] bg-[#0466CB] dark:bg-[#FFFFFF] dark:text-[#001233]" : "bg-[#979DAC] text-[#001233] dark:bg-[#001845] dark:text-[#FFFFFF]"}`}>
                    {item.type === "Gəlir" ? t("pages.finance.common.inflow") : t("pages.finance.common.outflow")}
                  </span>
                </td>
                <td className="py-3">{item.cat}</td>
                <td className="py-3">{item.desc}</td>
                <td className={`py-3 text-right font-medium ${item.amount.startsWith("+") ? "text-[#0466CB]" : "text-[#D00000]"}`}>
                  {item.amount}
                </td>
                <td><FaPencil className="ml-2 cursor-pointer" onClick={() => editItem(i)} /></td>
                <td><FaRegTrashAlt className="cursor-pointer" onClick={() => deleteItem(i)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KassaEmeliyyatlari;




// import React from "react";
// import { useTranslation } from "react-i18next";
// import { FaPencil } from "react-icons/fa6";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { deleteOperation } from "../../../services";

// const KassaEmeliyyatlari = ({ kassaData, setKassaData, setEditingData, setIsModalOpen }) => {
//   const { t } = useTranslation();

//   const deleteItem = async (item) => {
//     if (!window.confirm("Əməliyyatı silmək istədiyinizə əminsiniz?")) return;
//     try {
//       await deleteOperation(item.id); // Backend delete
//       setKassaData(kassaData.filter(op => op.id !== item.id)); // Frontend update
//     } catch (err) {
//       console.error(err);
//       alert("Əməliyyat silinmədi!");
//     }
//   };

//   const editItem = (item) => {
//     setEditingData(item);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="rounded-xl">

//       {/* Desktop Table */}
//       <div className="hidden md:block p-5 overflow-x-auto border border-[#979DAC] dark:border-[#33415C] rounded-xl bg-[#FFFFFF] dark:bg-[#002855]">
//         <table className="w-full text-left border-collapse text-[#001233] dark:text-[#FFFFFF]">
//           <thead>
//             <tr className="text-sm text-[#5C677D] dark:text-[#7D8597]">
//               <th className="py-3">{t("pages.finance.common.date")}</th>
//               <th className="py-3">{t("pages.finance.common.type")}</th>
//               <th className="py-3">{t("pages.finance.common.category")}</th>
//               <th className="py-3">{t("pages.finance.common.description")}</th>
//               <th className="py-3 text-right">{t("pages.finance.common.amount")}</th>
//               <th></th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody className="text-sm">
//             {kassaData.map((item) => (
//               <tr key={item.id} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/20 transition">
//                 <td className="py-3">{item.date}</td>
//                 <td className="py-3">
//                   <span className={`px-3 py-1 rounded-md text-xs font-medium ${item.type === "Gəlir" ? "text-[#FFFFFF] bg-[#0466CB] dark:bg-[#FFFFFF] dark:text-[#001233]" : "bg-[#979DAC] text-[#001233] dark:bg-[#001845] dark:text-[#FFFFFF]"}`}>
//                     {item.type === "Gəlir" ? t("pages.finance.common.inflow") : t("pages.finance.common.outflow")}
//                   </span>
//                 </td>
//                 <td className="py-3">{item.cat}</td>
//                 <td className="py-3">{item.desc}</td>
//                 <td className={`py-3 text-right font-medium ${item.amount.startsWith("+") ? "text-[#0466CB]" : "text-[#D00000]"}`}>
//                   {item.amount}
//                 </td>
//                 <td><FaPencil className="ml-2 cursor-pointer" onClick={() => editItem(item)} /></td>
//                 <td><FaRegTrashAlt className="cursor-pointer" onClick={() => deleteItem(item)} /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="md:hidden flex flex-col gap-4">
//         {kassaData.map((item) => (
//           <div key={item.id} className="border border-[#979DAC] dark:border-[#33415C] rounded-xl p-4 shadow-sm bg-[#FFFFFF] dark:bg-[#002855]">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t("pages.finance.common.date")}:</span>
//               <span className="font-medium text-[#001233] dark:text-[#FFFFFF]">{item.date}</span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t("pages.finance.common.type")}:</span>
//               <span className={`px-2 py-1 rounded-md text-xs font-medium ${item.type === "Gəlir" ? "text-[#FFFFFF] bg-[#0466CB] dark:bg-[#FFFFFF] dark:text-[#001233]" : "bg-[#979DAC] text-[#001233] dark:bg-[#001845] dark:text-[#FFFFFF]"}`}>
//                 {item.type === "Gəlir" ? t("pages.finance.common.inflow") : t("pages.finance.common.outflow")}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t("pages.finance.common.category")}:</span>
//               <span className="text-[#001233] dark:text-[#FFFFFF]">{item.cat}</span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t("pages.finance.common.description")}:</span>
//               <span className="text-[#001233] dark:text-[#FFFFFF]">{item.desc}</span>
//             </div>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-[#5C677D] dark:text-[#7D8597] text-sm">{t("pages.finance.common.amount")}:</span>
//               <span className={`font-medium ${item.amount.startsWith("+") ? "text-[#0466CB]" : "text-[#D00000]"}`}>{item.amount}</span>
//             </div>
//             <div className="flex justify-end gap-3 mt-2">
//               <FaPencil onClick={() => editItem(item)} className="cursor-pointer text-[#0466CB]" />
//               <FaRegTrashAlt onClick={() => deleteItem(item)} className="cursor-pointer text-[#D00000]" />
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default KassaEmeliyyatlari;

