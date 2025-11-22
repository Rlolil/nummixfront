import { useTranslation } from "react-i18next";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function TransactionsTableRow({ item, index, onEditClick, onDelete }) {
    const { t } = useTranslation();
    return (
        <tr>
            <td className="flex items-center gap-2">{item.transactionId}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.customer}</td>
            <td>{item.invoiceNumber}</td>
            <td className="text-right">{item.amount}</td>
            <td className="hidden md:table-cell">{item.method}</td>
            <td className="hidden sm:table-cell">
                <span
                    className={`badge font-semibold text-xs ${
                        item.statusCode === "overdue"
                            ? "badge-error"
                            : item.statusCode === "pending"
                            ? "badge-warning"
                            : "badge-success"
                    }`}
                >
                    {t(`pages.sales.transactions.status.${item.statusCode ?? "completed"}`)}
                </span>
            </td>
            <td className="text-right">
                <button
                    className="dark:hover:bg-[#33415C] p-2 rounded-lg transition-all"
                    onClick={() => onEditClick && onEditClick(index)}
                    title={t("common.edit")}
                >
                    <FiEdit2 className="size-5" />
                </button>
                <button
                    className="dark:hover:bg-[#33415C] p-2 rounded-lg transition-all ml-2"
                    onClick={() => onDelete && onDelete(index)}
                    title={t("common.delete")}
                >
                    <FiTrash2 className="size-5" />
                </button>
            </td>
        </tr>
    );
}
