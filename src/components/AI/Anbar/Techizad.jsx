import React from "react";

const suppliers = [
  {
    name: "Tech Supply Co",
    delivery: 95,
    quality: 98,
    delay: "0.5 gün",
    status: "Əla",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Digital Partners",
    delivery: 88,
    quality: 92,
    delay: "2.3 gün",
    status: "Yaxşı",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Global Solutions",
    delivery: 72,
    quality: 85,
    delay: "5.8 gün",
    status: "Orta",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Quick Logistics",
    delivery: 65,
    quality: 78,
    delay: "8.2 gün",
    status: "Zəif",
    color: "bg-red-100 text-red-600",
  },
];

const Techizad = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-1 text-gray-800">
        Təchizatçı Performansı
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Təchizatçıların keyfiyyət və vaxtında çatdırılma göstəriciləri
      </p>

      <div className="space-y-4">
        {suppliers.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <span
                className={`px-3 py-0.5 rounded-full text-xs font-medium ${item.color}`}
              >
                {item.status}
              </span>
            </div>

            {/* Progress Bars in Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Delivery */}
              <div className="w-full md:w-1/2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Vaxtında Çatdırılma</span>
                  <span className="text-gray-700 font-medium">{item.delivery}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full"
                    style={{ width: `${item.delivery}%` }}
                  ></div>
                </div>
              </div>

              {/* Quality */}
              <div className="w-full md:w-1/2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Keyfiyyət</span>
                  <span className="text-gray-700 font-medium">{item.quality}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full"
                    style={{ width: `${item.quality}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Delay Info */}
            <div className="flex justify-end text-xs text-gray-500 mt-3">
              <span className="text-gray-600 font-medium mr-1">Orta Gecikmə:</span>
              <span className="text-gray-800">{item.delay}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techizad;
