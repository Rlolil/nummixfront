"use client"; //esas sehife sol qrafik
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";

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



// Demo data (backend hazir olanda buradan fetch olunacaq)



const stokDovriyeData = [
  { ay: "Yan", deyer: 4.2 },
  { ay: "Fev", deyer: 4.5 },
  { ay: "Mar", deyer: 4.1 },
  { ay: "Apr", deyer: 4.8 },
  { ay: "May", deyer: 4.6 },
  { ay: "Iyn", deyer: 4.9 },
];

const anbarDeyeriData = [
  { ay: "Yan", deyer: 420000 },
  { ay: "Fev", deyer: 450000 },
  { ay: "Mar", deyer: 430000 },
  { ay: "Apr", deyer: 470000 },
  { ay: "May", deyer: 460000 },
  { ay: "Iyn", deyer: 480000 },
];

export function StokDovriyeChart() {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Stok Dövriyyə Əmsalı</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stokDovriyeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ay" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="deyer" stroke="#3b82f6" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AnbarDeyeriChart() {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Anbar Dəyəri Dinamikası</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={anbarDeyeriData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ay" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="deyer" fill="#000000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ChartsGroup() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="flex-1"><StokDovriyeChart /></div>
      <div className="flex-1"><AnbarDeyeriChart /></div>
    </div>
  );
}

