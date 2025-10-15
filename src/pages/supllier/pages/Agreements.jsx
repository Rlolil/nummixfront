import { HiOutlineExclamation, HiPlus } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import HeadCard from "../../salescustomers/components/HeadCard";
import { MdOutlineDateRange } from "react-icons/md";

export default function Agreements() {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">Müqavilələr</h2>
                    <p className="text-zinc-600">Təchizat müqavilələrinin idarə edilməsi və izlənməsi</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">Yeni Müqavilə</p>
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
                                <h3 className="font-bold text-lg">Yeni Müqavilə Əlavə Et!</h3>
                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Müqavilə №</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="Məs: SO-1003"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Təchizatçı</p>
                                            <select className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0">
                                                <option value="1">AzərTəchizat</option>
                                                <option value="2">EuroMaterials</option>
                                                <option value="3">GlobalSupply LLC</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Başlama Tarixi</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Bitmə Tarixi</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Məbləğ</p>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder="Məs: 1500"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">Valyuta</p>
                                            <select className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0">
                                                <option value="AZN">AZN</option>
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm">Ödəniş Şərtləri</p>
                                            <select className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0">
                                                <option value="1">30 gün ərzində</option>
                                                <option value="2">60 gün ərzində</option>
                                                <option value="3">90 gün ərzində</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm">Qeydlər</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
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
            <label className="input w-full rounded-xl bg-zinc-100 border-0">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                <input type="search" className="grow placeholder:text-gray-600" placeholder="Müştəri axtar" />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border-1 hover:bg-zinc-100 transition border-zinc-300 rounded-lg p-4 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-3 w-fit rounded-lg">
                            <FaRegFileAlt className="size-5 text-zinc-600" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="font-semibold">CNT-2025-001</h3>
                            <p className="text-zinc-500 text-sm">AzərTəchizat MMC</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="badge badge-neutral text-xs font-semibold">Aktiv</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Məbləğ:</p>
                                <p className="text-black text-sm">1450.00 AZN</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Başlama:</p>
                                <p className="text-black text-sm">2025-01-01</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Bitmə:</p>
                                <p className="text-black text-sm">2025-12-31</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Ödəniş şərti:</p>
                                <p className="text-black text-sm">30 gün ərzində</p>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-300"></div>
                        <p className="text-zinc-700">İllik ofis ləvazimatları təchizatı müqaviləsi</p>
                    </div>
                </div>
                <div className="border-1 hover:bg-zinc-100 transition border-zinc-300 rounded-lg p-4 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-3 w-fit rounded-lg">
                            <FaRegFileAlt className="size-5 text-zinc-600" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="font-semibold">CNT-2025-001</h3>
                            <p className="text-zinc-500 text-sm">AzərTəchizat MMC</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="badge badge-neutral text-xs font-semibold">Aktiv</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Məbləğ:</p>
                                <p className="text-black text-sm">1450.00 AZN</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Başlama:</p>
                                <p className="text-black text-sm">2025-01-01</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Bitmə:</p>
                                <p className="text-black text-sm">2025-12-31</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">Ödəniş şərti:</p>
                                <p className="text-black text-sm">30 gün ərzində</p>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-300"></div>
                        <div className="flex items-center gap-2">
                            <HiOutlineExclamation className="size-5 text-orange-600" />
                            <p className="text-orange-600">46 gün qalıb</p>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-300"></div>
                        <p className="text-zinc-700">İllik ofis ləvazimatları təchizatı müqaviləsi</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <HeadCard
                    title="Aktiv Müqavilələr"
                    amount={<div className="text-2xl">1</div>}
                    greenText={null}
                    description="Qüvvədə olan müqavilələr"
                    icon={<MdOutlineDateRange />}
                />
                <HeadCard
                    title="Bitməyə Yaxın"
                    amount={<div className="text-2xl text-orange-600">2</div>}
                    greenText={null}
                    description="Qüvvədə olan müqavilələr"
                    icon={<HiOutlineExclamation className="text-orange-600" />}
                />
                <HeadCard
                    title="Ümumi Dəyər"
                    amount={<div className="text-2xl">42250 ₼</div>}
                    greenText={null}
                    description="Bütün müqavilələrin dəyəri"
                    icon={<FaRegFileAlt />}
                />
            </div>
        </div>
    );
}
