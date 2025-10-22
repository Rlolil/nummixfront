import { FiDownload, FiTrendingUp } from "react-icons/fi";
import { ChartsGroup } from "../anbarqrafiks";

function ItkiVeZayStatistikasi() {
    const data = [
        { tarix: "2025-10-01", mehsul: "Xammal A-101", miqdar: 2, sebeb: "Keyfiyyətsiz", itki: 25.0 },
        { tarix: "2025-10-03", mehsul: "Qablaşdırma qutusu", miqdar: 5, sebeb: "Zədələnmiş", itki: 11.5 },
        { tarix: "2025-10-05", mehsul: "Motor yağı", miqdar: 1, sebeb: "Son istifadə tarixi", itki: 18.75 },
    ];

    return (
        <div className="border border-gray-200 rounded-2xl p-6 shadow-sm mt-6">
            <h3 className="text-lg font-medium mb-4">İtki və Zay Statistikası</h3>
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-500 border-b">
                        <th className="py-2">Tarix</th>
                        <th className="py-2">Məhsul</th>
                        <th className="py-2">Miqdar</th>
                        <th className="py-2">Səbəb</th>
                        <th className="py-2">İtki (₼)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="border-b">
                            <td className="py-2">{row.tarix}</td>
                            <td className="py-2">{row.mehsul}</td>
                            <td>{row.miqdar}</td>
                            <td>
                                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{row.sebeb}</span>
                            </td>
                            <td className="text-red-500">₼{row.itki.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-right mt-4 text-sm font-medium">
                Ümumi:{" "}
                <span className="text-red-500">
                    ₼{data.reduce((sum, row) => sum + row.itki, 0).toFixed(2)}
                </span>
            </div>
        </div>
    );
}

export default function HesabatAnalitika() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Hesabat və Analitika</h1>
                    <p className="text-sm text-gray-500">Anbar fəaliyyətinin detallı təhlili</p>
                </div>
                <div className="flex gap-3 items-center">
                    <select className="border rounded-xl px-3 py-2 text-sm">
                        <option>Bu ay</option>
                        <option>Bu həftə</option>
                        <option>Bu rüb</option>
                        <option>Bu il</option>
                    </select>
                    <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition">
                        <FiDownload className="w-4 h-4" /> PDF Yüklə
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                        Stok Dövriyyəsi <FiTrendingUp className="w-4 h-4" />
                    </h3>
                    <p className="text-3xl font-semibold mt-2">4.8x</p>
                    <p className="text-xs text-green-600">+0.5 əvvəlki aya nisbətən</p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                        Orta Dövriyyə Müddəti <FiTrendingUp className="w-4 h-4" />
                    </h3>
                    <p className="text-3xl font-semibold mt-2">23 gün</p>
                    <p className="text-xs text-green-600">-2 gün yaxşılaşma</p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <h3 className="text-lg font-medium">Ümumi İtki</h3>
                    <p className="text-3xl font-semibold mt-2">₼ 55.25</p>
                    <p className="text-xs text-gray-500">Bu ay zay və silinmə</p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <h3 className="text-lg font-medium">İnventar Dəqiqliyi</h3>
                    <p className="text-3xl font-semibold mt-2">97.5%</p>
                    <p className="text-xs text-gray-500">Son inventar sayımi</p>
                </div>
            </div>

            {/* 🔹 Ən çox satılan və ləng hərəkət edən məhsullar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <h3 className="text-lg font-medium mb-3">Ən Çox Satılan Məhsullar</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 border-b">
                                <th className="py-2">Məhsul</th>
                                <th className="py-2">Miqdar</th>
                                <th className="py-2">Gəlir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2">
                                    Hazır məhsul B-205 <br />
                                    <span className="text-xs text-gray-500">HM-B205</span>
                                </td>
                                <td>450</td>
                                <td>₼20 250</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">
                                    Xammal A-101 <br />
                                    <span className="text-xs text-gray-500">XM-A101</span>
                                </td>
                                <td>380</td>
                                <td>₼4 750</td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    Bolt M12x50 <br />
                                    <span className="text-xs text-gray-500">BT-M1250</span>
                                </td>
                                <td>1200</td>
                                <td>₼1 020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <h3 className="text-lg font-medium mb-3">Ləng Hərəkət Edən Məhsullar</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 border-b">
                                <th className="py-2">Məhsul</th>
                                <th className="py-2">Qalıq</th>
                                <th className="py-2">Müddət</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2">
                                    Qablaşdırma qutusu <br />
                                    <span className="text-xs text-gray-500">QT-500</span>
                                </td>
                                <td>25</td>
                                <td>
                                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">45 gün</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    Motor yağı 5W-30 <br />
                                    <span className="text-xs text-gray-500">YG-5W30</span>
                                </td>
                                <td>8</td>
                                <td>
                                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">38 gün</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* 🔹 ChartsGroup burdan sonra gəlir */}
            <ChartsGroup />
            <ItkiVeZayStatistikasi />
        </div>
    );
}
