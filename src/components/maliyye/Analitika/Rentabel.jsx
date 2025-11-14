// import React from "react";
// import { useTranslation } from 'react-i18next'
// import {
//     AreaChart,
//     Area,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//     Legend,
// } from "recharts";

// const Rentabel = () => {
//     const { t } = useTranslation()
//     const data = [
//         { name: t('pages.finance.common.months.jan', 'Jan'), gelir: 120000, xercler: 95000, menfeet: 25000 },
//         { name: t('pages.finance.common.months.feb', 'Feb'), gelir: 135000, xercler: 105000, menfeet: 30000 },
//         { name: t('pages.finance.common.months.mar', 'Mar'), gelir: 130000, xercler: 102000, menfeet: 28000 },
//         { name: t('pages.finance.common.months.apr', 'Apr'), gelir: 145000, xercler: 108000, menfeet: 37000 },
//         { name: t('pages.finance.common.months.may', 'May'), gelir: 140000, xercler: 107000, menfeet: 33000 },
//         { name: t('pages.finance.common.months.jun', 'Jun'), gelir: 160000, xercler: 112000, menfeet: 48000 },
//     ];
//     return (
//         <div className="bg-white p-5 rounded-xl shadow-sm">
//             <h2 className="text-lg font-semibold mb-1">{t('pages.finance.analytics.profitability.title')}</h2>
//             <p className="text-gray-500 text-sm mb-4">{t('pages.finance.analytics.profitability.subtitle')}</p>

//             <ResponsiveContainer width="100%" height={350}>
//                 <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//                     <defs>
//                         <linearGradient id="colorGelir" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
//                             <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
//                         </linearGradient>
//                         <linearGradient id="colorXercler" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
//                             <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
//                         </linearGradient>
//                     </defs>

//                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />

//                     <Area
//                         type="monotone"
//                         dataKey="xercler"
//                         stackId="1"
//                         stroke="#ef4444"
//                         fill="url(#colorXercler)"
//                         name={t('pages.finance.analytics.profitability.legend.expenses', 'Xərclər')}
//                     />
//                     <Area
//                         type="monotone"
//                         dataKey="gelir"
//                         stackId="1"
//                         stroke="#10b981"
//                         fill="url(#colorGelir)"
//                         name={t('pages.finance.analytics.profitability.legend.revenue', 'Gəlir')}
//                     />
//                     <Line
//                         type="monotone"
//                         dataKey="menfeet"
//                         stroke="#3b82f6"
//                         strokeWidth={2}
//                         dot={{ r: 4 }}
//                         activeDot={{ r: 6 }}
//                         name={t('pages.finance.analytics.profitability.legend.netProfit', 'Xalis Mənfəət')}
//                     />
//                 </AreaChart>
//             </ResponsiveContainer>

//             <div className="grid md:grid-cols-3 gap-4 mt-6">
//                 <div className="bg-gray-50 p-4 rounded-xl text-center shadow-sm">
//                     <p className="text-gray-500 text-sm mb-1">{t('pages.finance.analytics.profitability.avgRevenue')}</p>
//                     <p className="text-green-600 text-2xl font-semibold">141,167 AZN</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl text-center shadow-sm">
//                     <p className="text-gray-500 text-sm mb-1">{t('pages.finance.analytics.profitability.avgExpense')}</p>
//                     <p className="text-red-500 text-2xl font-semibold">103,333 AZN</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl text-center shadow-sm">
//                     <p className="text-gray-500 text-sm mb-1">{t('pages.finance.analytics.profitability.avgProfit')}</p>
//                     <p className="text-blue-600 text-2xl font-semibold">37,833 AZN</p>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Rentabel;


import React from "react";
import { useTranslation } from 'react-i18next';
import {
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const Rentabel = () => {
    const { t } = useTranslation();
    const isDark = document.documentElement.classList.contains('dark');

    const data = [
        { name: t('pages.finance.common.months.jan', 'Jan'), gelir: 120000, xercler: 95000, menfeet: 25000 },
        { name: t('pages.finance.common.months.feb', 'Feb'), gelir: 135000, xercler: 105000, menfeet: 30000 },
        { name: t('pages.finance.common.months.mar', 'Mar'), gelir: 130000, xercler: 102000, menfeet: 28000 },
        { name: t('pages.finance.common.months.apr', 'Apr'), gelir: 145000, xercler: 108000, menfeet: 37000 },
        { name: t('pages.finance.common.months.may', 'May'), gelir: 140000, xercler: 107000, menfeet: 33000 },
        { name: t('pages.finance.common.months.jun', 'Jun'), gelir: 160000, xercler: 112000, menfeet: 48000 },
    ];

    return (
        <div className={`p-5 rounded-xl shadow-sm ${isDark ? "bg-gray-800" : "bg-white"}`}>
            <h2 className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t('pages.finance.analytics.profitability.title')}
            </h2>
            <p className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
                {t('pages.finance.analytics.profitability.subtitle')}
            </p>

            <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorGelir" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="colorXercler" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#E5E7EB"} vertical={false} />
                    <XAxis
                        dataKey="name"
                        stroke={isDark ? "#A6A4A4" : "#374151"}
                        tick={{ fill: isDark ? "#A6A4A4" : "#374151" }}
                    />
                    <YAxis stroke={isDark ? "#A6A4A4" : "#374151"} tick={{ fill: isDark ? "#A6A4A4" : "#374151" }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: isDark ? "#1F2937" : "#A6A4A4",
                            borderColor: isDark ? "#374151" : "#E5E7EB",
                            color: isDark ? "#A6A4A4" : "#000",
                        }}
                    />
                    <Legend wrapperStyle={{ color: isDark ? "#A6A4A4" : "#374151" }} />

                    <Area
                        type="monotone"
                        dataKey="xercler"
                        stackId="1"
                        stroke="#ef4444"
                        fill="url(#colorXercler)"
                        name={t('pages.finance.analytics.profitability.legend.expenses', 'Xərclər')}
                    />
                    <Area
                        type="monotone"
                        dataKey="gelir"
                        stackId="1"
                        stroke="#10b981"
                        fill="url(#colorGelir)"
                        name={t('pages.finance.analytics.profitability.legend.revenue', 'Gəlir')}
                    />
                    <Line
                        type="monotone"
                        dataKey="menfeet"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name={t('pages.finance.analytics.profitability.legend.netProfit', 'Xalis Mənfəət')}
                    />
                </AreaChart>
            </ResponsiveContainer>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className={`${isDark ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-900"} p-4 rounded-xl text-center shadow-sm`}>
                    <p className="text-sm mb-1">{t('pages.finance.analytics.profitability.avgRevenue')}</p>
                    <p className="text-green-600 text-2xl font-semibold">141,167 AZN</p>
                </div>

                <div className={`${isDark ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-900"} p-4 rounded-xl text-center shadow-sm`}>
                    <p className="text-sm mb-1">{t('pages.finance.analytics.profitability.avgExpense')}</p>
                    <p className="text-red-500 text-2xl font-semibold">103,333 AZN</p>
                </div>

                <div className={`${isDark ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-900"} p-4 rounded-xl text-center shadow-sm`}>
                    <p className="text-sm mb-1">{t('pages.finance.analytics.profitability.avgProfit')}</p>
                    <p className="text-blue-600 text-2xl font-semibold">37,833 AZN</p>
                </div>
            </div>

        </div>
    );
};

export default Rentabel;
