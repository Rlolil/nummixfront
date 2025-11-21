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
      <div className="bg-white dark:bg-[#001233] w-[90%] md:w-[600px] rounded-2xl shadow-lg p-5 md:p-6 relative mx-auto overflow-y-auto max-h-[90vh] text-[#001233] dark:text-white">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-semibold">
            Yeni Büdcə Yarat
          </h2>
          <button
            onClick={onClose}
            className="text-[#5C677D] dark:text-[#7D8597] hover:text-[#0466CB] dark:hover:text-[#0466CB] transition"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">
            Kateqoriya və ya departament üçün büdcə planlaması
          </p>

          <div>
            <label className="block text-sm font-medium mb-1">
              Büdcə adı *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Məs: 2025 IT Büdcəsi"
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Dövr *
            </label>
            <select
              name="period"
              value={form.period}
              onChange={handleChange}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            >
              <option>Aylıq</option>
              <option>Rüblük</option>
              <option>İllik</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Növ *
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            >
              <option>Kateqoriya</option>
              <option>Departament</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Kateqoriya *
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            >
              <option value="">Seçin...</option>
              <option>IT</option>
              <option>Satış</option>
              <option>Maliyyə</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Planlaşdırılan məbləğ (AZN) *
            </label>
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              type="number"
              placeholder="0.00"
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Başlanğıc tarixi *
              </label>
              <input
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                type="date"
                className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Bitmə tarixi *
              </label>
              <input
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                type="date"
                className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Qeydlər
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Büdcə haqqında əlavə məlumat..."
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border border-[#979DAC] dark:border-[#33415C] rounded-md text-[#001233] dark:text-white hover:bg-[#F0F0F0] dark:hover:bg-[#0453A4] transition"
            >
              Ləğv et
            </button>

            <button
              type="submit"
              className="px-5 py-2 text-sm rounded-md bg-[#0466CB] dark:bg-[#0453A4] text-white hover:bg-[#023E7D] dark:hover:bg-[#0466CB] transition"
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
