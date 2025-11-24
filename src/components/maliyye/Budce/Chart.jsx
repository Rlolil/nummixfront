import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
  const { t } = useTranslation()
  
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
        <Bar yAxisId="left" dataKey="pv" fill="#37A656" name={t('pages.finance.budgeting.chart.actual', 'Faktiki')} />
        <Bar yAxisId="right" dataKey="uv" fill="#059AF5" name={t('pages.finance.budgeting.chart.plan', 'Plan')} />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default Chart;
