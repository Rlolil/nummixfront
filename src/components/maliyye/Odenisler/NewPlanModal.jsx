import React, { useState } from "react";
import { X } from "lucide-react";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";

const NewPlanModal = ({ onClose }) => {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        nov: "Ödəniş (Çıxış)",
        tachizatci: "",
        mebleg: "",
        valyuta: "AZN",
        tarix: "",
        kateqoriya: "",
        qeydlər: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        onClose();
    };

    return (
        <Overlay onClose={onClose}>
            <div className="bg-white dark:bg-[#001233] w-[90%] md:w-[600px] rounded-2xl shadow-lg p-5 md:p-6 relative mx-auto overflow-y-auto max-h-[90vh] text-[#001233] dark:text-white">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-[17px] md:text-[18px] font-semibold">
                        {t("pages.finance.payments.modal.title")}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-[#5C677D] dark:text-[#7D8597] hover:text-[#0466CB] dark:hover:text-[#0466CB] transition"
                    >
                        <X size={22} />
                    </button>
                </div>

                <p className="text-sm text-[#7D8597] dark:text-[#5C677D] mb-5">
                    {t("pages.finance.payments.modal.subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#001233] dark:text-white mb-1">
                            {t("pages.finance.payments.modal.type")} *
                        </label>
                        <select
                            name="nov"
                            value={form.nov}
                            onChange={handleChange}
                            className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white  rounded-md p-2.5 text-sm text-[#001233] dark:text-white dark:bg-[#33415C] focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                        >
                            <option value="Ödəniş (Çıxış)">{t("pages.finance.payments.modal.options.paymentOut")}</option>
                            <option value="Daxilolma (Giriş)">{t("pages.finance.payments.modal.options.incomeIn")}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#001233] dark:text-white mb-1">
                            {t("pages.finance.payments.modal.supplier")} *
                        </label>
                        <input
                            name="tachizatci"
                            placeholder={t("pages.finance.payments.modal.placeholders.supplier")}
                            value={form.tachizatci}
                            onChange={handleChange}
                            className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white     rounded-md p-2.5 text-sm text-[#001233] dark:text-white dark:bg-[#33415C] focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-[#001233] dark:text-white mb-1">
                                {t("pages.finance.payments.modal.amount")} *
                            </label>
                            <input
                                type="number"
                                name="mebleg"
                                placeholder={t("pages.finance.payments.modal.placeholders.amount")}
                                value={form.mebleg}
                                onChange={handleChange}
                                className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white rounded-md p-2.5 text-sm text-[#001233] dark:text-white  dark:bg-[#33415C] focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#001233] dark:text-white mb-1">
                                {t("pages.finance.payments.modal.currency")}
                            </label>
                            <select
                                name="valyuta"
                                value={form.valyuta}
                                onChange={handleChange}
                                className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white rounded-md p-2.5 text-sm text-[#001233] dark:text-white dark:bg-[#33415C] focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                            >
                                <option>AZN</option>
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#001233] dark:text-white mb-1">
                            {t("pages.finance.payments.modal.plannedDate")} *
                        </label>
                        <input
                            type="date"
                            name="tarix"
                            value={form.tarix}
                            onChange={handleChange}
                            className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white rounded-md p-2.5 text-sm text-[#001233] dark:text-white dark:bg-[#33415C] focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#001233] dark:text-white mb-1">
                            {t("pages.finance.payments.modal.category")}
                        </label>
                        <select
                            name="kateqoriya"
                            value={form.kateqoriya}
                            onChange={handleChange}
                            className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white rounded-md p-2.5 text-sm text-[#001233] dark:text-white dark:bg-[#33415C] focus:outline-none focus:ring-2 focus:ring-[#0466CB]"
                        >
                            <option value="">{t("pages.finance.common.select")}...</option>
                            <option value="Marketing">{t("pages.finance.common.categories.marketing")}</option>
                            <option value="Ofis xərcləri">{t("pages.finance.common.categories.office")}</option>
                            <option value="Nəqliyyat">{t("pages.finance.common.categories.transport")}</option>
                            <option value="Digər">{t("pages.finance.common.categories.other")}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#001233] dark:text-white mb-1">
                            {t("pages.finance.payments.modal.notes")}
                        </label>
                        <textarea
                            name="qeydlər"
                            placeholder={t("pages.finance.payments.modal.placeholders.notes")}
                            value={form.qeydlər}
                            onChange={handleChange}
                            rows={2}
                            className="w-full border border-[#979DAC] dark:border-[#33415C] bg-white rounded-md p-2.5 text-sm text-[#001233] dark:text-white dark:bg-[#33415C] focus:outline-none focus:ring-2 focus:ring-[#0466CB] resize-none"
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
                            + {t("common.add")}
                        </button>
                    </div>
                </form>
            </div>
        </Overlay>
    );
};

export default NewPlanModal;
