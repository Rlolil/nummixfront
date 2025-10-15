import React from "react";

const recommendations = [
  {
    title: "R&D Xərcləri",
    level: "Asan",
    description:
      "Tədqiqat-inkişaf xərclərini vergi bazasından çıxararaq 2,300 AZN qənaət edə bilərsiniz",
    saving: "2,300",
  },
  {
    title: "Əsas Vəsaitlərin Amortizasiyası",
    level: "Orta",
    description:
      "Sürətli amortizasiya metodundan istifadə edərək bu il 4,500 AZN vergi azaldılması əldə edə bilərsiniz",
    saving: "4,500",
  },
  {
    title: "İşçilərin Sosial Paketləri",
    level: "Asan",
    description:
      "Müəyyən sosial müavinətlər vergidən azaddır, 1,800 AZN qənaət potensialı",
    saving: "1,800",
  },
];

const Optimallasdirma = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <h2 className="text-lg font-semibold mb-2">
        Vergi Optimallaşdırma Tövsiyələri
      </h2>
      <p className="text-gray-600 mb-4">
        AI tərəfindən müəyyən edilmiş qanuni vergi qənaət yolları
      </p>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-green-50 border border-green-100 p-4 rounded-xl flex justify-between items-start"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    item.level === "Asan"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.level}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <button className="bg-green-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-green-700 transition">
                Ətraflı Məlumat
              </button>
            </div>
            <div className="text-right">
              <p className="text-green-700 font-semibold">+₼{item.saving}</p>
              <p className="text-sm text-gray-500">qənaət</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-100 text-sm text-blue-800 p-3 rounded-md">
        <p>
          <strong>Qeyd:</strong> Bütün tövsiyələr Azərbaycan Respublikasının
          vergi qanunvericiliyinə uyğundur. Tətbiq etməzdən əvvəl vergi
          məsləhətçisi ilə məsləhətləşmək tövsiyə olunur.
        </p>
      </div>
    </div>
  );
};

export default Optimallasdirma;
