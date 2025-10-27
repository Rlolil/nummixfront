import React, { useEffect } from "react";
import Overlay from "../../overlay";

const YeniBudceModal = ({ onClose }) => {

    return (
        <Overlay onClose={onClose}>
            <div className="bg-white w-[90%] md:w-[600px] max-w-lg rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[90vh] mx-auto">
                <div className="flex justify-between items-center border-b px-6 py-4">
                    <h2 className="text-lg font-semibold">Yeni Büdcə Yarat</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl leading-none"
                    >
                        ×
                    </button>
                </div>

                <div className="overflow-y-auto px-6 py-4 space-y-4">
                    <p className="text-gray-500 text-sm">
                        Kateqoriya və ya departament üçün büdcə planlaması
                    </p>

                    <div>
                        <label className="block text-sm font-medium mb-1">Büdcə adı *</label>
                        <input
                            type="text"
                            placeholder="Məs: 2025 IT Büdcəsi"
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Dövr *</label>
                        <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Aylıq</option>
                            <option>Rüblük</option>
                            <option>İllik</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Növ *</label>
                        <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Kateqoriya</option>
                            <option>Departament</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Kateqoriya *</label>
                        <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Seçin...</option>
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
                            type="number"
                            placeholder="0.00"
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Başlanğıc tarixi *
                            </label>
                            <input
                                type="date"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Bitmə tarixi *
                            </label>
                            <input
                                type="date"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Qeydlər</label>
                        <textarea
                            placeholder="Büdcə haqqında əlavə məlumat..."
                            className="w-full border rounded-lg px-3 py-2 text-sm h-20 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3 border-t px-6 py-3 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                    >
                        Ləğv et
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-black text-white">
                        + Yarat
                    </button>
                </div>
            </div>
        </Overlay>
    );
};

export default YeniBudceModal;
