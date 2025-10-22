import { useState, useMemo, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function InventarSayimi() {
    const { t } = useTranslation();
    const { setInventoryStats } = useOutletContext(); // 📤 Inventar.jsx-dən gələn funksiya
    const [counts, setCounts] = useState({
        "XM-A101": "",
        "HM-B205": "",
        "BT-M1250": "",
        "QT-500": "",
    });

    const data = [
        { sku: "XM-A101", name: "Xammal A-101", location: "A1-R2-H5", systemQty: 5, unit: "kq" },
        { sku: "HM-B205", name: "Hazır məhsul B-205", location: "B2-R1-H3", systemQty: 120, unit: "ədəd" },
        { sku: "BT-M1250", name: "Bolt M12x50", location: "C1-R3-H2", systemQty: 12, unit: "ədəd" },
        { sku: "QT-500", name: "Qablaşdırma qutusu", location: "D1-R1-H1", systemQty: 25, unit: "ədəd" },
    ];

    const handleChange = (sku, value) => {
        // yalnız rəqəm qəbul etsin
        if (!/^\d*$/.test(value)) return;
        setCounts({ ...counts, [sku]: value });
    };

    // 📊 Statistik hesablamalar
    const stats = useMemo(() => {
        const totalItems = data.length;
        let counted = 0;
        let totalDiff = 0;

        data.forEach((item) => {
            const real = counts[item.sku] ? parseFloat(counts[item.sku]) : null;
            if (real !== null && !isNaN(real)) {
                counted++;
                totalDiff += real - item.systemQty;
            }
        });

        return {
            totalItems,
            counted,
            diff: totalDiff,
        };
    }, [counts]);

    // 📤 Hər dəfə dəyişəndə statistik kartları yenilə
    useEffect(() => {
        setInventoryStats((prev) => ({
            ...prev,
            counted: stats.counted,
            difference: stats.diff,
        }));
    }, [stats, setInventoryStats]);

    return (
        <div className="space-y-8">
            {/* Fiziki inventar cədvəli */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold mb-3">{t('pages.warehouse.inventory.count.title')}</h2>

                <div className="border p-3 rounded-lg bg-blue-50 flex gap-2 items-start mb-4">
                    <AiOutlineInfoCircle className="text-blue-500 w-5 h-5 mt-1" />
                    <p className="text-sm text-blue-800">
                        {t('pages.warehouse.inventory.count.info')}
                    </p>
                </div>

                <table className="w-full text-sm border-t">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="py-2 px-2"></th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.sku')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.product')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.location')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.systemQty')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.actualQty')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.difference')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.status')}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => {
                            const real = counts[item.sku] ? parseFloat(counts[item.sku]) : null;
                            const diff = real !== null && !isNaN(real) ? real - item.systemQty : null;

                            let status = t('pages.warehouse.inventory.count.status.pending');
                            let statusColor = "bg-gray-100 text-gray-700";

                            if (diff !== null) {
                                if (diff === 0) {
                                    status = t('pages.warehouse.inventory.count.status.match');
                                    statusColor = "bg-green-100 text-green-700";
                                } else if (diff < 0) {
                                    status = t('pages.warehouse.inventory.count.status.missing');
                                    statusColor = "bg-red-100 text-red-700";
                                } else if (diff > 0) {
                                    status = t('pages.warehouse.inventory.count.status.excess');
                                    statusColor = "bg-yellow-100 text-yellow-700";
                                }
                            }

                            return (
                                <tr key={item.sku} className="border-b hover:bg-gray-50 transition">
                                    <td className="py-2 px-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="py-2 px-2">{item.sku}</td>
                                    <td className="py-2 px-2">{item.name}</td>
                                    <td className="py-2 px-2">{item.location}</td>
                                    <td className="py-2 px-2">
                                        {item.systemQty} {item.unit}
                                    </td>

                                    <td className="py-2 px-2">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            value={counts[item.sku]}
                                            onChange={(e) => handleChange(item.sku, e.target.value)}
                                            className="border rounded-md px-2 py-1 w-20 text-sm text-center"
                                        />
                                    </td>

                                    <td className="py-2 px-2 text-center">
                                        {diff !== null ? (
                                            <span
                                                className={
                                                    diff === 0
                                                        ? "text-gray-600"
                                                        : diff > 0
                                                            ? "text-green-600"
                                                            : "text-red-600"
                                                }
                                            >
                                                {diff > 0 ? `+${diff}` : diff}
                                            </span>
                                        ) : (
                                            "—"
                                        )}
                                    </td>

                                    <td className="py-2 px-2 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                                        >
                                            {status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={() =>
                            setCounts({
                                "XM-A101": "",
                                "HM-B205": "",
                                "BT-M1250": "",
                                "QT-500": "",
                            })
                        }
                        className="px-4 py-2 border rounded-md hover:bg-gray-100"
                    >
                        {t('common.cancel')}
                    </button>

                    <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                        {t('pages.warehouse.inventory.count.confirm', { count: Object.values(counts).filter((v) => v).length })}
                    </button>
                </div>
            </div>
        </div>
    );
}
