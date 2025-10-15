import React from 'react';

const KassaEmeliyyatlari = () => {

    const kassaData = [
        { date: "2025-10-08", type: "Daxilolma", cat: "Satış", desc: "Satışdan nağd daxilolma", amount: "+5,000 AZN" },
        { date: "2025-10-07", type: "Çıxış", cat: "Ofis xərcləri", desc: "Ofis ləvazimatları", amount: "-1,200 AZN" },
        { date: "2025-10-06", type: "Çıxış", cat: "Logistika", desc: "Kuryer xidmətləri", amount: "-800 AZN" },
        { date: "2025-10-05", type: "Daxilolma", cat: "Satış", desc: "Müştəri ödənişi", amount: "+3,500 AZN" },
    ];


    return (

        <div className="overflow-x-auto border-1 border-gray-300 p-5 rounded-xl">
            <div className='text-[16px] mb-5'>
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
    );
};

export default KassaEmeliyyatlari;
