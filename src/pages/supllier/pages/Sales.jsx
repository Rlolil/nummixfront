import { HiPlus } from "react-icons/hi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import BodyCard from "../../salescustomers/components/BodyCard";
import SalesTableRow from "../components/SalesTableRow";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Sales() {
    const { t } = useTranslation();
    const [dataState, setDataState] = useState([
        {
            id: 1,
            orderNumber: "SO-1001",
            supplier: "ABC Ltd.",
            date: "2023-10-01",
            delivery: "2023-10-05",
            amount: 1000,
            statusCode: "pending",
        },
        {
            id: 2,
            orderNumber: "SO-1002",
            supplier: "XYZ Inc.",
            date: "2023-10-02",
            delivery: "2023-10-06",
            amount: 1500,
            statusCode: "delayed",
        },
    ]);

    const [editOrder, setEditOrder] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const handleOpenEdit = (index) => {
        setEditIndex(index);
        setEditOrder({ ...dataState[index] });
        document.getElementById("editOrderDialog")?.showModal();
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        if (editIndex === null) return;
        const updated = [...dataState];
        updated[editIndex] = editOrder;
        setDataState(updated);
        setEditOrder(null);
        setEditIndex(null);
        document.getElementById("editOrderDialog")?.close();
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm(t("pages.supplier.orders.confirmDelete") || "Silinsin?");
        if (!confirmed) return;
        setDataState(dataState.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center gap-2">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.supplier.orders.title")}</h2>
                    <p className="text-zinc-600">{t("pages.supplier.orders.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4 bg-[#0466CB] text-white hover:bg-[#0453A4] dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.supplier.orders.newButton")}</p>
                    </button>

                    <dialog id="addNew" className="modal">
                        <div className="modal-box bg-white dark:bg-[#001233] text-black dark:text-white">

                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-gray-300"
                                onClick={() => document.getElementById("addNew").close()}
                            >
                                ✕
                            </button>

                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg text-[#023E7D] dark:text-[#FFFFFF]">
                                    {t("pages.supplier.orders.modal.title")}
                                </h3>

                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">

                                        {/* Order No */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm text-[#5C677D]">{t("pages.supplier.orders.form.orderNo")}</p>
                                            <input
                                                type="text"
                                                placeholder={t("pages.supplier.orders.placeholders.orderNo")}
                                                className="input h-fit py-2 w-full rounded-md border-0
                           bg-[#FFFFFF] dark:bg-[#33415C]
                           text-black dark:text-white
                           placeholder:text-gray-600 dark:placeholder:text-gray-400
                           focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                            />
                                        </label>

                                        {/* Supplier */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">{t("pages.supplier.orders.form.supplier")}</p>
                                            <input
                                                type="text"
                                                placeholder={t("pages.supplier.orders.placeholders.supplier")}
                                                className="input h-fit py-2 w-full rounded-md border-0
                           bg-[#FFFFFF] dark:bg-[#33415C]
                           text-black dark:text-white
                           placeholder:text-gray-600 dark:placeholder:text-gray-400
                           focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                            />
                                        </label>

                                        {/* Date */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">{t("pages.supplier.orders.form.date")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full rounded-md border-0
                           bg-[#FFFFFF] dark:bg-[#33415C]
                           text-black dark:text-white
                           focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                            />
                                        </label>

                                        {/* Delivery */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">{t("pages.supplier.orders.form.delivery")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full rounded-md border-0
                           bg-[#FFFFFF] dark:bg-[#33415C]
                           text-black dark:text-white
                           focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                            />
                                        </label>

                                        {/* Amount */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">{t("pages.supplier.orders.form.amount")}</p>
                                            <input
                                                type="number"
                                                step="0.01"
                                                placeholder={t("pages.supplier.orders.placeholders.amount")}
                                                className="input h-fit py-2 w-full rounded-md border-0
                           bg-[#FFFFFF] dark:bg-[#33415C]
                           text-black dark:text-white
                           placeholder:text-gray-600 dark:placeholder:text-gray-400
                           focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                            />
                                        </label>

                                        {/* Status */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">{t("pages.supplier.orders.form.status")}</p>
                                            <select
                                                className="select h-fit py-2 w-full rounded-md border-0
                           bg-[#FFFFFF] dark:bg-[#33415C]
                           text-black dark:text-white
                           focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                            >
                                                <option value="pending">{t("pages.supplier.orders.status.pending")}</option>
                                                <option value="delayed">{t("pages.supplier.orders.status.delayed")}</option>
                                            </select>
                                        </label>

                                        {/* Notes */}
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">{t("pages.supplier.orders.form.notes")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full rounded-md border-0
                           bg-[#FFFFFF] dark:bg-[#33415C]
                           text-black dark:text-white
                           placeholder:text-gray-600 dark:placeholder:text-gray-400
                           focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                            />
                                        </label>

                                    </div>

                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4 bg-[#0466CB] text-white hover:bg-[#0453A4] dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
                                            onClick={() => document.getElementById("addNew").close()}
                                        >
                                            {t("common.cancel")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn rounded-lg mt-4 bg-[#0466CB] text-white hover:bg-[#0453A4] dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
                                        >
                                            {t("common.save")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div
                            className="modal-backdrop bg-black/40 dark:bg-black/60"
                            onClick={() => document.getElementById("addNew").close()}
                        />
                    </dialog>
                </div>

            </div>
            <label className="input w-full rounded-xl dark:bg-[#33415C] bg-zinc-100 border-0">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    type="search"
                    className="grow placeholder:text-gray-600"
                    placeholder={t("pages.supplier.orders.searchPlaceholder")}
                />
            </label>
            <BodyCard
                title={null}
                child={
                    <div className="w-full flex flex-col gap-6">
                        <h3>{t("pages.supplier.orders.table.title")}</h3>
                        <div className="overflow-x-auto">
                            <table className="table text-base">
                                <thead>
                                    <tr className="text-black dark:text-white text-base">
                                        <th>{t("pages.supplier.orders.table.columns.orderNo")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.orders.table.columns.supplier")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.orders.table.columns.date")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.orders.table.columns.delivery")}</th>
                                        <th>{t("pages.supplier.orders.table.columns.amount")}</th>
                                        <th className="hidden sm:table-cell">{t("pages.supplier.orders.table.columns.status")}</th>
                                        <th className="text-right"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataState?.map((item, index) => (
                                        <SalesTableRow
                                            key={item.id}
                                            item={item}
                                            index={index}
                                            onEditClick={() => handleOpenEdit(index)}
                                            onDelete={() => handleDelete(index)}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            />
            <dialog id="editOrderDialog" className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("editOrderDialog").close()}
                    >
                        ✕
                    </button>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">{t("pages.supplier.orders.editModal.title") || "Sifarişi Redaktə Et"}</h3>
                        <form onSubmit={handleEditSave} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.orderNo")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editOrder?.orderNumber || ""}
                                        onChange={(e) => setEditOrder({ ...editOrder, orderNumber: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.supplier")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editOrder?.supplier || ""}
                                        onChange={(e) => setEditOrder({ ...editOrder, supplier: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.date")}</p>
                                    <input
                                        type="date"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editOrder?.date || ""}
                                        onChange={(e) => setEditOrder({ ...editOrder, date: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.delivery")}</p>
                                    <input
                                        type="date"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editOrder?.delivery || ""}
                                        onChange={(e) => setEditOrder({ ...editOrder, delivery: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.amount")}</p>
                                    <input
                                        type="number"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editOrder?.amount || ""}
                                        onChange={(e) => setEditOrder({ ...editOrder, amount: Number(e.target.value) })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.orders.form.status")}</p>
                                    <select
                                        className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editOrder?.statusCode || ""}
                                        onChange={(e) => setEditOrder({ ...editOrder, statusCode: e.target.value })}
                                    >
                                        <option value="pending">{t("pages.supplier.orders.status.pending")}</option>
                                        <option value="delayed">{t("pages.supplier.orders.status.delayed")}</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex gap-2 justify-end items-center">
                                <button
                                    type="button"
                                    className="btn rounded-lg mt-4"
                                    onClick={() => document.getElementById("editOrderDialog").close()}
                                >
                                    {t("common.cancel")}
                                </button>
                                <button className="btn btn-neutral rounded-lg mt-4" type="submit">
                                    {t("common.save")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-backdrop" onClick={() => document.getElementById("editOrderDialog").close()} />
            </dialog>
        </div>
    );
}
