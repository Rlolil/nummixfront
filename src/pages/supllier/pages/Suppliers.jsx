import { HiPlus } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Suppliers() {
    const { t } = useTranslation();
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
                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.companyName")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.companyName")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.companyTaxId")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.taxId")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.contactPerson")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.contactName")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.phone")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.phone")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.email")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.email")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.suppliers.form.address")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.suppliers.placeholders.address")}
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
                <input type="search" className="grow placeholder:text-gray-600" placeholder={t("pages.supplier.suppliers.searchPlaceholder")} />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border-1 hover:bg-zinc-100 transition border-zinc-300 rounded-lg p-4 flex flex-col gap-6">
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
                                className="lucide lucide-building2 lucide-building-2 h-6 w-6"
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
                            <h3 className="font-semibold">GlobalSupply LLC</h3>
                            <p className="text-zinc-500 text-sm">{t("pages.supplier.suppliers.sample.taxId")}: 1234567890</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="badge badge-soft text-xs font-semibold">{t("pages.supplier.suppliers.sample.category.officeSupplies")}</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-zinc-500 flex items-center gap-2">
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
                                    className="lucide lucide-phone h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                </svg>
                                <p className="text-sm">info@azertechizat.az</p>
                            </div>
                            <div className="text-zinc-500 flex items-center gap-2">
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
                                    className="lucide lucide-mail h-4 w-4"
                                    ariaHidden="true"
                                >
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                                <p className="text-sm">info@azertechizat.az</p>
                            </div>
                            <div className="text-zinc-500 flex items-center gap-2">
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
                                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                                >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <p className="text-sm">Bakı şəh., Yasamal r-nu, N. Nərimanov pr. 23</p>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-300"></div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center font-semibold text-lg">
                                <p className="text-zinc-700">{t("pages.supplier.suppliers.sample.debt")}</p>
                                <p className="text-orange-500">1450.00 AZN</p>
                            </div>
                            <div className="flex justify-between items-center font-semibold text-lg">
                                <p className="text-zinc-700">{t("pages.supplier.suppliers.sample.rating")}</p>
                                <p>⭐ 4.5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
