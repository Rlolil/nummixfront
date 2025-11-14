// import React from "react";
// import { AiOutlineAlert, AiOutlineCreditCard } from "react-icons/ai";
// import { FaWallet, FaArrowTrendUp } from "react-icons/fa6";
// import Chart1 from "./Chart1";
// import Chart2 from "./Chart2";
// import BudgetChart from "./BudgetChart";
// import { useTranslation } from "react-i18next";

// const IdarePaneli = () => {
//   const { t } = useTranslation();
//   const cards = [
//     {
//       titleKey: "pages.finance.controlPanel.cards.totalBalance.title",
//       icon: <AiOutlineCreditCard className="text-gray-400" size={20} />,
//       amount: "145,000 AZN",
//       descKey: "pages.finance.controlPanel.cards.totalBalance.desc",
//       color: "text-gray-900",
//     },
//     {
//       titleKey: "pages.finance.controlPanel.cards.cashBalance.title",
//       icon: <FaWallet className="text-gray-400" size={20} />,
//       amount: "23,000 AZN",
//       descKey: "pages.finance.controlPanel.cards.cashBalance.desc",
//       color: "text-gray-900",
//     },
//     {
//       titleKey: "pages.finance.controlPanel.cards.bankBalance.title",
//       icon: <AiOutlineCreditCard className="text-gray-400" size={20} />,
//       amount: "122,000 AZN",
//       descKey: "pages.finance.controlPanel.cards.bankBalance.desc",
//       color: "text-gray-900",
//     }
//   ];

//   return (
//     <div className="container mx-auto px-2 py-4">
//       <div>
//         <h1 className="text-[24px] font-semibold">
//           {t('pages.finance.controlPanel.title')}
//         </h1>
//         <p className="text-[#717182] text-[16px] mt-2 mb-5">
//           {t('pages.finance.controlPanel.subtitle')}
//         </p>
//       </div>

//       <div className="flex items-start gap-2 mb-5 bg-gray-50 border border-gray-200 rounded-lg p-3">
//         <AiOutlineAlert className="text-blue-500 mt-[2px]" size={18} />
//         <p className="text-[#717182] text-[14px]">
//           {t('pages.finance.controlPanel.alert.text', { supplier: 'TechSupply MMC', days: 2, amount: '4,500 AZN' })}
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between"
//           >
//             <div className="flex justify-between items-center">
//               <p className="text-gray-600 font-medium">{t(card.titleKey)}</p>
//               {card.icon}
//             </div>
//             <p className={`text-3xl font-semibold mt-5 ${card.color}`}>
//               {card.amount}
//             </p>
//             <p className="text-sm text-gray-500 mt-1">{t(card.descKey)}</p>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
//         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-[350px] flex flex-col">
//           <h3 className="text-gray-700 font-medium mb-2">{t('pages.finance.controlPanel.charts.cashFlow.title')}</h3>
//           <p className="text-gray-400 text-sm mb-3">{t('pages.finance.controlPanel.charts.cashFlow.subtitle')}</p>

//           <div className="flex-1">
//             <Chart1 />
//           </div>
//         </div>
//         <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-[350px] flex flex-col items-center justify-center">
//           <h3 className="text-gray-700 font-medium mb-2">{t('pages.finance.controlPanel.charts.expenseDistribution.title')}</h3>
//           <p className="text-gray-400 text-sm mb-3">{t('pages.finance.controlPanel.charts.expenseDistribution.subtitle')}</p>
//           <Chart2 />
//         </div>
//       </div>
//       <BudgetChart />
//       <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mt-6">
//         <div className="flex items-center gap-2 mb-4">
//           <FaArrowTrendUp className="text-blue-500" />
//           <h3 className="text-gray-800 font-semibold text-[16px]">{t('pages.finance.controlPanel.ai.title')}</h3>
//         </div>

//         <ul className="space-y-3 text-[15px]">
//           <li className="flex items-start gap-2">
//             <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
//             <p>
//               <span className="font-semibold text-gray-800">{t('pages.finance.controlPanel.ai.items.savingOpportunity.title')}</span>{" "}
//               {t('pages.finance.controlPanel.ai.items.savingOpportunity.desc')}
//             </p>
//           </li>

//           <li className="flex items-start gap-2">
//             <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
//             <p>
//               <span className="font-semibold text-gray-800">{t('pages.finance.controlPanel.ai.items.liquidityWarning.title')}</span>{" "}
//               {t('pages.finance.controlPanel.ai.items.liquidityWarning.desc')}
//             </p>
//           </li>

//           <li className="flex items-start gap-2">
//             <span className="w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
//             <p>
//               <span className="font-semibold text-gray-800">{t('pages.finance.controlPanel.ai.items.investmentOpportunity.title')}</span>{" "}
//               {t('pages.finance.controlPanel.ai.items.investmentOpportunity.desc')}
//             </p>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default IdarePaneli;


import React from "react";
import { AiOutlineAlert, AiOutlineCreditCard } from "react-icons/ai";
import { FaWallet, FaArrowTrendUp } from "react-icons/fa6";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import BudgetChart from "./BudgetChart";
import { useTranslation } from "react-i18next";

const IdarePaneli = () => {
  const { t } = useTranslation();

  const cards = [
    {
      titleKey: "pages.finance.controlPanel.cards.totalBalance.title",
      icon: (
        <AiOutlineCreditCard
          className="text-[#001233] dark:text-[#FFFFFF]"
          size={20}
        />
      ),
      amount: "145,000 AZN",
      descKey: "pages.finance.controlPanel.cards.totalBalance.desc",
    },
    {
      titleKey: "pages.finance.controlPanel.cards.cashBalance.title",
      icon: <FaWallet className="text-[#001233] dark:text-[#FFFFFF]" size={20} />,
      amount: "23,000 AZN",
      descKey: "pages.finance.controlPanel.cards.cashBalance.desc",
    },
    {
      titleKey: "pages.finance.controlPanel.cards.bankBalance.title",
      icon: (
        <AiOutlineCreditCard
          className="text-[#001233] dark:text-[#FFFFFF]"
          size={20}
        />
      ),
      amount: "122,000 AZN",
      descKey: "pages.finance.controlPanel.cards.bankBalance.desc",
    },
  ];

  return (
    <div className="container mx-auto px-2 py-4 bg-[#FFFFFF] dark:bg-[#001233] ">
      <div>
        <h1 className="text-[24px] font-semibold text-[#023E7D] dark:text-[#FFFFFF]">
          {t("pages.finance.controlPanel.title")}
        </h1>
        <p className="text-[#7D8597] dark:text-[#5C677D] text-[16px] mt-2 mb-5">
          {t("pages.finance.controlPanel.subtitle")}
        </p>
      </div>

      <div className="flex items-start gap-2 mb-5 bg-[#E8F1FD] dark:bg-[#002855] border border-[#979DAC] rounded-lg p-3">
        <AiOutlineAlert className="text-[#0466CB] dark:text-[#0466CB] mt-[2px]" size={18} />
        <p className="text-[#7D8597] dark:text-[#FFFFFF] text-[14px]">
          {t("pages.finance.controlPanel.alert.text", {
            supplier: "TechSupply MMC",
            days: 2,
            amount: "4,500 AZN",
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm p-5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <p className="text-[#5C677D] dark:text-[#FFFFFF] font-medium">
                {t(card.titleKey)}
              </p>
              {card.icon}
            </div>
            <p className="text-3xl font-semibold mt-5 text-[#023E7D] dark:text-[#0466CB]">
              {card.amount}
            </p>
            <p className="text-sm text-[#7D8597] dark:text-[#5C677D] mt-1">
              {t(card.descKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm p-4 h-[350px] flex flex-col">
          <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-medium mb-2">
            {t("pages.finance.controlPanel.charts.cashFlow.title")}
          </h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">
            {t("pages.finance.controlPanel.charts.cashFlow.subtitle")}
          </p>
          <div className="flex-1">
            <Chart1 />
          </div>
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#979DAC] rounded-xl shadow-sm p-4 h-[350px] flex flex-col items-center justify-center">
          <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-medium mb-2">
            {t("pages.finance.controlPanel.charts.expenseDistribution.title")}
          </h3>
          <p className="text-[#7D8597] dark:text-[#5C677D] text-sm mb-3">
            {t("pages.finance.controlPanel.charts.expenseDistribution.subtitle")}
          </p>
          <Chart2 />
        </div>
      </div>

      <BudgetChart />

      <div className="bg-[#E8F1FD] dark:bg-[#002855] border border-[#979DAC] rounded-xl p-5 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <FaArrowTrendUp className="text-[#0466CB] dark:text-[#0466CB]" />
          <h3 className="text-[#023E7D] dark:text-[#FFFFFF] font-semibold text-[16px]">
            {t("pages.finance.controlPanel.ai.title")}
          </h3>
        </div>

        <ul className="space-y-3 text-[15px]">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-[#0466CB] dark:bg-[#0466CB] rounded-full"></span>
            <p className="text-[#7D8597] dark:text-[#FFFFFF]">
              <span className="font-semibold text-[#023E7D] dark:text-[#0466CB]">
                {t("pages.finance.controlPanel.ai.items.savingOpportunity.title")}
              </span>{" "}
              {t("pages.finance.controlPanel.ai.items.savingOpportunity.desc")}
            </p>
          </li>

          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-[#0466CB] dark:bg-[#0466CB] rounded-full"></span>
            <p className="text-[#7D8597] dark:text-[#FFFFFF]">
              <span className="font-semibold text-[#023E7D] dark:text-[#0466CB]">
                {t("pages.finance.controlPanel.ai.items.liquidityWarning.title")}
              </span>{" "}
              {t("pages.finance.controlPanel.ai.items.liquidityWarning.desc")}
            </p>
          </li>

          <li className="flex items-start gap-2">
            <span className="w-2 h-2 mt-2 bg-[#00B050] dark:bg-[#00B050] rounded-full"></span>
            <p className="text-[#7D8597] dark:text-[#FFFFFF]">
              <span className="font-semibold text-[#023E7D] dark:text-[#0466CB]">
                {t(
                  "pages.finance.controlPanel.ai.items.investmentOpportunity.title"
                )}
              </span>{" "}
              {t(
                "pages.finance.controlPanel.ai.items.investmentOpportunity.desc"
              )}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdarePaneli;
