import React from "react";
import { Calendar } from "lucide-react"; // lucide icon istifade olunur

const upcomingEvents = [
  {
    icon: "🎉",
    title: "Respublika Günü",
    date: "M10 18",
    description: "Dövlət bayramı",
    color: "red",
  },
  {
    icon: "📊",
    title: "Sosial sığorta (DSMF)",
    date: "M10 20",
    amount: "₼48,532",
    description: "DSMF-ə ödəniş",
    color: "orange",
  },
  {
    icon: "📊",
    title: "Gəlir vergisi",
    date: "M10 20",
    amount: "₼67,945",
    description: "Büdcəyə gəlir vergisi ödənişi",
    color: "orange",
  },
  {
    icon: "✈️",
    title: "Səbinə Həsənova - Məzuniyyət",
    date: "M10 20",
    description: "İllik məzuniyyət (8 gün)",
    color: "blue",
  },
];

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
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-6 shadow-sm">
      <div>
        <h4 className="text-lg font-semibold">Yaxınlaşan Hadisələr</h4>
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
