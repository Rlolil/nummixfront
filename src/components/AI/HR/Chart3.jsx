import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Satış', performans: 94, memnuniyyet: 78 },
  { name: 'Texniki', performans: 91, memnuniyyet: 88 },
  { name: 'Marketinq', performans: 76, memnuniyyet: 65 },
  { name: 'Mühasibat', performans: 98, memnuniyyet: 92 }
];

const Chart3 = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="performans" fill="#059AF5" name="Performans (%)" />
        <Bar dataKey="memnuniyyet" fill="#37A656" name="Məmnuniyyət (%)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart3;
