import { useTranslation } from "react-i18next";

export default function TransactionsTableRow({ item }) {
    const { t } = useTranslation();
    return (
        <tr>
            <td className="flex items-center gap-2">{item.transactionId}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.customer}</td>
            <td>{item.invoiceNumber}</td>
            <td className="text-right hidden md:table-cell">{item.amount}</td>
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
        </tr>
    );
}
