import React, { useState } from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import CashFlow from "./CashFlow";
import Rentabel from "./Rentabel";
import Likvidlik from "./Likvidlik";
import FinansSabiti from "./FinansSabiti";

const Analitika = () => {
  const [activeTab, setActiveTab] = useState("cashflow");

  const financeCards = [
    {
      title: "ROI (Return on Investment)",
      subtitle: "Investisiyadan geri qaytarma",
      value: "18.5%",
      change: "+2.3%",
      positive: true,
    },
    {
      title: "Gross Margin",
      subtitle: "Ümumi mənfəət marjası",
      value: "42.8%",
      change: "+1.5%",
      positive: true,
    },
    {
      title: "Net Profit Margin",
      subtitle: "Xalis mənfəət marjası",
      value: "12.3%",
      change: "-0.8%",
      positive: false,
    },
    {
      title: "Current Ratio",
      subtitle: "Cari likvidlik əmsalı",
      value: "3.4",
      change: "+0.3",
      positive: true,
    },
    {
      title: "Quick Ratio",
      subtitle: "Təcili likvidlik əmsalı",
      value: "2.6",
      change: "+0.2",
      positive: true,
    },
    {
      title: "Debt to Equity",
      subtitle: "Borc/Kapital nisbəti",
      value: "0.45",
      change: "-0.05",
      positive: false,
    },
  ];

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-semibold">Maliyyə Analitikası</h1>
          <p className="text-[#717182] text-[16px] mt-2 mb-5">
            Rentabellik, likvidlik və kapital göstəriciləri
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {financeCards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-gray-800 font-medium text-[15px]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p className="text-3xl font-semibold text-gray-900">
                {item.value}
              </p>
              <span
                className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-md ${
                  item.positive
                    ? "bg-black text-white"
                    : "bg-gray-900 text-white"
                }`}
              >
                {item.positive ? (
                  <FiArrowUpRight className="text-white" />
                ) : (
                  <FiArrowDownRight className="text-white" />
                )}
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="inline-flex mt-8 mb-6 overflow-hidden p-1 rounded-full bg-gray-200">
        <button
          onClick={() => setActiveTab("cashflow")}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
          ${
            activeTab === "cashflow"
              ? "bg-white text-black shadow-sm rounded-full"
              : "text-gray-600 hover:text-black"
          }`}
        >
          Cash Flow Proqnozu
        </button>
        <button
          onClick={() => setActiveTab("rentabel")}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
          ${
            activeTab === "rentabel"
              ? "bg-white text-black shadow-sm rounded-full"
              : "text-gray-600 hover:text-black"
          }`}
        >
          Rentabellik
        </button>
        <button
          onClick={() => setActiveTab("likvid")}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-full
          ${
            activeTab === "likvid"
              ? "bg-white text-black shadow-sm rounded-full"
              : "text-gray-600 hover:text-black"
          }`}
        >
          Likvidlik
        </button>
      </div>

      {activeTab === "cashflow" && <CashFlow />}
      {activeTab === "rentabel" && <Rentabel />}
      {activeTab === "likvid" && <Likvidlik />}

      <FinansSabiti/>
    </div>
  );
};

export default Analitika;
