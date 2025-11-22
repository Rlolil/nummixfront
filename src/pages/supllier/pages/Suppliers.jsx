import { HiPlus } from "react-icons/hi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { getSuppliers, createSupplier, updateSupplier } from "../../../services";

export default function Suppliers() {
    const { t } = useTranslation();
    const [suppliers, setSuppliers] = useState([]);
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

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        try {
            const data = await getSuppliers();
            setSuppliers(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching suppliers:", error);
        }
    };

    const filteredSuppliers = suppliers.filter((s) =>
        s.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            await createSupplier(newSupplier);
            fetchSuppliers();
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
        } catch (error) {
            console.error("Error creating supplier:", error);
        }
    };

    const handleOpenEdit = (index) => {
        setEditIndex(index);
        setEditSupplier({ ...suppliers[index] });
        document.getElementById("editSupplierDialog")?.showModal();
    };

    const handleEditSave = async (e) => {
        e.preventDefault();
        if (editIndex === null || !editSupplier) return;
        try {
            // Assuming supplier has an id field. If not, we might need to use index or something else, but backend usually provides id.
            const id = editSupplier.id || editSupplier._id; 
            if (id) {
                await updateSupplier(id, editSupplier);
                fetchSuppliers();
            }
            setEditSupplier(null);
            setEditIndex(null);
            document.getElementById("editSupplierDialog")?.close();
        } catch (error) {
            console.error("Error updating supplier:", error);
        }
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm(t("common.confirmDelete"));
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
                        className="btn rounded-lg flex justify-between items-center gap-4 
                   bg-[#0466CB] hover:bg-[#0453A4] text-white
                   dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.supplier.suppliers.newButton")}</p>
                    </button>

                    <dialog id="addNew" className="modal">
                        <div
                            className="modal-box 
                       bg-white text-[#001233]
                       dark:bg-[#33415C] dark:text-white"
                        >
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2
                           text-[#001233] dark:text-white"
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
                                                className="input h-fit py-2 w-full rounded-md border 
                                           bg-[#F5F8FF] text-[#001233] 
                                           placeholder:text-[#7D8597] 
                                           focus:outline-[#0466CB]
                                           dark:bg-[#001845] dark:text-white 
                                           dark:placeholder:text-[#7D8597]"
                                                placeholder={t("pages.supplier.suppliers.placeholders.companyName")}
                                                value={newSupplier.companyName}
                                                onChange={(e) =>
                                                    setNewSupplier({ ...newSupplier, companyName: e.target.value })
                                                }
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.companyTaxId")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full rounded-md border 
                                           bg-[#F5F8FF] text-[#001233] 
                                           placeholder:text-[#7D8597]
                                           focus:outline-[#0466CB]
                                           dark:bg-[#001845] dark:text-white 
                                           dark:placeholder:text-[#7D8597]"
                                                placeholder={t("pages.supplier.suppliers.placeholders.taxId")}
                                                value={newSupplier.taxNumber}
                                                onChange={(e) =>
                                                    setNewSupplier({ ...newSupplier, taxNumber: e.target.value })
                                                }
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.contactPerson")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full rounded-md border 
                                           bg-[#F5F8FF] text-[#001233]
                                           placeholder:text-[#7D8597]
                                           focus:outline-[#0466CB]
                                           dark:bg-[#001845] dark:text-white 
                                           dark:placeholder:text-[#7D8597]"
                                                placeholder={t("pages.supplier.suppliers.placeholders.contactName")}
                                                value={newSupplier.contactPerson}
                                                onChange={(e) =>
                                                    setNewSupplier({ ...newSupplier, contactPerson: e.target.value })
                                                }
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.phone")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full rounded-md border
                                           bg-[#F5F8FF] text-[#001233] 
                                           placeholder:text-[#7D8597]
                                           focus:outline-[#0466CB]
                                           dark:bg-[#001845] dark:text-white 
                                           dark:placeholder:text-[#7D8597]"
                                                placeholder={t("pages.supplier.suppliers.placeholders.phone")}
                                                value={newSupplier.phone}
                                                onChange={(e) =>
                                                    setNewSupplier({ ...newSupplier, phone: e.target.value })
                                                }
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.email")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full rounded-md border
                                           bg-[#F5F8FF] text-[#001233] 
                                           placeholder:text-[#7D8597]
                                           focus:outline-[#0466CB]
                                           dark:bg-[#001845] dark:text-white 
                                           dark:placeholder:text-[#7D8597]"
                                                placeholder={t("pages.supplier.suppliers.placeholders.email")}
                                                value={newSupplier.email}
                                                onChange={(e) =>
                                                    setNewSupplier({ ...newSupplier, email: e.target.value })
                                                }
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.address")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full rounded-md border
                                           bg-[#F5F8FF] text-[#001233]
                                           placeholder:text-[#7D8597]
                                           focus:outline-[#0466CB]
                                           dark:bg-[#001845] dark:text-white 
                                           dark:placeholder:text-[#7D8597]"
                                                placeholder={t("pages.supplier.suppliers.placeholders.address")}
                                                value={newSupplier.address}
                                                onChange={(e) =>
                                                    setNewSupplier({ ...newSupplier, address: e.target.value })
                                                }
                                            />
                                        </label>

                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.category")}</p>
                                            <select
                                                className="select h-fit py-2 w-full rounded-md border 
                                           bg-[#F5F8FF] text-[#001233]
                                           focus:outline-[#0466CB]
                                           dark:bg-[#001845] dark:text-white"
                                                value={newSupplier.categoryKey}
                                                onChange={(e) =>
                                                    setNewSupplier({ ...newSupplier, categoryKey: e.target.value })
                                                }
                                            >
                                                <option value="officeSupplies">
                                                    {t("pages.supplier.suppliers.sample.category.officeSupplies")}
                                                </option>
                                                <option value="it">
                                                    {t("pages.supplier.suppliers.sample.category.it")}
                                                </option>
                                                <option value="rawMaterials">
                                                    {t("pages.supplier.suppliers.sample.category.rawMaterials")}
                                                </option>
                                            </select>
                                        </label>
                                    </div>

                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4 
                                       bg-[#EEEEEE] text-[#001233] 
                                       hover:bg-[#D0D0D0]
                                       dark:bg-[#002855] dark:text-white 
                                       dark:hover:bg-[#023E7D]"
                                            onClick={() => document.getElementById("addNew").close()}
                                        >
                                            {t("common.cancel")}
                                        </button>

                                        <button
                                            className="btn rounded-lg mt-4 
                                       bg-[#0466CB] hover:bg-[#0453A4] text-white
                                       dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
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
                    <div key={idx} className="border-1 transition border-zinc-300 dark:bg-[#002855] rounded-lg p-4 flex flex-col gap-6 relative">
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
                                <div className="text-zinc-500 flex items-center gap-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 dark:text-white" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                                    <p className="text-sm dark:text-white">{s.phone}</p>
                                </div>
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 dark:text-white" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                                    <p className="text-sm dark:text-white">{s.email}</p>
                                </div>
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 dark:text-white" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <p className="text-sm dark:text-white">{s.address}</p>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-zinc-300"></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center font-semibold text-lg">
                                    <p className="text-zinc-700 dark:text-white">{t("pages.supplier.suppliers.sample.debt")}</p>
                                    <p className="text-orange-500">{s.debt}</p>
                                </div>
                                <div className="flex justify-between items-center font-semibold text-lg">
                                    <p className="text-zinc-700 dark:text-white">{t("pages.supplier.suppliers.sample.rating")}</p>
                                    <p>⭐ {s.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <dialog id="editSupplierDialog" className="modal">
                <div className="modal-box bg-white dark:bg-[#001233] text-black dark:text-white">

                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-gray-300"
                        onClick={() => document.getElementById("editSupplierDialog").close()}
                    >
                        ✕
                    </button>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg text-[#023E7D] dark:text-[#FFFFFF]">
                            {t("pages.supplier.suppliers.editModal.title")}
                        </h3>

                        <form onSubmit={handleEditSave} className="flex flex-col gap-4">

                            <div className="grid grid-cols-2 gap-4">

                                {/** Company Name */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.form.companyName")}
                                    </p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.companyName || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, companyName: e.target.value })}
                                    />
                                </label>

                                {/** Company Tax ID */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.form.companyTaxId")}
                                    </p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.taxNumber || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, taxNumber: e.target.value })}
                                    />
                                </label>

                                {/** Contact Person */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.form.contactPerson")}
                                    </p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.contactPerson || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, contactPerson: e.target.value })}
                                    />
                                </label>

                                {/** Phone */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.form.phone")}
                                    </p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.phone || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, phone: e.target.value })}
                                    />
                                </label>

                                {/** Email */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.form.email")}
                                    </p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.email || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, email: e.target.value })}
                                    />
                                </label>

                                {/** Address */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.form.address")}
                                    </p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.address || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, address: e.target.value })}
                                    />
                                </label>

                                {/** Category */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.form.category")}
                                    </p>
                                    <select
                                        className="select input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.categoryKey || "officeSupplies"}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, categoryKey: e.target.value })}
                                    >
                                        <option value="officeSupplies">{t("pages.supplier.suppliers.sample.category.officeSupplies")}</option>
                                        <option value="it">{t("pages.supplier.suppliers.sample.category.it")}</option>
                                        <option value="rawMaterials">{t("pages.supplier.suppliers.sample.category.rawMaterials")}</option>
                                    </select>
                                </label>

                                {/** Debt */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.sample.debt")}
                                    </p>
                                    <input
                                        type="text"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.debt || ""}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, debt: e.target.value })}
                                    />
                                </label>

                                {/** Rating */}
                                <label className="flex flex-col gap-2">
                                    <p className="font-semibold text-sm text-[#5C677D] dark:text-[#7D8597]">
                                        {t("pages.supplier.suppliers.sample.rating")}
                                    </p>
                                    <input
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        max="5"
                                        className="input h-fit py-2 w-full rounded-md border-0 
                         bg-[#FFFFFF] dark:bg-[#33415C] 
                         text-black dark:text-white 
                         placeholder:text-gray-600 dark:placeholder:text-gray-400
                         focus:outline-2 focus:outline-[#979DAC] dark:focus:outline-[#979DAC]"
                                        value={editSupplier?.rating || 0}
                                        onChange={(e) => setEditSupplier({ ...editSupplier, rating: e.target.value })}
                                    />
                                </label>

                            </div>

                            <div className="flex gap-2 justify-end items-center">
                                <button
                                    type="button"
                                    className="btn rounded-lg mt-4 bg-[#0466CB] text-white hover:bg-[#0453A4] dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
                                    onClick={() => document.getElementById("editSupplierDialog").close()}
                                >
                                    {t("common.cancel")}
                                </button>
                                <button
                                    className="btn rounded-lg mt-4 bg-[#0466CB] text-white hover:bg-[#0453A4] dark:bg-[#023E7D] dark:hover:bg-[#0453A4]"
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
                    onClick={() => document.getElementById("editSupplierDialog").close()}
                />
            </dialog>

        </div>
    );
}
