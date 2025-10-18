import React from "react";

const products = [
  { id: 1, name: "Premium Paket", sales: "45 satış", price: "67,500 ₼", percent: "+25%" },
  { id: 2, name: "Standart Xidmət", sales: "128 satış", price: "51,200 ₼", percent: "+18%" },
  { id: 3, name: "Enterprise Lisenziya", sales: "12 satış", price: "48,000 ₼", percent: "+42%" },
  { id: 4, name: "Əlavə Modullar", sales: "89 satış", price: "35,600 ₼", percent: "+12%" },
  { id: 5, name: "Texniki Dəstək", sales: "156 satış", price: "31,200 ₼", percent: "+8%" },
];

const customers = [
  { id: "A", name: "ABC Holding", orders: "15 alış • 2 gün əvvəl", price: "42,500 ₼" },
  { id: "X", name: "XYZ Corporation", orders: "12 alış • 5 gün əvvəl", price: "38,900 ₼" },
  { id: "T", name: "Tech Solutions MMC", orders: "18 alış • 1 gün əvvəl", price: "35,200 ₼" },
  { id: "D", name: "Digital Agency", orders: "9 alış • 3 gün əvvəl", price: "28,700 ₼" },
  { id: "R", name: "Retail Plus", orders: "14 alış • 1 həftə əvvəl", price: "25,600 ₼" },
];

const ProductCustomer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold">Ən Çox Satılan Məhsullar</h2>
        <p className="text-sm text-gray-500 mb-4">Bu ayın ən populyar məhsulları</p>

        <div className="space-y-3">
          {products.map((item, index) => (
            <div key={index} className="flex items-center justify-between border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                  {item.id}
                </span>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.sales}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{item.price}</p>
                <p className="text-green-600 text-xs">{item.percent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold">Ən Çox Alış Edən Müştərilər</h2>
        <p className="text-sm text-gray-500 mb-4">Son 3 ayın TOP müştəriləri</p>

        <div className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg text-sm mb-4">
          <strong>AI Analizi:</strong> TOP 5 müştəri ümumi satışın <strong>42%</strong>-ni təşkil edir.
        </div>

        <div className="space-y-3">
          {customers.map((c, i) => (
            <div key={i} className="flex items-center justify-between border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-semibold">
                  {c.id}
                </span>
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.orders}</p>
                </div>
              </div>
              <p className="font-bold">{c.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCustomer;
