import React from "react";
import { useTranslation } from 'react-i18next';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const CashFlow = () => {
  const { t } = useTranslation()

  const data = [
    { name: t('pages.finance.common.months.jun', 'Jun'), actual: 68000, forecast: null },
    { name: t('pages.finance.common.months.jul', 'Jul'), actual: null, forecast: 73000 },
    { name: t('pages.finance.common.months.aug', 'Aug'), actual: null, forecast: 69000 },
    { name: t('pages.finance.common.months.sep', 'Sep'), actual: null, forecast: 76000 },
    { name: t('pages.finance.common.months.oct', 'Oct'), actual: null, forecast: 72000 },
    { name: t('pages.finance.common.months.nov', 'Nov'), actual: null, forecast: 80000 },
  ];
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-1">{t('pages.finance.analytics.cashFlow.title')}</h2>
      <p className="text-gray-500 mb-4">{t('pages.finance.analytics.cashFlow.subtitle')}</p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="actual"
            name={t('pages.finance.analytics.cashFlow.legend.actual', 'Actual')}
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="forecast"
            name={t('pages.finance.analytics.cashFlow.legend.forecast', 'Forecast')}
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 5 }}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="bg-blue-50 text-sm text-gray-800 p-3 rounded-lg mt-4">
        <strong>{t('pages.finance.analytics.cashFlow.ai.title')}</strong> {t('pages.finance.analytics.cashFlow.ai.text', { avg: '72,667 AZN', max: '75,000 AZN' })}
      </div>
    </div>
  );
};

export default CashFlow;
