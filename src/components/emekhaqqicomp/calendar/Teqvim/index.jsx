// BigCalendarComponent.js
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS } from 'date-fns/locale';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Eventləri burada təyin edirik
const events = [
  {
    title: "Proyekt təqdimatı",
    start: new Date(2025, 9, 20, 10, 0), // 20 Oktyabr 2025
    end: new Date(2025, 9, 20, 12, 0),
  },
  {
    title: "Komanda iclası",
    start: new Date(2025, 9, 22, 14, 0),
    end: new Date(2025, 9, 22, 15, 30),
  },
];

function eventCalendar() {
  return (
    <div className="h-[500px]">
      <h3>Əsas Təqvim</h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="h-[400px]"
      />
    </div>
  );
}

export default eventCalendar;