import React from "react";
import { AlertTriangle, Package, Boxes, DollarSign } from "lucide-react";
import Overlay from "../../overlay";

const notifications = [
    {
        id: 1,
        icon: <AlertTriangle className="text-red-500" size={22} />,
        title: "ƏDV Ödənişi Yaxınlaşır",
        desc: "ƏDV ödənişi 3 gün qalıb. Məbləğ: ₼8,450",
        time: "1 saat əvvəl",
        action: "Ödə",
        tag: "Təcili",
        tagColor: "bg-red-500",
    },
    {
        id: 2,
        icon: <Package className="text-amber-500" size={22} />,
        title: "Kritik Stok Səviyyəsi",
        desc: "Premium Paket 8 günə bitəcək. Təcili sifariş verin.",
        time: "2 saat əvvəl",
        action: "Sifariş Ver",
        tag: "Xəbərdarlıq",
        tagColor: "bg-black",
    },
    {
        id: 3,
        icon: <Boxes className="text-orange-400" size={22} />,
        title: "Anbar Minimum Səviyyəsi",
        desc: "5 məhsul minimum stok səviyyəsinə çatıb.",
        time: "3 saat əvvəl",
        action: "Bax",
        tag: "Xəbərdarlıq",
        tagColor: "bg-black",
    },
    {
        id: 4,
        icon: <DollarSign className="text-blue-500" size={22} />,
        title: "Borc Ödənişi Gecikir",
        desc: "Ödəniş vaxtı keçib. Əlaqə saxlayın.",
        time: "4 saat əvvəl",
        action: "Info",
        tag: "Info",
        tagColor: "bg-gray-200 text-gray-800",
    },
];

const Notification = ({ onClose }) => {
    return (
        <Overlay onClose={onClose}>
            <div className="fixed z-50 flex flex-col overflow-hidden shadow-2xl bg-white rounded-2xl animate-slide-in-right right-0 top-20 h-[600px] w-[370px] sm:w-[420px] sm:right-10 sm:top-20 md:rounded-2xl sm:animate-slide-in-right max-sm:animate-fade-in max-sm:inset-0 max-sm:w-[90%] max-sm:h-[80%] max-sm:top-1/2 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2">
                <div className="bg-white border-b border-gray-300 px-5 py-4 flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-gray-800 text-lg">Bildirişlər</h2>
                        <p className="text-sm text-blue-600">5 oxunmamış bildiriş</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-3xl cursor-pointer font-bold text-gray-400 hover:text-gray-600"
                    >
                        ×
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {notifications.map((item) => (
                        <div
                            key={item.id}
                            className="relative border-b border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition"
                        >
                            <div className="flex gap-3">
                                <div className="mt-1">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium text-gray-800">{item.title}</h3>
                                        {item.tag && (
                                            <span
                                                className={`text-xs text-white px-2 py-0.5 rounded-md ${item.tagColor}`}
                                            >
                                                {item.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-xs text-gray-400">{item.time}</span>
                                        <button className="text-blue-600 text-sm font-medium hover:underline">
                                            {item.action}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-300 py-3 flex justify-center bg-gray-50">
                    <button className="text-sm text-blue-600 font-medium hover:underline">
                        Hamısını Oxunmuş Kimi Qeyd Et
                    </button>
                </div>
            </div>
        </Overlay>
    );
};

export default Notification;
