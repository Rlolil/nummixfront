import React, { useEffect, useState } from "react";
import { FaBox } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { MonthlyStockChart, CategoryDistributionChart } from "../anbarqrafiks";



export default function AnbarEsasSehife() {
    const [stats, setStats] = useState(null);
    const [minStock, setMinStock] = useState([]);
    const [loading, setLoading] = useState(true);

    // Backend hazır olmayanda mock datanı istifadə edirik
    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            // --- gələcəkdə bu hissə backend API olacaq ---
            // const res = await fetch("/api/anbar-data");
            // const data = await res.json();

            // --- indi mock data ---
            const fakeStats = {
                totalProducts: 1247,
                totalValue: 485320,
                entriesThisMonth: 324,
                exitsThisMonth: 287,
            };

            const fakeMinStock = [
                { name: "Xammal A-101", code: "XM-A101", current: 5, min: 50 },
                { name: "Bolt M12x50", code: "BT-M1250", current: 12, min: 100 },
                { name: "Qablaşdırma qutusu", code: "QT-500", current: 25, min: 200 },
                { name: "Yağ 5W-30", code: "YG-5W30", current: 8, min: 30 },
            ];

            const withPercent = fakeMinStock.map(item => ({
                ...item,
                percent: Math.round((item.current / item.min) * 100),
            }));

            setStats(fakeStats);
            setMinStock(withPercent);
            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) return <div className="p-8 text-gray-500">Yüklənir...</div>;

    return (
        <div className="min-h-screen p-8 space-y-8 mx-64">
            {/* Başlıq */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Anbar İdarəetməsi</h1>
                <p className="text-gray-500">Ümumi məlumat və əsas göstəricilər</p>
            </div>

            {/* Ümumi göstəricilər */}
            <div className="grid md:grid-cols-4 gap-6">
                <StatCard title="Ümumi Məhsul" value={stats.totalProducts} subtitle="Unikal SKU sayı" icon={<FaBox />} />
                <StatCard title="Ümumi Dəyər" value={`₼ ${stats.totalValue.toLocaleString()}`} subtitle="Maya dəyəri üzrə" icon={<IoStatsChart />} />
                <StatCard
                    title="Bu Ay Giriş"
                    value={stats.entriesThisMonth}
                    subtitle="+12% əvvəlki aya nisbətən"
                    color="green"
                    icon={<FaArrowTrendUp />}
                />
                <StatCard
                    title="Bu Ay Çıxış"
                    value={stats.exitsThisMonth}
                    subtitle="-5% əvvəlki aya nisbətən"
                    color="red"
                    icon={<FaArrowTrendDown />}
                /></div>

            {/* Minimum Stok Xəbərdarlığı */}
            <div className="border border-red-200 bg-red-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-red-500 text-lg">⚠️</span>
                    <h2 className="text-lg font-semibold text-red-700">Minimum Stok Xəbərdarlığı</h2>
                </div>

                <div className="space-y-4">
                    {minStock.map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm font-medium">
                                <div>
                                    {item.name}{" "}
                                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">{item.code}</span>
                                </div>
                                <span className="text-red-600">{item.percent}%</span>
                            </div>
                            <p className="text-xs text-gray-500">
                                Cari: {item.current} / Minimum: {item.min}
                            </p>
                            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                                <div
                                    className="bg-red-500 h-2 rounded-full"
                                    style={{ width: `${item.percent}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* qarafikler */}
            <div className="grid md:grid-cols-2 gap-6">
                <MonthlyStockChart />
                <CategoryDistributionChart />
            </div>

        </div>
    );
}

// Statistik kart komponenti
function StatCard({ title, value, subtitle, color, icon }) {
    const colorMap = {
        green: "text-green-600",
        red: "text-red-600",
        default: "text-gray-600",
    };

    return (
        <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                {icon && <div className={`text-xl ${colorMap[color] || "text-gray-400"}`}>{icon}</div>}
            </div>
            <p className="text-2xl font-bold mt-1 text-gray-900">{value}</p>
            <p className={`text-xs mt-1 ${colorMap[color] || colorMap.default}`}>
                {subtitle && <div className={` ${colorMap[color] || "text-gray-400"}`}>{subtitle}</div>}
            </p>
        </div>
    );
}
