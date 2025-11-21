import React from "react";
import { useTranslation } from "react-i18next";

const data = [
  { day: "B.e", date: "07 Okt", present: 240, late: 7, involuntary: 0, attendance: 97.2, trendingUp: true },
  { day: "Ç.a", date: "08 Okt", present: 235, late: 10, involuntary: 2, attendance: 95.1, trendingUp: true },
  { day: "Ç", date: "09 Okt", present: 229, late: 8, involuntary: 10, attendance: 92.7, trendingUp: false },
  { day: "C.a", date: "10 Okt", present: 0, late: 0, involuntary: 0, attendance: 0.0, trendingUp: false },
  { day: "C", date: "11 Okt", present: 0, late: 0, involuntary: 0, attendance: 0.0, trendingUp: false },
];

function WeeklySummary() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white flex flex-col gap-6 rounded-xl border border-[#33415C] dark:border-[#979DAC] p-6 shadow-sm">
      <header className="mb-4">
        <h4 className="text-xl font-semibold text-[#023E7D] dark:text-white">{t('pages.hr.attendance.weeklySummary.title', { defaultValue: 'Weekly Summary' })}</h4>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-[#F5F8FF] dark:bg-[#002855] border-b border-[#979DAC] dark:border-[#979DAC]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#5C677D] dark:text-[#5C677D] uppercase">{t('pages.hr.attendance.weeklySummary.headers.day', { defaultValue: 'Day' })}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#5C677D] dark:text-[#5C677D] uppercase">{t('pages.hr.attendance.weeklySummary.headers.date', { defaultValue: 'Date' })}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#5C677D] dark:text-[#5C677D] uppercase">{t('pages.hr.attendance.weeklySummary.headers.present', { defaultValue: 'Present' })}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#5C677D] dark:text-[#5C677D] uppercase">{t('pages.hr.attendance.weeklySummary.headers.late', { defaultValue: 'Late' })}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#5C677D] dark:text-[#5C677D] uppercase">{t('pages.hr.attendance.weeklySummary.headers.involuntary', { defaultValue: 'Unexcused' })}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#5C677D] dark:text-[#5C677D] uppercase">{t('pages.hr.attendance.weeklySummary.headers.attendancePct', { defaultValue: 'Attendance %' })}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#979DAC] dark:divide-[#979DAC]">
            {data.map(({ day, date, present, late, involuntary, attendance, trendingUp }) => (
              <tr key={date} className="hover:bg-[#F5F8FF] dark:hover:bg-[#002855]">
                <td className="px-6 py-4 text-[#001233] dark:text-white">{day}</td>
                <td className="px-6 py-4 text-[#7D8597] dark:text-[#5C677D]">{date}</td>
                <td className="px-6 py-4 text-green-600">{present}</td>
                <td className="px-6 py-4 text-orange-600">{late}</td>
                <td className="px-6 py-4 text-purple-600">{involuntary}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#001233] dark:text-white">{attendance.toFixed(1)}%</span>
                    {trendingUp && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-green-600"
                        aria-hidden="true"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeeklySummary;
