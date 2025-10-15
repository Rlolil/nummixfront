import { useState } from "react";
import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";

import { HiPlus } from "react-icons/hi";
import CustomersTableRow from "../components/CustomersTableRow";

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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">Müştərilər</h2>
                    <p className="text-zinc-600">Müştəri məlumatları və satış tarixçəsi</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">Yeni Müştəri</p>
                    </button>
                    <dialog id="addNew" className="modal">
                        <div className="modal-box">
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("addNew").close()}
                            >
                                ✕
                            </button>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">Yeni Müştəri Əlavə Et!</h3>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Şirkət Adı</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="Şirkət Adını daxil edin"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">VÖEN</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="VÖEN nömrəsini"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Əlaqə Şəxs</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="Ad Soyad"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Telefon</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="+994 XX XXX XX XX"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Email</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="email@example.com"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Ünvan</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="Ünvan"
                                            />
                                        </label>
                                    </div>
                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4"
                                            onClick={() => document.getElementById("addNew").close()}
                                        >
                                            Ləğv et
                                        </button>
                                        <button className="btn btn-neutral rounded-lg mt-4" type="submit">
                                            Yadda saxla
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            className="modal-backdrop"
                            onClick={() => document.getElementById("addNew").close()}
                        />
                    </dialog>
                </div>
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
                                    className="grow placeholder:text-gray-600"
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
                                                <th className="text-right hidden sm:table-cell">
                                                    Ümumi Satış
                                                </th>
                                                <th className="text-right">Borc</th>
                                                <th className="text-right"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchedData?.map((item, index) => (
                                                <CustomersTableRow key={index} item={item} />
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
