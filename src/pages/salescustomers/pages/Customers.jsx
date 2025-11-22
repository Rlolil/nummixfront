import { useState, useEffect } from "react";
import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";

import { HiPlus } from "react-icons/hi";
import CustomersTableRow from "../components/CustomersTableRow";
import { useTranslation } from "react-i18next";
import { getCustomers, createCustomer, updateCustomer } from "../../../services";

export default function Customers() {
    const { t } = useTranslation();
    const [dataState, setDataState] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
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

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const data = await getCustomers();
            const customers = Array.isArray(data) ? data : [];
            setDataState(customers);
            setSearchedData(customers);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    const handleSearch = (e) => {
        const filteredData = dataState.filter((item) =>
            item.companyName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchedData(filteredData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCustomer(newCustomer);
            fetchCustomers();
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
        } catch (error) {
            console.error("Error creating customer:", error);
        }
    };

    const handleOpenEdit = (index) => {
        setEditIndex(index);
        setEditCustomer({ ...dataState[index] });
        document.getElementById("editDialog")?.showModal();
    };

    const handleEditSave = async (e) => {
        e.preventDefault();
        if (editIndex === null || !editCustomer) return;
        try {
            const id = editCustomer.id || editCustomer._id;
            if (id) {
                await updateCustomer(id, editCustomer);
                fetchCustomers();
            }
            setEditCustomer(null);
            setEditIndex(null);
            document.getElementById("editDialog")?.close();
        } catch (error) {
            console.error("Error updating customer:", error);
        }
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm(t("common.confirmDelete"));
        if (!confirmed) return;
        const updated = dataState.filter((_, i) => i !== index);
        setDataState(updated);
        setSearchedData(updated);
    };

    return (
        <div className="w-full flex flex-col gap-6 bg-white dark:bg-[#001233] text-black dark:text-white">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-black dark:text-white">
                        {t("pages.sales.customers.title")}
                    </h2>
                    <p className="text-zinc-600 dark:text-[#7D8597]">
                        {t("pages.sales.customers.subtitle")}
                    </p>
                </div>
                <div>
                    <button
                        className="btn bg-[#0466CB] text-[#FFFFFF] hover:bg-[#0453A4] dark:bg-[#0466CB] dark:hover:bg-[#0453A4] btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.sales.customers.newButton")}</p>
                    </button>
                    <dialog id="addNew" className="modal">
                        <div className="modal-box bg-white dark:bg-[#001233] text-black dark:text-white">
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
                                        {/* Inputs */}
                                        {["companyName","taxNumber","contactPerson","phone","email","address"].map((field) => (
                                            <label key={field} className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">
                                                    {t(`pages.sales.customers.form.${field}`)}
                                                </p>
                                                <input
                                                    type="text"
                                                    className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#33415C] border-0 dark:text-white"
                                                    placeholder={t(`pages.sales.customers.placeholders.${field}`)}
                                                    value={newCustomer[field]}
                                                    onChange={(e) =>
                                                        setNewCustomer({ ...newCustomer, [field]: e.target.value })
                                                    }
                                                />
                                            </label>
                                        ))}
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
                        <div className="modal-box bg-white dark:bg-[#001233] text-black dark:text-white">
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
                                        {["companyName","taxNumber","contactPerson","phone","email","address"].map((field) => (
                                            <label key={field} className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">
                                                    {t(`pages.sales.customers.form.${field}`)}
                                                </p>
                                                <input
                                                    type="text"
                                                    className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 dark:bg-[#33415C] border-0 dark:text-white"
                                                    placeholder={t(`pages.sales.customers.placeholders.${field}`)}
                                                    value={editCustomer?.[field] || ""}
                                                    onChange={(e) =>
                                                        setEditCustomer({ ...editCustomer, [field]: e.target.value })
                                                    }
                                                />
                                            </label>
                                        ))}
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
                        amount={<div className="text-2xl text-black dark:text-white">248</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.totalCustomers")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-black dark:text-white">186</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.regularCustomers")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-black dark:text-white">23</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.newCustomers")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-red-500 dark:text-red-400">₼ 12,500</div>}
                        greenText={null}
                        description={t("pages.sales.customers.cards.totalDebt")}
                        icon={null}
                    />
                </div>

                <BodyCard
                    title={null}
                    child={
                        <div className="w-full flex flex-col gap-6">
                            <label className="input w-full rounded-lg bg-zinc-100 dark:bg-[#33415C] border-0 text-black dark:text-white flex items-center gap-2 px-2">
                                <svg
                                    className="h-[1em] opacity-50 dark:opacity-70"
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
                                    className="grow placeholder:text-gray-600 dark:placeholder:text-[#7D8597] bg-transparent border-0 focus:ring-0"
                                    placeholder={t("pages.sales.customers.searchPlaceholder")}
                                    onChange={handleSearch}
                                />
                            </label>
                            <div className="overflow-x-auto">
                                <table className="table text-base text-black dark:text-white">
                                    <thead>
                                        <tr className="text-black dark:text-white text-base">
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
                    }
                />
            </div>
        </div>
    );
}
