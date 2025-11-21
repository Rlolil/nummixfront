import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWallet, FaUsers, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

export default function DashboardCards() {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [
    {
      icon: <FaWallet className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: t('pages.hr.reports.cards.salaryReport.title', { defaultValue: 'Salary Report' }),
      description: t('pages.hr.reports.cards.salaryReport.desc', { defaultValue: 'Monthly and yearly payroll analysis' }),
    },
    {
      icon: <FaUsers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: t('pages.hr.reports.cards.employeeTurnover.title', { defaultValue: 'Employee Turnover' }),
      description: t('pages.hr.reports.cards.employeeTurnover.desc', { defaultValue: 'New hires and departures' }),
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: t('pages.hr.reports.cards.attendanceReport.title', { defaultValue: 'Attendance Report' }),
      description: t('pages.hr.reports.cards.attendanceReport.desc', { defaultValue: 'Work hours and attendance stats' }),
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: t('pages.hr.reports.cards.departmentAnalysis.title', { defaultValue: 'Department Analysis' }),
      description: t('pages.hr.reports.cards.departmentAnalysis.desc', { defaultValue: 'Cost and headcount by department' }),
    },
  ];

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map(({ icon, title, description }, idx) => (
        <div
          onClick={() => setSelectedCard(idx)}
          key={idx}
          className={`bg-white dark:bg-[#33415C] text-gray-900 dark:text-white flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-[#979DAC] cursor-pointer transition-all ${
            selectedCard === idx ? 'ring-2 ring-blue-500 shadow-md' : 'hover:shadow-md'
          }`}
        >
          <div className="p-6 flex items-start gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-gray-500 dark:text-[#979DAC] mt-1">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
