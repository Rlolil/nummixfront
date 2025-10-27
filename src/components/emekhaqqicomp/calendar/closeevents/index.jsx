import React, { useMemo } from "react";
import { Calendar } from "lucide-react"; // lucide icon istifade olunur
import { useTranslation } from "react-i18next";

const colorClasses = {
  red: {
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-200",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    border: "border-orange-200",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    border: "border-blue-200",
  },
};

function UpcomingEventsCard() {
  const { t } = useTranslation();
  const upcomingEvents = useMemo(() => ([
    {
      icon: "🎉",
      title: t('pages.hr.calendar.items.republicDay', { defaultValue: 'Republic Day' }),
      date: "M10 18",
      description: t('pages.hr.calendar.descriptions.stateHoliday', { defaultValue: 'Public holiday' }),
      color: "red",
    },
    {
      icon: "📊",
      title: t('pages.hr.calendar.items.socialInsuranceShort', { defaultValue: 'Social insurance (SSPF)' }),
      date: "M10 20",
      amount: "₼48,532",
      description: t('pages.hr.calendar.descriptions.paymentSSPF', { defaultValue: 'Payment to SSPF' }),
      color: "orange",
    },
    {
      icon: "📊",
      title: t('pages.hr.calendar.items.incomeTax', { defaultValue: 'Income tax' }),
      date: "M10 20",
      amount: "₼67,945",
      description: t('pages.hr.calendar.descriptions.paymentIncomeTax', { defaultValue: 'Income tax payment to the budget' }),
      color: "orange",
    },
    {
      icon: "✈️",
      title: `Səbinə Həsənova - ${t('pages.hr.calendar.items.leave', { defaultValue: 'Leave' })}`,
      date: "M10 20",
      description: t('pages.hr.calendar.descriptions.annualLeaveDays', { days: 8, defaultValue: 'Annual leave ({{days}} days)' }),
      color: "blue",
    },
  ]), [t]);
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-6 shadow-sm">
      <div>
        <h4 className="text-lg font-semibold">{t('pages.hr.calendar.upcomingTitle', { defaultValue: 'Upcoming Events' })}</h4>
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
