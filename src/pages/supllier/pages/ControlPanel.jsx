import { FiDollarSign } from "react-icons/fi";
import { MdPeopleOutline } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";

import HeadCard from "../../salescustomers/components/HeadCard";
import BodyCard from "../../salescustomers/components/BodyCard";

import { useTranslation } from "react-i18next";

export default function ControlPanel() {
    const { t } = useTranslation();
    return (
        <div className="w-full flex flex-col gap-6 
                        bg-white text-[#001233]
                        dark:bg-[#001233] dark:text-white transition-all">

            <div>
                <h2 className="text-2xl font-semibold">
                    {t("pages.supplier.controlPanel.title")}
                </h2>
                <p className="text-zinc-600 dark:text-[#7D8597]">
                    {t("pages.supplier.controlPanel.subtitle")}
                </p>
            </div>

            <div className="flex flex-col gap-4">

                {/* Card 1 */}
                <div className="
                    border border-[#979DAC] dark:border-[#33415C] 
                    bg-white dark:bg-[#001845]
                    rounded-xl p-6 flex items-center gap-2">
                    
                    <div className="text-[#023E7D] dark:text-[#0466CB]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-circle-alert h-4 w-4" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" x2="12" y1="8" y2="12" />
                            <line x1="12" x2="12.01" y1="16" y2="16" />
                        </svg>
                    </div>

                    <span className="font-semibold">2</span> 
                    {t("pages.supplier.controlPanel.contractsExpiring")} 
                    <a className="hover:underline font-semibold text-[#023E7D] dark:text-[#0466CB]">
                        {t("pages.supplier.common.view")}
                    </a>
                </div>

                {/* Card 2 */}
                <div className="
                    border border-[#979DAC] dark:border-[#33415C] 
                    bg-white dark:bg-[#001845]
                    text-red-600 dark:text-red-400
                    rounded-xl p-6 flex items-center gap-2">

                    <div className="text-red-600 dark:text-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-circle-alert h-4 w-4" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" x2="12" y1="8" y2="12" />
                            <line x1="12" x2="12.01" y1="16" y2="16" />
                        </svg>
                    </div>

                    <span className="font-semibold">1</span> 
                    {t("pages.supplier.controlPanel.hasOverduePayment")} 
                    <a className="hover:underline font-semibold text-red-600 dark:text-red-400">
                        {t("pages.supplier.common.view")}
                    </a>
                </div>
            </div>

            <div className="flex flex-col gap-6">

                {/* HEAD CARDS */}
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <HeadCard
                        title={t("pages.supplier.controlPanel.cards.suppliers")}
                        amount={<div className="text-2xl">3</div>}
                        greenText={null}
                        description={t("pages.supplier.common.vsPrevMonth")}
                        icon={<FiDollarSign className="text-[#023E7D] dark:text-[#0466CB]" />}
                    />

                    <HeadCard
                        title={t("pages.supplier.controlPanel.cards.activeOrders")}
                        amount={<div className="text-2xl">3</div>}
                        greenText={null}
                        description={t("pages.supplier.controlPanel.cards.inProgress")}
                        icon={<MdPeopleOutline className="text-[#023E7D] dark:text-[#0466CB]" />}
                    />

                    <HeadCard
                        title={t("pages.supplier.controlPanel.cards.agreements")}
                        amount={<div className="text-2xl">2</div>}
                        greenText={null}
                        description={t("pages.supplier.controlPanel.cards.expiringCount", { count: 2 })}
                        icon={<IoCartOutline className="text-[#023E7D] dark:text-[#0466CB]" />}
                    />

                    <HeadCard
                        title={t("pages.supplier.controlPanel.cards.totalDebt")}
                        amount={<div className="text-2xl">52986.25 ₼</div>}
                        greenText={null}
                        description={t("pages.supplier.controlPanel.cards.debtToSuppliers")}
                        icon={<AiOutlineRise className="text-[#023E7D] dark:text-[#0466CB]" />}
                    />
                </div>

                {/* BODY CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Latest Orders */}
                    <BodyCard
                        title={t("pages.supplier.controlPanel.latestOrders")}
                        child={
                            <div className="flex flex-col gap-4">

                                <div className="flex justify-between items-center py-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold">PO-2025-001</h3>
                                        <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                            AzərTəchizat MMC
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <p>955 AZN</p>
                                        <div className="badge badge-neutral text-sm font-semibold">
                                            {t("pages.supplier.common.approved")}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold">PO-2025-001</h3>
                                        <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                            AzərTəchizat MMC
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <p>9515 AZN</p>
                                        <div className="badge badge-soft text-sm font-semibold">
                                            {t("pages.supplier.common.sent")}
                                        </div>
                                    </div>
                                </div>

                                <button className="
                                    btn rounded-lg 
                                    bg-[#0466CB] text-white 
                                    hover:bg-[#0453A4]
                                    dark:bg-[#023E7D] dark:hover:bg-[#0453A4]">
                                    {t("pages.supplier.common.viewAll")}
                                </button>
                            </div>
                        }
                    />

                    {/* Urgent Payments */}
                    <BodyCard
                        title={t("pages.supplier.controlPanel.urgentPayments")}
                        child={
                            <div className="flex flex-col gap-4">

                                <div className="flex justify-between items-center py-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold">Azərbaycan Kimya MMC</h3>
                                        <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                            {t("pages.supplier.common.dueDate")}: 2025-10-11
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end gap-1">
                                        <p>8500 AZN</p>
                                        <div className="badge badge-error text-sm font-semibold">
                                            {t("pages.supplier.payments.status.overdue")}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold">GlobalSupply LLC</h3>
                                        <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                            {t("pages.supplier.common.dueDate")}: 2025-10-12
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end gap-1">
                                        <p>2275 USD</p>
                                        <div className="badge badge-soft text-sm font-semibold">
                                            {t("pages.supplier.payments.status.partial")}
                                        </div>
                                    </div>
                                </div>

                                <button className="
                                    btn rounded-lg 
                                    bg-[#0466CB] text-white 
                                    hover:bg-[#0453A4]
                                    dark:bg-[#023E7D] dark:hover:bg-[#0453A4]">
                                    {t("pages.supplier.common.viewAll")}
                                </button>
                            </div>
                        }
                    />

                    {/* Top Suppliers */}
                    <div className="sm:col-span-2">
                        <BodyCard
                            title={t("pages.supplier.controlPanel.topSuppliers")}
                            child={
                                <div className="flex flex-col gap-4">

                                    <div className="flex justify-between items-center py-3">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-zinc-200 dark:bg-[#33415C] p-2 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-building2 h-5 w-5">
                                                    <path d="M10 12h4"></path>
                                                    <path d="M10 8h4"></path>
                                                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                                </svg>
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-semibold">AzərTəchizat MMC</h3>
                                                <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                                    {t("pages.supplier.analytics.categories.officeSupplies")}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-1">
                                            <p>{t("pages.supplier.common.debt")}: 15420.5 AZN</p>
                                            <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                                {t("pages.supplier.common.rating")}: ⭐ 4.5
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-3">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-zinc-200 dark:bg-[#33415C] p-2 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor"
                                                    strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-building2 h-5 w-5">
                                                    <path d="M10 12h4"></path>
                                                    <path d="M10 8h4"></path>
                                                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                                </svg>
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-semibold">GlobalSupply LLC</h3>
                                                <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                                    {t("pages.supplier.analytics.categories.officeSupplies")}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-1">
                                            <p>{t("pages.supplier.common.debt")}: 4256.5 AZN</p>
                                            <p className="text-zinc-500 dark:text-[#7D8597] text-sm">
                                                {t("pages.supplier.common.rating")}: ⭐ 4.1
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
