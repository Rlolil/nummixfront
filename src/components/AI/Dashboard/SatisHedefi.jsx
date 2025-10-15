import React from "react";

const SatisHedefi = () => {
  const cariSatis = 128456;
  const hedef = 120000;
  const faiz = Math.round((cariSatis / hedef) * 100);

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Satış Hədəfi</h2>
      <p className="text-sm text-gray-500 mb-4">
        Aylıq satış planının icra vəziyyəti
      </p>

      <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
        <span>₼{cariSatis.toLocaleString()} / ₼{hedef.toLocaleString()}</span>
        <span className="text-green-600 font-semibold">{faiz}%</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gray-900 h-full rounded-full"
          style={{ width: `${faiz}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SatisHedefi;
