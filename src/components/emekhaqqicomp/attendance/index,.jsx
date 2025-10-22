import React from "react";
import StatCard from "./statscard";
import { useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import AttendanceCard from "./AttendanceCard";
import WeeklySummary from "./weeklysummary";
import LatecomersCard from "./LatecomersCard";
import MyBigCalendar from "./Date";
import { useTranslation } from "react-i18next";
function Attendance() {
  const { t } = useTranslation();
  const stats = [
    {
      title: t('pages.hr.attendance.cards.attendanceRate', { defaultValue: 'Attendance %' }),
      value: "96.5%",
      subtitle: t('pages.hr.attendance.cards.change', { value: '+2.3%', defaultValue: '+2.3%' }),
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: t('pages.hr.attendance.cards.present', { defaultValue: 'Present' }),
      value: "229",
      subtitle: t('pages.hr.attendance.cards.ofTotal', { total: 247, defaultValue: 'of 247' }),
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: t('pages.hr.attendance.cards.lateArrivals', { defaultValue: 'Late arrivals' }),
      value: "8",
      subtitle: t('pages.hr.attendance.cards.thisWeek', { defaultValue: 'This week' }),
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: t('pages.hr.attendance.cards.excused', { defaultValue: 'Excused' }),
      value: "10",
      subtitle: t('pages.hr.attendance.cards.sickOrLeave', { defaultValue: 'Sick/Authorized' }),
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];
  const [selected, setSelected] = useState(t('pages.hr.common.period.thisMonth', { defaultValue: 'This month' }));
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    t('pages.hr.common.period.thisMonth', { defaultValue: 'This month' }),
    t('pages.hr.common.period.lastMonth', { defaultValue: 'Last month' }),
    t('pages.hr.common.period.thisYear', { defaultValue: 'This year' }),
    t('pages.hr.common.period.all', { defaultValue: 'All' })
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="space-y-6  my-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl">{t('pages.hr.attendance.title', { defaultValue: 'Attendance Tracking' })}</p>
          <p className="text-gray-600">{t('pages.hr.attendance.subtitle', { defaultValue: 'Work time registration and stats' })}</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-40 h-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              <span>{selected}</span>
              <FaChevronDown className="text-gray-400 text-xs ml-2" />
            </button>

            {isOpen && (
              <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md text-sm">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                      option === selected ? "bg-gray-50 font-medium" : ""
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <FaDownload className="w-4 h-4" />
            {t('common.export', { ns: 'translation', defaultValue: 'Export' })}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-4">
        <div className="">
          <AttendanceCard />
        </div>
        <div className="border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
          <h2 className="text-xl font-medium">{t('pages.hr.attendance.calendar.title', { defaultValue: 'Calendar' })}</h2>
          <MyBigCalendar />
          <div className="space-y-2">
            <div className="flex items-center text-xl gap-2">
              <div className="rounded-full bg-green-600 w-4 h-4"></div>
              <p>{t('pages.hr.attendance.calendar.workday', { defaultValue: 'Workday' })}</p>
            </div>
            <div className="flex items-center text-xl gap-2">
              <div className="rounded-full bg-red-600 w-4 h-4"></div>
              <p>{t('pages.hr.attendance.calendar.offday', { defaultValue: 'Off day' })}</p>
            </div>
            <div className="flex items-center text-xl gap-2">
              <div className="rounded-full bg-blue-600 w-4 h-4"></div>
              <p>{t('pages.hr.attendance.calendar.holiday', { defaultValue: 'Holiday' })}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WeeklySummary />
      </div>
      <div>
        <LatecomersCard />
      </div>
    </div>
  );
}

export default Attendance;
