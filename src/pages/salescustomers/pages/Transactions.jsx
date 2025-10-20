import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";
import { useTranslation } from "react-i18next";

import { HiPlus } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

import TransactionsTableRow from "../components/TransactionsTableRow";

const data = [
    {
        transactionId: "PAY-001",
        date: "2025-10-08",
        customer: "ABC Şirkəti",
        invoiceNumber: "INV-2025-001",
        amount: "₼12,500",
        method: "Bank Köçürməsi",
        status: "Tamamlandı",
    },
    {
        transactionId: "PAY-001",
        date: "2025-10-08",
        customer: "ABC Şirkəti",
        invoiceNumber: "INV-2025-001",
        amount: "₼12,500",
        method: "Bank Köçürməsi",
        status: "Gözləyir",
    },
    {
        transactionId: "PAY-001",
        date: "2025-10-08",
        customer: "ABC Şirkəti",
        invoiceNumber: "INV-2025-001",
        amount: "₼12,500",
        method: "Bank Köçürməsi",
        status: "Gecikmiş",
    },
];

export default function Transactions() {
    const { t } = useTranslation();
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.sales.transactions.title")}</h2>
                    <p className="text-zinc-600">{t("pages.sales.transactions.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.sales.transactions.actions.newPayment")}</p>
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
                                <h3 className="font-bold text-lg">{t("pages.sales.transactions.modal.title")}</h3>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.customer")}</p>
                                            <select
                                                defaultValue="select"
                                                className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            >
                                                <option disabled value="select">{t("pages.sales.transactions.placeholders.selectCustomer")}</option>
                                                <option value="A">ABC Şirkəti</option>
                                                <option value="B">XYZ Şirkəti</option>
                                                <option value="C">MNO Şirkəti</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.invoice")}</p>
                                            <select
                                                defaultValue="select"
                                                className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            >
                                                <option disabled value="select">{t("pages.sales.transactions.placeholders.selectInvoice")}</option>
                                                <option value="1">INV-2025-001</option>
                                                <option value="2">INV-2025-002</option>
                                                <option value="3">INV-2025-003</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.amount")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.amount")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.date")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.method")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.method")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.note")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.note")}
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
            <div className="flex flex-col gap-6">
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-green-600">₼ 42,400</div>}
                        greenText={null}
                        description={t("pages.sales.transactions.cards.completed")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-orange-400">₼ 21,400</div>}
                        greenText={null}
                        description={t("pages.sales.transactions.cards.pending")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-red-500">₼ 15,600</div>}
                        greenText={null}
                        description={t("pages.sales.transactions.cards.overdue")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">3</div>}
                        greenText={null}
                        description={t("pages.sales.transactions.cards.toNotify")}
                        icon={null}
                    />
                </div>
                <div className="flex flex-col gap-4 outline-red-200 outline-2 bg-red-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                        <RiErrorWarningLine className="text-red-500 size-5" />
                        <p className="text-red-500">{t("pages.sales.transactions.overdue.title")}</p>
                    </div>
                    <div className="flex justify-between items-center outline-red-200 outline-2 bg-white p-3 rounded-lg">
                        <div className="flex flex-col">
                            <h3 className="font-semibold">DEF Holding</h3>
                            <p className="text-sm text-zinc-700 flex gap-2 sm:flex-row flex-col">
                                <span>{t("pages.sales.transactions.overdue.invoice")}: INV-2025-003</span> <span className="hidden sm:block">•</span> <span>{t("pages.sales.transactions.overdue.date")}: 2025-09-23</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-red-500">₼5,400</p>
                            <button className="flex gap-2 items-center text-sm text-black font-semibold hover:bg-zinc-200 outline-zinc-200 outline sm:px-2 sm:py-1 p-3 rounded-lg transition-all">
                                <FaRegBell />
                                <p className="hidden sm:block">{t("pages.sales.transactions.actions.notify")}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <BodyCard
                    title={null}
                    child={
                        <div className="w-full flex flex-col gap-6">
                            <h3>Fakturalar</h3>
                            <div className="overflow-x-auto">
                                <table className="table text-base">
                                    <thead>
                                        <tr className="text-black text-base">
                                            <th>Ödəniş ID</th>
                                            <th className="hidden md:table-cell">Tarix</th>
                                            <th className="hidden md:table-cell">Müştəri</th>
                                            <th className="hidden md:table-cell">Faktura</th>
                                            <th className="text-right">Məbləğ</th>
                                            <th className="hidden sm:table-cell">Method</th>
                                            <th className="hidden sm:table-cell">Status</th>
                                            <th className="text-right"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, index) => (
                                            <TransactionsTableRow key={index} item={item} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
