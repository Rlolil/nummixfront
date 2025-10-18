import React from 'react';

const KassaEmeliyyatlari = () => {

    const kassaData = [
        { date: "2025-10-08", type: "Daxilolma", cat: "Satış", desc: "Satışdan nağd daxilolma", amount: "+5,000 AZN" },
        { date: "2025-10-07", type: "Çıxış", cat: "Ofis xərcləri", desc: "Ofis ləvazimatları", amount: "-1,200 AZN" },
        { date: "2025-10-06", type: "Çıxış", cat: "Logistika", desc: "Kuryer xidmətləri", amount: "-800 AZN" },
        { date: "2025-10-05", type: "Daxilolma", cat: "Satış", desc: "Müştəri ödənişi", amount: "+3,500 AZN" },
    ];

    return (
        <div className="rounded-xl">
            <div className='block md:hidden text-[16px] mb-5'>
                <h1 className='font-semibold'>Kassa Əməliyyatları</h1>
                <h1 className='text-[#717182]'>Nağd pul hərəkəti</h1>
            </div>
            <div className="hidden md:block p-5 overflow-x-auto border border-gray-300 rounded-xl">
                <div className='hidden md:block text-[16px] mb-5'>
                    <h1 className='font-semibold'>Kassa Əməliyyatları</h1>
                    <h1 className='text-[#717182]'>Nağd pul hərəkəti</h1>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-sm">
                            <th className="py-3">Tarix</th>
                            <th className="py-3">Növ</th>
                            <th className="py-3">Kateqoriya</th>
                            <th className="py-3">İzah</th>
                            <th className="py-3 text-right">Məbləğ</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {kassaData.map((item, i) => (
                            <tr key={i} className="border-b border-gray-300 hover:bg-gray-50 transition">
                                <td className="py-3">{item.date}</td>
                                <td className="py-3">
                                    <span className={`px-3 py-1 rounded-md text-xs font-medium ${item.type === "Daxilolma" ? "text-white bg-black" : "bg-gray-200 text-black"}`}>
                                        {item.type}
                                    </span>
                                </td>
                                <td className="py-3">{item.cat}</td>
                                <td className="py-3">{item.desc}</td>
                                <td className={`py-3 text-right font-medium ${item.amount.startsWith('+') ? "text-green-600" : "text-red-600"}`}>
                                    {item.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden flex flex-col gap-4">
                {kassaData.map((item, i) => (
                    <div key={i} className="border border-gray-300 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Tarix:</span>
                            <span className="font-medium">{item.date}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Növ:</span>
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${item.type === "Daxilolma" ? "text-white bg-black" : "bg-gray-200 text-black"}`}>{item.type}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Kateqoriya:</span>
                            <span>{item.cat}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">İzah:</span>
                            <span>{item.desc}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">Məbləğ:</span>
                            <span className={`font-medium ${item.amount.startsWith('+') ? "text-green-600" : "text-red-600"}`}>{item.amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KassaEmeliyyatlari;
