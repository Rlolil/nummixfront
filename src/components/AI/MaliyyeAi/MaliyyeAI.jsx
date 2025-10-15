import React from 'react'
import { FiTrendingUp, FiTrendingDown, FiAlertCircle } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
import { BsBoxSeam, BsCart3 } from "react-icons/bs";
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

const MaliyyeAI = () => {
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
      }
    ],

    debts: [
      {
        name: "ABC Şirkəti",
        days: "15 gün keçib",
        amount: "₼12,500",
        type: "Alacaq",
        status: "",
      },
      {
        name: "XYZ MMC",
        days: "45 gün keçib",
        amount: "₼8,900",
        type: "Alacaq",
        status: "Risk",
      },
      {
        name: "Supply Co",
        days: "5 gün keçib",
        amount: "₼15,600",
        type: "Borc",
        status: "",
      },
      {
        name: "Tech Solutions",
        days: "62 gün keçib",
        amount: "₼22,000",
        type: "Borc",
        status: "Kritik",
      },
    ],
  }

  return (
    <div className="container mx-auto px-2 py-4">
      {/* Üst Stat Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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

      {/* Chart 1 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-10 p-4 flex flex-col">
        <h3 className="text-gray-700 font-medium mb-2">Gəlir-Xərc Balansı</h3>
        <p className="text-gray-400 text-sm mb-3">Son 6 ayın müqayisəsi</p>

        <div className="flex-1">
          <div className="bg-blue-50 text-sm text-gray-800 p-3 rounded-lg mt-4">
            <strong>AI Analizi:</strong> Növbəti 6 ay ərzində orta aylıq cash flow
            <strong> 72,667 AZN</strong> proqnozlaşdırılır. Sentyabr ayında maksimum
            (<strong>75,000 AZN</strong>) gözlənilir. Likvidlik riski aşkar
            edilmədi.
          </div>
          <Chart1 />
        </div>
      </div>

      {/* Chart 2 və 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col">
          <h3 className="text-gray-700 font-medium mb-2">Pul Vəsaitlərinin Hərəkəti</h3>
          <p className="text-gray-400 text-sm mb-3">Son 6 ayın gəlir və xərç dinamkası</p>
          <Chart2 />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col items-center justify-center">
          <h3 className="text-gray-700 font-medium mb-2">Xərç Bölgüsü</h3>
          <p className="text-gray-400 text-sm mb-3">Cari ay kateqoriyalar üzrə xərcləri</p>
          <Chart3 />
        </div>
      </div>

      {/* Borc və Alacaqlar */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm mt-10 p-5">
        <h3 className="text-gray-800 font-semibold text-lg mb-1">Borc və Alacaqlar</h3>
        <p className="text-gray-400 text-sm mb-5">Riskli vəziyyətdə olan ödənişlər</p>

        <div className="space-y-4">
          {data.debts.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                {(item.status === "Risk" || item.status === "Kritik" || item.type === "Borc") && (
                  <FiAlertCircle className="text-red-500 text-lg mt-[2px]" />
                )}
                <div>
                  <h4 className="font-medium text-gray-800">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.days}</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-semibold text-gray-800">{item.amount}</span>
                <div className="flex gap-2 mt-1">
                  {item.status && (
                    <span
                      className={`text-xs font-medium px-2 py-[2px] rounded-lg ${
                        item.status === "Risk"
                          ? "bg-orange-500 text-white"
                          : item.status === "Kritik"
                          ? "bg-red-600 text-white"
                          : ""
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                  <span
                    className={`text-xs font-medium px-2 py-[2px] rounded-lg ${
                      item.type === "Alacaq"
                        ? "bg-slate-900 text-white"
                        : "bg-rose-600 text-white"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MaliyyeAI
