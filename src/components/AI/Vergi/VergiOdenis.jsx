import React from "react";

const taxes = [
  {
    name: "ƏDV",
    amount: "₼8,450",
    dueDate: "12 Oktyabr 2025",
    remainingDays: 3,
    color: "bg-red-50 border-red-200",
    warning: true,
    delay: "₼422.5",
  },
  {
    name: "Gəlir Vergisi",
    amount: "₼12,300",
    dueDate: "15 Oktyabr 2025",
    remainingDays: 6,
    color: "bg-amber-50 border-amber-200",
    warning: true,
    delay: "₼615",
  },
  {
    name: "Sosial Sığorta",
    amount: "₼5,670",
    dueDate: "20 Oktyabr 2025",
    remainingDays: 11,
    color: "bg-blue-50 border-blue-200",
    warning: false,
  },
  {
    name: "Əmlak Vergisi",
    amount: "₼3,200",
    dueDate: "25 Oktyabr 2025",
    remainingDays: 16,
    color: "bg-indigo-50 border-indigo-200",
    warning: false,
  },
];

const VergiOdenis = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-5 mb-6">
        <h2 className="text-xl font-semibold mb-1 text-gray-800">
          Yaxınlaşan Vergi Ödənişləri
        </h2>
        <p className="text-gray-500 mb-5 text-sm sm:text-base">
          Ödənilməli vergi və ayırmalar
        </p>

        <div className="space-y-5">
          {taxes.map((tax, index) => (
            <div
              key={index}
              className={`border ${tax.color} rounded-2xl shadow-sm p-5 transition hover:shadow-md`}
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3">
                <div className="flex items-start gap-2">
                  {tax.warning ? (
                    <span className="text-red-600 text-lg">⚠️</span>
                  ) : (
                    <span className="text-blue-600 text-lg">ℹ️</span>
                  )}
                  <div>
                    <p className="font-semibold text-gray-800">{tax.name}</p>
                    <p className="text-sm text-gray-500">
                      Son tarix: {tax.dueDate}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <p className="font-semibold text-gray-800">{tax.amount}</p>
                  <span
                    className={`text-xs sm:text-sm px-2 py-1 rounded-full ${
                      tax.remainingDays <= 3
                        ? "bg-red-600 text-white"
                        : tax.remainingDays <= 7
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tax.remainingDays} gün qalıb
                  </span>
                </div>
              </div>

              {tax.delay && (
                <div className="mt-3 text-sm text-gray-700 bg-white/70 p-3 rounded-lg border border-gray-100">
                  <strong>AI Xəbardarlıq:</strong> Gecikən cərimə: {tax.delay}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition w-full sm:w-1/2">
                  İndi Ödə
                </button>
                <button className="border bg-white border-gray-300 hover:bg-gray-100 text-gray-700 font-medium px-5 py-2 rounded-lg transition w-full sm:w-1/2">
                  Xatırlat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VergiOdenis;
