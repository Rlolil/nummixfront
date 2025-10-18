import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Yan', uv: 42000, pv: 35000 },
  { name: 'Fev', uv: 52000, pv: 38000 },
  { name: 'Mar', uv: 48000, pv: 35000 },
  { name: 'Apr', uv: 61000, pv: 42000 },
  { name: 'May', uv: 55000, pv: 40000 },
  { name: 'Iyn', uv: 67000, pv: 45000 }
];

const Chart1 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#18C99D" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#18C99D" stopOpacity={0.2} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#78480B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#78480B" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 80000]} tickCount={5} />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#18C99D" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#78480B" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart1;
