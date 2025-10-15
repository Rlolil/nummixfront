import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "İyn", Faktiki: 68000, Proqnoz: null },
  { name: "İyl", Faktiki: null, Proqnoz: 73000 },
  { name: "Avq", Faktiki: null, Proqnoz: 69000 },
  { name: "Sen", Faktiki: null, Proqnoz: 76000 },
  { name: "Okt", Faktiki: null, Proqnoz: 72000 },
  { name: "Noy", Faktiki: null, Proqnoz: 80000 },
];

const CashFlow = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-1">Pul Axını Proqnozu</h2>
      <p className="text-gray-500 mb-4">AI əsaslı 6 aylıq proqnoz</p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Faktiki"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Proqnoz"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 5 }}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="bg-blue-50 text-sm text-gray-800 p-3 rounded-lg mt-4">
        <strong>AI Analizi:</strong> Növbəti 6 ay ərzində orta aylıq cash flow
        <strong> 72,667 AZN</strong> proqnozlaşdırılır. Sentyabr ayında maksimum
        (<strong>75,000 AZN</strong>) gözlənilir. Likvidlik riski aşkar
        edilmədi.
      </div>
    </div>
  );
};

export default CashFlow;
