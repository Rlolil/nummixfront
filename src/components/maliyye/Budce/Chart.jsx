import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Yan',
    uv: 73000,
    pv: 71000,
    amt: 2400,
  },
  {
    name: 'Fev',
    uv: 73000,
    pv: 75000,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 73000,
    pv: 70500,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 73000,
    pv: 72800,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 73000,
    pv: 74200,
    amt: 2000,
  },
  {
    name: 'Iyn',
    uv: 73000   ,
    pv: 71000,
    amt: 2181,
  }
];

const Chart = () => {
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
        <Bar yAxisId="left" dataKey="pv" fill="#37A656" name="Faktiki" />
        <Bar yAxisId="right" dataKey="uv" fill="#059AF5" name="Plan" />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default Chart;
