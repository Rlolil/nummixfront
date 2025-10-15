import { HiOutlineExclamation } from "react-icons/hi";
import HeadCard from "../../salescustomers/components/HeadCard";
import BodyCard from "../../salescustomers/components/BodyCard";
import { MdOutlinePayment } from "react-icons/md";

export default function Payments() {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">Ödənişlər</h2>
                    <p className="text-zinc-600">Təchizat ödənişlərinin idarə edilməsi və izlənməsi</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <HeadCard
                    title="Gözləyən Ödənişlər"
                    amount={<div className="text-2xl text-orange-600">10775.00 ₼</div>}
                    greenText={null}
                    description="Ödənilməli məbləğ"
                    icon={<MdOutlinePayment />}
                />
                <HeadCard
                    title="Ödənilib"
                    amount={<div className="text-2xl text-green-600">5000.00 ₼</div>}
                    greenText={null}
                    description="Bu ay ödənilən"
                    icon={<HiOutlineExclamation className="text-green-600" />}
                />
                <HeadCard
                    title="Gecikmiş Ödənişlər"
                    amount={<div className="text-2xl text-red-600">1</div>}
                    greenText={null}
                    description="Təcili diqqət tələb olunur"
                    icon={<MdOutlinePayment className="text-red-600" />}
                />
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
                <input
                    type="search"
                    className="grow placeholder:text-gray-600"
                    placeholder="Ödəniş axtar (nömrə, təchizatçı, istinad)..."
                />
            </label>
            <BodyCard
                title={null}
                child={
                    <div className="w-full flex flex-col gap-6">
                        <h3>Bütün Ödənişlər</h3>
                        <div className="overflow-x-auto">
                            <table className="table text-base">
                                <thead>
                                    <tr className="text-black text-base">
                                        <th>Ödəniş №</th>
                                        <th className="hidden sm:table-cell">Təchizatçı</th>
                                        <th className="hidden md:table-cell">Məbləğ</th>
                                        <th className="hidden md:table-cell">Ödənilib</th>
                                        <th className="hidden md:table-cell">Qalıq</th>
                                        <th className="hidden lg:table-cell">Son tarix</th>
                                        <th className="hidden sm:table-cell">Status</th>
                                        <th className="text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="font-medium">PAY-2025-001</td>
                                        <td className="hidden sm:table-cell">AzərTəchizat MMC</td>
                                        <td className="hidden md:table-cell">5000 AZN</td>
                                        <td className="hidden md:table-cell">5000 AZN</td>
                                        <td className="hidden md:table-cell text-green-600">0 AZN</td>
                                        <td className="hidden lg:table-cell">
                                            <div className="space-y-1">
                                                <p>2025-10-15</p>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <span className="badge font-semibold text-xs badge-success">
                                                Ödənilib
                                            </span>
                                        </td>
                                        <td className="text-right"></td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium">PAY-2025-002</td>
                                        <td className="hidden sm:table-cell">Azərbaycan Kimya MMC</td>
                                        <td className="hidden md:table-cell">8500 AZN</td>
                                        <td className="hidden md:table-cell">0 AZN</td>
                                        <td className="hidden md:table-cell text-orange-600">8500 AZN</td>
                                        <td className="hidden lg:table-cell">
                                            <div className="space-y-1">
                                                <p>2025-10-11</p>
                                                <p className="text-xs text-red-500">4 gün gecikib</p>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <span className="badge font-semibold text-xs badge-error">
                                                Gecikmiş
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-neutral btn-sm rounded-md h-8 px-3">
                                                Ödə
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium">PAY-2025-003</td>
                                        <td className="hidden sm:table-cell">GlobalSupply LLC</td>
                                        <td className="hidden md:table-cell">4275 USD</td>
                                        <td className="hidden md:table-cell">2000 USD</td>
                                        <td className="hidden md:table-cell text-orange-600">2275 USD</td>
                                        <td className="hidden lg:table-cell">
                                            <div className="space-y-1">
                                                <p>2025-10-12</p>
                                                <p className="text-xs text-red-500">3 gün gecikib</p>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <span className="badge font-semibold text-xs badge-warning">
                                                Qismən
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-neutral btn-sm rounded-md h-8 px-3">
                                                Ödə
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            />
            <BodyCard
                title={null}
                child={
                    <div className="flex flex-col gap-6">
                        <h4>Yaxınlaşan Ödənişlər (7 gün)</h4>
                        <p className="text-center text-zinc-500 py-8">Yaxın 7 gündə ödəniş yoxdur</p>
                    </div>
                }
            />
        </div>
    );
}
