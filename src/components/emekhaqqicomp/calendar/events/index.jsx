import React, { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getCalendar, getProfile } from "../../../../services";

function MonthlyEventsCard() {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const user = await getProfile();
        if (user?.id) {
          const data = await getCalendar(user.id);
          if (Array.isArray(data)) {
            const formattedEvents = data.map((event) => ({
              icon: event.icon || "📅",
              title: event.title,
              subtitle: event.description || event.subtitle,
              date: event.date ? new Date(event.date).toLocaleDateString() : "",
              amount: event.amount,
            }));
            setEvents(formattedEvents);
          }
        }
      } catch (error) {
        console.error("Error loading monthly events:", error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl p-6 flex flex-col gap-6 shadow-sm text-[#001233] dark:text-white">
      <div>
        <h4 className="text-lg font-semibold text-[#023E7D] dark:text-white">{t('pages.hr.calendar.monthTitle', { defaultValue: "This Month's Events" })}</h4>
      </div>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-[#F5F8FF] dark:bg-[#001233] rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{event.icon}</div>
              <div>
                <p className="text-[#001233] dark:text-white">{event.title}</p>
                <p className="text-sm text-[#7D8597] dark:text-[#979DAC]">{event.subtitle}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#001233] dark:text-white">{event.date}</p>
              {event.amount && (
                <p className="text-sm text-[#7D8597] dark:text-[#979DAC]">{event.amount}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyEventsCard;
