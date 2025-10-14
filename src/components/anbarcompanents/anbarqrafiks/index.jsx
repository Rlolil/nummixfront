"use client"; //esas sehife sol qrafik
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";


const Adata = [
  { name: "Yan", value: 450 },
  { name: "Fev", value: 520 },
  { name: "Mar", value: 390 },
  { name: "Apr", value: 610 },
  { name: "May", value: 480 },
  { name: "İyn", value: 530 },
];

export function MonthlyStockChart() {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Aylıq Stok Dövriyyəsi</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={Adata}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#000000" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
////////////////////// esas sehife sag qrafik

const Sdata = [
  { name: "Xammal", value: 35 },
  { name: "Hazır məhsul", value: 28 },
  { name: "Ehtiyat hissələri", value: 22 },
  { name: "Qablaşdırma", value: 15 },
];

const COLORS = ["#000000", "#4B5563", "#9CA3AF", "#D1D5DB"];

export function CategoryDistributionChart() {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Kateqoriya üzrə Bölgü (%)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={Sdata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {Sdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}