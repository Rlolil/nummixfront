import React from "react";
import { useTranslation } from 'react-i18next';

const Departmenler = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 mt-7">
      {data.map((dep, i) => {
        const planned = Number(dep.totalPlanned) || 0;
        const actual = Number(dep.totalActual) || 0;
        const depPercent = planned > 0 ? (actual / planned) * 100 : 0;

        return (
          <div
            key={i}
            className="bg-white dark:bg-[#002855] rounded-2xl border border-[#979DAC] dark:border-[#33415C] p-5 md:p-6 shadow-sm"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-[#001233] dark:text-white">
                  {dep.department}
                </h3>
                <p className="text-[#7D8597] dark:text-[#7D8597] text-sm mt-1">
                  {t('pages.finance.budgeting.departments.totalBudget', 'Total Budget')}: {planned} AZN
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-2xl font-bold text-[#001233] dark:text-white">
                  {actual} AZN
                </p>
                <p className={`text-sm font-medium ${depPercent > 100 ? "text-[#D00000]" : "text-[#37A656]"}`}>
                  {depPercent.toFixed(1)}% {t('pages.finance.budgeting.labels.used', 'used')}
                </p>
              </div>
            </div>

            <div className="w-full bg-[#979DAC]/40 dark:bg-[#5C677D] h-2 rounded-full overflow-hidden mb-6">
              <div
                className={`h-2 rounded-full transition-all duration-700 ${depPercent > 100 ? "bg-[#D00000]" : "bg-[#0466CB]"}`}
                style={{ width: `${Math.min(depPercent, 100)}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dep.monthlyData && dep.monthlyData.map((item, idx) => {
                const mPlanned = Number(item.totalPlanned) || 0;
                const mActual = Number(item.totalActual) || 0;
                const itemPercent = mPlanned > 0 ? (mActual / mPlanned) * 100 : 0;
                return (
                  <div key={idx} className="bg-[#F8F9FA] dark:bg-[#001845] p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-[#001233] dark:text-white font-medium">{item.month}</p>
                      <p className={`text-xs font-bold ${itemPercent > 100 ? "text-[#D00000]" : "text-[#37A656]"}`}>
                        {itemPercent.toFixed(1)}%
                      </p>
                    </div>
                    <div className="flex justify-between text-sm text-[#5C677D] dark:text-[#7D8597] mb-2">
                      <span>{mActual} AZN</span>
                      <span>/ {mPlanned} AZN</span>
                    </div>
                    <div className="w-full bg-[#979DAC]/40 dark:bg-[#5C677D] h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full ${itemPercent > 100 ? "bg-[#D00000]" : "bg-[#0466CB]"}`}
                        style={{ width: `${Math.min(itemPercent, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Departmenler;
