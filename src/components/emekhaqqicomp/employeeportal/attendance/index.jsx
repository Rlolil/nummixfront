import React from 'react';

const AttendanceInfo = () => {
  return (
    <div className="space-y-6">
      {/* Son Davamiyyət Qeydləri */}
      <div className="bg-white text-gray-700 flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">Son Davamiyyət Qeydləri</h4>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Tarix</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Giriş</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Çıxış</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">İş saatı</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">2025-10-09</td>
                <td className="px-6 py-4 text-gray-900">09:05</td>
                <td className="px-6 py-4 text-gray-900">18:30</td>
                <td className="px-6 py-4 text-gray-900">9:25</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700">
                    İşdə
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">2025-10-08</td>
                <td className="px-6 py-4 text-gray-900">09:00</td>
                <td className="px-6 py-4 text-gray-900">18:00</td>
                <td className="px-6 py-4 text-gray-900">9:00</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700">
                    İşdə
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">2025-10-07</td>
                <td className="px-6 py-4 text-gray-900">09:15</td>
                <td className="px-6 py-4 text-gray-900">18:15</td>
                <td className="px-6 py-4 text-gray-900">9:00</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-700">
                    Gecikib
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">2025-10-04</td>
                <td className="px-6 py-4 text-gray-900">08:55</td>
                <td className="px-6 py-4 text-gray-900">18:10</td>
                <td className="px-6 py-4 text-gray-900">9:15</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700">
                    İşdə
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">2025-10-03</td>
                <td className="px-6 py-4 text-gray-900">09:00</td>
                <td className="px-6 py-4 text-gray-900">18:05</td>
                <td className="px-6 py-4 text-gray-900">9:05</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700">
                    İşdə
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceInfo;
