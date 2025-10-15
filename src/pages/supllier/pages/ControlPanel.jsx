import { FiDollarSign } from "react-icons/fi";
import { MdPeopleOutline } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";

import HeadCard from "../../salescustomers/components/HeadCard";
import BodyCard from "../../salescustomers/components/BodyCard";

export default function ControlPanel() {
    return (
        <div className="w-full flex flex-col gap-6">
            <div>
                <h2 className="text-2xl font-semibold">İdarə Paneli</h2>
                <p className="text-zinc-600">Satış və müştəri məlumatlarına ümumi baxış</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="border-1 border-zinc-300 rounded-xl p-6 flex items-center gap-2">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="lucide lucide-circle-alert h-4 w-4"
                            ariaHidden="true"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                    </div>
                    <span className="font-semibold">2</span> müqavilənin müddəti tezliklə bitir.{" "}
                    <a className="hover:link font-semibold">Baxın</a>
                </div>
                <div className="border-1 text-red-500 border-zinc-300 rounded-xl p-6 flex items-center gap-2">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="lucide lucide-circle-alert h-4 w-4"
                            ariaHidden="true"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                    </div>
                    <span className="font-semibold">1</span> gecikmiş ödəniş var.{" "}
                    <a className="hover:link font-semibold">Baxın</a>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <HeadCard
                        title={"Təchizatçılar"}
                        amount={<div className="text-2xl">3</div>}
                        greenText={null}
                        description="əvvəlki aya nisbətən"
                        icon={<FiDollarSign />}
                    />
                    <HeadCard
                        title={"Aktiv Sifarişlər"}
                        amount={<div className="text-2xl">3</div>}
                        greenText={null}
                        description="İcrada olan sifariş"
                        icon={<MdPeopleOutline />}
                    />
                    <HeadCard
                        title={"Müqavilələr"}
                        amount={<div className="text-2xl">2</div>}
                        greenText={null}
                        description="2 bitir"
                        icon={<IoCartOutline />}
                    />
                    <HeadCard
                        title={"Ümumi Borc"}
                        amount={<div className="text-2xl">52986.25 ₼</div>}
                        greenText={null}
                        description="Təchizatçılara borc"
                        icon={<AiOutlineRise />}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <BodyCard
                        title={"Son Sifarişlər"}
                        child={
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center py-3">
                                    <div className="flex flex-col justify-between gap-1">
                                        <h3 className="font-semibold">PO-2025-001</h3>
                                        <p className="text-zinc-500 text-sm">AzərTəchizat MMC</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-between gap-1">
                                        <p>955 AZN</p>
                                        <div className="badge badge-neutral text-sm font-semibold">
                                            Təsdiqlənib
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col justify-between gap-1">
                                        <h3 className="font-semibold">PO-2025-001</h3>
                                        <p className="text-zinc-500 text-sm">AzərTəchizat MMC</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-between gap-1">
                                        <p>9515 AZN</p>
                                        <div className="badge badge-soft text-sm font-semibold">
                                            Göndərilib
                                        </div>
                                    </div>
                                </div>
                                <button className="btn rounded-lg">Hamısına Bax</button>
                            </div>
                        }
                    />
                    <BodyCard
                        title={"Təcili Ödənişlər"}
                        child={
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center py-3">
                                    <div className="flex flex-col justify-between gap-1">
                                        <h3 className="font-semibold">Azərbaycan Kimya MMC</h3>
                                        <p className="text-zinc-500 text-sm">Son tarix: 2025-10-11</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-between gap-1">
                                        <p>8500 AZN</p>
                                        <div className="badge badge-error text-sm font-semibold">
                                            Gecikmiş
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col justify-between gap-1">
                                        <h3 className="font-semibold">GlobalSupply LLC</h3>
                                        <p className="text-zinc-500 text-sm">Son tarix: 2025-10-12</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-between gap-1">
                                        <p>2275 USD</p>
                                        <div className="badge badge-soft text-sm font-semibold">
                                            Qismən ödənilib
                                        </div>
                                    </div>
                                </div>
                                <button className="btn rounded-lg">Hamısına Bax</button>
                            </div>
                        }
                    />
                    <div className="sm:col-span-2">
                        <BodyCard
                            title={"Ən Çox Alış Edilən Təchizatçılar"}
                            child={
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center py-3">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-zinc-200 p-2 w-fit rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-building2 lucide-building-2 h-5 w-5"
                                                    ariaHidden="true"
                                                >
                                                    <path d="M10 12h4"></path>
                                                    <path d="M10 8h4"></path>
                                                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col justify-between gap-1">
                                                <h3 className="font-semibold">AzərTəchizat MMC</h3>
                                                <p className="text-zinc-500 text-sm">Ofis ləvazimatları</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-between gap-1">
                                            <p>Borc: 15420.5 AZN</p>
                                            <p className="text-zinc-500 text-sm">Reytinq: ⭐ 4.5</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-zinc-200 p-2 w-fit rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-building2 lucide-building-2 h-5 w-5"
                                                    ariaHidden="true"
                                                >
                                                    <path d="M10 12h4"></path>
                                                    <path d="M10 8h4"></path>
                                                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col justify-between gap-1">
                                                <h3 className="font-semibold">GlobalSupply LLC</h3>
                                                <p className="text-zinc-500 text-sm">Ofis ləvazimatları</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-between gap-1">
                                            <p>Borc: 4256.5 AZN</p>
                                            <p className="text-zinc-500 text-sm">Reytinq: ⭐ 4.1</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
