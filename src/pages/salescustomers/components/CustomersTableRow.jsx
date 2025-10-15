import { useState, useRef } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import Info from "./ShowMore/Info";
import SalesHistory from "./ShowMore/SalesHistory";
import Payments from "./ShowMore/Payments";

export default function CustomersTableRow({ item }) {
    const dialogRef = useRef(null);
    const [currentTab, setCurrentTab] = useState(1);

    const renderTabContent = () => {
        switch (currentTab) {
            case 1:
                return <Info item={item} />;
            case 2:
                return <SalesHistory item={item} />;
            case 3:
                return <Payments item={item} />;
            default:
                return null;
        }
    };

    return (
        <tr>
            <td>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.companyName}</h3>
                    <p className="text-sm text-zinc-700">VÖEN: {item.taxNumber}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.contactPerson}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden lg:table-cell">
                <span
                    className={`badge font-semibold text-xs ${
                        item.segment === "Gecikən Ödəniş"
                            ? "badge-error"
                            : item.segment === "Yeni Müştəri"
                            ? "badge-ghost"
                            : "badge-neutral"
                    }`}
                >
                    {item.segment}
                </span>
            </td>
            <td className="text-right hidden sm:table-cell">{item.totalSales}</td>
            <td className={`text-right ${item.debt === "₼0" ? "text-green-600" : "text-red-600"}`}>
                {item.debt}
            </td>
            <td className="text-right">
                <button
                    className="hover:bg-zinc-200 p-2 rounded-lg transition-all"
                    onClick={() => dialogRef.current && dialogRef.current.showModal()}
                >
                    <MdOutlineRemoveRedEye className="size-5" />
                </button>
                <dialog ref={dialogRef} className="modal text-left">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">{item.companyName}</h3>
                            <div className="w-full bg-zinc-200 rounded-xl p-1 grid grid-cols-3 gap-1">
                                <div
                                    onClick={() => setCurrentTab(1)}
                                    className={`${
                                        currentTab === 1 ? "bg-white" : ""
                                    } flex items-center justify-center h-full text-sm rounded-lg px-3 py-1 font-semibold text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
                                >
                                    Məlumat
                                </div>
                                <div
                                    onClick={() => setCurrentTab(2)}
                                    className={`${
                                        currentTab === 2 ? "bg-white" : ""
                                    } flex items-center justify-center h-full text-sm rounded-lg px-3 py-1 font-semibold text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
                                >
                                    Satış Tarixçəsi
                                </div>
                                <div
                                    onClick={() => setCurrentTab(3)}
                                    className={`${
                                        currentTab === 3 ? "bg-white" : ""
                                    } flex items-center justify-center h-full text-sm rounded-lg px-3 py-1 font-semibold text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
                                >
                                    Ödənişlər
                                </div>
                            </div>
                            {renderTabContent()}
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </td>
        </tr>
    );
}
