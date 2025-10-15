import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Yan',
    uv: 45000,
    pv: 35000,
    amt: 2400,
  },
  {
    name: 'Fev',
    uv: 52000,
    pv: 35000,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 48000,
    pv: 38500,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 61000,
    pv: 42000,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 55000,
    pv: 40000,
    amt: 2000,
  },
  {
    name: 'Iyn',
    uv: 67000   ,
    pv: 45000,
    amt: 2181,
  }
];

const Chart1 = () => {
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
          domain={[0, 80000]}
          ticks={[0, 20000, 40000, 60000, 80000]}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill="#F01818" name="Gelir" />
        <Bar yAxisId="right" dataKey="uv" fill="#059AF5" name="Xerc" />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default Chart1;
