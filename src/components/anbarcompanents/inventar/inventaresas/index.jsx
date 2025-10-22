import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FiUpload } from "react-icons/fi";
import { HiClipboardList } from "react-icons/hi";
import Inventarnav from "../inventarnav";
import { Outlet } from 'react-router';
import { useTranslation } from 'react-i18next';


export default function Inventar() {
    const { t } = useTranslation();
    const [inventoryStats, setInventoryStats] = useState({
        totalProducts: 4,
        totalValue: 5530.2,
        counted: 0,
        difference: 0,
    });

    const [inventoryData, setInventoryData] = useState([]);

    // Cədvəl faylını yükləmə
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const data = new Uint8Array(evt.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            setInventoryData(worksheet);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="p-6 space-y-8" >

            {/* Başlıq */}

            <div className=" flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{t('pages.warehouse.inventory.control.title')}</h1>
                    <p className="text-gray-500 text-sm">
                        {t('pages.warehouse.inventory.control.subtitle')}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">


                    <div className="flex items-center gap-2">
                        <label className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-black">
                            <FiUpload /> {t('pages.warehouse.inventory.control.uploadSheet')}
                            <input
                                type="file"
                                accept=".xlsx,.csv"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </label>

                        <button className="px-4 py-2 flex items-center gap-1 rounded bg-black text-white">
                            <HiClipboardList className="blok" />
                            {t('pages.warehouse.inventory.control.newInventory')}
                        </button>
                    </div>
                </div>

            </div>

            {/* Statistik kartlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border rounded-2xl p-4">
                    <h3 className="text-sm text-gray-500 mb-1">{t('pages.warehouse.inventory.cards.totalProducts')}</h3>
                    <p className="text-2xl font-semibold">{inventoryStats.totalProducts}</p>
                    <span className="text-xs text-gray-400">{t('pages.warehouse.inventory.cards.skuCount')}</span>
                </div>

                <div className="bg-white border rounded-2xl p-4">
                    <h3 className="text-sm text-gray-500 mb-1">{t('pages.warehouse.inventory.cards.totalValue')}</h3>
                    <p className="text-2xl font-semibold">
                        ₼{inventoryStats.totalValue.toLocaleString("az-Latn-AZ")}
                    </p>
                    <span className="text-xs text-gray-400">{t('pages.warehouse.inventory.cards.systemBalance')}</span>
                </div>

                <div className="bg-white border rounded-2xl p-4">
                    <h3 className="text-sm text-gray-500 mb-1">{t('pages.warehouse.inventory.cards.countStatus')}</h3>
                    <p className="text-2xl font-semibold">
                        {inventoryStats.counted} / {inventoryStats.totalProducts}
                    </p>
                    <span className="text-xs text-gray-400">{t('pages.warehouse.inventory.cards.countedProducts')}</span>
                </div>

                <div className="bg-white border rounded-2xl p-4">
                    <h3 className="text-sm text-gray-500 mb-1">{t('pages.warehouse.inventory.cards.difference')}</h3>
                    <p className="text-2xl font-semibold">{inventoryStats.difference}</p>
                    <span className="text-xs text-gray-400">{t('pages.warehouse.inventory.cards.countDifference')}</span>
                </div>
            </div>


            {/* Yüklənmiş cədvəl */}
            {inventoryData.length > 0 && (
                <div className="mt-6 bg-white border rounded-2xl p-4 overflow-x-auto">
                    <h3 className="text-md font-semibold mb-3">{t('pages.warehouse.inventory.control.uploadedSheet')}</h3>
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600">
                                {Object.keys(inventoryData[0]).map((key) => (
                                    <th key={key} className="border-b py-2 px-3 text-left">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryData.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    {Object.values(row).map((val, j) => (
                                        <td key={j} className="border-b py-2 px-3">
                                            {val}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Inventarnav />
            <Outlet context={{ setInventoryStats }} />


        </div>
    );
}
