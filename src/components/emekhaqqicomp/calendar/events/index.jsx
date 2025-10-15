import React from "react";

const events = [
  {
    icon: "👥",
    title: "İK şöbəsi toplantısı",
    subtitle: "Aylıq icmal toplantısı",
    date: "M10 10",
  },
  {
    icon: "💰",
    title: "Əməkhaqqı ödənişi",
    subtitle: "Aylıq əməkhaqqı ödənişləri",
    date: "M10 15",
    amount: "₼485,320",
  },
  {
    icon: "✈️",
    title: "Nigar Əliyeva - Məzuniyyət",
    subtitle: "İllik məzuniyyət (8 gün)",
    date: "M10 15",
  },
  {
    icon: "🎉",
    title: "Respublika Günü",
    subtitle: "Dövlət bayramı",
    date: "M10 18",
  },
  {
    icon: "📊",
    title: "Sosial sığorta (DSMF)",
    subtitle: "DSMF-ə ödəniş",
    date: "M10 20",
    amount: "₼48,532",
  },
  {
    icon: "📊",
    title: "Gəlir vergisi",
    subtitle: "Büdcəyə gəlir vergisi ödənişi",
    date: "M10 20",
    amount: "₼67,945",
  },
  {
    icon: "✈️",
    title: "Səbinə Həsənova - Məzuniyyət",
    subtitle: "İllik məzuniyyət (8 gün)",
    date: "M10 20",
  },
];

function MonthlyEventsCard() {
  return (
    <div className="bg-white border  border-gray-200 rounded-xl p-6 flex flex-col gap-6 shadow-sm">
      <div>
        <h4 className="text-lg font-semibold">Bu Ayın Hadisələri</h4>
      </div>
      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{event.icon}</div>
              <div>
                <p className="text-gray-900">{event.title}</p>
                <p className="text-sm text-gray-500">{event.subtitle}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-900">{event.date}</p>
              {event.amount && (
                <p className="text-sm text-gray-600">{event.amount}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyEventsCard;
