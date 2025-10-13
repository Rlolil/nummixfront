import { useState, useRef } from "react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

import Info from "./ShowMore/Info";
import SalesHistory from "./ShowMore/SalesHistory";
import Payments from "./ShowMore/Payments";

export default function TransactionsTableRow({ item }) {
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
