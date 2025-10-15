import { useRef } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function SalesTableRow({ item }) {
    const dialogRef = useRef(null);

    return (
        <tr>
            <td className="flex items-center gap-2">{item.orderNumber}</td>
            <td className="hidden md:table-cell">{item.supplier}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            <td className="hidden md:table-cell">{item.delivery}</td>
            <td>{item.amount}</td>
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
                                    <p className="font-semibold text-sm">Sifariş Nömrəsi</p>
                                    <p>{item.orderNumber}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Təchizatçı</p>
                                    <p>{item.supplier}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Tarix</p>
                                    <p>{item.date}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Çatdırılma</p>
                                    <p>{item.delivery}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Məbləğ</p>
                                    <p>{item.amount}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Status</p>
                                    <p>
                                        <span
                                            className={`badge font-semibold text-xs ${
                                                item.status === "Gecikmiş"
                                                    ? "badge-error"
                                                    : item.status === "Gözləyir"
                                                    ? "badge-warning"
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
