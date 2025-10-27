import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from "react-i18next";

const Chart1 = () => {
  const { t } = useTranslation();
  const data = [
    { month: 'jan', uv: 45000, pv: 35000 },
    { month: 'feb', uv: 52000, pv: 35000 },
    { month: 'mar', uv: 48000, pv: 38500 },
    { month: 'apr', uv: 61000, pv: 42000 },
    { month: 'may', uv: 55000, pv: 40000 },
    { month: 'jun', uv: 67000, pv: 45000 },
  ];
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
        <XAxis dataKey="month" tickFormatter={(m) => t(`pages.ai.common.months.${m}`)} />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#8884d8"
          domain={[0, 80000]}
          ticks={[0, 20000, 40000, 60000, 80000]}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill="#F01818" name={t("pages.ai.financeAi.series.income")} />
        <Bar yAxisId="right" dataKey="uv" fill="#059AF5" name={t("pages.ai.financeAi.series.expense")} />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default Chart1;
