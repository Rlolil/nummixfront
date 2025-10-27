import { HiOutlineExclamation, HiPlus } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import HeadCard from "../../salescustomers/components/HeadCard";
import { MdOutlineDateRange } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Agreements() {
    const { t } = useTranslation();
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.supplier.agreements.title")}</h2>
                    <p className="text-zinc-600">{t("pages.supplier.agreements.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.supplier.agreements.newButton")}</p>
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
                                <h3 className="font-bold text-lg">{t("pages.supplier.agreements.modal.title")}</h3>
                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.contractNo")}</p>
                                            <input
                                                type="text"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.agreements.placeholders.contractNo")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.supplier")}</p>
                                            <select className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0">
                                                <option value="1">AzərTəchizat</option>
                                                <option value="2">EuroMaterials</option>
                                                <option value="3">GlobalSupply LLC</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.startDate")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.endDate")}</p>
                                            <input
                                                type="date"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.amount")}</p>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                placeholder={t("pages.supplier.agreements.placeholders.amount")}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.currency")}</p>
                                            <select className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0">
                                                <option value="AZN">AZN</option>
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.paymentTerms")}</p>
                                            <select className="select h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 rounded-md bg-zinc-100 border-0">
                                                <option value="1">{t("pages.supplier.agreements.paymentTerms.days30")}</option>
                                                <option value="2">{t("pages.supplier.agreements.paymentTerms.days60")}</option>
                                                <option value="3">{t("pages.supplier.agreements.paymentTerms.days90")}</option>
                                            </select>
                                        </label>
                                        <label className="flex flex-col gap-2 col-span-2">
                                            <p className="font-semibold text-sm">{t("pages.supplier.agreements.form.notes")}</p>
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
                <input type="search" className="grow placeholder:text-gray-600" placeholder={t("pages.supplier.agreements.searchPlaceholder")} />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="border-1 hover:bg-zinc-100 transition border-zinc-300 rounded-lg p-4 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-3 w-fit rounded-lg">
                            <FaRegFileAlt className="size-5 text-zinc-600" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="font-semibold">CNT-2025-001</h3>
                            <p className="text-zinc-500 text-sm">AzərTəchizat MMC</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="badge badge-neutral text-xs font-semibold">{t("pages.supplier.agreements.status.active")}</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.amount")}</p>
                                <p className="text-black text-sm">1450.00 AZN</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.start")}</p>
                                <p className="text-black text-sm">2025-01-01</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.end")}</p>
                                <p className="text-black text-sm">2025-12-31</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.paymentTerm")}</p>
                                <p className="text-black text-sm">{t("pages.supplier.agreements.paymentTerms.days30")}</p>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-300"></div>
                        <p className="text-zinc-700">{t("pages.supplier.agreements.sample.description")}</p>
                    </div>
                </div>
                <div className="border-1 hover:bg-zinc-100 transition border-zinc-300 rounded-lg p-4 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-3 w-fit rounded-lg">
                            <FaRegFileAlt className="size-5 text-zinc-600" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="font-semibold">CNT-2025-001</h3>
                            <p className="text-zinc-500 text-sm">AzərTəchizat MMC</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="badge badge-neutral text-xs font-semibold">{t("pages.supplier.agreements.status.active")}</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.amount")}</p>
                                <p className="text-black text-sm">1450.00 AZN</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.start")}</p>
                                <p className="text-black text-sm">2025-01-01</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.end")}</p>
                                <p className="text-black text-sm">2025-12-31</p>
                            </div>
                            <div className="text-zinc-500 justify-between flex items-center gap-2">
                                <p className="text-sm">{t("pages.supplier.agreements.sample.paymentTerm")}</p>
                                <p className="text-black text-sm">{t("pages.supplier.agreements.paymentTerms.days30")}</p>
                            </div>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-300"></div>
                        <div className="flex items-center gap-2">
                            <HiOutlineExclamation className="size-5 text-orange-600" />
                            <p className="text-orange-600">{t("pages.supplier.agreements.sample.daysLeft", { days: 46 })}</p>
                        </div>
                        <div className="w-full h-0.5 bg-zinc-300"></div>
                        <p className="text-zinc-700">{t("pages.supplier.agreements.sample.description")}</p>
                    </div>
                </div>
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
        </div>
    );
}
