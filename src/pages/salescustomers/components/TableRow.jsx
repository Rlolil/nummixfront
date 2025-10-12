import { useRef } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function TableRow({ item }) {
    const modal = useRef(null);

    return (
        <tr>
            <td>
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.companyName}</h3>
                    <p className="text-sm text-zinc-700">VÖEN: {item.taxNumber}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.contactPerson}</td>
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden lg:table-cell">
                <span
                    className={`badge font-semibold text-xs ${
                        item.segment === "Gecikən Ödəniş"
                            ? "bg-red-600 text-white"
                            : item.segment === "Yeni Müştəri"
                            ? "bg-zinc-200 text-zinc-800"
                            : "bg-zinc-800 text-white"
                    }`}
                >
                    {item.segment}
                </span>
            </td>
            <td className="text-right hidden sm:table-cell">{item.totalSales}</td>
            <td className={`text-right ${item.debt === "₼0" ? "text-green-600" : "text-red-600"}`}>
                {item.debt}
            </td>
            <td className="text-right">
                <button
                    className="hover:bg-zinc-100 p-2 rounded-lg transition-all"
                    onClick={() => modal.current.showModal()}
                >
                    <MdOutlineRemoveRedEye className="size-5" />
                </button>
                <dialog ref={modal} className="modal text-left">
                    <div className="modal-box flex flex-col gap-4">
                        <h3 className="font-bold text-lg">{item.companyName}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold text-sm">Əlaqə Şəxs</p>
                                <p>{item.contactPerson}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Telefon</p>
                                <p>{item.phone}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">VÖEN</p>
                                <p>{item.taxNumber}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Seqment</p>
                                <p>
                                    <span
                                        className={`badge font-semibold text-xs ${
                                            item.segment === "Gecikən Ödəniş"
                                                ? "bg-red-600 text-white"
                                                : item.segment === "Yeni Müştəri"
                                                ? "bg-zinc-200 text-zinc-800"
                                                : "bg-zinc-800 text-white"
                                        }`}
                                    >
                                        {item.segment}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Ümumi Satış</p>
                                <p>{item.totalSales}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Borc</p>
                                <p className={`${item.debt === "₼0" ? "text-green-600" : "text-red-600"}`}>
                                    {item.debt}
                                </p>
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
