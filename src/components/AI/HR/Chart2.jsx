import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTranslation } from 'react-i18next';

const data = [
  { key: 'salaries', value: 400, percent: '49%' },
  { key: 'office', value: 300, percent: '18%' },
  { key: 'marketing', value: 300, percent: '21%' },
  { key: 'it', value: 200, percent: '12%' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Chart3() {
  const { t } = useTranslation();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          labelLine={false} 
          label={({ key }) => `${t(`pages.ai.hrAi.categories.${key}`)} ${data.find(d => d.key===key)?.percent ?? ''}`} 
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
