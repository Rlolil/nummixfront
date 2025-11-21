import React, { useMemo, useState } from "react";
import MonthlyEventsCard from "./events";
import UpcomingEventsCard from "./closeevents";
import EventCalendar from "./Teqvim";
import { useTranslation } from "react-i18next";
import LeaveRequestModal from "../leave/new";
function Calendar() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const anyModalOpen = useMemo(() => modalOpen, [modalOpen]);
  if (anyModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="space-y-6 my-4 text-[#001233] dark:text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl text-[#023E7D] dark:text-white">{t('pages.hr.calendar.title', { defaultValue: 'Calendar' })}</p>
          <p className="text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.calendar.subtitle', { defaultValue: 'Important dates and reminders' })}</p>
        </div>
        <div>
          {modalOpen && (
            <LeaveRequestModal onClose={() => setModalOpen(false)} />
          )}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#0466CB] hover:bg-[#0453A4] dark:bg-[#023E7D] dark:hover:bg-[#0453A4] rounded-xl p-2 flex items-center gap-2"
          >
            <span className="text-[18px] text-white">+</span>
            <span className="text-white">{t('pages.hr.calendar.newRequest', { defaultValue: 'New Request' })}</span>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr]  gap-4 grid-cols-1">
        <div className="border border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl shadow-sm p-4"><EventCalendar /></div>
        <div><UpcomingEventsCard /></div>
      </div>
      <div>
        <MonthlyEventsCard />
      </div>
    </div>
  );
}

export default Calendar;
