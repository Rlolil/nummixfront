import React from "react";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { week: "Həftə 1", attendance: 87, delay: 10 },
  { week: "Həftə 2", attendance: 85, delay: 12 },
  { week: "Həftə 3", attendance: 89, delay: 9 },
  { week: "Həftə 4", attendance: 87, delay: 11 },
];

export default function AttendanceChart() {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h4 className="text-lg font-semibold mb-6">{t('pages.hr.reports.attendanceChart.title', { defaultValue: 'Attendance Statistics' })}</h4>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="week" stroke="#666" />
            <YAxis stroke="#666" domain={[0, 100]} />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
            <Bar dataKey="attendance" name={t('pages.hr.reports.attendanceChart.series.attendancePct', { defaultValue: 'Attendance %' })} fill="#3b82f6" />
            <Bar dataKey="delay" name={t('pages.hr.reports.attendanceChart.series.delayPct', { defaultValue: 'Delay %' })} fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
