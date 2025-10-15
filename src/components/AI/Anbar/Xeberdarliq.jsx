import React from "react";

const alerts = [
    {
        name: "Premium Paket",
        mevcut: 12,
        minimum: 15,
        gun: 8,
        ai: "50 ədəd sifariş verin",
        status: "Kritik",
        color: "red",
    },
    {
        name: "Standart Lisenziya",
        mevcut: 8,
        minimum: 10,
        gun: 5,
        ai: "30 ədəd sifariş verin",
        status: "Kritik",
        color: "red",
    },
    {
        name: "Texniki Dəstək Paket",
        mevcut: 28,
        minimum: 25,
        gun: 15,
        ai: "40 ədəd sifariş verin",
        status: "Xəbardarlıq",
        color: "orange",
    },
    {
        name: "Enterprise Modul",
        mevcut: 45,
        minimum: 30,
        gun: 25,
        ai: "",
        status: "Normal",
        color: "green",
    },
];

const Xeberdarliq = () => {
    return (
        <div className="p-5">
            <h2 className="text-lg font-semibold mb-1">Minimum Stok Xəbardarlıqları</h2>
            <p className="text-gray-500 text-sm mb-4">
                AI proqnozuna görə təcili sifariş tələb edən məhsullar
            </p>

            <div className="flex flex-col gap-4">
                {alerts.map((item, i) => (
                    <div
                        key={i}
                        className={`p-4 rounded-xl border 
            ${item.color === "red" ? "bg-red-50 border-red-200" : ""}
            ${item.color === "orange" ? "bg-orange-50 border-orange-200" : ""}
            ${item.color === "green" ? "bg-green-50 border-green-200" : ""}
            `}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <span
                                    className={`${item.color === "red"
                                        ? "text-red-500"
                                        : item.color === "orange"
                                            ? "text-orange-500"
                                            : "text-green-500"
                                        }`}
                                >
                                    ⚠️
                                </span>
                                <h3 className="font-medium">{item.name}</h3>
                            </div>
                            <span
                                className={`text-xs px-2 py-1 rounded-full font-medium
                ${item.status === "Kritik"
                                        ? "bg-red-600 text-white"
                                        : item.status === "Xəbardarlıq"
                                            ? "bg-black text-white"
                                            : "bg-green-100 text-green-700"
                                    }`}
                            >
                                {item.status}
                            </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-2">
                            Mövcud: <b>{item.mevcut}</b> • Minimum: <b>{item.minimum}</b>
                        </p>

                        <div className="flex justify-between">
                            <p className="text-sm text-gray-600 mb-1">Stok bitməsinə:</p>
                            <p className="text-gray-500">{item.gun} gün</p>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                            <div
                                className={`h-full ${item.color === "red"
                                    ? "bg-red-600"
                                    : item.color === "orange"
                                        ? "bg-orange-500"
                                        : "bg-green-500"
                                    }`}
                                style={{ width: `${Math.min((item.minimum / item.mevcut) * 100, 100)}%` }}
                            ></div>
                        </div>

                        <div className="flex justify-end text-sm">
                            {item.status !== "Normal" && (
                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md transition">
                                    Sifariş Ver
                                </button>
                            )}
                        </div>

                        {item.ai && (
                            <p className="mt-2 text-sm font-medium text-gray-700">
                                <span className="font-semibold text-black">AI Tövsiyəsi:</span>{" "}
                                {item.ai}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Xeberdarliq;
