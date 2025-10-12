import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "May", Revenue: 180000, Expenses: 150000 },
  { month: "Jun", Revenue: 195000, Expenses: 165000 },
  { month: "Jul", Revenue: 210000, Expenses: 180000 },
  { month: "Aug", Revenue: 225000, Expenses: 190000 },
  { month: "Sep", Revenue: 235000, Expenses: 200000 },
  { month: "Oct", Revenue: 240000, Expenses: 210000 },
];

export default function RevenueExpenseChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          {/* X ve Y eksenleri */}
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          {/* Tooltip & Legend */}
          <Tooltip />
          <Legend />
          {/* Barlar */}
          <Bar dataKey="Revenue" fill="#3b82f6" name="Revenue" />
          <Bar dataKey="Expenses" fill="#ef4444" name="Expenses" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
