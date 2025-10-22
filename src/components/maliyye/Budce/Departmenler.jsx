import React from "react";
import { useTranslation } from 'react-i18next'

const Departmenler = () => {
  const { t } = useTranslation()
  const data = [
    {
      title: t('pages.finance.budgeting.departments.salesMarketing', 'Satış və Marketing'),
      total: 32000,
      budget: 35000,
      items: [
        { name: t('pages.finance.budgeting.departments.items.advertising', 'Reklam'), spent: 14200, budget: 15000 },
        { name: t('pages.finance.budgeting.departments.items.promotion', 'Promosyon'), spent: 7500, budget: 8000 },
        { name: t('pages.finance.budgeting.departments.items.events', 'Tədbirlər'), spent: 10300, budget: 12000 },
      ],
    },
    {
      title: t('pages.finance.budgeting.departments.itTech', 'İT və Texnologiya'),
      total: 16500,
      budget: 18000,
      items: [
        { name: t('pages.finance.budgeting.departments.items.software', 'Proqram təminatı'), spent: 7200, budget: 8000 },
        { name: t('pages.finance.budgeting.departments.items.hardware', 'Avadanlıq'), spent: 6800, budget: 7000 },
        { name: t('pages.finance.budgeting.departments.items.cloud', 'Cloud xidmətlər'), spent: 2500, budget: 3000 },
      ],
    },
    {
      title: t('pages.finance.budgeting.departments.operations', 'Əməliyyatlar'),
      total: 21700,
      budget: 20000,
      items: [
        { name: t('pages.finance.budgeting.departments.items.office', 'Ofis xərcləri'), spent: 9200, budget: 8000 },
        { name: t('pages.finance.budgeting.departments.items.utilities', 'Kommunal xidmətlər'), spent: 5100, budget: 5000 },
        { name: t('pages.finance.budgeting.departments.items.cleaning', 'Təmizlik'), spent: 1900, budget: 2000 },
        { name: t('pages.finance.budgeting.departments.items.repair', 'Təmir'), spent: 5500, budget: 5000 },
      ],
    },
  ];

  return (
    <div className="space-y-6 mt-7">
      {data.map((dep, i) => {
        const depPercent = (dep.total / dep.budget) * 100;

        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
              <h2 className="text-[17px] font-medium text-gray-900">
                {dep.title}
              </h2>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-medium text-gray-500">
                  {dep.total.toLocaleString()} /{" "}
                  {dep.budget.toLocaleString()} AZN
                </p>
                {depPercent > 100 && (
                  <span className="bg-red-600 text-white text-xs font-medium px-2 py-[2px] rounded-md whitespace-nowrap">
                    {t('pages.finance.budgeting.labels.overBudget')}
                  </span>
                )}
              </div>
            </div>

            <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mb-5">
              <div
                className={`h-2.5 rounded-full ${
                  depPercent > 100 ? "bg-red-600" : "bg-gray-900"
                }`}
                style={{
                  width: `${Math.min(depPercent, 100)}%`,
                }}
              ></div>
            </div>

            <div className="space-y-3">
              {dep.items.map((item, j) => {
                const itemPercent = (item.spent / item.budget) * 100;
                return (
                  <div
                    key={j}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                  >
                    <span className="text-[15px] text-gray-700 w-full md:w-32">
                      {item.name}
                    </span>

                    <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-1 md:gap-3">
                      <div className="relative w-full md:w-[150px] bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="h-2.5 rounded-full bg-gray-900"
                          style={{
                            width: `${Math.min(itemPercent, 100)}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-[15px] text-gray-700 text-right">
                        {item.spent.toLocaleString()} /{" "}
                        {item.budget.toLocaleString()}
                      </span>
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
