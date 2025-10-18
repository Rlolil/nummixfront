import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";

// Dummy məhsul məlumatları
const mehsullar = [
    {
        sku: "XM-A101",
        name: "Xammal A-101",
        barcode: "8594562341234",
        category: "Xammal",
        quantity: "5 kq",
        min: 50,
        max: 500,
        location: "A1-R2-H5",
        cost: 12.50,
    },
    {
        sku: "HM-B205",
        name: "Hazır məhsul B-205",
        barcode: "8594562341235",
        category: "Hazır məhsul",
        quantity: "120 ədəd",
        min: 50,
        max: 300,
        location: "B2-R1-H3",
        cost: 45.00,
    },
    {
        sku: "BT-M1250",
        name: "Bolt M12x50",
        barcode: "8594562341236",
        category: "Ehtiyat hissələri",
        quantity: "12 ədəd",
        min: 100,
        max: 1000,
        location: "C1-R3-H2",
        cost: 0.85,
    },
    {
        sku: "QT-500",
        name: "Qablaşdırma qutusu 500x300",
        barcode: "8594562341237",
        category: "Qablaşdırma",
        quantity: "25 ədəd",
        min: 200,
        max: 2000,
        location: "D1-R1-H1",
        cost: 2.30,
    },
    {
        sku: "YG-5W30",
        name: "Motor yağı 5W-30",
        barcode: "8594562341238",
        category: "Xammal",
        quantity: "8 litr",
        min: 30,
        max: 200,
        location: "A2-R4-H6",
        cost: 18.75,
    },
];

const Məhsullar = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    // Axtarış üçün filter
    const filtered = mehsullar.filter(
        (m) =>
            m.sku.toLowerCase().includes(search.toLowerCase()) ||
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.barcode.includes(search)
    );

    return (
        <div className='mt-9 px-6'>
            {/* Başlıq və düymə */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold">Məhsullar ({filtered.length})</h2>
                    <p className="text-gray-500 text-sm">Bütün mal-material siyahısı</p>
                </div>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800"
                >
                    <span className="text-xl">+</span>
                    <span className="text-blue-400 font-semibold">Yeni Məhsul</span>
                </button>
            </div>

            {/* Axtarış inputu */}
            <div className="flex justify-end mb-3">
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="SKU, ad və ya ştrixkod..."
                    className="w-72 px-3 py-2 border rounded-lg bg-gray-100 outline-none"
                />
            </div>

            {/* Məhsullar cədvəli */}
            <div className="bg-white rounded-2xl p-6 border">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-500 text-sm border-b">
                            <th className="py-2 font-semibold">SKU</th>
                            <th className="py-2 font-semibold">Məhsul</th>
                            <th className="py-2 font-semibold">Kateqoriya</th>
                            <th className="py-2 font-semibold">Qalıq</th>
                            <th className="py-2 font-semibold">Min/Max</th>
                            <th className="py-2 font-semibold">Status</th>
                            <th className="py-2 font-semibold">Yer</th>
                            <th className="py-2 font-semibold">Maya</th>
                            <th className="py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((m) => {
                            // Qalıqdan ədəd çıxar (məsələn, "120 ədəd" -> 120)
                            const qaliq = Number(m.quantity.toString().split(' ')[0]);
                            let status = "";
                            let statusClass = "";
                            if (qaliq < m.min) {
                                status = "Aşağı";
                                statusClass = "bg-rose-400";
                            } else if (qaliq > m.max) {
                                status = "Yuxarı";
                                statusClass = "bg-blue-400";
                            } else {
                                status = "Yaxşı";
                                statusClass = "bg-black";
                            }
                            return (
                                <tr key={m.sku} className="border-b last:border-b-0 hover:bg-gray-50">
                                    <td className="py-2 font-medium flex items-center gap-2">
                                        <FaBox className="text-gray-400" /> {m.sku}
                                    </td>
                                    <td className="py-2">
                                        <div className="font-semibold">{m.name}</div>
                                        <div className="text-xs text-gray-400">{m.barcode}</div>
                                    </td>
                                    <td className="py-2">{m.category}</td>
                                    <td className="py-2">{m.quantity}</td>
                                    <td className="py-2">{m.min} / {m.max}</td>
                                    <td className="py-2">
                                        <span className={`${statusClass} text-white px-3 py-1 rounded-full text-xs`}>
                                            {status}
                                        </span>
                                    </td>
                                    <td className="py-2">{m.location}</td>
                                    <td className="py-2 font-semibold">₼{m.cost.toFixed(2)}</td>
                                    <td className="py-2">
                                        <button className="p-1 rounded hover:bg-gray-300">
                                            <FaRegEdit />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Modal -Yeni Məhsul Əlavə Et */}
            {open && (
                <div className="fixed inset-0 backdrop-blur-xl bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 w-[500px] max-w-full relative shadow-lg">
                        {/* Modal başlıq */}
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <h3 className="text-xl font-bold">Yeni Məhsul Əlavə Et</h3>
                                <p className="text-gray-500 text-sm">Məhsul məlumatlarını daxil edin</p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-2xl text-gray-400 hover:text-black"
                            >
                                ×
                            </button>
                        </div>
                        {/* Form sahələri */}
                        <form className="space-y-3">
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block font-semibold text-l mb-1">SKU</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="XM-A101" />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-l mb-1">Ştrixkod</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="8594562341234" />
                                </div>
                            </div>
                            <div>
                                <label className="block font-semibold text-l mb-1">Məhsul adı</label>
                                <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="Məhsul adını daxil edin" />
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block font-semibold text-l mb-1">Kateqoriya</label>
                                    <select className="w-full border rounded px-2 py-1 bg-gray-100">
                                        <option hidden>Seçin</option>
                                        <option value="xammal">Xammal</option>
                                        <option value="hazir_mehsul">Hazır məhsul</option>
                                        <option value="ehtiyyat_hissələr">Ehtiyyat hissələr</option>
                                        <option value="qablasdirma">Qablaşdırma</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-l mb-1">Ölçü vahidi</label>
                                    <select className="w-full border rounded px-2 py-1 bg-gray-100">
                                        <option hidden>Seçin</option>
                                        <option value="kq">kq</option>
                                        <option value="ədəd">ədəd</option>
                                        <option value="litr">litr</option>
                                        <option value="metr">metr</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block font-semibold text-l mb-1">Min. Stok</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" type='number' placeholder="50" />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-l mb-1">Max. Stok</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" type='number' placeholder="500" />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-l mb-1">Maya dəyəri (₼)</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" type='number' step="any" placeholder="12.50" />
                                </div>
                            </div>
                            <div>
                                <label className="block font-semibold text-l mb-1">Saxlama yeri</label>
                                <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="A1-R2-H5" />
                            </div>
                            {/* Modal alt düymələri */}
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 rounded bg-gray-100 text-black"
                                >
                                    Ləğv et
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-black text-white font-bold"
                                >
                                    Yadda saxla
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Məhsullar;