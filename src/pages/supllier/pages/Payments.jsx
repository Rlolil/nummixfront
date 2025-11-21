import { HiOutlineExclamation } from "react-icons/hi";
import HeadCard from "../../salescustomers/components/HeadCard";
import BodyCard from "../../salescustomers/components/BodyCard";
import { MdOutlinePayment } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Payments() {
    const { t } = useTranslation();
    return (
        <div className="w-full flex flex-col gap-6 bg-white text-[#001233] dark:bg-[#001233] dark:text-white">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-[#023E7D] dark:text-[#0466CB]">
                        {t("pages.supplier.payments.title")}
                    </h2>
                    <p className="text-[#7D8597] dark:text-[#5C677D]">
                        {t("pages.supplier.payments.subtitle")}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <HeadCard
                    title={t("pages.supplier.payments.cards.pending.title")}
                    amount={<div className="text-2xl text-orange-600 dark:text-orange-400">10775.00 ₼</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.pending.description")}
                    icon={<MdOutlinePayment className="text-[#001233] dark:text-white" />}
                />
                <HeadCard
                    title={t("pages.supplier.payments.cards.paid.title")}
                    amount={<div className="text-2xl text-green-600 dark:text-green-400">5000.00 ₼</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.paid.description")}
                    icon={<HiOutlineExclamation className="text-green-600 dark:text-green-400" />}
                />
                <HeadCard
                    title={t("pages.supplier.payments.cards.overdue.title")}
                    amount={<div className="text-2xl text-red-600 dark:text-red-400">1</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.overdue.description")}
                    icon={<MdOutlinePayment className="text-red-600 dark:text-red-400" />}
                />
            </div>

            <label className="input w-full rounded-xl bg-[#f4f4f5] dark:bg-[#33415C] border border-[#979DAC] dark:border-[#979DAC]">
                <svg className="h-[1em] opacity-50 text-[#001233] dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    type="search"
                    className="grow placeholder:text-[#7D8597] dark:placeholder:text-[#5C677D] bg-transparent"
                    placeholder={t("pages.supplier.payments.searchPlaceholder")}
                />
            </label>

            <BodyCard
                title={null}
                child={
                    <div className="w-full flex flex-col gap-6">
                        <h3 className="text-[#023E7D] dark:text-[#0466CB]">{t("pages.supplier.payments.table.title")}</h3>
                        <div className="overflow-x-auto ">
                            <table className="table text-base">
                                <thead>
                                    <tr className="text-[#001233] dark:text-white text-base">
                                        <th>{t("pages.supplier.payments.table.columns.paymentNo")}</th>
                                        <th className="hidden sm:table-cell">{t("pages.supplier.payments.table.columns.supplier")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.payments.table.columns.amount")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.payments.table.columns.paid")}</th>
                                        <th className="hidden md:table-cell">{t("pages.supplier.payments.table.columns.balance")}</th>
                                        <th className="hidden lg:table-cell">{t("pages.supplier.payments.table.columns.dueDate")}</th>
                                        <th className="hidden sm:table-cell">{t("pages.supplier.payments.table.columns.status")}</th>
                                        <th className="text-right"></th>
                                    </tr>
                                </thead>

                                <tbody className="border-t border-[#979DAC] dark:border-[#979DAC]">
                                    <tr className="hover:bg-[#f8f9fa] dark:hover:bg-[#33415C]">
                                        <td className="font-medium">PAY-2025-001</td>
                                        <td className="hidden sm:table-cell">AzərTəchizat MMC</td>
                                        <td className="hidden md:table-cell">5000 AZN</td>
                                        <td className="hidden md:table-cell">5000 AZN</td>
                                        <td className="hidden md:table-cell text-green-600 dark:text-green-400">0 AZN</td>
                                        <td className="hidden lg:table-cell">
                                            <div className="space-y-1">
                                                <p>2025-10-15</p>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <span className="badge font-semibold text-xs badge-success">
                                                {t("pages.supplier.payments.status.paid")}
                                            </span>
                                        </td>
                                        <td className="text-right"></td>
                                    </tr>

                                    <tr className="hover:bg-[#f8f9fa] dark:hover:bg-[#33415C]">
                                        <td className="font-medium">PAY-2025-002</td>
                                        <td className="hidden sm:table-cell">Azərbaycan Kimya MMC</td>
                                        <td className="hidden md:table-cell">8500 AZN</td>
                                        <td className="hidden md:table-cell">0 AZN</td>
                                        <td className="hidden md:table-cell text-orange-600 dark:text-orange-400">8500 AZN</td>
                                        <td className="hidden lg:table-cell">
                                            <div className="space-y-1">
                                                <p>2025-10-11</p>
                                                <p className="text-xs text-red-500">{t("pages.supplier.payments.table.overdueDays", { days: 4 })}</p>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <span className="badge font-semibold text-xs badge-error">
                                                {t("pages.supplier.payments.status.overdue")}
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-sm rounded-md h-8 px-3 bg-[#0466CB] hover:bg-[#0453A4] text-white dark:bg-[#023E7D] dark:hover:bg-[#0453A4]">
                                                {t("pages.supplier.payments.actions.pay")}
                                            </button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-[#f8f9fa] dark:hover:bg-[#33415C]">
                                        <td className="font-medium">PAY-2025-003</td>
                                        <td className="hidden sm:table-cell">GlobalSupply LLC</td>
                                        <td className="hidden md:table-cell">4275 USD</td>
                                        <td className="hidden md:table-cell">2000 USD</td>
                                        <td className="hidden md:table-cell text-orange-600 dark:text-orange-400">2275 USD</td>
                                        <td className="hidden lg:table-cell">
                                            <div className="space-y-1">
                                                <p>2025-10-12</p>
                                                <p className="text-xs text-red-500">{t("pages.supplier.payments.table.overdueDays", { days: 3 })}</p>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <span className="badge font-semibold text-xs badge-warning">
                                                {t("pages.supplier.payments.status.partial")}
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-sm rounded-md h-8 px-3 bg-[#0466CB] hover:bg-[#0453A4] text-white dark:bg-[#023E7D] dark:hover:bg-[#0453A4]">
                                                {t("pages.supplier.payments.actions.pay")}
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            />

            <BodyCard
                title={null}
                child={
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#023E7D] dark:text-[#0466CB]">{t("pages.supplier.payments.upcoming.title")}</h4>
                        <p className="text-center text-[#7D8597] dark:text-[#5C677D] py-8">
                            {t("pages.supplier.payments.upcoming.empty")}
                        </p>
                    </div>
                }
            />
        </div>
    );
}
