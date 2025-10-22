import HeadCard from "../../salescustomers/components/HeadCard";
import BodyCard from "../../salescustomers/components/BodyCard";
import { FaDollarSign, FaCalendarAlt, FaShoppingCart, FaChartLine } from "react-icons/fa";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    Legend,
} from "recharts";

import { useTranslation } from "react-i18next";

export default function Analytics() {
    const { t } = useTranslation();
    // Static demo data (design-only) with i18n labels
    const monthlyExpense = [
        { name: t("pages.finance.common.months.jan"), amount: 42000 },
        { name: t("pages.finance.common.months.feb"), amount: 48000 },
        { name: t("pages.finance.common.months.mar"), amount: 45500 },
        { name: t("pages.finance.common.months.apr"), amount: 61000 },
        { name: t("pages.finance.common.months.may"), amount: 57000 },
        { name: t("pages.finance.common.months.jun"), amount: 63000 },
        { name: t("pages.finance.common.months.jul"), amount: 69000 },
        { name: t("pages.finance.common.months.aug"), amount: 72000 },
        { name: t("pages.finance.common.months.sep"), amount: 76000 },
        { name: t("pages.finance.common.months.oct"), amount: 81000 },
    ];

    const categorySpending = [
        { name: t("pages.supplier.analytics.categories.officeSupplies"), value: 24000 },
        { name: t("pages.supplier.analytics.categories.technicalEquipment"), value: 32000 },
        { name: t("pages.supplier.analytics.categories.chemicals"), value: 19000 },
        { name: t("pages.supplier.analytics.categories.constructionMaterials"), value: 14000 },
    ];

    const topSuppliers = [
        { name: "Azərbaycan Kimya MMC", spending: 21000 },
        { name: "AzərTəchizat MMC", spending: 14500 },
        { name: "GlobalSupply LLC", spending: 14200 },
        { name: "Euro Materials", spending: 9800 },
    ];

    const paymentsStacked = [
        { name: t("pages.finance.common.months.jun"), paid: 52000, pending: 10000 },
        { name: t("pages.finance.common.months.jul"), paid: 56000, pending: 14000 },
        { name: t("pages.finance.common.months.aug"), paid: 59000, pending: 12000 },
        { name: t("pages.finance.common.months.sep"), paid: 62000, pending: 18000 },
        { name: t("pages.finance.common.months.oct"), paid: 68000, pending: 22000 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // pie colors

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">{t("pages.supplier.analytics.title")}</h2>
                    <p className="text-zinc-600">{t("pages.supplier.analytics.subtitle")}</p>
                </div>
            </div>
            <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <HeadCard
                    title={<span className="text-sm">{t("pages.supplier.analytics.cards.thisMonth")}</span>}
                    amount={<div className="text-2xl font-semibold">71,000 ₼</div>}
                    greenText={null}
                    description={<div className="flex items-center gap-2 text-sm"><span className="text-red-600">+6.0% {t("pages.supplier.common.vsPrevMonth")}</span></div>}
                    icon={<FaDollarSign className="h-4 w-4 text-zinc-500" />}
                />
                <HeadCard
                    title={<span className="text-sm">{t("pages.supplier.analytics.cards.avgMonthly")}</span>}
                    amount={<div className="text-2xl font-semibold">57,900 ₼</div>}
                    greenText={null}
                    description={<span className="text-sm text-zinc-500">{t("pages.supplier.analytics.cards.last10Months")}</span>}
                    icon={<FaCalendarAlt className="h-4 w-4 text-zinc-500" />}
                />
                <HeadCard
                    title={<span className="text-sm">{t("pages.supplier.analytics.cards.avgOrder")}</span>}
                    amount={<div className="text-2xl font-semibold">1988 ₼</div>}
                    greenText={null}
                    description={<span className="text-sm text-zinc-500">3 {t("pages.supplier.common.orders")}</span>}
                    icon={<FaShoppingCart className="h-4 w-4 text-zinc-500" />}
                />
                <HeadCard
                    title={<span className="text-sm">{t("pages.supplier.analytics.cards.yearly")}</span>}
                    amount={<div className="text-2xl font-semibold">579,000 ₼</div>}
                    greenText={null}
                    description={<span className="text-sm text-zinc-500">2025</span>}
                    icon={<FaChartLine className="h-4 w-4 text-zinc-500" />}
                />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <BodyCard
                    title={null}
                    child={
                        <div className="flex flex-col gap-2">
                            <div>
                                <h4 className="leading-none">{t("pages.supplier.analytics.monthlyExpense.title")}</h4>
                                <p className="text-zinc-500">{t("pages.supplier.analytics.monthlyExpense.subtitle")}</p>
                            </div>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        data={monthlyExpense}
                                        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" stroke="#666" />
                                        <YAxis stroke="#666" />
                                        <Tooltip formatter={(v) => [`${v.toLocaleString()} ₼`, t("pages.supplier.common.expense")]} />
                                        <Line
                                            type="monotone"
                                            dataKey="amount"
                                            stroke="#2563eb"
                                            strokeWidth={2}
                                            dot={{ r: 3 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    }
                />
                <BodyCard
                    title={null}
                    child={
                        <div className="flex flex-col gap-2">
                            <div>
                                <h4 className="leading-none">{t("pages.supplier.analytics.byCategory.title")}</h4>
                                <p className="text-zinc-500">{t("pages.supplier.analytics.byCategory.subtitle")}</p>
                            </div>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Tooltip formatter={(v, n) => [`${v.toLocaleString()} ₼`, n]} />
                                        <Pie
                                            data={categorySpending}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={50}
                                            outerRadius={80}
                                            paddingAngle={4}
                                        >
                                            {categorySpending.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={COLORS[index % COLORS.length]}
                                                />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <BodyCard
                    title={null}
                    child={
                        <div className="flex flex-col gap-2">
                            <div>
                                <h4 className="leading-none">{t("pages.supplier.analytics.topSuppliers.title")}</h4>
                                <p className="text-zinc-500">{t("pages.supplier.analytics.topSuppliers.subtitle")}</p>
                            </div>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={topSuppliers}
                                        layout="vertical"
                                        margin={{ top: 10, right: 20, left: 30, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" stroke="#666" />
                                        <YAxis type="category" dataKey="name" width={140} stroke="#666" />
                                        <Tooltip formatter={(v) => [`${v.toLocaleString()} ₼`, t("pages.supplier.common.expense")]} />
                                        <Bar dataKey="spending" fill="#06b6d4" radius={[4, 4, 4, 4]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    }
                />
                <BodyCard
                    title={null}
                    child={
                        <div className="flex flex-col gap-2">
                            <div>
                                <h4 className="leading-none">{t("pages.supplier.analytics.paymentsDynamics.title")}</h4>
                                <p className="text-zinc-500">{t("pages.supplier.analytics.paymentsDynamics.subtitle")}</p>
                            </div>
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={paymentsStacked}
                                        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" stroke="#666" />
                                        <YAxis stroke="#666" />
                                        <Tooltip formatter={(v, n) => [`${v.toLocaleString()} ₼`, n]} />
                                        <Legend />
                                        <Bar
                                            dataKey="paid"
                                            stackId="a"
                                            name={t("pages.supplier.analytics.legend.paid")}
                                            fill="#22c55e"
                                            radius={[4, 4, 0, 0]}
                                        />
                                        <Bar
                                            dataKey="pending"
                                            stackId="a"
                                            name={t("pages.supplier.analytics.legend.pending")}
                                            fill="#f59e0b"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    }
                />
            </div>
            <BodyCard
                title={null}
                child={
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="leading-none">{t("pages.supplier.analytics.performance.title")}</h4>
                            <p className="text-zinc-500">{t("pages.supplier.analytics.performance.subtitle")}</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    name: "AzərTəchizat MMC",
                                    category: t("pages.supplier.analytics.categories.officeSupplies"),
                                    debt: "15420.5 AZN",
                                    rating: "⭐ 4.5",
                                    orders: "1",
                                    payments: "1",
                                },
                                {
                                    name: "GlobalSupply LLC",
                                    category: t("pages.supplier.analytics.categories.technicalEquipment"),
                                    debt: "8950 USD",
                                    rating: "⭐ 4.8",
                                    orders: "1",
                                    payments: "1",
                                },
                                {
                                    name: "Euro Materials",
                                    category: t("pages.supplier.analytics.categories.constructionMaterials"),
                                    debt: "0 EUR",
                                    rating: "⭐ 4.2",
                                    orders: "0",
                                    payments: "0",
                                },
                                {
                                    name: "Azərbaycan Kimya MMC",
                                    category: t("pages.supplier.analytics.categories.chemicals"),
                                    debt: "22350.75 AZN",
                                    rating: "⭐ 4.6",
                                    orders: "1",
                                    payments: "1",
                                },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-4 border-1 border-zinc-300 rounded-lg"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="font-medium">{s.name}</p>
                                            <p className="text-zinc-500 text-sm">{s.category}</p>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                            <div>
                                                <p className="text-zinc-500">{t("pages.supplier.common.debt")}</p>
                                                <p className="font-medium">{s.debt}</p>
                                            </div>
                                            <div>
                                                <p className="text-zinc-500">{t("pages.supplier.common.rating")}</p>
                                                <p className="font-medium">{s.rating}</p>
                                            </div>
                                            <div>
                                                <p className="text-zinc-500">{t("pages.supplier.common.orders")}</p>
                                                <p className="font-medium">{s.orders}</p>
                                            </div>
                                            <div>
                                                <p className="text-zinc-500">{t("pages.supplier.common.payments")}</p>
                                                <p className="font-medium">{s.payments}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />
        </div>
    );
}
