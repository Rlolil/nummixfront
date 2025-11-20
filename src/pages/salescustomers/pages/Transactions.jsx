import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";
import { useTranslation } from "react-i18next";

import { HiPlus } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

import TransactionsTableRow from "../components/TransactionsTableRow";
import { useState } from "react";

const initialTransactions = [
    {
        transactionId: "PAY-001",
        date: "2025-10-08",
        customer: "ABC Şirkəti",
        invoiceNumber: "INV-2025-001",
        amount: "₼12,500",
        method: "Bank Köçürməsi",
        statusCode: "completed",
        note: "",
    },
    {
        transactionId: "PAY-002",
        date: "2025-10-09",
        customer: "ABC Şirkəti",
        invoiceNumber: "INV-2025-002",
        amount: "₼1,200",
        method: "Bank Köçürməsi",
        statusCode: "pending",
        note: "",
    },
    {
        transactionId: "PAY-003",
        date: "2025-10-10",
        customer: "ABC Şirkəti",
        invoiceNumber: "INV-2025-003",
        amount: "₼5,400",
        method: "Bank Köçürməsi",
        statusCode: "overdue",
        note: "",
    },
];

export default function Transactions() {
    const { t } = useTranslation();
    const [transactions, setTransactions] = useState(initialTransactions);
    const [newPayment, setNewPayment] = useState({
        transactionId: "",
        date: "",
        customer: "",
        invoiceNumber: "",
        amount: "",
        method: "",
        statusCode: "completed",
        note: "",
    });
    const [editPayment, setEditPayment] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = newPayment.transactionId || `PAY-${String(transactions.length + 1).padStart(3, "0")}`;
        const added = { ...newPayment, transactionId: id };
        setTransactions([...transactions, added]);
        setNewPayment({
            transactionId: "",
            date: "",
            customer: "",
            invoiceNumber: "",
            amount: "",
            method: "",
            statusCode: "completed",
            note: "",
        });
        document.getElementById("addNew")?.close();
    };

    const handleOpenEdit = (index) => {
        setEditIndex(index);
        setEditPayment({ ...transactions[index] });
        document.getElementById("editPaymentDialog")?.showModal();
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        if (editIndex === null) return;
        const updated = [...transactions];
        updated[editIndex] = editPayment;
        setTransactions(updated);
        setEditPayment(null);
        setEditIndex(null);
        document.getElementById("editPaymentDialog")?.close();
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm(t("pages.sales.transactions.confirmDelete"));
        if (!confirmed) return;
        setTransactions(transactions.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full flex flex-col gap-6 dark:bg-[#001233] dark:text-[#FFFFFF]">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold dark:text-[#FFFFFF]">{t("pages.sales.transactions.title")}</h2>
                    <p className="text-zinc-600 dark:text-[#7D8597]">{t("pages.sales.transactions.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4 bg-[#0466CB] text-[#FFFFFF] hover:bg-[#0453A4] dark:bg-[#0466CB] dark:hover:bg-[#0453A4]"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="text-white" />
                        <p>{t("pages.sales.transactions.actions.newPayment")}</p>
                    </button>
                    <dialog id="addNew" className="modal">
                        <div className="modal-box dark:bg-[#33415C] dark:text-[#FFFFFF]">
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-[#FFFFFF]"
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
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#023E7D] dark:text-[#FFFFFF] border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.selectCustomer")}
                                                value={newPayment.customer}
                                                onChange={(e) => setNewPayment({ ...newPayment, customer: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.invoice")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#023E7D] dark:text-[#FFFFFF] border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.selectInvoice")}
                                                value={newPayment.invoiceNumber}
                                                onChange={(e) => setNewPayment({ ...newPayment, invoiceNumber: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.amount")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#023E7D] dark:text-[#FFFFFF] border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.amount")}
                                                value={newPayment.amount}
                                                onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.date")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#023E7D] dark:text-[#FFFFFF] border-0"
                                                value={newPayment.date}
                                                onChange={(e) => setNewPayment({ ...newPayment, date: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.method")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#023E7D] dark:text-[#FFFFFF] border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.method")}
                                                value={newPayment.method}
                                                onChange={(e) => setNewPayment({ ...newPayment, method: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.transactions.form.note")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#023E7D] dark:text-[#FFFFFF] border-0"
                                                placeholder={t("pages.sales.transactions.placeholders.note")}
                                                value={newPayment.note}
                                                onChange={(e) => setNewPayment({ ...newPayment, note: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4 dark:bg-[#023E7D] dark:text-[#FFFFFF]"
                                            onClick={() => document.getElementById("addNew").close()}
                                        >
                                            {t("common.cancel")}
                                        </button>
                                        <button className="btn btn-neutral rounded-lg mt-4 dark:bg-[#0466CB] dark:text-[#FFFFFF]" type="submit">
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

            <div className="flex flex-col gap-4 bg-red-50 dark:bg-[#023E7D]/20  p-3 rounded-lg">
                <div className="flex items-center  gap-2">
                    <RiErrorWarningLine className="text-red-500 dark:text-[#FF7F7F] size-5" />
                    <p className="text-red-500 dark:text-[#FF7F7F]">{t("pages.sales.transactions.overdue.title")}</p>
                </div>
                <div className="flex justify-between items-center bg-white dark:bg-[#33415C] p-3 rounded-lg">
                    <div className="flex flex-col">
                        <h3 className="font-semibold dark:text-[#FFFFFF]">DEF Holding</h3>
                        <p className="text-sm text-zinc-700 dark:text-[#7D8597] flex gap-2 sm:flex-row flex-col">
                            <span>{t("pages.sales.transactions.overdue.invoice")}: INV-2025-003</span> 
                            <span className="hidden sm:block">•</span> 
                            <span>{t("pages.sales.transactions.overdue.date")}: 2025-09-23</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-red-500 dark:text-[#FF7F7F]">₼5,400</p>
                        <button className="flex gap-2 items-center text-sm text-black dark:text-[#FFFFFF] font-semibold hover:bg-zinc-200 dark:hover:bg-[#023E7D] px-3 py-1 rounded-lg transition-all">
                            <FaRegBell />
                            <p className="hidden sm:block">{t("pages.sales.transactions.actions.notify")}</p>
                        </button>
                    </div>
                </div>
            </div>

            <BodyCard
                title={t("pages.sales.transactions.table.title")}
                child={
                    <div className="w-full flex flex-col gap-6 overflow-x-auto">
                        <table className="table text-base border-separate border-spacing-0">
                            <thead>
                                <tr className="text-black dark:text-[#FFFFFF] text-base">
                                    <th>{t("pages.sales.transactions.table.columns.paymentId")}</th>
                                    <th className="hidden md:table-cell">{t("pages.sales.transactions.table.columns.date")}</th>
                                    <th className="hidden md:table-cell">{t("pages.sales.transactions.table.columns.customer")}</th>
                                    <th className="hidden md:table-cell">{t("pages.sales.transactions.table.columns.invoice")}</th>
                                    <th className="text-right">{t("pages.sales.transactions.table.columns.amount")}</th>
                                    <th className="hidden sm:table-cell">{t("pages.sales.transactions.table.columns.method")}</th>
                                    <th className="hidden sm:table-cell">{t("pages.sales.transactions.table.columns.status")}</th>
                                    <th className="text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions?.map((item, index) => (
                                    <TransactionsTableRow
                                        key={index}
                                        item={item}
                                        index={index}
                                        onEditClick={() => handleOpenEdit(index)}
                                        onDelete={() => handleDelete(index)}
                                        darkModeColors={{
                                            bg: "#33415C",
                                            text: "#FFFFFF",
                                            secondaryText: "#7D8597",
                                            border: "#5C677D"
                                        }}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            />

            {/* Edit Payment Modal */}
            <dialog id="editPaymentDialog" className="modal">
                <div className="modal-box dark:bg-[#33415C] dark:text-[#FFFFFF]">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-[#FFFFFF]"
                        onClick={() => document.getElementById("editPaymentDialog").close()}
                    >
                        ✕
                    </button>
                    {/* form inside */}
                </div>
                <div className="modal-backdrop" onClick={() => document.getElementById("editPaymentDialog").close()} />
            </dialog>
        </div>
    );
}
