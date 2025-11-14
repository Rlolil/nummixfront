import { useState } from "react";
import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";

import { HiPlus } from "react-icons/hi";
import CustomersTableRow from "../components/CustomersTableRow";
import { useTranslation } from "react-i18next";

const initialData = [
    {
        companyName: "ABC Şirkəti",
        taxNumber: "1234567890",
        contactPerson: "Əli Məmmədov",
        phone: "+994 50 123 45 67",
        segmentCode: "regular",
        totalSales: "₼145,000",
        debt: "₼0",
    },
    {
        companyName: "DEF Holding",
        taxNumber: "0987654321",
        contactPerson: "Aysel Hüseynova",
        phone: "+994 51 987 65 43",
        segmentCode: "new",
        totalSales: "₼76,000",
        debt: "₼5,400",
    },
    {
        companyName: "GHI Ltd.",
        taxNumber: "1122334455",
        contactPerson: "Elvin Quliyev",
        phone: "+994 55 123 45 67",
        segmentCode: "overdue",
        totalSales: "₼145,000",
        debt: "₼0",
    },
];

export default function Customers() {
    const { t } = useTranslation();
    const [dataState, setDataState] = useState(initialData);
    const [searchedData, setSearchedData] = useState(initialData);
    const [newCustomer, setNewCustomer] = useState({
        companyName: "",
        taxNumber: "",
        contactPerson: "",
        phone: "",
        email: "",
        address: "",
        segmentCode: "regular",
        totalSales: "₼0",
        debt: "₼0",
    });
    const [editCustomer, setEditCustomer] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const handleSearch = (e) => {
        const filteredData = dataState.filter((item) =>
            item.companyName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchedData(filteredData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const updated = [...dataState, newCustomer];
        setDataState(updated);
        setSearchedData(updated);
        setNewCustomer({
            companyName: "",
            taxNumber: "",
            contactPerson: "",
            phone: "",
            email: "",
            address: "",
            segmentCode: "regular",
            totalSales: "₼0",
            debt: "₼0",
        });
        document.getElementById("addNew")?.close();
    };

    const handleOpenEdit = (index) => {
        setEditIndex(index);
        setEditCustomer({ ...dataState[index] });
        document.getElementById("editDialog")?.showModal();
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        if (editIndex === null) return;
        const updated = [...dataState];
        updated[editIndex] = editCustomer;
        setDataState(updated);
        setSearchedData(updated);
        setEditCustomer(null);
        setEditIndex(null);
        document.getElementById("editDialog")?.close();
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm(t("pages.sales.customers.confirmDelete"));
        if (!confirmed) return;
        const updated = dataState.filter((_, i) => i !== index);
        setDataState(updated);
        setSearchedData(updated);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.sales.customers.title")}</h2>
                    <p className="text-zinc-600">{t("pages.sales.customers.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.sales.customers.newButton")}</p>
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
                                <h3 className="font-bold text-lg">{t("pages.sales.customers.modal.title")}</h3>
                                <form onSubmit={handleAddSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.companyName")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.companyName")}
                                                value={newCustomer.companyName}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, companyName: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.taxId")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.taxId")}
                                                value={newCustomer.taxNumber}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, taxNumber: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.contactPerson")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.contactName")}
                                                value={newCustomer.contactPerson}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, contactPerson: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.phone")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.phone")}
                                                value={newCustomer.phone}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.email")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.email")}
                                                value={newCustomer.email}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.address")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.address")}
                                                value={newCustomer.address}
                                                onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
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
                    <dialog id="editDialog" className="modal">
                        <div className="modal-box">
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("editDialog").close()}
                            >
                                ✕
                            </button>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">{t("pages.sales.customers.editModal.title")}</h3>
                                <form onSubmit={handleEditSave} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.companyName")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.companyName")}
                                                value={editCustomer?.companyName || ""}
                                                onChange={(e) => setEditCustomer({ ...editCustomer, companyName: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.taxId")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.taxId")}
                                                value={editCustomer?.taxNumber || ""}
                                                onChange={(e) => setEditCustomer({ ...editCustomer, taxNumber: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.contactPerson")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.contactName")}
                                                value={editCustomer?.contactPerson || ""}
                                                onChange={(e) => setEditCustomer({ ...editCustomer, contactPerson: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.phone")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.phone")}
                                                value={editCustomer?.phone || ""}
                                                onChange={(e) => setEditCustomer({ ...editCustomer, phone: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.email")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.email")}
                                                value={editCustomer?.email || ""}
                                                onChange={(e) => setEditCustomer({ ...editCustomer, email: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.sales.customers.form.address")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.sales.customers.placeholders.address")}
                                                value={editCustomer?.address || ""}
                                                onChange={(e) => setEditCustomer({ ...editCustomer, address: e.target.value })}
                                            />
                                        </label>
                                    </div>
                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4"
                                            onClick={() => document.getElementById("editDialog").close()}
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
                            onClick={() => document.getElementById("editDialog").close()}
                        />
                    </dialog>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">248</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.totalCustomers")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">186</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.regularCustomers")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">23</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.newCustomers")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-red-500">₼ 12,500</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.totalDebt")}
                        icon={null}
                    />
                </div>
                <BodyCard
                    title={null}
                    child={
                        <div className="w-full flex flex-col gap-6">
                            <label className="input w-full rounded-lg bg-zinc-100 border-0">
                                <svg
                                    className="h-[1em] opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
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
                                    placeholder={t("pages.sales.customers.searchPlaceholder")}
                                    onChange={handleSearch}
                                />
                            </label>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table text-base">
                                        <thead>
                                            <tr className="text-black text-base">
                                                <th>{t("pages.sales.customers.table.columns.companyName")}</th>
                                                <th className="hidden md:table-cell">{t("pages.sales.customers.table.columns.contact")}</th>
                                                <th className="hidden md:table-cell">{t("pages.sales.customers.table.columns.phone")}</th>
                                                <th className="hidden lg:table-cell">{t("pages.sales.customers.table.columns.segment")}</th>
                                                <th className="text-right hidden sm:table-cell">
                                                    {t("pages.sales.customers.table.columns.totalSales")}
                                                </th>
                                                <th className="text-right">{t("pages.sales.customers.table.columns.debt")}</th>
                                                <th className="text-right"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {searchedData?.map((item, index) => (
                                                <CustomersTableRow
                                                    key={index}
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
                        </div>
                    }
                />
            </div>
        </div>
    );
}
