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

export default function BalancePieChart({ data }) {
  const { t } = useTranslation();
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  const chartData = (Array.isArray(data) && data.length > 0) ? data : [
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
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#fff" />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: document.documentElement.classList.contains('dark') ? '#002855' : '#FFFFFF', color: document.documentElement.classList.contains('dark') ? '#E0E0E0' : '#001233' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
