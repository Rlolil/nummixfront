import React from "react";
import Chart2 from "./Chart2";
// Burada sonra Recharts import edə bilərsən
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SatisDovrleri = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

      {/* SOL BLOK */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-5">
        <h2 className="text-lg font-semibold mb-1">Satış Dövrləri</h2>
        <p className="text-sm text-gray-500 mb-4">Ay ərzində satışların paylanması</p>

        {/* AI TÖVSİYƏ BLONU */}
        <div className="bg-purple-50 border border-purple-200 rounded-md p-4 text-sm mb-4">
          <span className="font-semibold text-purple-700">AI Tövsiyəsi:</span>{" "}
          Satışlar əsasən ayın 20-dən sonra 60% artır. Kampaniyaları bu dövrə
          planlaşdırın.
        </div>

        {/* QRAFİK YERİ - SONRA RECHARTS ƏLAVƏ EDİLƏCƏK */}
        <div className="w-full h-64 flex items-center justify-center rounded-md text-gray-400 text-sm">
          {/* Burada sonra <ResponsiveContainer> ilə qrafik əlavə olunacaq */}
          <Chart2/>
        </div>
      </div>

      {/* SAĞ BLOK */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-5">
        <h2 className="text-lg font-semibold mb-1">Kampaniya Effektivliyi</h2>
        <p className="text-sm text-gray-500 mb-4">Endirim kampaniyalarının nəticələri</p>

        <div className="space-y-4">

          {/* ITEM */}
          <div className="flex justify-between items-center border border-gray-300 rounded-md p-4">
            <div>
              <p className="font-medium">Yaz Endirim Kampaniyası</p>
              <span className="text-gray-500 text-sm">156 satış</span>
            </div>
            <div className="text-right">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">15% endirim</span>
              <p className="text-green-600 font-medium text-sm mt-1">ROI: +340%</p>
            </div>
          </div>

          <div className="flex justify-between items-center border border-gray-300 rounded-md p-4">
            <div>
              <p className="font-medium">VIP Müştəri Proqramı</p>
              <span className="text-gray-500 text-sm">89 satış</span>
            </div>
            <div className="text-right">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">10% endirim</span>
              <p className="text-green-600 font-medium text-sm mt-1">ROI: +220%</p>
            </div>
          </div>

          <div className="flex justify-between items-center border border-gray-300 rounded-md p-4">
            <div>
              <p className="font-medium">Toplu Alış Endirimi</p>
              <span className="text-gray-500 text-sm">45 satış</span>
            </div>
            <div className="text-right">
              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">20% endirim</span>
              <p className="text-green-600 font-medium text-sm mt-1">ROI: +180%</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SatisDovrleri;
