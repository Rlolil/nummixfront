import React, { useEffect, useState } from "react";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";
import { createBudget } from "../../../services";

const YeniBudceModal = ({ onClose }) => {
  const { t } = useTranslation();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBudget(form);
      onClose();
    } catch (error) {
      console.error("Error creating budget:", error);
    }
  };

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white dark:bg-[#001233] w-[90%] md:w-[600px] rounded-2xl shadow-lg p-5 md:p-6 relative mx-auto overflow-y-auto max-h-[90vh] text-[#001233] dark:text-white">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-semibold">
            {t("pages.finance.budgeting.modal.title")}
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
            {t("pages.finance.budgeting.modal.subtitle")}
          </p>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("pages.finance.budgeting.modal.budgetName")} *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder={t("pages.finance.budgeting.modal.placeholders.name")}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("pages.finance.budgeting.modal.period")} *
            </label>
            <select
              name="period"
              value={form.period}
              onChange={handleChange}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            >
              <option value="Aylıq">{t("pages.finance.budgeting.modal.options.monthly")}</option>
              <option value="Rüblük">{t("pages.finance.budgeting.modal.options.quarterly")}</option>
              <option value="İllik">{t("pages.finance.budgeting.modal.options.yearly")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("pages.finance.budgeting.modal.type")} *
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            >
              <option value="Kateqoriya">{t("pages.finance.budgeting.modal.options.category")}</option>
              <option value="Departament">{t("pages.finance.budgeting.modal.options.department")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("pages.finance.budgeting.modal.category")} *
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            >
              <option value="">{t("pages.finance.common.select")}...</option>
              <option>IT</option>
              <option>Satış</option>
              <option>Maliyyə</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {t("pages.finance.budgeting.modal.amount")} (AZN) *
            </label>
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              type="number"
              placeholder={t("pages.finance.budgeting.modal.placeholders.amount")}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("pages.finance.budgeting.modal.startDate")} *
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
                {t("pages.finance.budgeting.modal.endDate")} *
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
              {t("pages.finance.budgeting.modal.notes")}
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder={t("pages.finance.budgeting.modal.placeholders.notes")}
              className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white dark:bg-[#33415C] rounded-md p-2.5 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border border-[#979DAC] dark:border-[#33415C] rounded-md text-[#001233] dark:text-white hover:bg-[#F0F0F0] dark:hover:bg-[#0453A4] transition"
            >
              {t("common.cancel")}
            </button>

            <button
              type="submit"
              className="px-5 py-2 text-sm rounded-md bg-[#0466CB] dark:bg-[#0453A4] text-white hover:bg-[#023E7D] dark:hover:bg-[#0466CB] transition"
            >
              + {t("common.create")}
            </button>
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default YeniBudceModal;
