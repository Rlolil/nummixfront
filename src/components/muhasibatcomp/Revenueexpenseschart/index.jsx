import React, { useEffect } from "react";
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

export default function RevenueExpenseChart({ data }) {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);
  
  // Fallback data if none provided
  const chartData = (Array.isArray(data) && data.length > 0) ? data : [
    { month: "May", Revenue: 0, Expenses: 0 },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke={document.documentElement.classList.contains('dark') ? '#33415C' : '#33415C'} />
          {/* Axes */}
          <XAxis dataKey="month" stroke={document.documentElement.classList.contains('dark') ? '#E0E0E0' : '#001233'} />
          <YAxis stroke={document.documentElement.classList.contains('dark') ? '#E0E0E0' : '#001233'} />
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
