import React, { useMemo, useState, useEffect } from "react";
import { Calendar } from "lucide-react"; // lucide icon istifade olunur
import { useTranslation } from "react-i18next";
import { getCalendar, getProfile } from "../../../../services";

const colorClasses = {
  red: {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-700 dark:text-red-200",
    border: "border-red-200 dark:border-red-800",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-700 dark:text-orange-200",
    border: "border-orange-200 dark:border-orange-800",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-200",
    border: "border-blue-200 dark:border-blue-800",
  },
};

function UpcomingEventsCard() {
  const { t } = useTranslation();
  const [upcomingEvents, setUpcomingEvents] = useState([]);

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
              date: event.date ? new Date(event.date).toLocaleDateString() : "",
              description: event.description || event.subtitle,
              amount: event.amount,
              color: event.color || "blue",
            }));
            setUpcomingEvents(formattedEvents);
          }
        }
      } catch (error) {
        console.error("Error loading upcoming events:", error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl p-6 flex flex-col gap-6 shadow-sm text-[#001233] dark:text-white">
      <div>
        <h4 className="text-lg font-semibold text-[#023E7D] dark:text-white">{t('pages.hr.calendar.upcomingTitle', { defaultValue: 'Upcoming Events' })}</h4>
      </div>
      <div className="space-y-3">
        {upcomingEvents.map((event, index) => {
          const colors = colorClasses[event.color] || colorClasses.orange;
          return (
            <div
              key={index}
              className={`p-4 border rounded-lg ${colors.bg} ${colors.text} ${colors.border}`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{event.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{event.title}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-3 h-3" />
                    <p className="text-xs">{event.date}</p>
                  </div>

                  {event.amount && (
                    <p className="text-xs mt-1">{event.amount}</p>
                  )}
                  <p className="text-xs mt-1 opacity-80">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingEventsCard;
