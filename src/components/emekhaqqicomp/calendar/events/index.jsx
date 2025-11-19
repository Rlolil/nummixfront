import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

function MonthlyEventsCard() {
  const { t } = useTranslation();
  const events = useMemo(() => ([
    {
      icon: "👥",
      title: t('pages.hr.calendar.items.hrMeeting', { defaultValue: 'HR department meeting' }),
      subtitle: t('pages.hr.calendar.descriptions.monthlyReview', { defaultValue: 'Monthly review meeting' }),
      date: "M10 10",
    },
    {
      icon: "💰",
      title: t('pages.hr.calendar.items.salaryPayment', { defaultValue: 'Salary payment' }),
      subtitle: t('pages.hr.calendar.descriptions.monthlySalaryPayments', { defaultValue: 'Monthly salary payments' }),
      date: "M10 15",
      amount: "₼485,320",
    },
    {
      icon: "✈️",
      title: `Nigar Əliyeva - ${t('pages.hr.calendar.items.leave', { defaultValue: 'Leave' })}`,
      subtitle: t('pages.hr.calendar.descriptions.annualLeaveDays', { days: 8, defaultValue: 'Annual leave ({{days}} days)' }),
      date: "M10 15",
    },
    {
      icon: "🎉",
      title: t('pages.hr.calendar.items.republicDay', { defaultValue: 'Republic Day' }),
      subtitle: t('pages.hr.calendar.descriptions.stateHoliday', { defaultValue: 'Public holiday' }),
      date: "M10 18",
    },
    {
      icon: "📊",
      title: t('pages.hr.calendar.items.socialInsuranceShort', { defaultValue: 'Social insurance (SSPF)' }),
      subtitle: t('pages.hr.calendar.descriptions.paymentSSPF', { defaultValue: 'Payment to SSPF' }),
      date: "M10 20",
      amount: "₼48,532",
    },
    {
      icon: "📊",
      title: t('pages.hr.calendar.items.incomeTax', { defaultValue: 'Income tax' }),
      subtitle: t('pages.hr.calendar.descriptions.paymentIncomeTax', { defaultValue: 'Income tax payment to the budget' }),
      date: "M10 20",
      amount: "₼67,945",
    },
    {
      icon: "✈️",
      title: `Səbinə Həsənova - ${t('pages.hr.calendar.items.leave', { defaultValue: 'Leave' })}`,
      subtitle: t('pages.hr.calendar.descriptions.annualLeaveDays', { days: 8, defaultValue: 'Annual leave ({{days}} days)' }),
      date: "M10 20",
    },
  ]), [t]);
  return (
    <div className="bg-[#FFFFFF] border border-[#33415C] rounded-xl p-6 flex flex-col gap-6 shadow-sm text-[#001233]">
      <div>
        <h4 className="text-lg font-semibold text-[#023E7D]">{t('pages.hr.calendar.monthTitle', { defaultValue: "This Month's Events" })}</h4>
      </div>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-[#F5F8FF] rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{event.icon}</div>
              <div>
                <p className="text-[#001233]">{event.title}</p>
                <p className="text-sm text-[#7D8597]">{event.subtitle}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#001233]">{event.date}</p>
              {event.amount && (
                <p className="text-sm text-[#7D8597]">{event.amount}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyEventsCard;
