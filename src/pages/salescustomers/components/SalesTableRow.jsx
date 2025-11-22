import { useState, useRef } from "react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import Info from "./ShowMore/Info";
import SalesHistory from "./ShowMore/SalesHistory";
import Payments from "./ShowMore/Payments";
import { useTranslation } from "react-i18next";

export default function SalesTableRow({ item, index, onEditClick, onDelete }) {
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
                    className={`badge font-semibold text-xs ${item.statusCode === "overdue"
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
                        className="dark:hover:bg-[#33415C] p-2 rounded-lg transition-all"
                        onClick={() => dialogRef.current && dialogRef.current.showModal()}
                    >
                        <MdOutlineRemoveRedEye className="size-5" />
                    </button>
                    <button
                        className="dark:hover:bg-[#33415C] p-2 rounded-lg transition-all"
                        onClick={() => dialogRef.current && dialogRef.current.showModal()}
                    >
                        <MdOutlineFileDownload className="size-5" />
                    </button>
                    <button
                        className="dark:hover:bg-[#33415C] p-2 rounded-lg transition-all"
                        onClick={() => onEditClick && onEditClick(index)}
                        title="Edit"
                    >
                        <FiEdit2 className="size-5" />
                    </button>
                    <button
                        className="dark:hover:bg-[#33415C] p-2 rounded-lg transition-all"
                        onClick={() => onDelete && onDelete(index)}
                        title="Delete"
                    >
                        <FiTrash2 className="size-5" />
                    </button>
                </div>
                <dialog ref={dialogRef} className="modal text-left">
                    <div className="modal-box bg-white dark:bg-[#001233] text-black dark:text-white border-0 shadow-xl">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">
                                ✕
                            </button>
                        </form>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">{item.customer}</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">
                                        {t("pages.sales.sales.table.columns.invoiceNo")}
                                    </p>
                                    <p>{item.invoiceNumber}</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">
                                        {t("pages.sales.sales.table.columns.date")}
                                    </p>
                                    <p>{item.date}</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">
                                        {t("pages.sales.sales.table.columns.customer")}
                                    </p>
                                    <p>{item.customer}</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">
                                        {t("pages.sales.sales.table.columns.status")}
                                    </p>

                                    <span
                                        className={`badge font-semibold text-xs ${item.statusCode === "overdue"
                                                ? "badge-error"
                                                : item.statusCode === "unpaid"
                                                    ? "badge-warning"
                                                    : "badge-success"
                                            }`}
                                    >
                                        {t(`pages.sales.sales.status.${item.statusCode}`)}
                                    </span>
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">
                                        {t("pages.sales.sales.table.columns.amount")}
                                    </p>
                                    <p>{item.amount}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        method="dialog"
                        className="modal-backdrop bg-black/50 "
                    >
                        <button className="text-white">{t("pages.sales.customers.actions.close")}</button>
                    </form>
                </dialog>

            </td>
        </tr>
    );
}
