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
      bgColor: "bg-green-50 dark:bg-[#002855]",
      textColor: "text-green-600 dark:text-[#0453A4]",
    },
    {
      title: t('pages.hr.attendance.cards.present', { defaultValue: 'Present' }),
      value: "229",
      subtitle: t('pages.hr.attendance.cards.ofTotal', { total: 247, defaultValue: 'of 247' }),
      bgColor: "bg-blue-50 dark:bg-[#002855]",
      textColor: "text-blue-600 dark:text-[#0453A4]",
    },
    {
      title: t('pages.hr.attendance.cards.lateArrivals', { defaultValue: 'Late arrivals' }),
      value: "8",
      subtitle: t('pages.hr.attendance.cards.thisWeek', { defaultValue: 'This week' }),
      bgColor: "bg-orange-50 dark:bg-[#002855]",
      textColor: "text-orange-600 dark:text-[#0453A4]",
    },
    {
      title: t('pages.hr.attendance.cards.excused', { defaultValue: 'Excused' }),
      value: "10",
      subtitle: t('pages.hr.attendance.cards.sickOrLeave', { defaultValue: 'Sick/Authorized' }),
      bgColor: "bg-purple-50 dark:bg-[#002855]",
      textColor: "text-purple-600 dark:text-[#0453A4]",
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
    <div className="space-y-6 my-4 text-[#001233] dark:text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl text-[#023E7D] dark:text-white">{t('pages.hr.attendance.title', { defaultValue: 'Attendance Tracking' })}</p>
          <p className="text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.attendance.subtitle', { defaultValue: 'Work time registration and stats' })}</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-40 h-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full rounded-md border border-[#979DAC] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#002855] px-3 py-2 text-sm text-[#023E7D] dark:text-white hover:bg-[#F5F8FF] dark:hover:bg-[#023E7D] transition"
            >
              <span>{selected}</span>
              <FaChevronDown className="text-[#7D8597] dark:text-[#5C677D] text-xs ml-2" />
            </button>

            {isOpen && (
              <ul className="absolute left-0 mt-1 w-full bg-[#FFFFFF] dark:bg-[#002855] border border-[#979DAC] dark:border-[#979DAC] rounded-md shadow-md text-sm">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-3 py-2 cursor-pointer hover:bg-[#F5F8FF] dark:hover:bg-[#023E7D] ${
                      option === selected ? "bg-[#F5F8FF] dark:bg-[#023E7D] font-medium" : ""
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
            className="inline-flex items-center gap-2 rounded-md border border-[#979DAC] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#002855] px-4 py-2 text-sm font-medium text-[#023E7D] dark:text-white hover:bg-[#F5F8FF] dark:hover:bg-[#023E7D] transition"
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
        <div className="border border-[#33415C] dark:border-[#979DAC] dark:bg-[#33415C] bg-[#FFFFFF] rounded-xl p-4 space-y-4 shadow-sm">
          <h2 className="text-xl font-medium text-[#023E7D] dark:text-white">{t('pages.hr.attendance.calendar.title', { defaultValue: 'Calendar' })}</h2>
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
