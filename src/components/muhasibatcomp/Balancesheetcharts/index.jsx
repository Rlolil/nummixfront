import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Assets", value: 52 },
  { name: "Liabilities", value: 14 },
  { name: "Equity", value: 34 },
];

const COLORS = ["#3b82f6", "#ef4444", "#10b981"];

export default function BalancePieChart() {
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
