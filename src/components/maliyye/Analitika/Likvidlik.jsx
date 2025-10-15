import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Q1 2024", current: 2.8, quick: 2.0 },
  { name: "Q2 2024", current: 3.2, quick: 2.2 },
  { name: "Q3 2024", current: 2.9, quick: 2.1 },
  { name: "Q4 2024", current: 3.3, quick: 2.4 },
  { name: "Q1 2025", current: 3.4, quick: 2.55 },
];

function Likvidlik() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">
        Likvidlik Göstəriciləri
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Maliyyə sabitliyi və ödəniş qabiliyyəti
      </p>

      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={10}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 3.5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#3B82F6" name="Current Ratio" />
            <Bar dataKey="quick" fill="#10B981" name="Quick Ratio" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-100">
        <p className="font-medium text-green-700">
          Current Ratio: <span className="font-semibold">3.4</span> – Əla
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Şirkət qısa müddətli öhdəliklərini 3.4 dəfə ödəyə bilir. Sağlam
          likvidlik vəziyyəti.
        </p>
      </div>

      <div className="mt-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
        <p className="font-medium text-blue-700">
          Quick Ratio: <span className="font-semibold">2.6</span> – Yaxşı
        </p>
        <p className="text-gray-600 text-sm mt-1">
          Ehtiyatlar çıxılmaqla, şirkət 2.6 dəfə qısa müddətli borcları ödəyə
          bilir.
        </p>
      </div>
    </div>
  );
}

export default Likvidlik;
