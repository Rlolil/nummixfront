import { HiOutlineExclamation } from "react-icons/hi";
import HeadCard from "../../salescustomers/components/HeadCard";
import BodyCard from "../../salescustomers/components/BodyCard";
import { MdOutlinePayment } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Payments() {
    const { t } = useTranslation();
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.supplier.payments.title")}</h2>
                    <p className="text-zinc-600">{t("pages.supplier.payments.subtitle")}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <HeadCard
                    title={t("pages.supplier.payments.cards.pending.title")}
                    amount={<div className="text-2xl text-orange-600">10775.00 ₼</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.pending.description")}
                    icon={<MdOutlinePayment />}
                />
                <HeadCard
                    title={t("pages.supplier.payments.cards.paid.title")}
                    amount={<div className="text-2xl text-green-600">5000.00 ₼</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.paid.description")}
                    icon={<HiOutlineExclamation className="text-green-600" />}
                />
                <HeadCard
                    title={t("pages.supplier.payments.cards.overdue.title")}
                    amount={<div className="text-2xl text-red-600">1</div>}
                    greenText={null}
                    description={t("pages.supplier.payments.cards.overdue.description")}
                    icon={<MdOutlinePayment className="text-red-600" />}
                />
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
                    placeholder={t("pages.supplier.payments.searchPlaceholder")}
                />
            </label>
            <BodyCard
                title={null}
                child={
                    <div className="w-full flex flex-col gap-6">
                        <h3>{t("pages.supplier.payments.table.title")}</h3>
                        <div className="overflow-x-auto">
                            <table className="table text-base">
                                <thead>
                                    <tr className="text-black text-base">
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
                                <tbody>
                                    <tr>
                                        <td className="font-medium">PAY-2025-001</td>
                                        <td className="hidden sm:table-cell">AzərTəchizat MMC</td>
                                        <td className="hidden md:table-cell">5000 AZN</td>
                                        <td className="hidden md:table-cell">5000 AZN</td>
                                        <td className="hidden md:table-cell text-green-600">0 AZN</td>
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
                                    <tr>
                                        <td className="font-medium">PAY-2025-002</td>
                                        <td className="hidden sm:table-cell">Azərbaycan Kimya MMC</td>
                                        <td className="hidden md:table-cell">8500 AZN</td>
                                        <td className="hidden md:table-cell">0 AZN</td>
                                        <td className="hidden md:table-cell text-orange-600">8500 AZN</td>
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
                                            <button className="btn btn-neutral btn-sm rounded-md h-8 px-3">
                                                {t("pages.supplier.payments.actions.pay")}
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-medium">PAY-2025-003</td>
                                        <td className="hidden sm:table-cell">GlobalSupply LLC</td>
                                        <td className="hidden md:table-cell">4275 USD</td>
                                        <td className="hidden md:table-cell">2000 USD</td>
                                        <td className="hidden md:table-cell text-orange-600">2275 USD</td>
                                        <td className="hidden lg:table-cell">
                                            <div className="space-y-1">
                                                <p>2025-10-12</p>
                                                <p className="text-xs text-red-500">3 gün gecikib</p>
                                            </div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <span className="badge font-semibold text-xs badge-warning">
                                                {t("pages.supplier.payments.status.partial")}
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-neutral btn-sm rounded-md h-8 px-3">
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
                        <h4>{t("pages.supplier.payments.upcoming.title")}</h4>
                        <p className="text-center text-zinc-500 py-8">{t("pages.supplier.payments.upcoming.empty")}</p>
                    </div>
                }
            />
        </div>
    );
}
