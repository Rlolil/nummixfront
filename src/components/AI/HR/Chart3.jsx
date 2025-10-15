import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Satış',
    uv: 94,
    pv: 78,
    amt: 2400,
  },
  {
    name: 'Texniki',
    uv: 91,
    pv: 88,
    amt: 2210,
  },
  {
    name: 'Marketinq',
    uv: 76,
    pv: 65,
    amt: 2290,
  },
  {
    name: 'Mühasibat',
    uv: 98,
    pv: 92,
    amt: 2000,
  }
];

const Chart3 = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#8884d8"
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill="#37A656" name="Məmnuniyyət (%)" />
        <Bar yAxisId="right" dataKey="uv" fill="#059AF5" name="Performans (%)" />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default Chart3;
