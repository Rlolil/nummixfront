import React from "react";

const latecomers = [
  { name: "Kamran Məmmədov", dept: "IT Şöbəsi", lateBy: 15, entryTime: "09:15" },
  { name: "Elvin Quliyev", dept: "Satış", lateBy: 30, entryTime: "09:30" },
  { name: "Tural Əhmədov", dept: "IT Şöbəsi", lateBy: 5, entryTime: "09:05" },
];

function LatecomersCard() {
  return (
    <div className="bg-base-100 text-base-content flex flex-col gap-6 rounded-xl border border-base-300 p-6 shadow-lg">
      <header>
        <h4 className="text-xl font-semibold leading-none">Bu Həftə Gecikənlər</h4>
      </header>

      <div className="space-y-3">
        {latecomers.map(({ name, dept, lateBy, entryTime }) => (
          <div key={name} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-lg">
                {name[0]}
              </div>
              <div>
                <p className="text-gray-900">{name}</p>
                <p className="text-sm text-gray-600">{dept}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-orange-600">{lateBy} dəqiqə</p>
              <p className="text-sm text-gray-500">Giriş: {entryTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatecomersCard;
