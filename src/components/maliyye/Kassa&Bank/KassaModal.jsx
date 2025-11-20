// import React from "react";
// import { IoClose } from "react-icons/io5";
// import Overlay from "../../overlay";
// import { useTranslation } from "react-i18next";

// const KassaModal = ({ onClose }) => {
//   const { t } = useTranslation();

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white dark:bg-[#001233] w-[300px] sm:w-[550px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-5 sm:p-6 relative">
//         <div className="flex justify-between items-start sm:items-center mb-4">
//           <div>
//             <h2 className="text-lg font-semibold text-[#001233] dark:text-white">
//               {t("pages.finance.cashBank.modal.newOperationTitle")}
//             </h2>
//             <p className="text-[#7D8597] dark:text-[#7D8597] text-sm">
//               {t("pages.finance.cashBank.modal.newOperationSubtitle")}
//             </p>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-[#001233] dark:text-white hover:text-[#0466CB] dark:hover:text-[#0466CB] text-2xl sm:text-xl"
//           >
//             <IoClose />
//           </button>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label className="text-[#5C677D] dark:text-[#FFFFFF] text-sm">
//               Əməliyyatın növü
//             </label>
//             <select className="w-full border rounded-lg px-3 py-2 bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0466CB]">
//               <option>Select</option>
//               <option value="cash">Kassa</option>
//               <option value="bank">Bank</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-[#5C677D] dark:text-[#FFFFFF] text-sm">
//               {t("pages.finance.cashBank.form.type")}
//             </label>
//             <select className="w-full border rounded-lg px-3 py-2 bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0466CB]">
//               <option>{t("pages.finance.common.select")}</option>
//               <option value="inflow">{t("pages.finance.common.inflow")}</option>
//               <option value="outflow">{t("pages.finance.common.outflow")}</option>
//             </select>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <label className="text-[#5C677D] dark:text-[#FFFFFF] text-sm">
//                 {t("pages.finance.common.amount")}
//               </label>
//               <input
//                 type="number"
//                 placeholder="0.00"
//                 className="w-full border rounded-lg px-3 py-2 bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
//               />
//             </div>

//             <div>
//               <label className="text-[#5C677D] dark:text-[#FFFFFF] text-sm">
//                 {t("pages.finance.common.currency")}
//               </label>
//               <select className="w-full border rounded-lg px-3 py-2 bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0466CB]">
//                 <option>AZN</option>
//                 <option>USD</option>
//                 <option>EUR</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="text-[#5C677D] dark:text-[#FFFFFF] text-sm">
//               {t("pages.finance.common.category")}
//             </label>
//             <select className="w-full border rounded-lg px-3 py-2 bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0466CB]">
//               <option>{t("pages.finance.common.select")}</option>
//               <option>{t("pages.finance.common.categories.salary")}</option>
//               <option>{t("pages.finance.common.categories.sales")}</option>
//               <option>{t("pages.finance.common.categories.other")}</option>
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded-lg bg-[#979DAC] dark:bg-[#001845] hover:bg-[#7D8597] dark:hover:bg-[#002855] transition w-full sm:w-auto text-[#001233] dark:text-white"
//           >
//             {t("common.cancel")}
//           </button>
//           <button className="px-5 py-2 rounded-lg bg-[#0466CB] hover:bg-[#0453A4] transition w-full sm:w-auto text-white">
//             {t("common.save")}
//           </button>
//         </div>
//       </div>
//     </Overlay>
//   );
// };

// export default KassaModal;


import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";

const KassaModal = ({ onClose, onSave, onUpdate, editData }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    operationType: "",
    type: "",
    amount: "",
    currency: "AZN",
    category: "",
    date: "",
    note: "",
  });

  useEffect(() => {
    if (editData) {
      setForm({
        operationType: editData.operationType || "",
        type: editData.type || "",
        amount: editData.amount ? editData.amount.replace(/[^\d.-]/g, "") : "",
        currency: editData.amount?.includes("USD")
          ? "USD"
          : editData.amount?.includes("EUR")
          ? "EUR"
          : "AZN",
        category: editData.cat || "",
        date: editData.date || "",
        note: editData.desc || "",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.amount || !form.operationType || !form.type) {
      alert("Zəhmət olmasa bütün vacib sahələri doldurun!");
      return;
    }

    const newData = {
      date: form.date || "—",
      type: form.type,
      amount:
        form.amount.startsWith("-")
          ? form.amount + " " + form.currency
          : "+" + form.amount + " " + form.currency,
      cat: form.category || "—",
      desc: form.note || "—",
      operationType: form.operationType
    };

    if (editData) onUpdate(newData);
    else onSave(newData);

    onClose();
  };

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white dark:bg-[#001233] w-[300px] sm:w-[550px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-5 sm:p-6 relative">
        <div className="flex justify-between items-start sm:items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold text-[#001233] dark:text-white">
              {t("pages.finance.cashBank.modal.newOperationTitle")}
            </h2>
            <p className="text-[#7D8597] dark:text-[#7D8597] text-sm">
              {t("pages.finance.cashBank.modal.newOperationSubtitle")}
            </p>
          </div>
          <button onClick={onClose} className="text-[#001233] dark:text-white hover:text-[#0466CB] dark:hover:text-[#0466CB] text-2xl sm:text-xl">
            <IoClose />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-[#5C677D] dark:text-white text-sm">Əməliyyatın növü</label>
            <select
              name="operationType"
              value={form.operationType}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
            >
              <option value="">Select</option>
              <option value="Kassa">Kassa</option>
              <option value="Bank">Bank</option>
            </select>
          </div>

          <div>
            <label className="text-[#5C677D] dark:text-white text-sm">{t("pages.finance.cashBank.form.type")}</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
            >
              <option value="">Select</option>
              <option value="Gəlir">Gəlir</option>
              <option value="Xərc">Xərc</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[#5C677D] dark:text-white text-sm">Məbləğ</label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
              />
            </div>

            <div>
              <label className="text-[#5C677D] dark:text-white text-sm">Valyuta</label>
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
              >
                <option>AZN</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[#5C677D] dark:text-white text-sm">Kateqoriya</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
            >
              <option value="">Select</option>
              <option>Maaş</option>
              <option>Satış</option>
              <option>Digər</option>
            </select>
          </div>

          <div>
            <label className="text-[#5C677D] dark:text-white text-sm">Tarix</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
            />
          </div>

          <div>
            <label className="text-[#5C677D] dark:text-white text-sm">Qeyd</label>
            <input
              type="text"
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="İstəyə bağlı"
              className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#979DAC] dark:bg-[#001845] hover:bg-[#7D8597] dark:hover:bg-[#002855] transition text-[#001233] dark:text-white"
          >
            {t("common.cancel")}
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-[#0466CB] hover:bg-[#0453A4] transition text-white"
          >
            {t("common.save")}
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default KassaModal;



// import React, { useState, useEffect } from "react";
// import { IoClose } from "react-icons/io5";
// import Overlay from "../../overlay";
// import { useTranslation } from "react-i18next";
// import { createOperation, updateOperation } from "../../../services";

// const KassaModal = ({ onClose, onSave, onUpdate, editData }) => {
//   const { t } = useTranslation();
//   const [form, setForm] = useState({
//     operationType: "",
//     type: "",
//     amount: "",
//     currency: "AZN",
//     category: "",
//     date: "",
//     note: "",
//   });

//   // Edit zamanı form-u doldur
//   useEffect(() => {
//     if (editData) {
//       setForm({
//         operationType: editData.operationType || "",
//         type: editData.type || "",
//         amount: editData.amount ? editData.amount.replace(/[^\d.-]/g, "") : "",
//         currency: editData.amount?.includes("USD")
//           ? "USD"
//           : editData.amount?.includes("EUR")
//           ? "EUR"
//           : "AZN",
//         category: editData.cat || "",
//         date: editData.date || "",
//         note: editData.desc || "",
//       });
//     }
//   }, [editData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!form.amount || !form.operationType || !form.type) {
//       alert("Zəhmət olmasa bütün vacib sahələri doldurun!");
//       return;
//     }

//     const dataToSend = {
//       date: form.date || "—",
//       type: form.type,
//       amount:
//         form.amount.startsWith("-")
//           ? form.amount + " " + form.currency
//           : "+" + form.amount + " " + form.currency,
//       cat: form.category || "—",
//       desc: form.note || "—",
//       operationType: form.operationType
//     };

//     try {
//       if (editData) {
//         // Backend update
//         const res = await updateOperation(editData.id, dataToSend);
//         onUpdate(res); // Parent komponentə göndər
//       } else {
//         // Backend create
//         const res = await createOperation(dataToSend);
//         onSave(res); // Parent komponentə göndər
//       }
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Əməliyyat zamanı xəta baş verdi!");
//     }
//   };

//   return (
//     <Overlay onClose={onClose}>
//       <div className="bg-white dark:bg-[#001233] w-[300px] sm:w-[550px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-5 sm:p-6 relative">
//         <div className="flex justify-between items-start sm:items-center mb-4">
//           <div>
//             <h2 className="text-lg font-semibold text-[#001233] dark:text-white">
//               {t("pages.finance.cashBank.modal.newOperationTitle")}
//             </h2>
//             <p className="text-[#7D8597] dark:text-[#7D8597] text-sm">
//               {t("pages.finance.cashBank.modal.newOperationSubtitle")}
//             </p>
//           </div>
//           <button onClick={onClose} className="text-[#001233] dark:text-white hover:text-[#0466CB] dark:hover:text-[#0466CB] text-2xl sm:text-xl">
//             <IoClose />
//           </button>
//         </div>

//         <div className="space-y-4">
//           {/* Əməliyyat növü */}
//           <div>
//             <label className="text-[#5C677D] dark:text-white text-sm">Əməliyyatın növü</label>
//             <select
//               name="operationType"
//               value={form.operationType}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
//             >
//               <option value="">Select</option>
//               <option value="Kassa">Kassa</option>
//               <option value="Bank">Bank</option>
//             </select>
//           </div>

//           {/* Type */}
//           <div>
//             <label className="text-[#5C677D] dark:text-white text-sm">{t("pages.finance.cashBank.form.type")}</label>
//             <select
//               name="type"
//               value={form.type}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
//             >
//               <option value="">Select</option>
//               <option value="Gəlir">Gəlir</option>
//               <option value="Xərc">Xərc</option>
//             </select>
//           </div>

//           {/* Məbləğ və Valyuta */}
//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <label className="text-[#5C677D] dark:text-white text-sm">Məbləğ</label>
//               <input
//                 type="number"
//                 name="amount"
//                 value={form.amount}
//                 onChange={handleChange}
//                 placeholder="0.00"
//                 className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
//               />
//             </div>

//             <div>
//               <label className="text-[#5C677D] dark:text-white text-sm">Valyuta</label>
//               <select
//                 name="currency"
//                 value={form.currency}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
//               >
//                 <option>AZN</option>
//                 <option>USD</option>
//                 <option>EUR</option>
//               </select>
//             </div>
//           </div>

//           {/* Kateqoriya */}
//           <div>
//             <label className="text-[#5C677D] dark:text-white text-sm">Kateqoriya</label>
//             <select
//               name="category"
//               value={form.category}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
//             >
//               <option value="">Select</option>
//               <option>Maaş</option>
//               <option>Satış</option>
//               <option>Digər</option>
//             </select>
//           </div>

//           {/* Tarix */}
//           <div>
//             <label className="text-[#5C677D] dark:text-white text-sm">Tarix</label>
//             <input
//               type="date"
//               name="date"
//               value={form.date}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
//             />
//           </div>

//           {/* Qeyd */}
//           <div>
//             <label className="text-[#5C677D] dark:text-white text-sm">Qeyd</label>
//             <input
//               type="text"
//               name="note"
//               value={form.note}
//               onChange={handleChange}
//               placeholder="İstəyə bağlı"
//               className="w-full border rounded-lg px-3 py-2 bg-white dark:bg-[#33415C] text-[#001233] dark:text-white"
//             />
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 rounded-lg bg-[#979DAC] dark:bg-[#001845] hover:bg-[#7D8597] dark:hover:bg-[#002855] transition text-[#001233] dark:text-white"
//           >
//             {t("common.cancel")}
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-5 py-2 rounded-lg bg-[#0466CB] hover:bg-[#0453A4] transition text-white"
//           >
//             {t("common.save")}
//           </button>
//         </div>
//       </div>
//     </Overlay>
//   );
// };

// export default KassaModal;


