import { useState } from "react";
import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";

import TableRow from "../components/TableRow";

const data = [
    {
        companyName: "ABC Şirkəti",
        taxNumber: "1234567890",
        contactPerson: "Əli Məmmədov",
        phone: "+994 50 123 45 67",
        segment: "Daimi Müştəri",
        totalSales: "₼145,000",
        debt: "₼0",
    },
    {
        companyName: "DEF Holding",
        taxNumber: "0987654321",
        contactPerson: "Aysel Hüseynova",
        phone: "+994 51 987 65 43",
        segment: "Yeni Müştəri",
        totalSales: "₼76,000",
        debt: "₼5,400",
    },
    {
        companyName: "GHI Ltd.",
        taxNumber: "1122334455",
        contactPerson: "Elvin Quliyev",
        phone: "+994 55 123 45 67",
        segment: "Gecikən Ödəniş",
        totalSales: "₼145,000",
        debt: "₼0",
    },
];

export default function Customers() {
    const [searchedData, setSearchedData] = useState(data);

    const handleSearch = (e) => {
        const filteredData = data.filter((item) =>
            item.companyName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchedData(filteredData);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div>
                <h2 className="text-2xl font-semibold">Müştərilər</h2>
                <p className="text-zinc-600">Müştəri məlumatları və satış tarixçəsi</p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">248</div>}
                        greenText={null}
                        description="Ümumi Müştəri"
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">186</div>}
                        greenText={null}
                        description="Daimi Müştəri"
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">23</div>}
                        greenText={null}
                        description="Yeni Müştəri"
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-red-500">₼ 12,500</div>}
                        greenText={null}
                        description="Ümumi Borc"
                        icon={null}
                    />
                </div>
                <BodyCard
                    title={null}
                    child={
                        <div className="w-full flex flex-col gap-6">
                            <label className="input w-full rounded-lg bg-zinc-100 border-0">
                                <svg
                                    className="h-[1em] opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input
                                    type="search"
                                    className="grow"
                                    placeholder="Müştəri axtar"
                                    onChange={handleSearch}
                                />
                            </label>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table text-base">
                                        <thead>
                                            <tr className="text-black text-base">
                                                <th>Şirkət Adı</th>
                                                <th className="hidden md:table-cell">Əlaqə</th>
                                                <th className="hidden md:table-cell">Telefon</th>
                                                <th className="hidden lg:table-cell">Seqment</th>
                                                <th className="text-right hidden sm:table-cell">Ümumi Satış</th>
                                                <th className="text-right">Borc</th>
                                                <th className="text-right"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchedData?.map((item, index) => (
                                                <TableRow key={index} item={item} />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
