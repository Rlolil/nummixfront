import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = ["#3b82f6", "#ef4444", "#10b981"];

export default function BalancePieChart() {
  const { t } = useTranslation();
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  const data = [
    {
      name: t(
        "pages.accounting.financialReports.balanceSheet.assets.title",
        "Assets"
      ),
      value: 52,
    },
    {
      name: t(
        "pages.accounting.financialReports.balanceSheet.liabilities.title",
        "Liabilities"
      ),
      value: 14,
    },
    {
      name: t(
        "pages.accounting.financialReports.balanceSheet.equity.title",
        "Equity"
      ),
      value: 34,
    },
  ];
  return (
    <div className="px-6 pb-6">
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="#fff" />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
