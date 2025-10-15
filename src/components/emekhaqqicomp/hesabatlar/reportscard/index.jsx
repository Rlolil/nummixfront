import { useState } from 'react';
import { FaWallet, FaUsers, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

const cards = [
  {
    icon: <FaWallet className="w-6 h-6 text-blue-600" />,
    title: "Maaş Hesabatı",
    description: "Aylıq və illik maaş fondunun analizi",
  },
  {
    icon: <FaUsers className="w-6 h-6 text-blue-600" />,
    title: "İşçi Dövriyyəsi",
    description: "Yeni işə qəbul və işdən çıxmalar",
  },
  {
    icon: <FaCalendarAlt className="w-6 h-6 text-blue-600" />,
    title: "Davamiyyət Hesabatı",
    description: "İş vaxtı və davamiyyət statistikası",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
    title: "Şöbələr üzrə Analiz",
    description: "Şöbələrin məsrəf və işçi analizi",
  },
];

export default function DashboardCards() {
    const [selectedCard, setSelectedCard] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map(({ icon, title, description }, idx) => (
        <div
          onClick={() => setSelectedCard(idx)}
          key={idx}
          className={`bg-white text-gray-900 flex flex-col gap-6 rounded-xl border border-gray-200 cursor-pointer transition-all ${
            selectedCard === idx ? 'ring-2 ring-blue-500 shadow-md' : 'hover:shadow-md'
          }`}
        >
          <div className="p-6 flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-lg flex items-center justify-center">
              {icon}
            </div>
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
