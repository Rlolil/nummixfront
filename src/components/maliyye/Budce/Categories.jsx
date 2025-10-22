import React from "react";
import { useTranslation } from 'react-i18next'

const Categories = () => {
    const { t } = useTranslation()
    const data = [
        {
            title: t('pages.finance.common.categories.salary'),
            used: 24500,
            planned: 25000,
            percent: 98,
            qaliq: 500
        },
        {
            title: t('pages.finance.budgeting.categories.officeExpenses', 'Ofis xərcləri'),
            used: 9200,
            planned: 8000,
            percent: 115,
            extra: 1200,
            noRed: false,
        },
        {
            title: t('pages.finance.common.categories.marketing'),
            used: 10500,
            planned: 12000,
            percent: 87.5,
            qenaet: t('pages.finance.budgeting.labels.saving'),
            qaliq: 1500
        },
        {
            title: t('pages.finance.budgeting.categories.itAndTech', 'IT və Texnologiya'),
            used: 5800,
            planned: 6000,
            percent: 96.7,
            qaliq: 200
        },
        {
            title: t('pages.finance.budgeting.categories.procurement', 'Satınalma'),
            used: 14200,
            planned: 15000,
            percent: 94.7,
            qenaet: t('pages.finance.budgeting.labels.saving'),
            qaliq: 800
        },
        {
            title: t('pages.finance.budgeting.categories.logistics', 'Logistika'),
            used: 4100,
            planned: 4000,
            percent: 102.5,
            extra: 100,
            noRed: false,
        },
        {
            title: t('pages.finance.budgeting.categories.otherExpenses', 'Digər xərclər'),
            used: 2700,
            planned: 3000,
            percent: 90,
            qenaet: t('pages.finance.budgeting.labels.saving'),
            qaliq: 300
        },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200 mt-7 mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{t('pages.finance.budgeting.categoriesTitle')}</h2>
            <p className="text-gray-500 mb-6">{t('pages.finance.budgeting.categoriesSubtitle')}</p>

            {data.map((item, index) => (
                <div key={index} className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-3">
                            <h3 className="text-gray-800 font-medium">{item.title}</h3>

                            {item.extra && (
                                <span className="bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                                    {`+${item.extra.toLocaleString()} AZN`}
                                </span>
                            )}

                            {item.qenaet && (
                                <span className="text-green-800 border border-green-600 text-xs font-semibold px-2 py-0.5 rounded-sm"
                                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}>
                                    {item.qenaet}
                                </span>
                            )}


                        </div>
                        <p className="text-gray-600 text-sm">
                            {item.used.toLocaleString()} / {item.planned.toLocaleString()} AZN
                        </p>
                    </div>

                    <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                            className={`h-2.5 rounded-full ${item.percent > 100 && !item.noRed
                                ? "bg-red-600"
                                : "bg-gray-900"
                                }`}
                            style={{
                                width: `${Math.min(item.percent, 100)}%`,
                            }}
                        ></div>
                    </div>

                    <div className="flex justify-between items-center" >
                        <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                            {item.percent}% {t('pages.finance.budgeting.labels.used')}
                        </div>
                        {item.qaliq && (
                            <span className=" text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                                {item.qaliq} AZN {t('pages.finance.budgeting.labels.remaining')}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
