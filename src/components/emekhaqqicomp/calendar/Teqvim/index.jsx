// BigCalendarComponent.js
import React, { useMemo, useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS, az as azLocale, ru as ruLocale } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { getCalendar, getProfile } from "../../../../services";

const locales = {
  "en-US": enUS,
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

function EventCalendar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || "az";
  const culture = lang === "en" ? "en-US" : lang;

  const messages = useMemo(
    () => ({
      date: t("pages.hr.attendance.calendar.messages.date", {
        defaultValue: "Date",
      }),
      time: t("pages.hr.attendance.calendar.messages.time", {
        defaultValue: "Time",
      }),
      event: t("pages.hr.attendance.calendar.messages.event", {
        defaultValue: "Event",
      }),
      allDay: t("pages.hr.attendance.calendar.messages.allDay", {
        defaultValue: "All day",
      }),
      week: t("pages.hr.attendance.calendar.messages.week", {
        defaultValue: "Week",
      }),
      work_week: t("pages.hr.attendance.calendar.messages.work_week", {
        defaultValue: "Work week",
      }),
      day: t("pages.hr.attendance.calendar.messages.day", {
        defaultValue: "Day",
      }),
      month: t("pages.hr.attendance.calendar.messages.month", {
        defaultValue: "Month",
      }),
      previous: t("pages.hr.attendance.calendar.messages.previous", {
        defaultValue: "Back",
      }),
      next: t("pages.hr.attendance.calendar.messages.next", {
        defaultValue: "Next",
      }),
      yesterday: t("pages.hr.attendance.calendar.messages.yesterday", {
        defaultValue: "Yesterday",
      }),
      tomorrow: t("pages.hr.attendance.calendar.messages.tomorrow", {
        defaultValue: "Tomorrow",
      }),
      today: t("pages.hr.attendance.calendar.messages.today", {
        defaultValue: "Today",
      }),
      agenda: t("pages.hr.attendance.calendar.messages.agenda", {
        defaultValue: "Agenda",
      }),
      noEventsInRange: t(
        "pages.hr.attendance.calendar.messages.noEventsInRange",
        { defaultValue: "There are no events in this range." }
      ),
      showMore: (total) =>
        t("pages.hr.attendance.calendar.messages.showMore", {
          count: total,
          defaultValue: "+{{count}} more",
        }),
    }),
    [t]
  );

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const user = await getProfile();
        if (user?.id) {
          const data = await getCalendar(user.id);
          if (Array.isArray(data)) {
            const formattedEvents = data.map((event) => ({
              title: event.title,
              start: new Date(event.start),
              end: new Date(event.end),
              allDay: event.allDay,
            }));
            setEvents(formattedEvents);
          }
        }
      } catch (error) {
        console.error("Error loading calendar events:", error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="h-[500px] dark:text-white">
      <style>{`
        .dark .rbc-toolbar button {
          color: black !important;
        }
      `}</style>
      <h3 className="text-[#001233] dark:text-white font-semibold mb-4">
        {t("pages.hr.calendar.title", { defaultValue: "Calendar" })}
      </h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        culture={culture}
        messages={messages}
        className="h-[400px]"
      />
    </div>
  );
}
export default EventCalendar;
