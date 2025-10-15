import React from 'react'
import { FiTrendingUp, FiTrendingDown, FiUsers } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Xeberdarliq from './Xeberdarliq';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Techizad from './Techizad';

const AnbarAi = () => {
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
  }
  return (
    <div className="container mx-auto px-2 py-4">
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
                className={`flex items-center text-sm ${s.positive ? "text-green-600" : "text-red-500"}`}
              >
                {s.positive ? <FiTrendingUp /> : <FiTrendingDown />}
                <span className="ml-1">{s.change}</span>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-full">{s.icon}</div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 mb-6">
        <Xeberdarliq />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
          <h3 className="text-gray-700 font-medium mb-2">Pul Vəsaitlərinin Hərəkəti</h3>
          <p className="text-gray-400 text-sm mb-3">Son 6 ayın gəlir və xərç dinamkası</p>
          <div className="bg-orange-50 text-sm text-gray-800 p-3 rounded-lg mt-4">
            <strong>AI Analizi:</strong> Maya dəyəri son 3 ayda 8% artıb. Alternativ təchizatçılar araşdırılmalıdır.
          </div>
          <Chart1 />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 ">
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Xərç Bölgüsü</h3>
            <p className="text-gray-400 text-sm mb-3">Cari ay kateqoriyalar üzrə xərcləri</p>
          </div>
          <div className='flex flex-col items-center justify-center mt-10'>
              <Chart2 />
          </div>
        </div>
      </div>
      <Techizad/>
    </div>
  )
}

export default AnbarAi