import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function SalesTableRow({ item, index, onEditClick, onDelete }) {
    const { t } = useTranslation();
    const dialogRef = useRef(null);

    const getBadgeClass = (status) => {
        switch (status) {
            case "delayed":
                return "badge badge-error";
            case "pending":
                return "badge badge-warning";
            default:
                return "badge badge-neutral";
        }
    };

    return (
        <tr className="dark:text-white text-black">
            <td className="flex items-center gap-2">{item.orderNumber}</td>
            <td className="hidden md:table-cell">{item.supplier}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.delivery}</td>
            <td>{item.amount}</td>
            <td className="hidden sm:table-cell">
                <span className={`${getBadgeClass(item.statusCode)}`}>
                    {t(`pages.supplier.orders.status.${item.statusCode || "pending"}`)}
                </span>
            </td>
            <td className="text-right">
                <div className="flex justify-center items-center gap-2">
                    <button
                        className="hover:bg-zinc-200 dark:hover:bg-[#002855] p-2 rounded-lg transition-all"
                        onClick={() => dialogRef.current && dialogRef.current.showModal()}
                    >
                        <MdOutlineRemoveRedEye className="size-5" />
                    </button>
                    <button
                        className="hover:bg-zinc-200 dark:hover:bg-[#002855] p-2 rounded-lg transition-all"
                        onClick={() => onEditClick && onEditClick(index)}
                        title="Edit"
                    >
                        <FiEdit2 className="size-5" />
                    </button>
                    <button
                        className="hover:bg-zinc-200 dark:hover:bg-[#002855] p-2 rounded-lg transition-all"
                        onClick={() => onDelete && onDelete(index)}
                        title="Delete"
                    >
                        <FiTrash2 className="size-5" />
                    </button>
                </div>

                <dialog ref={dialogRef} className="modal text-left">
                    <div className="modal-box bg-white dark:bg-[#001233] text-black dark:text-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white">
                                ✕
                            </button>
                        </form>
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg">{item.supplier}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.orderNo")}</p>
                                    <p>{item.orderNumber}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.supplier")}</p>
                                    <p>{item.supplier}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.date")}</p>
                                    <p>{item.date}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.delivery")}</p>
                                    <p>{item.delivery}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.amount")}</p>
                                    <p>{item.amount}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.status")}</p>
                                    <p>
                                        <span className={`${getBadgeClass(item.statusCode)}`}>
                                            {t(`pages.supplier.orders.status.${item.statusCode || "pending"}`)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop bg-black/40">
                        <button className="text-white">close</button>
                    </form>
                </dialog>
            </td>
        </tr>
    );
}
