import React from "react";
import { useTranslation } from 'react-i18next';

const Categories = ({ data }) => {
    const { t } = useTranslation();

    return (
        <div className="space-y-4 mt-7">
            {data.map((item, index) => {
                const planned = Number(item.totalPlanned) || 0;
                const actual = Number(item.totalActual) || 0;
                const percent = planned > 0 ? (actual / planned) * 100 : 0;
                const isOverBudget = percent > 100;
                const difference = planned - actual;

                return (
                    <div
                        key={index}
                        className="bg-white dark:bg-[#002855] rounded-xl border border-[#979DAC] dark:border-[#33415C] p-5 flex flex-col md:flex-row items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="flex items-center gap-4 w-full md:w-1/3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
                                ${isOverBudget ? "bg-[#FFE5E5] text-[#D00000]" : "bg-[#E5F4FF] text-[#0466CB]"}`}>
                                {item.department ? item.department.charAt(0) : "?"}
                            </div>
                            <div>
                                <h3 className="text-[#001233] dark:text-white font-medium text-lg">{item.department}</h3>
                                <p className="text-[#7D8597] dark:text-[#7D8597] text-sm">
                                    {t('pages.finance.budgeting.departments.totalBudget', 'Total Budget')}: {planned} AZN
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-4 my-4 md:my-0">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-[#5C677D] dark:text-[#7D8597]">{actual} AZN</span>
                                <span className={`font-medium ${isOverBudget ? "text-[#D00000]" : "text-[#37A656]"}`}>
                                    {percent.toFixed(1)}%
                                </span>
                            </div>
                            <div className="w-full bg-[#979DAC]/40 dark:bg-[#5C677D] h-2 rounded-full overflow-hidden">
                                <div
                                    className={`h-2 rounded-full transition-all duration-700 ${isOverBudget ? "bg-[#D00000]" : "bg-[#0466CB]"}`}
                                    style={{ width: `${Math.min(percent, 100)}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 flex justify-between md:justify-end items-center gap-6">
                            <div className="text-right">
                                <p className="text-[#7D8597] dark:text-[#7D8597] text-xs uppercase tracking-wider">
                                    {difference >= 0 ? t('pages.finance.budgeting.labels.remaining') : t('pages.finance.budgeting.labels.overBudget', 'Over Budget')}
                                </p>
                                <p className={`text-lg font-bold ${difference < 0 ? "text-[#D00000]" : "text-[#001233] dark:text-white"}`}>
                                    {Math.abs(difference)} AZN
                                </p>
                            </div>
                            
                            {difference > 0 && (
                                <div className="hidden sm:block px-3 py-1 bg-[#E6F4EA] text-[#37A656] rounded-full text-xs font-medium">
                                    {t('pages.finance.budgeting.labels.saving')}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
