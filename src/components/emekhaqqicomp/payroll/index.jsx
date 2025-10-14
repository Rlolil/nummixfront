import React from 'react';
import { 
  FaChevronDown, 
  FaCalculator, 
  FaDownload, 
  FaWallet, 
  FaArrowUp 
} from 'react-icons/fa';
import { FiTrendingUp } from "react-icons/fi";


const PayrollManagement = () => {
  const payrollData = [
    {
      name: 'Nigar Əliyeva',
      department: 'Maliyyə',
      baseSalary: '₼2500',
      bonus: '₼300',
      gross: '₼2800',
      net: '₼2128',
      status: 'Ödənilib',
      statusColor: 'green',
    },
    {
      name: 'Kamran Məmmədov',
      department: 'IT Şöbəsi',
      baseSalary: '₼3200',
      bonus: '₼500',
      gross: '₼3900',
      net: '₼2964',
      status: 'Ödənilib',
      statusColor: 'green',
    },
    {
      name: 'Səbinə Həsənova',
      department: 'Marketinq',
      baseSalary: '₼2800',
      bonus: '₼400',
      gross: '₼3200',
      net: '₼2432',
      status: 'Ödənilib',
      statusColor: 'green',
    },
    {
      name: 'Elvin Quliyev',
      department: 'Satış',
      baseSalary: '₼1800',
      bonus: '₼600',
      gross: '₼2550',
      net: '₼1938',
      status: 'Gözləyir',
      statusColor: 'orange',
    },
    {
      name: 'Ləman Rəhimova',
      department: 'İnsan Resursları',
      baseSalary: '₼1600',
      bonus: '₼0',
      gross: '₼1600',
      net: '₼1216',
      status: 'Ödənilib',
      statusColor: 'green',
    },
  ];

  const taxData = [
    { label: 'Gəlir vergisi (14%)', amount: '₼67.945', progress: 100 },
    { label: 'Sosial sığorta (DSMF)', amount: '₼48.532', progress: 100 },
    { label: 'İşsizlik sığortası', amount: '₼2.426', progress: 5 },
    { label: 'İcbari tibbi sığorta', amount: '₼9.706', progress: 20 },
  ];

  const accountingData = [
    { type: 'Debet', account: '543 - Əmək haqqı xərcləri', amount: '₼485.320', color: 'green' },
    { type: 'Kredit', account: '531 - İşçilərlə hesablaşmalar', amount: '₼368.843', color: 'red' },
    { type: 'Kredit', account: '533 - Büdcə ilə hesablaşmalar (vergilər)', amount: '₼67.945', color: 'red' },
    { type: 'Kredit', account: '535 - Sosial sığorta ilə hesablaşmalar', amount: '₼48.532', color: 'red' },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Əməkhaqqı İdarəetməsi</h2>
          <p className="text-gray-500">Maaş hesablamaları və ödənişlər</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select className="w-40 h-9 px-3 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Oktyabr 2025</option>
            <option>Sentyabr 2025</option>
            <option>Avqust 2025</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white text-sm hover:bg-gray-100">
            <FaCalculator className="w-4 h-4" />
            Hesabla
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <FaDownload className="w-4 h-4" />
            İxrac
          </button>
        </div>
      </div>

      {/* Payroll Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Ümumi Brüt Maaş</p>
            <p className="text-gray-900 mt-1">₼485.320</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
            <FaWallet className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Ümumi Net Maaş</p>
            <p className="text-gray-900 mt-1">₼368.843</p>
          </div>
          <div className="bg-green-50 text-green-600 p-3 rounded-lg">
            <FiTrendingUp className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Vergilər</p>
            <p className="text-gray-900 mt-1">₼67.945</p>
          </div>
          <div className="bg-orange-50 text-orange-600 p-3 rounded-lg">
            <FaCalculator className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white border rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Bonuslar</p>
            <p className="text-gray-900 mt-1">₼25.400</p>
          </div>
          <div className="bg-purple-50 text-purple-600 p-3 rounded-lg">
            <FiTrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Tax Deductions and Employee Payroll */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tax Deductions */}
        <div className="bg-white border rounded-xl lg:col-span-1">
          <div className="px-6 pt-6">
            <h4 className="font-semibold">Vergi və Ayırmalar</h4>
          </div>
          <div className="px-6 pb-6 space-y-4">
            {taxData.map((tax, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-700">{tax.label}</p>
                  <p className="text-gray-900">{tax.amount}</p>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-full rounded-full"
                    style={{ width: `${tax.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <p className="text-gray-900">Ümumi Ayırmalar</p>
                <p className="text-gray-900">₼128.609</p>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Payroll Table */}
        <div className="bg-white border rounded-xl lg:col-span-2">
          <div className="px-6 pt-6">
            <h4 className="font-semibold">İşçilər üzrə Maaş</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">İşçi</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Əsas Maaş</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Bonus</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Brüt</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Net</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payrollData.map((employee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div>
                        <div className="text-gray-900">{employee.name}</div>
                        <div className="text-xs text-gray-500">{employee.department}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-900">{employee.baseSalary}</td>
                    <td className="px-4 py-3 text-gray-900">{employee.bonus}</td>
                    <td className="px-4 py-3 text-gray-900">{employee.gross}</td>
                    <td className="px-4 py-3 text-gray-900">{employee.net}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md border ${
                          employee.statusColor === 'green'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Accounting Entries */}
      <div className="bg-white border rounded-xl">
        <div className="px-6 pt-6">
          <h4 className="font-semibold">Mühasibat Müxabirləşməsi</h4>
        </div>
        <div className="px-6 pb-6 space-y-3">
          {accountingData.map((entry, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg ${
                entry.color === 'green' ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div>
                <p className="text-sm text-gray-600">{entry.type}</p>
                <p className="text-gray-900">{entry.account}</p>
              </div>
              <p className="text-gray-900">{entry.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;