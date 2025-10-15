export default function TransactionsTableRow({ item }) {
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
                        item.status === "Gecikmiş"
                            ? "badge-error"
                            : item.status === "Gözləyir"
                            ? "badge-warning"
                            : "badge-success"
                    }`}
                >
                    {item.status}
                </span>
            </td>
        </tr>
    );
}
