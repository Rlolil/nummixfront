import { useState, useRef } from "react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

import Info from "./ShowMore/Info";
import SalesHistory from "./ShowMore/SalesHistory";
import Payments from "./ShowMore/Payments";
import { useTranslation } from "react-i18next";

export default function SalesTableRow({ item }) {
    const { t } = useTranslation();
    const dialogRef = useRef(null);
    // const [currentTab, setCurrentTab] = useState(1);

    // const renderTabContent = () => {
    //     switch (currentTab) {
    //         case 1:
    //             return <Info item={item} />;
    //         case 2:
    //             return <SalesHistory item={item} />;
    //         case 3:
    //             return <Payments item={item} />;
    //         default:
    //             return null;
    //     }
    // };

    return (
        <tr>
            <td className="flex items-center gap-2">
                <FaRegFileAlt className="text-zinc-600" />
                {item.invoiceNumber}
            </td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.customer}</td>
            <td className="text-right">{item.amount}</td>
            <td className="hidden sm:table-cell">
                <span
                    className={`badge font-semibold text-xs ${
                        item.statusCode === "overdue"
                            ? "badge-error"
                            : item.statusCode === "unpaid"
                            ? "badge-warning"
                            : "badge-success"
                    }`}
                >
                    {t(`pages.sales.sales.status.${item.statusCode}`)}
                </span>
            </td>
            <td className="text-right">
                <div className="flex justify-center items-center gap-2">
                    <button
                        className="hover:bg-zinc-200 p-2 rounded-lg transition-all"
                        onClick={() => dialogRef.current && dialogRef.current.showModal()}
                    >
                        <MdOutlineRemoveRedEye className="size-5" />
                    </button>
                    <button
                        className="hover:bg-zinc-200 p-2 rounded-lg transition-all"
                        onClick={() => dialogRef.current && dialogRef.current.showModal()}
                    >
                        <MdOutlineFileDownload className="size-5" />
                    </button>
                </div>
                <dialog ref={dialogRef} className="modal text-left">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">{item.customer}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.sales.sales.table.columns.invoiceNo")}</p>
                                    <p>{item.invoiceNumber}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.sales.sales.table.columns.date")}</p>
                                    <p>{item.date}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.sales.sales.table.columns.customer")}</p>
                                    <p>{item.customer}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.sales.sales.table.columns.status")}</p>
                                    <p>
                                        <span
                                            className={`badge font-semibold text-xs ${
                                                item.statusCode === "overdue"
                                                    ? "badge-error"
                                                    : item.statusCode === "unpaid"
                                                    ? "badge-warning"
                                                    : "badge-success"
                                            }`}
                                        >
                                            {t(`pages.sales.sales.status.${item.statusCode}`)}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.sales.sales.table.columns.amount")}</p>
                                    <p>{item.amount}</p>
                                </div>
                            </div>
                            {/* <div className="w-full bg-zinc-200 rounded-xl p-1 grid grid-cols-3 gap-1">
                                <div
                                    onClick={() => setCurrentTab(1)}
                                    className={`${
                                        currentTab === 1 ? "bg-white" : ""
                                    } text-sm rounded-lg px-3 py-1 font-semibold text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
                                >
                                    Məlumat
                                </div>
                                <div
                                    onClick={() => setCurrentTab(2)}
                                    className={`${
                                        currentTab === 2 ? "bg-white" : ""
                                    } text-sm rounded-lg px-3 py-1 font-semibold text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
                                >
                                    Satış Tarixçəsi
                                </div>
                                <div
                                    onClick={() => setCurrentTab(3)}
                                    className={`${
                                        currentTab === 3 ? "bg-white" : ""
                                    } text-sm rounded-lg px-3 py-1 font-semibold text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
                                >
                                    Ödənişlər
                                </div>
                            </div>
                            {renderTabContent()} */}
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>{t("pages.sales.customers.actions.close")}</button>
                    </form>
                </dialog>
            </td>
        </tr>
    );
}
