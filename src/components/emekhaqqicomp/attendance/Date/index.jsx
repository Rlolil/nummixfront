// BigCalendarComponent.js
import React, { useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS, az as azLocale, ru as ruLocale } from 'date-fns/locale';
import { useTranslation } from "react-i18next";

const locales = {
  'en-US': enUS,
  az: azLocale,
  ru: ruLocale,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function MyBigCalendar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || 'az';
  const culture = lang === 'en' ? 'en-US' : lang; // map 'en' -> 'en-US' for date-fns

  const messages = useMemo(() => ({
    date: t('pages.hr.attendance.calendar.messages.date', { defaultValue: 'Date' }),
    time: t('pages.hr.attendance.calendar.messages.time', { defaultValue: 'Time' }),
    event: t('pages.hr.attendance.calendar.messages.event', { defaultValue: 'Event' }),
    allDay: t('pages.hr.attendance.calendar.messages.allDay', { defaultValue: 'All day' }),
    week: t('pages.hr.attendance.calendar.messages.week', { defaultValue: 'Week' }),
    work_week: t('pages.hr.attendance.calendar.messages.work_week', { defaultValue: 'Work week' }),
    day: t('pages.hr.attendance.calendar.messages.day', { defaultValue: 'Day' }),
    month: t('pages.hr.attendance.calendar.messages.month', { defaultValue: 'Month' }),
    previous: t('pages.hr.attendance.calendar.messages.previous', { defaultValue: 'Back' }),
    next: t('pages.hr.attendance.calendar.messages.next', { defaultValue: 'Next' }),
    yesterday: t('pages.hr.attendance.calendar.messages.yesterday', { defaultValue: 'Yesterday' }),
    tomorrow: t('pages.hr.attendance.calendar.messages.tomorrow', { defaultValue: 'Tomorrow' }),
    today: t('pages.hr.attendance.calendar.messages.today', { defaultValue: 'Today' }),
    agenda: t('pages.hr.attendance.calendar.messages.agenda', { defaultValue: 'Agenda' }),
    noEventsInRange: t('pages.hr.attendance.calendar.messages.noEventsInRange', { defaultValue: 'There are no events in this range.' }),
    showMore: (total) => t('pages.hr.attendance.calendar.messages.showMore', { count: total, defaultValue: '+{{count}} more' })
  }), [t]);

  const events = useMemo(() => ([
    {
      title: t('pages.hr.attendance.calendar.events.projectPresentation', { defaultValue: 'Project presentation' }),
      start: new Date(2025, 9, 20, 10, 0),
      end: new Date(2025, 9, 20, 12, 0),
    },
    {
      title: t('pages.hr.attendance.calendar.events.teamMeeting', { defaultValue: 'Team meeting' }),
      start: new Date(2025, 9, 22, 14, 0),
      end: new Date(2025, 9, 22, 15, 30),
    },
  ]), [t]);
  return (
    <div style={{ height: "500px" }} className="dark:text-white">
      <h3>{t('pages.hr.attendance.calendar.title', { defaultValue: 'Calendar' })}</h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        culture={culture}
        messages={messages}
        style={{ height: 400 }}
      />
    </div>
  );
}

export default MyBigCalendar;