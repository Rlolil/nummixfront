import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Chart2() {
  const { t } = useTranslation();

  const data = [
    { key: 'salary', value: 400, percentLabel: '49%' },
    { key: 'office', value: 300, percentLabel: '18%' },
    { key: 'marketing', value: 300, percentLabel: '21%' },
    { key: 'it', value: 200, percentLabel: '12%' },
  ].map(item => ({
    ...item,
    name: t(`pages.finance.common.categories.${item.key}`, item.key)
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          labelLine={false} 
          label={({ payload, name }) => `${name} ${payload.percentLabel}`} 
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
