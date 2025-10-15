import React from "react";

const data = [
  { day: "B.e", date: "07 Okt", present: 240, late: 7, involuntary: 0, attendance: 97.2, trendingUp: true },
  { day: "Ç.a", date: "08 Okt", present: 235, late: 10, involuntary: 2, attendance: 95.1, trendingUp: true },
  { day: "Ç", date: "09 Okt", present: 229, late: 8, involuntary: 10, attendance: 92.7, trendingUp: false },
  { day: "C.a", date: "10 Okt", present: 0, late: 0, involuntary: 0, attendance: 0.0, trendingUp: false },
  { day: "C", date: "11 Okt", present: 0, late: 0, involuntary: 0, attendance: 0.0, trendingUp: false },
];

function WeeklySummary() {
  return (
    <div className="bg-base-100 text-base-content flex flex-col gap-6 rounded-xl border border-base-300 p-6 shadow-lg">
      <header className="mb-4">
        <h4 className="text-xl font-semibold">Həftəlik İcmal</h4>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["Gün", "Tarix", "İşdə olan", "Gecikənlər", "Qeyri-ixtiyari", "Davamiyyət %"].map((heading) => (
                <th key={heading} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map(({ day, date, present, late, involuntary, attendance, trendingUp }) => (
              <tr key={date} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">{day}</td>
                <td className="px-6 py-4 text-gray-600">{date}</td>
                <td className="px-6 py-4 text-green-600">{present}</td>
                <td className="px-6 py-4 text-orange-600">{late}</td>
                <td className="px-6 py-4 text-purple-600">{involuntary}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900">{attendance.toFixed(1)}%</span>
                    {trendingUp && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-green-600"
                        aria-hidden="true"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeeklySummary;
