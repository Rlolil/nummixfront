import { HiPlus } from "react-icons/hi";
import BodyCard from "../../salescustomers/components/BodyCard";
import SalesTableRow from "../components/SalesTableRow";
import { useTranslation } from "react-i18next";

export default function Sales() {
    const { t } = useTranslation();
    const data = [
        {
            id: 1,
            orderNumber: "SO-1001",
            supplier: "ABC Ltd.",
            date: "2023-10-01",
            delivery: "2023-10-05",
            amount: 1000,
            status: "Gözləyir",
        },
        {
            id: 2,
            orderNumber: "SO-1002",
            supplier: "XYZ Inc.",
            date: "2023-10-02",
            delivery: "2023-10-06",
            amount: 1500,
            status: "Gecikmiş",
        },
    ];

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center gap-2">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.supplier.orders.title")}</h2>
                    <p className="text-zinc-600">{t("pages.supplier.orders.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.supplier.orders.newButton")}</p>
                    </button>
                    <dialog id="addNew" className="modal">
                        <div className="modal-box">
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("addNew").close()}
                            >
                                ✕
                            </button>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">{t("pages.supplier.orders.modal.title")}</h3>
                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.orders.form.orderNo")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.orders.placeholders.orderNo")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.orders.form.supplier")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.orders.placeholders.supplier")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.orders.form.date")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.orders.form.delivery")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.orders.form.amount")}</p>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.orders.placeholders.amount")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.orders.form.status")}</p>
                                            <select className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0">
                                                <option value="pending">{t("pages.supplier.orders.status.pending")}</option>
                                                <option value="delayed">{t("pages.supplier.orders.status.delayed")}</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.orders.form.notes")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                    </div>
                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4"
                                            onClick={() => document.getElementById("addNew").close()}
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
                        <div
                            className="modal-backdrop"
                            onClick={() => document.getElementById("addNew").close()}
                        />
                    </dialog>
                </div>
            </div>
            <label className="input w-full rounded-xl bg-zinc-100 border-0">
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
                                    <tr className="text-black text-base">
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
                                    {data?.map((item, index) => (
                                        <SalesTableRow key={index} item={item} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
