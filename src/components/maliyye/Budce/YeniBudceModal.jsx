// import React, { useEffect } from "react";
// import Overlay from "../../overlay";

// const YeniBudceModal = ({ onClose }) => {

//     return (
//         <Overlay onClose={onClose}>
//             <div className="bg-white w-[90%] md:w-[600px] max-w-lg rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh] mx-auto">
//                 <div className="flex justify-between items-center border-b px-6 py-4">
//                     <h2 className="text-lg font-semibold">Yeni Büdcə Yarat</h2>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700 text-xl leading-none"
//                     >
//                         ×
//                     </button>
//                 </div>

//                 <div className="overflow-y-auto px-6 py-4 space-y-4">
//                     <p className="text-gray-500 text-sm">
//                         Kateqoriya və ya departament üçün büdcə planlaması
//                     </p>

//                     <div>
//                         <label className="block text-sm font-medium mb-1">Büdcə adı *</label>
//                         <input
//                             type="text"
//                             placeholder="Məs: 2025 IT Büdcəsi"
//                             className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium mb-1">Dövr *</label>
//                         <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
//                             <option>Aylıq</option>
//                             <option>Rüblük</option>
//                             <option>İllik</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium mb-1">Növ *</label>
//                         <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
//                             <option>Kateqoriya</option>
//                             <option>Departament</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium mb-1">Kateqoriya *</label>
//                         <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
//                             <option>Seçin...</option>
//                             <option>IT</option>
//                             <option>Satış</option>
//                             <option>Maliyyə</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium mb-1">
//                             Planlaşdırılan məbləğ (AZN) *
//                         </label>
//                         <input
//                             type="number"
//                             placeholder="0.00"
//                             className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium mb-1">
//                                 Başlanğıc tarixi *
//                             </label>
//                             <input
//                                 type="date"
//                                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium mb-1">
//                                 Bitmə tarixi *
//                             </label>
//                             <input
//                                 type="date"
//                                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium mb-1">Qeydlər</label>
//                         <textarea
//                             placeholder="Büdcə haqqında əlavə məlumat..."
//                             className="w-full border rounded-lg px-3 py-2 text-sm h-20 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//                         />
//                     </div>
//                 </div>

//                 <div className="flex justify-end gap-3 border-t px-6 py-3 bg-gray-50">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
//                     >
//                         Ləğv et
//                     </button>
//                     <button className="px-4 py-2 rounded-lg bg-black text-white">
//                         + Yarat
//                     </button>
//                 </div>
//             </div>
//         </Overlay>
//     );
// };

// export default YeniBudceModal;

import React, { useEffect, useState } from "react";
import Overlay from "../../overlay";

const YeniBudceModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    period: "Aylıq",
    type: "Kateqoriya",
    category: "",
    amount: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  // Scroll disable when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yeni büdcə məlumatları:", form);
    onClose();
  };

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white dark:bg-gray-900 w-[90%] md:w-[600px] max-w-lg rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b dark:border-gray-700 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Yeni Büdcə Yarat
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-6 py-4 space-y-4"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Kateqoriya və ya departament üçün büdcə planlaması
          </p>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Büdcə adı *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Məs: 2025 IT Büdcəsi"
              className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Dövr *
            </label>
            <select
              name="period"
              value={form.period}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option>Aylıq</option>
              <option>Rüblük</option>
              <option>İllik</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Növ *
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option>Kateqoriya</option>
              <option>Departament</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Kateqoriya *
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seçin...</option>
              <option>IT</option>
              <option>Satış</option>
              <option>Maliyyə</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Planlaşdırılan məbləğ (AZN) *
            </label>
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              type="number"
              placeholder="0.00"
              className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                Başlanğıc tarixi *
              </label>
              <input
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                type="date"
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                Bitmə tarixi *
              </label>
              <input
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                type="date"
                className="w-full border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Qeydlər
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Büdcə haqqında əlavə məlumat..."
              className="w-full border rounded-lg px-3 py-2 text-sm h-20 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Ləğv et
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
            >
              + Yarat
            </button>
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default YeniBudceModal;

