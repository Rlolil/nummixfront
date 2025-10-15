import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'May', brut: 600000, vergiler: 150000, net: 450000 },
  { month: 'İyun', brut: 590000, vergiler: 149000, net: 441000 },
  { month: 'İyul', brut: 580000, vergiler: 148000, net: 432000 },
  { month: 'Avq', brut: 570000, vergiler: 147000, net: 423000 },
  { month: 'Sen', brut: 560000, vergiler: 146000, net: 414000 },
  { month: 'Okt', brut: 550000, vergiler: 145000, net: 405000 },
];

export default function MaasFonduDinamikasi() {
  return (
    <div className="bg-white text-gray-900 rounded-xl border border-gray-200 p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold">Maaş Fondu Dinamikası</h4>
        <div className="flex space-x-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Brüt</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Vergilər</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Net</span>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="brut"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 5 }}
              name="Brüt maaş"
            />
            <Line
              type="monotone"
              dataKey="vergiler"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 5 }}
              name="Vergilər"
            />
            <Line
              type="monotone"
              dataKey="net"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 5 }}
              name="Net maaş"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
