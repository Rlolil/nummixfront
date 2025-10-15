import React from "react";
import { AiOutlineAlert, AiOutlineCreditCard } from "react-icons/ai";
import { FaWallet, FaArrowTrendUp } from "react-icons/fa6";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import BudgetChart from "./BudgetChart";

const IdarePaneli = () => {
  const cards = [
    {
      title: "Ümumi Balans",
      icon: <AiOutlineCreditCard className="text-gray-400" size={20} />,
      amount: "145,000 AZN",
      desc: "Kassa + Bank hesabları",
      color: "text-gray-900",
    },
    {
      title: "Kassa Balansı",
      icon: <FaWallet className="text-gray-400" size={20} />,
      amount: "23,000 AZN",
      desc: "Nağd pul",
      color: "text-gray-900",
    },
    {
      title: "Bank Balansı",
      icon: <AiOutlineCreditCard className="text-gray-400" size={20} />,
      amount: "122,000 AZN",
      desc: "Bank hesabları",
      color: "text-gray-900",
    },
    {
      title: "Xalis Cash Flow",
      icon: <FaArrowTrendUp className="text-gray-400" size={20} />,
      amount: "+22,000 AZN",
      desc: "Bu ay",
      color: "text-green-600",
    },
  ];

  return (
    <div className="container mx-auto px-2 py-4">
      <div>
        <h1 className="text-[24px] font-semibold">
          Maliyyə İdarəetməsi - İdarə Paneli
        </h1>
        <p className="text-[#717182] text-[16px] mt-2 mb-5">
          Maliyyə resurslarınızın və pul hərəkətinin tam görünüşü
        </p>
      </div>

      <div className="flex items-start gap-2 mb-5 bg-gray-50 border border-gray-200 rounded-lg p-3">
        <AiOutlineAlert className="text-blue-500 mt-[2px]" size={18} />
        <p className="text-[#717182] text-[14px]">
          Diqqət: "TechSupply MMC" təchizatçısına ödəniş 2 günə gecikir. Məbləğ: 4,500 AZN
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-600 font-medium">{card.title}</p>
              {card.icon}
            </div>
            <p className={`text-3xl font-semibold mt-5 ${card.color}`}>
              {card.amount}
            </p>
            <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-[350px] flex flex-col">
          <h3 className="text-gray-700 font-medium mb-2">Pul Vəsaitlərinin Hərəkəti</h3>
          <p className="text-gray-400 text-sm mb-3">Son 6 ayın gəlir və xərç dinamkası</p>

          <div className="flex-1">
            <Chart1 />
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-[350px] flex flex-col items-center justify-center">
          <h3 className="text-gray-700 font-medium mb-2">Xərç Bölgüsü</h3>
          <p className="text-gray-400 text-sm mb-3">Cari ay kateqoriyalar üzrə xərcləri</p>
          <Chart2 />
        </div>
      </div>
      <BudgetChart />
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <FaArrowTrendUp className="text-blue-500" />
          <h3 className="text-gray-800 font-semibold text-[16px]">AI Tövsiyələri</h3>
        </div>

        <ul className="space-y-3 text-[15px]">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
            <p>
              <span className="font-semibold text-gray-800">Qənaət imkanı:</span>{" "}
              Ofis xərcləri büdcədən 15% artıqdır. Enerji istehlakını optimallaşdırmaqla
              aylıq 500-700 AZN qənaət edə bilərsiniz.
            </p>
          </li>

          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
            <p>
              <span className="font-semibold text-gray-800">Likvidlik xəbərdarlığı:</span>{" "}
              3 ay sonra kassa balansında mənfi göstərici proqnozlaşdırılır. Bank
              kreditlərinin bəzi hissəsini daha erkən ödəmək məsləhətdir.
            </p>
          </li>

          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
            <p>
              <span className="font-semibold text-gray-800">İnvestisiya imkanı:</span>{" "}
              Bank hesabında 60,000 AZN artıq likvidlik var. Qısa müddətli depozitə
              yerləşdirməklə aylıq ~300 AZN əlavə gəlir əldə edə bilərsiniz.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdarePaneli;
