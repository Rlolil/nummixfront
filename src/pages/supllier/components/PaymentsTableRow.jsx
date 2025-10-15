import { useRef } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function PaymentsTableRow({ item }) {
    const dialogRef = useRef(null);

    return (
        <tr>
            <td className="flex items-center gap-2">{item.paymentNumber}</td>
            <td className="hidden sm:table-cell">{item.supplier}</td>
            <td className="hidden md:table-cell">
                {item.amount} {item.currency}
            </td>
            <td className="hidden md:table-cell">
                {item.paid} {item.currency}
            </td>
            <td
                className={`hidden md:table-cell ${
                    item.remaining === 0 ? "text-green-600" : "text-orange-600"
                }`}
            >
                {item.remaining} {item.currency}
            </td>
            <td className="hidden lg:table-cell">
                <div className="space-y-1">
                    <p>{item.dueDate}</p>
                    {item.overdueDays > 0 && (
                        <p className="text-xs text-red-500">{item.overdueDays} gün gecikib</p>
                    )}
                </div>
            </td>
            <td className="hidden sm:table-cell">
                <span
                    className={`badge font-semibold text-xs ${
                        item.status === "Gecikmiş"
                            ? "badge-error"
                            : item.status === "Qismən"
                            ? "badge-warning"
                            : item.status === "Ödənilib"
                            ? "badge-success"
                            : "badge-neutral"
                    }`}
                >
                    {item.status}
                </span>
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
                            <h3 className="font-bold text-lg">{item.supplier}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-sm">Ödəniş Nömrəsi</p>
                                    <p>{item.paymentNumber}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Məbləğ</p>
                                    <p>
                                        {item.amount} {item.currency}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Ödənilib</p>
                                    <p>
                                        {item.paid} {item.currency}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Qalıq</p>
                                    <p>
                                        {item.remaining} {item.currency}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Son Tarix</p>
                                    <p>{item.dueDate}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Status</p>
                                    <p>
                                        <span
                                            className={`badge font-semibold text-xs ${
                                                item.status === "Gecikmiş"
                                                    ? "badge-error"
                                                    : item.status === "Qismən"
                                                    ? "badge-warning"
                                                    : item.status === "Ödənilib"
                                                    ? "badge-success"
                                                    : "badge-neutral"
                                            }`}
                                        >
                                            {item.status}
                                        </span>
                                    </p>
                                </div>
                            </div>
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
