import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const data = [
  { key: 'sales', performans: 94, memnuniyyet: 78 },
  { key: 'it', performans: 91, memnuniyyet: 88 },
  { key: 'marketing', performans: 76, memnuniyyet: 65 },
  { key: 'accounting', performans: 98, memnuniyyet: 92 }
];

const Chart3 = () => {
  const { t } = useTranslation();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" tickFormatter={(k) => t(`pages.ai.hrAi.departments.${k}`)} />
        <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="performans" fill="#059AF5" name={t('pages.ai.hrAi.departmentPerformance.legend.performance')+ ' (%)'} />
        <Bar dataKey="memnuniyyet" fill="#37A656" name={t('pages.ai.hrAi.departmentPerformance.legend.satisfaction')+ ' (%)'} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart3;
