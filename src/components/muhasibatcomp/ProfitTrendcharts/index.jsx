import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "May", netProfit: 24000 },
  { month: "Jun", netProfit: 12000 },
  { month: "Jul", netProfit: 18000 },
  { month: "Aug", netProfit: 12000 },
  { month: "Sep", netProfit: 6000 },
  { month: "Oct", netProfit: 0 },
];

export default function NetProfitChart() {
  return (
    <div className="px-6 pb-6">
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            {/* Izgara çizgileri */}
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            {/* Eksenler */}
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            {/* Tooltip ve Legend */}
            <Tooltip />
            <Legend />
            {/* Çizgi */}
            <Line
              type="monotone"
              dataKey="netProfit"
              name="Net Profit"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ stroke: "#10b981", strokeWidth: 2, fill: "#fff" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
