import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Maaşlar', value: 400 },
  { name: 'Ofis xərçləri', value: 300 },
  { name: 'Marketing', value: 300 },
  { name: 'IT', value: 200 },
];

const customLabels = {
  'Maaşlar': '49%',
  'Ofis xərçləri': '18%',
  'Marketing': '21%',
  'IT': '12%',
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Chart3() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          labelLine={false} 
          label={({ name }) => `${name} ${customLabels[name]}`} 
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip /> 
      </PieChart>
    </ResponsiveContainer>
  );
}
