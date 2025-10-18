import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function CariQaliqlar() {
    const [search, setSearch] = useState("");

    const data = [
        { sku: "XM-A101", name: "Xammal A-101", warehouse: "Əsas Anbar - Bakı", location: "A1-R2-H5", balance: "5 kq", cost: "₼12.50", total: "₼62.50" },
        { sku: "HM-B205", name: "Hazır məhsul B-205", warehouse: "Əsas Anbar - Bakı", location: "B2-R1-H3", balance: "120 ədəd", cost: "₼45.00", total: "₼5400.00" },
        { sku: "BT-M1250", name: "Bolt M12x50", warehouse: "Əsas Anbar - Bakı", location: "C1-R3-H2", balance: "12 ədəd", cost: "₼0.85", total: "₼10.20" },
        { sku: "QT-500", name: "Qablaşdırma qutusu", warehouse: "Filial - Gəncə", location: "D1-R1-H1", balance: "25 ədəd", cost: "₼2.30", total: "₼57.50" },
    ];

    const filtered = data.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.sku.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Real Vaxtda Stok Görünüşü</h2>
                <div className="flex gap-2 items-center">
                    <select className="border rounded-md px-3 py-2 text-sm">
                        <option>Bütün anbarlar</option>
                        <option>Əsas Anbar Bakı</option>
                        <option>Filial - Gəncə</option>
                    </select>
                    <div className="relative">
                        <FiSearch className="absolute left-2 top-2.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Axtar..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-8 pr-3 py-2 border rounded-md text-sm"
                        />
                    </div>
                </div>
            </div>

            <table className="w-full text-sm border-t">
                <thead>
                    <tr className="text-left border-b">
                        <th className="py-2 px-2">SKU</th>
                        <th className="py-2 px-2">Məhsul</th>
                        <th className="py-2 px-2">Anbar</th>
                        <th className="py-2 px-2">Yer</th>
                        <th className="py-2 px-2">Qalıq</th>
                        <th className="py-2 px-2">Maya</th>
                        <th className="py-2 px-2">Ümumi Dəyər</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((item, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                            <td className="py-2 px-2">{item.sku}</td>
                            <td className="py-2 px-2">{item.name}</td>
                            <td className="py-2 px-2">{item.warehouse}</td>
                            <td className="py-2 px-2">{item.location}</td>
                            <td className="py-2 px-2">{item.balance}</td>
                            <td className="py-2 px-2">{item.cost}</td>
                            <td className="py-2 px-2">{item.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
