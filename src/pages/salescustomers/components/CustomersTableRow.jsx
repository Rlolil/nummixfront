import { useState, useRef } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import Info from "./ShowMore/Info";
import SalesHistory from "./ShowMore/SalesHistory";
import Payments from "./ShowMore/Payments";
import { useTranslation } from "react-i18next";

export default function CustomersTableRow({ item, index, onEditClick, onDelete }) {
    const { t } = useTranslation();
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
                    <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">
                        {t("pages.sales.customers.labels.taxIdShort")}: {item.taxNumber}
                    </p>
                </div>
            </td>

            <td className="hidden md:table-cell">{item.contactPerson}</td>
            <td className="hidden md:table-cell">{item.phone}</td>

            <td className="hidden lg:table-cell">
                <span
                    className={`badge font-semibold text-xs ${
                        item.segmentCode === "overdue"
                            ? "badge-error"
                            : item.segmentCode === "new"
                            ? "badge-ghost"
                            : "badge-neutral"
                    }`}
                >
                    {t(`pages.sales.customers.segments.${item.segmentCode}`)}
                </span>
            </td>

            <td className="text-right hidden sm:table-cell">{item.totalSales}</td>

            <td
                className={`text-right ${
                    item.debt === "₼0" ? "text-green-600" : "text-red-600"
                }`}
            >
                {item.debt}
            </td>

            <td className="text-right">
                <button
                    className="hover:bg-[#979DAC]/40 dark:hover:bg-[#33415C] p-2 rounded-lg transition-all"
                    onClick={() => dialogRef.current && dialogRef.current.showModal()}
                >
                    <MdOutlineRemoveRedEye className="size-5" />
                </button>

                <button
                className="hover:bg-[#979DAC]/40 dark:hover:bg-[#33415C] p-2 rounded-lg transition-all ml-2"
                onClick={() => onEditClick && onEditClick(index)}
                title="Edit"
                >
                    <FiEdit2 className="size-5" />
                </button>

                <button
                    className="hover:bg-[#979DAC]/40 dark:hover:bg-[#33415C] p-2 rounded-lg transition-all ml-2"
                    onClick={() => onDelete && onDelete(index)}
                    title="Delete"
                >
                    <FiTrash2 className="size-5" />
                </button>

                <dialog ref={dialogRef} className="modal text-left">
                    <div
                        className="
                            modal-box 
                            bg-white text-[#001233] 
                            dark:bg-[#33415C] dark:text-white
                            border border-[#979DAC] dark:border-[#5C677D]
                        "
                    >
                        <form method="dialog">
                            <button
                                className="
                                    btn btn-sm btn-circle btn-ghost 
                                    absolute right-2 top-2
                                    text-[#001233] dark:text-white
                                "
                            >
                                ✕
                            </button>
                        </form>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">{item.companyName}</h3>

                            <div
                                className="
                                    w-full rounded-xl p-1 grid grid-cols-3 gap-1
                                    bg-[#979DAC] dark:bg-[#001845]
                                "
                            >
                                <div
                                    onClick={() => setCurrentTab(1)}
                                    className={`
                                        ${
                                            currentTab === 1
                                                ? "bg-white dark:bg-[#023E7D] text-[#001233] dark:text-white"
                                                : "text-[#001233] dark:text-[#7D8597]"
                                        }
                                        flex items-center justify-center 
                                        text-sm rounded-lg px-3 py-1 font-semibold cursor-pointer
                                        hover:bg-[#0453A4] hover:text-white
                                        dark:hover:bg-[#023E7D]
                                        transition-all
                                    `}
                                >
                                    {t("pages.sales.customers.tabs.info")}
                                </div>

                                <div
                                    onClick={() => setCurrentTab(2)}
                                    className={`
                                        ${
                                            currentTab === 2
                                                ? "bg-white dark:bg-[#023E7D] text-[#001233] dark:text-white"
                                                : "text-[#001233] dark:text-[#7D8597]"
                                        }
                                        flex items-center justify-center 
                                        text-sm rounded-lg px-3 py-1 font-semibold cursor-pointer
                                        hover:bg-[#0453A4] hover:text-white
                                        dark:hover:bg-[#023E7D]
                                        transition-all
                                    `}
                                >
                                    {t("pages.sales.customers.tabs.salesHistory")}
                                </div>

                                <div
                                    onClick={() => setCurrentTab(3)}
                                    className={`
                                        ${
                                            currentTab === 3
                                                ? "bg-white dark:bg-[#023E7D] text-[#001233] dark:text-white"
                                                : "text-[#001233] dark:text-[#7D8597]"
                                        }
                                        flex items-center justify-center 
                                        text-sm rounded-lg px-3 py-1 font-semibold cursor-pointer
                                        hover:bg-[#0453A4] hover:text-white
                                        dark:hover:bg-[#023E7D]
                                        transition-all
                                    `}
                                >
                                    {t("pages.sales.customers.tabs.payments")}
                                </div>
                            </div>

                            {renderTabContent()}
                        </div>
                    </div>

                    <form
                        method="dialog"
                        className="
                            modal-backdrop 
                            bg-black/30 dark:bg-black/60 
                        "
                    >
                        <button className="text-white">
                            {t("pages.sales.customers.actions.close")}
                        </button>
                    </form>
                </dialog>
            </td>
        </tr>
    );
}
