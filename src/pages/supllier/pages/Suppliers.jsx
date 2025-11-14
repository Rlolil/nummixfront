import { HiPlus } from "react-icons/hi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const initialSuppliers = [
    {
        companyName: "GlobalSupply LLC",
        taxNumber: "1234567890",
        contactPerson: "Kamran Əliyev",
        phone: "+994 50 111 22 33",
        email: "info@globalsupply.az",
        address: "Bakı şəh., Yasamal r-nu, N. Nərimanov pr. 23",
        categoryKey: "officeSupplies",
        debt: "1450.00 AZN",
        rating: 4.5,
    },
];

export default function Suppliers() {
    const { t } = useTranslation();
    const [suppliers, setSuppliers] = useState(initialSuppliers);
    const [searchTerm, setSearchTerm] = useState("");
    const [newSupplier, setNewSupplier] = useState({
        companyName: "",
        taxNumber: "",
        contactPerson: "",
        phone: "",
        email: "",
        address: "",
        categoryKey: "officeSupplies",
        debt: "0 AZN",
        rating: 0,
    });
    const [editSupplier, setEditSupplier] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const filteredSuppliers = suppliers.filter((s) =>
        s.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddSubmit = (e) => {
        e.preventDefault();
        setSuppliers([...suppliers, newSupplier]);
        setNewSupplier({
            companyName: "",
            taxNumber: "",
            contactPerson: "",
            phone: "",
            email: "",
            address: "",
            categoryKey: "officeSupplies",
            debt: "0 AZN",
            rating: 0,
        });
        document.getElementById("addNew")?.close();
    };

    const handleOpenEdit = (index) => {
        setEditIndex(index);
        setEditSupplier({ ...suppliers[index] });
        document.getElementById("editSupplierDialog")?.showModal();
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        if (editIndex === null) return;
        const updated = [...suppliers];
        updated[editIndex] = editSupplier;
        setSuppliers(updated);
        setEditSupplier(null);
        setEditIndex(null);
        document.getElementById("editSupplierDialog")?.close();
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm(t("pages.supplier.suppliers.confirmDelete"));
        if (!confirmed) return;
        setSuppliers(suppliers.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center gap-2">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.supplier.suppliers.title")}</h2>
                    <p className="text-zinc-600">{t("pages.supplier.suppliers.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.supplier.suppliers.newButton")}</p>
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
                                <h3 className="font-bold text-lg">{t("pages.supplier.suppliers.modal.title")}</h3>
                                <form onSubmit={handleAddSubmit} className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.companyName")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.companyName")}
                                                value={newSupplier.companyName}
                                                onChange={(e) => setNewSupplier({ ...newSupplier, companyName: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.companyTaxId")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.taxId")}
                                                value={newSupplier.taxNumber}
                                                onChange={(e) => setNewSupplier({ ...newSupplier, taxNumber: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.contactPerson")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.contactName")}
                                                value={newSupplier.contactPerson}
                                                onChange={(e) => setNewSupplier({ ...newSupplier, contactPerson: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.phone")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.phone")}
                                                value={newSupplier.phone}
                                                onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.email")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.email")}
                                                value={newSupplier.email}
                                                onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.address")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.address")}
                                                value={newSupplier.address}
                                                onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.category")}</p>
                                            <select
                                                className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                value={newSupplier.categoryKey}
                                                onChange={(e) => setNewSupplier({ ...newSupplier, categoryKey: e.target.value })}
                                            >
                                                <option value="officeSupplies">{t("pages.supplier.suppliers.sample.category.officeSupplies")}</option>
                                                <option value="it">{t("pages.supplier.suppliers.sample.category.it")}</option>
                                                <option value="rawMaterials">{t("pages.supplier.suppliers.sample.category.rawMaterials")}</option>
                                            </select>
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
                    placeholder={t("pages.supplier.suppliers.searchPlaceholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredSuppliers.map((s, idx) => (
                    <div key={idx} className="border-1 hover:bg-zinc-100 transition border-zinc-300 rounded-lg p-4 flex flex-col gap-6 relative">
                        <div className="absolute top-2 right-2 flex gap-1">
                            <button
                                className="hover:bg-zinc-200 p-2 rounded-lg transition-all"
                                onClick={() => handleOpenEdit(idx)}
                                title={t("common.edit")}
                            >
                                <FiEdit2 className="size-4" />
                            </button>
                            <button
                                className="hover:bg-zinc-200 p-2 rounded-lg transition-all"
                                onClick={() => handleDelete(idx)}
                                title={t("common.delete")}
                            >
                                <FiTrash2 className="size-4" />
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-zinc-200 p-3 w-fit rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-building2 h-6 w-6"
                                    aria-hidden="true"
                                >
                                    <path d="M10 12h4"></path>
                                    <path d="M10 8h4"></path>
                                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-between">
                                <h3 className="font-semibold">{s.companyName}</h3>
                                <p className="text-zinc-500 text-sm">{t("pages.supplier.suppliers.sample.taxId")}: {s.taxNumber}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="badge badge-soft text-xs font-semibold">{t(`pages.supplier.suppliers.sample.category.${s.categoryKey}`)}</div>
                            <div className="flex flex-col gap-2">
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                    <p className="text-sm">{s.phone}</p>
                                </div>
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                    <p className="text-sm">{s.email}</p>
                                </div>
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <p className="text-sm">{s.address}</p>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-zinc-300"></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center font-semibold text-lg">
                                    <p className="text-zinc-700">{t("pages.supplier.suppliers.sample.debt")}</p>
                                    <p className="text-orange-500">{s.debt}</p>
                                </div>
                                <div className="flex justify-between items-center font-semibold text-lg">
                                    <p className="text-zinc-700">{t("pages.supplier.suppliers.sample.rating")}</p>
                                    <p>⭐ {s.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <dialog id="editSupplierDialog" className="modal">
                <div className="modal-box">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("editSupplierDialog").close()}
                    >
                        ✕
                    </button>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">{t("pages.supplier.suppliers.editModal.title")}</h3>
                        <form onSubmit={handleEditSave} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.companyName")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.companyName || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, companyName: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.companyTaxId")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.taxNumber || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, taxNumber: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.contactPerson")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.contactPerson || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, contactPerson: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.phone")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.phone || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, phone: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.email")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.email || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, email: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.address")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.address || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, address: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.category")}</p>
                                    <select
                                        className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.categoryKey || "officeSupplies"}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, categoryKey: e.target.value })}
                                    >
                                        <option value="officeSupplies">{t("pages.supplier.suppliers.sample.category.officeSupplies")}</option>
                                        <option value="it">{t("pages.supplier.suppliers.sample.category.it")}</option>
                                        <option value="rawMaterials">{t("pages.supplier.suppliers.sample.category.rawMaterials")}</option>
                                    </select>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.sample.debt")}</p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.debt || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, debt: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm">{t("pages.supplier.suppliers.sample.rating")}</p>
                                    <input
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        max="5"
                                        className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                        value={editSupplier?.rating || 0}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, rating: e.target.value })}
                                    />
                                </label>
                            </div>
                            <div className="flex gap-2 justify-end items-center">
                                <button
                                    type="button"
                                    className="btn rounded-lg mt-4"
                                    onClick={() => document.getElementById("editSupplierDialog").close()}
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
                <div className="modal-backdrop" onClick={() => document.getElementById("editSupplierDialog").close()} />
            </dialog>
        </div>
    );
}
