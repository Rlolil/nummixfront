import React from 'react'

const DaxilolmaTab = () => {
    const odenisData = [
        { name: "TechSupply MMC", cat: "IT", date: "2025-10-06", status: "Gecikmis", amount: "5,000 AZN", emeliyyat: "Ödə" },
        { name: "OfficeWorld", cat: "Ofis", date: "2025-10-12", status: "Gozleyir", amount: "1,200 AZN", emeliyyat: "Ödə" },
        { name: "Marketing Pro", cat: "Marketing", date: "2025-10-15", status: "Gozleyir", amount: "800 AZN", emeliyyat: "Ödə" },
        { name: "DataCenter LLC", cat: "IT", date: "2025-10-20", status: "Planlasdirilib", amount: "3,500 AZN", emeliyyat: "Ödə" },
        { name: "CleanCo", cat: "Xidmətlər", date: "2025-09-30", status: "Odenilib", amount: "3,500 AZN", emeliyyat: "Ödə" },
    ]
    return (
        <div className="overflow-x-auto border-1 border-gray-300 p-5 rounded-xl">
            <div className='text-[16px] mb-5'>
                <h1 className='font-semibold'>Müştərilərdən Daxilolmalar</h1>
                <h1 className='text-[#717182]'>Gözlənilən ödənişlər və fakturalar</h1>
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
                            <td className={`py-3 text-right font-medium ${item.amount.startsWith('+') ? "text-green-600" : "text-red-600"}`}>
                                {item.amount}
                            </td>
                            <td className="py-3 text-right">{item.emeliyyat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DaxilolmaTab