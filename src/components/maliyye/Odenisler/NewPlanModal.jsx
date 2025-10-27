import React, { useState } from "react";
import { X } from "lucide-react";
import Overlay from "../../overlay";

const NewPlanModal = ({ onClose }) => {
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
            <div className="bg-white w-[90%] md:w-[600px] rounded-2xl shadow-lg p-5 md:p-6 relative mx-auto overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-[17px] md:text-[18px] font-semibold">
                        Yeni Ödəniş Planla
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition"
                    >
                        <X size={22} />
                    </button>
                </div>

                <p className="text-sm text-gray-500 mb-5">
                    Təchizatçılara ödəniş və ya müştərilərdən daxilolma əlavə edin
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Növ *
                        </label>
                        <select
                            name="nov"
                            value={form.nov}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2.5 text-sm focus:ring focus:ring-gray-200"
                        >
                            <option>Ödəniş (Çıxış)</option>
                            <option>Daxilolma (Giriş)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Təchizatçı *
                        </label>
                        <input
                            name="tachizatci"
                            placeholder="Təchizatçı adı"
                            value={form.tachizatci}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2.5 text-sm focus:ring focus:ring-gray-200"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Məbləğ *
                            </label>
                            <input
                                type="number"
                                name="mebleg"
                                placeholder="0.00"
                                value={form.mebleg}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2.5 text-sm focus:ring focus:ring-gray-200"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Valyuta
                            </label>
                            <select
                                name="valyuta"
                                value={form.valyuta}
                                onChange={handleChange}
                                className="w-full border rounded-md p-2.5 text-sm"
                            >
                                <option>AZN</option>
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Son tarix *
                        </label>
                        <input
                            type="date"
                            name="tarix"
                            value={form.tarix}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2.5 text-sm focus:ring focus:ring-gray-200"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Kateqoriya
                        </label>
                        <select
                            name="kateqoriya"
                            value={form.kateqoriya}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2.5 text-sm"
                        >
                            <option>Seçin...</option>
                            <option>Marketing</option>
                            <option>Ofis xərcləri</option>
                            <option>Nəqliyyat</option>
                            <option>Digər</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Qeydlər
                        </label>
                        <textarea
                            name="qeydlər"
                            placeholder="Əlavə məlumat..."
                            value={form.qeydlər}
                            onChange={handleChange}
                            rows={2}
                            className="w-full border rounded-md p-2.5 text-sm focus:ring focus:ring-gray-200 resize-none"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm border rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            Ləğv et
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 text-sm rounded-md bg-black text-white hover:bg-gray-800 transition"
                        >
                            + Əlavə et
                        </button>
                    </div>
                </form>
            </div>
        </Overlay>
    );
};

export default NewPlanModal;
