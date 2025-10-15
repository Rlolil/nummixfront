import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'IT Şöbəsi', value: 18, workers: 45, salary: 95200, color: '#3b82f6' },
  { name: 'Satış', value: 27, workers: 67, salary: 145800, color: '#10b981' },
  { name: 'Maliyyə', value: 13, workers: 32, salary: 78500, color: '#f59e0b' },
  { name: 'Marketinq', value: 11, workers: 28, salary: 52300, color: '#8b5cf6' },
  { name: 'İK', value: 6, workers: 15, salary: 35400, color: '#ef4444' },
  { name: 'Digər', value: 24, workers: 60, salary: 78120, color: '#6b7280' },
];

export default function SobelerUzereBolgu() {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
      {/* Başlıq */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 pb-6">
        <h4 className="leading-none text-lg font-semibold">Şöbələr üzrə Bölgü</h4>
      </div>

      {/* Pie Chart */}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} stroke="#fff" />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Şöbə detalları */}
      <div className="mt-4 space-y-2">
        {data.map(({ name, workers, salary, color }) => (
          <div
            key={name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-gray-700">{name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{workers} işçi</span>
              <span className="text-gray-900">₼{salary.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
