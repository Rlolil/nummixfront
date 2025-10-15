import React, { useState } from "react";
import { BiExport } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import OdenisTab from "./OdenisTab";
import DaxilolmaTab from "./DaxilolmaTab";

const Odenisler = () => {
  const [activeTab, setActiveTab] = useState("odenis");

  const cards = [
    { title: "Ödənilməli", amount: "26,800 AZN", desc: "Təchizatçılara", color: "text-red-500" },
    { title: "Daxil olacaq", amount: "45,500 AZN", desc: "Müştərilərdən", color: "text-green-500" },
    { title: "Gecikmiş ödənişlər", amount: "1", desc: "Təcili diqqət tələb edir", color: "text-gray-900" },
    { title: "Gecikmiş alacaqlar", amount: "1", desc: "Xatırlatma göndər", color: "text-gray-900" },
  ];

  const schedule = [
    {
      date: "2025-10-08",
      type: "Daxilolma",
      name: "XYZ Trading - Gecikmiş",
      urgent: true,
      amount: "+8,500 AZN",
      color: "text-green-600",
    },
    {
      date: "2025-10-10",
      type: "Daxilolma",
      name: "ABC Corporation",
      amount: "+15,000 AZN",
      color: "text-green-600",
    },
    {
      date: "2025-10-12",
      type: "Ödəniş",
      name: "OfficeWorld",
      amount: "-2,300 AZN",
      color: "text-red-600",
    },
    {
      date: "2025-10-14",
      type: "Daxilolma",
      name: "Tech Solutions",
      amount: "+22,000 AZN",
      color: "text-green-600",
    },
    {
      date: "2025-10-15",
      type: "Ödəniş",
      name: "Marketing Pro",
      amount: "-8,000 AZN",
      color: "text-red-600",
    },
  ];

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-semibold">Ödənişlərin İdarə Olunması</h1>
          <p className="text-[#717182] text-[16px] mt-2 mb-5">
            Təchizatçılara ödənişlər və müştərilərdən daxilolmalar
          </p>
        </div>
        <button className="flex gap-3 text-[14px] items-center border-2 bg-black text-white rounded-lg px-4 py-2 min-w-[200px] justify-center hover:bg-gray-800 transition">
          <FiPlus /> Yeni ödəniş planla
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600 font-medium">{card.title}</p>
            </div>
            <p className={`text-3xl mt-5 ${card.color}`}>{card.amount}</p>
            <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="inline-flex mt-6 mb-6 overflow-hidden rounded-full bg-gray-200">
        <button
          onClick={() => setActiveTab("odenis")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
          ${activeTab === "odenis"
              ? "bg-white text-black shadow-sm rounded-full"
              : "text-gray-600 hover:text-black"}`}
        >
          Ödənişlər (Çıxış)
        </button>
        <button
          onClick={() => setActiveTab("daxilolma")}
          className={`px-6 py-2 m-1 text-sm font-medium transition-all duration-200 
          ${activeTab === "daxilolma"
              ? "bg-white text-black shadow-sm rounded-full"
              : "text-gray-600 hover:text-black"}`}
        >
          Daxilolmalar
        </button>
      </div>

      {activeTab === "odenis" && <OdenisTab />}
      {activeTab === "daxilolma" && <DaxilolmaTab />}

      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-1">Növbəti 7 Günün Ödəniş Qrafiki</h2>
        <p className="text-gray-500 text-sm mb-5">
          Planlaşdırılmış ödənişlər və daxilolmalar
        </p>

        <div className="divide-y">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-300 items-center py-3 text-[15px]"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-500 w-[90px]">{item.date}</span>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-md ${item.type === "Ödəniş"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-black text-white"
                    }`}
                >
                  {item.type}
                </span>
                <span className="text-gray-800 font-medium">{item.name}</span>
                {item.urgent && (
                  <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                    Təcili
                  </span>
                )}
              </div>
              <span className={`font-semibold ${item.color}`}>
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Odenisler;
