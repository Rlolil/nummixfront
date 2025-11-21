import { HiOutlineExclamation, HiPlus, HiOutlineDotsVertical, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import HeadCard from "../../salescustomers/components/HeadCard";
import { MdOutlineDateRange } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Agreements() {
    const { t } = useTranslation();

    // Sample agreements state
    const [agreements, setAgreements] = useState([
        {
            id: 1,
            contractNo: "CNT-2025-001",
            supplier: "AzərTəchizat MMC",
            amount: 1450.0,
            currency: "AZN",
            startDate: "2025-01-01",
            endDate: "2025-12-31",
            paymentTerm: "30",
            notes: t("pages.supplier.agreements.sample.description"),
            status: "active",
            daysLeft: 150,
        },
        {
            id: 2,
            contractNo: "CNT-2025-002",
            supplier: "EuroMaterials",
            amount: 3200.0,
            currency: "AZN",
            startDate: "2025-02-01",
            endDate: "2025-10-15",
            paymentTerm: "30",
            notes: t("pages.supplier.agreements.sample.description"),
            status: "active",
            daysLeft: 46,
        },
    ]);

    const [editAgreement, setEditAgreement] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const openEdit = (agreement, index) => {
        setEditAgreement({ ...agreement });
        setEditIndex(index);
        document.getElementById("editAgreementDialog")?.showModal();
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        if (editIndex === null) return;
        const updated = [...agreements];
        updated[editIndex] = editAgreement;
        setAgreements(updated);
        setEditAgreement(null);
        setEditIndex(null);
        document.getElementById("editAgreementDialog")?.close();
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm(t("pages.supplier.agreements.confirmDelete") || "Silinsin?");
        if (!confirmed) return;
        setAgreements(agreements.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.supplier.agreements.title")}</h2>
                    <p className="text-zinc-600">{t("pages.supplier.agreements.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral dark:bg-[#33415C] rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">
                            {t("pages.supplier.agreements.newButton")}
                        </p>
                    </button>

                    <dialog id="addNew" className="modal">
                        <div className="modal-box bg-white dark:bg-[#0F172A] text-black dark:text-white">

                            {/* Close button */}
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-gray-300"
                                onClick={() => document.getElementById("addNew").close()}
                            >
                                ✕
                            </button>

                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">
                                    {t("pages.supplier.agreements.modal.title")}
                                </h3>

                                <form className="flex flex-col gap-4">

                                    <div className="grid grid-cols-2 gap-4">

                                        {/* Contract No */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.contractNo")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B]
                text-black dark:text-gray-100 
                placeholder:text-gray-600 dark:placeholder:text-gray-400 
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                                placeholder={t("pages.supplier.agreements.placeholders.contractNo")}
                                            />
                                        </label>

                                        {/* Supplier */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.supplier")}</p>
                                            <select
                                                className="select h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B] 
                text-black dark:text-gray-100 
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                            >
                                                <option value="1">AzərTəchizat</option>
                                                <option value="2">EuroMaterials</option>
                                                <option value="3">GlobalSupply LLC</option>
                                            </select>
                                        </label>

                                        {/* Start Date */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.startDate")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B] 
                text-black dark:text-gray-100 
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                            />
                                        </label>

                                        {/* End Date */}
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.endDate")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B]
                text-black dark:text-gray-100
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.amount")}</p>
                                            <input
                                                type="number" step="0.01"
                                                className="input h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B]
                text-black dark:text-gray-100
                placeholder:text-gray-600 dark:placeholder:text-gray-400
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                                placeholder={t("pages.supplier.agreements.placeholders.amount")}
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.currency")}</p>
                                            <select
                                                className="select h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B]
                text-black dark:text-gray-100
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                            >
                                                <option value="AZN">AZN</option>
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                            </select>
                                        </label>

                                        {/* Payment Terms */}
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.paymentTerms")}</p>
                                            <select
                                                className="select h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B]
                text-black dark:text-gray-100
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                            >
                                                <option value="1">{t("pages.supplier.agreements.paymentTerms.days30")}</option>
                                                <option value="2">{t("pages.supplier.agreements.paymentTerms.days60")}</option>
                                                <option value="3">{t("pages.supplier.agreements.paymentTerms.days90")}</option>
                                            </select>
                                        </label>

                                        {/* Notes */}
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.notes")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full 
                bg-zinc-100 dark:bg-[#1E293B]
                text-black dark:text-gray-100
                placeholder:text-gray-600 dark:placeholder:text-gray-400
                border-0 focus:outline-2 focus:outline-zinc-400 dark:focus:outline-gray-500"
                                            />
                                        </label>

                                    </div>

                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200"
                                            onClick={() => document.getElementById("addNew").close()}
                                        >
                                            {t("common.cancel")}
                                        </button>

                                        <button
                                            className="btn btn-neutral rounded-lg mt-4"
                                            type="submit"
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
            <label className="input w-full rounded-xl bg-zinc-100 dark:bg-[#33415C] border-0">
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
                <input type="search" className="grow placeholder:text-gray-600 dark:bg-[#33415C]" placeholder={t("pages.supplier.agreements.searchPlaceholder")} />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {agreements.map((a, idx) => (
                    <div key={a.id} className="border-1  transition border-zinc-300 dark:bg-[#002855] dark:text-white rounded-lg p-4 flex flex-col gap-6">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-zinc-200 p-3 w-fit rounded-lg">
                                    <FaRegFileAlt className="size-5 text-zinc-600" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <h3 className="font-semibold">{a.contractNo}</h3>
                                    <p className="text-zinc-500 text-sm">{a.supplier}</p>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <button tabIndex={0} className="btn btn-ghost btn-circle">
                                    <HiOutlineDotsVertical className="size-5" />
                                </button>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44">
                                    <li>
                                        <button onClick={() => openEdit(a, idx)} className="flex items-center">
                                            <HiOutlinePencil className="mr-2" />{t("common.edit")}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleDelete(idx)} className="flex items-center">
                                            <HiOutlineTrash className="mr-2" />{t("common.delete")}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="badge badge-neutral text-xs font-semibold">{t(`pages.supplier.agreements.status.${a.status}`)}</div>
                            <div className="flex flex-col gap-2">
                                <div className="text-zinc-500 dark:text-white justify-between flex items-center gap-2">
                                    <p className="text-sm">{t("pages.supplier.agreements.sample.amount")}</p>
                                    <p className="text-black dark:text-white  text-sm">{a.amount.toFixed(2)} {a.currency}</p>
                                </div>
                                <div className="text-zinc-500 dark:text-white justify-between flex items-center gap-2">
                                    <p className="text-sm">{t("pages.supplier.agreements.sample.start")}</p>
                                    <p className="text-black dark:text-white text-sm">{a.startDate}</p>
                                </div>
                                <div className="text-zinc-500 dark:text-white justify-between flex items-center gap-2">
                                    <p className="text-sm">{t("pages.supplier.agreements.sample.end")}</p>
                                    <p className="text-black dark:text-white text-sm">{a.endDate}</p>
                                </div>
                                <div className="text-zinc-500 dark:text-white justify-between flex items-center gap-2">
                                    <p className="text-sm">{t("pages.supplier.agreements.sample.paymentTerm")}</p>
                                    <p className="text-black dark:text-white text-sm">{t(`pages.supplier.agreements.paymentTerms.days${a.paymentTerm}`)}</p>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-zinc-300"></div>
                            {a.daysLeft <= 60 ? (
                                <div className="flex items-center gap-2">
                                    <HiOutlineExclamation className="size-5 text-orange-600" />
                                    <p className="text-orange-600">{t("pages.supplier.agreements.sample.daysLeft", { days: a.daysLeft })}</p>
                                </div>
                            ) : null}
                            {a.daysLeft <= 60 && <div className="w-full h-0.5 bg-zinc-300"></div>}
                            <p className="text-zinc-700 dark:text-white">{a.notes}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <HeadCard
                    title={t("pages.supplier.agreements.cards.active.title")}
                    amount={<div className="text-2xl">1</div>}
                    greenText={null}
                    description={t("pages.supplier.agreements.cards.active.description")}
                    icon={<MdOutlineDateRange />}
                />
                <HeadCard
                    title={t("pages.supplier.agreements.cards.expiring.title")}
                    amount={<div className="text-2xl text-orange-600">2</div>}
                    greenText={null}
                    description={t("pages.supplier.agreements.cards.expiring.description")}
                    icon={<HiOutlineExclamation className="text-orange-600" />}
                />
                <HeadCard
                    title={t("pages.supplier.agreements.cards.totalValue.title")}
                    amount={<div className="text-2xl">42250 ₼</div>}
                    greenText={null}
                    description={t("pages.supplier.agreements.cards.totalValue.description")}
                    icon={<FaRegFileAlt />}
                />
            </div>
            {/* Edit Agreement Dialog */}
            <dialog id="editAgreementDialog" className="modal">
                <div className="modal-box">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("editAgreementDialog")?.close()}
                    >
                        ✕
                    </button>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">{t("pages.supplier.agreements.editModal.title") || "Müqaviləni Redaktə Et"}</h3>
                        <form onSubmit={handleEditSave} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.contractNo")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.contractNo || ""}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, contractNo: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.supplier")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.supplier || ""}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, supplier: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.startDate")}</p>
                                    <input
                                        type="date"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.startDate || ""}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, startDate: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.endDate")}</p>
                                    <input
                                        type="date"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.endDate || ""}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, endDate: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.amount")}</p>
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.amount || ""}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, amount: Number(e.target.value) })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.currency")}</p>
                                    <select
                                        className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.currency || "AZN"}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, currency: e.target.value })}
                                    >
                                        <option value="AZN">AZN</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-2 col-span-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.paymentTerms")}</p>
                                    <select
                                        className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.paymentTerm || "30"}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, paymentTerm: e.target.value })}
                                    >
                                        <option value="30">{t("pages.supplier.agreements.paymentTerms.days30")}</option>
                                        <option value="60">{t("pages.supplier.agreements.paymentTerms.days60")}</option>
                                        <option value="90">{t("pages.supplier.agreements.paymentTerms.days90")}</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-2 col-span-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.notes")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0"
                                        value={editAgreement?.notes || ""}
                                        onChange={(e) => setEditAgreement({ ...editAgreement, notes: e.target.value })}
                                    />
                                </label>
                            </div>
                            <div className="flex gap-2 justify-end items-center">
                                <button
                                    type="button"
                                    className="btn rounded-lg mt-4"
                                    onClick={() => document.getElementById("editAgreementDialog")?.close()}
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
                <div className="modal-backdrop" onClick={() => document.getElementById("editAgreementDialog")?.close()} />
            </dialog>
        </div>
    );
}
