import React from 'react';
import { useTranslation } from 'react-i18next';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart1 = () => {
  const { t } = useTranslation();

  const data = [
    { name: t('pages.finance.controlPanel.charts.cashFlow.months.jan', 'Jan'), uv: 42000, pv: 35000 },
    { name: t('pages.finance.controlPanel.charts.cashFlow.months.feb', 'Feb'), uv: 52000, pv: 38000 },
    { name: t('pages.finance.controlPanel.charts.cashFlow.months.mar', 'Mar'), uv: 48000, pv: 35000 },
    { name: t('pages.finance.controlPanel.charts.cashFlow.months.apr', 'Apr'), uv: 61000, pv: 42000 },
    { name: t('pages.finance.controlPanel.charts.cashFlow.months.may', 'May'), uv: 55000, pv: 40000 },
    { name: t('pages.finance.controlPanel.charts.cashFlow.months.jun', 'Jun'), uv: 67000, pv: 45000 }
  ];

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
