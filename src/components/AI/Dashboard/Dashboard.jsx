import React from "react";
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import SatisHedefi from "./SatisHedefi";
import XercLimiti from "./Xerclimiti";

const Dashboard = () => {
  const data = {
    stats: [
      {
        title: "Aylıq Mənfəət",
        value: "₼45,231",
        change: "+18.5%",
        positive: true,
        icon: <MdAttachMoney className="text-green-500 text-[28px]" />,
      },
      {
        title: "Satış Həcmi",
        value: "₼128,456",
        change: "+12.3%",
        positive: true,
        icon: <BsCart3 className="text-blue-500 text-[28px]" />,
      },
      {
        title: "Anbar Dəyəri",
        value: "₼67,890",
        change: "-5.2%",
        positive: false,
        icon: <BsBoxSeam className="text-purple-500 text-[28px]" />,
      },
      {
        title: "Əmək Haqqı Fondu",
        value: "₼23,450",
        change: "+8.1%",
        positive: true,
        icon: <FiUsers className="text-orange-400 text-[28px]" />,
      },
    ],

    alerts: [
      {
        title: "Kritik Stok Səviyyəsi",
        impact: "yüksək",
        borderColor: "border-orange-300",
        bgColor: "bg-orange-50",
        badgeColor: "bg-red-500 text-white",
        text: "5 məhsul minimum stok səviyyəsinə çatıb. Təkrar sifariş tələb olunur.",
      },
      {
        title: "ƏDV Ödənişi Yaxınlaşır",
        impact: "orta",
        borderColor: "border-blue-300",
        bgColor: "bg-blue-50",
        badgeColor: "bg-black text-white",
        text: "ƏDV ödənişinə 3 gün qalıb. Məbləğ: ₼8,450",
      },
      {
        title: "Satış Hədəfi",
        impact: "aşağı",
        borderColor: "border-green-300",
        bgColor: "bg-green-50",
        badgeColor: "bg-gray-300 text-gray-800",
        text: "Bu ay satış hədəfi 105% yerinə yetirildi!",
      },
    ],

    aiAnalysis: [
      {
        title: "Gəlir Artımı",
        text: "Bu ay gəlirlər 20%, xərclər isə 35% artıb. Xərc optimallaşdırması tövsiyə olunur.",
        impact: "Yüksək təsir",
        badgeColor: "bg-red-500 text-white",
      },
      {
        title: "Müştəri Davranışı",
        text: "Son 3 ayda ən çox alış edən 5 müştəri ümumi satışın 42%-ni təşkil edir.",
        impact: "Orta təsir",
        badgeColor: "bg-gray-200 text-gray-700",
      },
      {
        title: "Satış Trendi",
        text: "Satışlar əsasən ayın 20-dən sonra 60% artır. Kampaniyaları bu dövrə planlaşdırın.",
        impact: "Orta təsir",
        badgeColor: "bg-gray-200 text-gray-700",
      },
      {
        title: "İşçi Dövriyyəsi",
        text: "Marketing şöbəsində işçi itkisinin riski müəyyən edilib. HR ilə görüş planlaşdırılmalıdır.",
        impact: "Yüksək təsir",
        badgeColor: "bg-red-500 text-white",
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 py-4">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data.stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 flex justify-between items-center"
          >
            <div className="space-y-3">
              <h2 className="text-gray-500 text-sm font-medium">{s.title}</h2>
              <p className="text-[20px] font-semibold text-gray-800">{s.value}</p>
              <div
                className={`flex items-center text-sm ${s.positive ? "text-green-600" : "text-red-500"
                  }`}
              >
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-full">{s.icon}</div>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 mb-6">
        <h2 className="text-[16px] font-semibold mb-2">Ən Mühüm Xəbərdarlıqlar</h2>
        <p className="text-gray-500 text-sm mb-4">
          Al tərəfindən müəyyən edilmiş prioritet məsələlər
        </p>

        {data.alerts.map((a, i) => (
          <div
            key={i}
            className={`border-l-4 ${a.borderColor} ${a.bgColor} p-4 mb-4 rounded-lg`}
          >
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              {a.title}
              <span
                className={`${a.badgeColor} text-xs px-2 py-0.5 rounded-full`}
              >
                {a.impact}
              </span>
            </h3>
            <p className="text-gray-600 text-sm mt-2">{a.text}</p>
          </div>
        ))}
      </div>

      {/* AI Təhlili */}
      <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5">
        <h2 className="text-[16px] font-semibold mb-2">
          AI İntelligent Təhlilin Nəticələri
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Biznesiniz üçün tövsiyələr və proqnozlar
        </p>

        <div className="space-y-6">
          {data.aiAnalysis.map((r, i) => (
            <div
              key={i}
              className="flex justify-between items-start border-l-4 border-blue-400 pl-4"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{r.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{r.text}</p>
              </div>
              <span className={`${r.badgeColor} text-xs px-3 py-1 rounded-full`}>
                {r.impact}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-7">
        <SatisHedefi />
        <XercLimiti />
      </div>

    </div>
  );
};

export default Dashboard;
