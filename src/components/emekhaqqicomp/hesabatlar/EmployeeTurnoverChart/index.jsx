import React from "react";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "May", hired: 6, left: 3 },
  { month: "İyun", hired: 8, left: 2 },
  { month: "İyul", hired: 12, left: 6 },
  { month: "Avq", hired: 9, left: 4 },
  { month: "Sen", hired: 10, left: 3 },
  { month: "Okt", hired: 17, left: 1 },
];

export default function EmployeeTurnoverChart() {
  const { t } = useTranslation();
  const totalHired = data.reduce((acc, curr) => acc + curr.hired, 0);
  const totalLeft = data.reduce((acc, curr) => acc + curr.left, 0);

  return (
    <div className="bg-white dark:bg-[#33415C] p-6 rounded-xl border border-gray-200 dark:border-[#979DAC] shadow-sm max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">{t('pages.hr.reports.turnover.title', { defaultValue: 'Employee Turnover' })}</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
            <Bar dataKey="hired" name={t('pages.hr.reports.turnover.series.hired', { defaultValue: 'Hired' })} fill="#10b981" />
            <Bar dataKey="left" name={t('pages.hr.reports.turnover.series.left', { defaultValue: 'Left' })} fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center">
          <p className="text-sm text-green-700 dark:text-green-200">{t('pages.hr.reports.turnover.totals.hired6m', { defaultValue: 'Total hired (6 months)' })}</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">{totalHired}</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg text-center">
          <p className="text-sm text-red-700 dark:text-red-200">{t('pages.hr.reports.turnover.totals.left6m', { defaultValue: 'Total left (6 months)' })}</p>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400">{totalLeft}</p>
        </div>
      </div>
    </div>
  );
}
