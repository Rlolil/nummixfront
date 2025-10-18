import React from 'react'

const OdenisTab = () => {
    const odenisData = [
        { name: "TechSupply MMC", cat: "IT", date: "2025-10-06", status: "Gecikmis", amount: "5,000 AZN", emeliyyat: "Ödə" },
        { name: "OfficeWorld", cat: "Ofis", date: "2025-10-12", status: "Gozleyir", amount: "1,200 AZN", emeliyyat: "Ödə" },
        { name: "Marketing Pro", cat: "Marketing", date: "2025-10-15", status: "Gozleyir", amount: "800 AZN", emeliyyat: "Ödə" },
        { name: "DataCenter LLC", cat: "IT", date: "2025-10-20", status: "Planlasdirilib", amount: "3,500 AZN", emeliyyat: "Ödə" },
        { name: "CleanCo", cat: "Xidmətlər", date: "2025-09-30", status: "Odenilib", amount: "3,500 AZN", emeliyyat: "Ödə" },
    ]

    return (
        <div className="rounded-xl">
            <div className='block md:hidden text-[16px] mb-5'>
                <h1 className='font-semibold'>Təchizatçılara Ödənişlər</h1>
                <h1 className='text-[#717182]'>Planlaşdırılmış və gözlənilən ödənişlər</h1>
            </div>

            <div className="hidden md:block p-5 overflow-x-auto border border-gray-300 rounded-xl">
                <div className='hidden md:block text-[16px] mb-5'>
                    <h1 className='font-semibold'>Təchizatçılara Ödənişlər</h1>
                    <h1 className='text-[#717182]'>Planlaşdırılmış və gözlənilən ödənişlər</h1>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-sm">
                            <th className="py-3">Təchizatçı</th>
                            <th className="py-3">Kateqoriya</th>
                            <th className="py-3">Son tarix</th>
                            <th className="py-3">Status</th>
                            <th className="py-3 text-right">Məbləğ</th>
                            <th className="py-3 text-right">Emeliyyatlar</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {odenisData.map((item, i) => (
                            <tr key={i} className="border-b border-gray-300 hover:bg-gray-50 transition">
                                <td className="py-3">{item.name}</td>
                                <td className="py-3">{item.cat}</td>
                                <td className="py-3">{item.date}</td>
                                <td className="py-3">{item.status}</td>
                                <td className="py-3 text-right font-medium text-black">{item.amount}</td>
                                <td className="py-3 text-right">{item.emeliyyat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden flex flex-col gap-4">
                {odenisData.map((item, i) => (
                    <div key={i} className="border border-gray-300 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Təchizatçı:</span>
                            <span className="font-medium text-xs">{item.name}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Kateqoriya:</span>
                            <span>{item.cat}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Son tarix:</span>
                            <span>{item.date}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Status:</span>
                            <span>{item.status}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">Məbləğ:</span>
                            <span className="font-medium">{item.amount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">Emeliyyat:</span>
                            <span>{item.emeliyyat}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OdenisTab
