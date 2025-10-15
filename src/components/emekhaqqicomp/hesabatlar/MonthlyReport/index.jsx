import React from "react";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

const data = [
  {
    label: "Ümumi işçi sayı",
    current: "247",
    previous: "235",
    change: "+12 (+5.1%)",
    positive: true,
  },
  {
    label: "Maaş fondu",
    current: "₼485,320",
    previous: "₼482,000",
    change: "+₼3,320 (+0.7%)",
    positive: true,
  },
  {
    label: "Orta maaş",
    current: "₼1,965",
    previous: "₼2,051",
    change: "-₼86 (-4.2%)",
    positive: false,
  },
  {
    label: "Davamiyyət",
    current: "96.5%",
    previous: "94.2%",
    change: "+2.3%",
    positive: true,
  },
  {
    label: "İşçi dövriyyəsi",
    current: "5.7%",
    previous: "6.8%",
    change: "-1.1%",
    positive: true, // Çünki azalma müsbət haldır (işçi dövriyyəsi)
  },
];

export default function MonthlyReport() {
  return (
    <div className="bg-white rounded-xl border  border-gray-200 shadow p-6">
      <h4 className="text-xl font-semibold mb-6">Aylıq İcmal Hesabat</h4>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">
                Göstərici
              </th>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">
                Bu ay
              </th>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">
                Keçən ay
              </th>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">
                Dəyişiklik
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map(({ label, current, previous, change, positive }, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 text-gray-900">{label}</td>
                <td className="px-6 py-4 text-gray-900">{current}</td>
                <td className="px-6 py-4 text-gray-600">{previous}</td>
                <td
                  className={`px-6 py-4 flex items-center gap-1 font-medium ${
                    positive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {positive ? <HiArrowSmUp /> : <HiArrowSmDown />}
                  {change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
