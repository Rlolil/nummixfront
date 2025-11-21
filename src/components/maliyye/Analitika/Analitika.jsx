import React, { useState } from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import CashFlow from "./CashFlow";
import Rentabel from "./Rentabel";
import Likvidlik from "./Likvidlik";
import FinansSabiti from "./FinansSabiti";
import { useTranslation } from 'react-i18next';

const Analitika = () => {
  const [activeTab, setActiveTab] = useState("cashflow");
  const { t } = useTranslation();

  const financeCards = [
    {
      title: t('pages.finance.analytics.cards.roi.title', 'ROI (Return on Investment)'),
      subtitle: t('pages.finance.analytics.cards.roi.subtitle', 'Investisiyadan geri qaytarma'),
      value: "18.5%",
      change: "+2.3%",
      positive: true,
    },
    {
      title: t('pages.finance.analytics.cards.grossMargin.title', 'Gross Margin'),
      subtitle: t('pages.finance.analytics.cards.grossMargin.subtitle', 'Ümumi mənfəət marjası'),
      value: "42.8%",
      change: "+1.5%",
      positive: true,
    },
    {
      title: t('pages.finance.analytics.cards.netProfitMargin.title', 'Net Profit Margin'),
      subtitle: t('pages.finance.analytics.cards.netProfitMargin.subtitle', 'Xalis mənfəət marjası'),
      value: "12.3%",
      change: "-0.8%",
      positive: false,
    },
    {
      title: t('pages.finance.analytics.cards.currentRatio.title', 'Current Ratio'),
      subtitle: t('pages.finance.analytics.cards.currentRatio.subtitle', 'Cari likvidlik əmsalı'),
      value: "3.4",
      change: "+0.3",
      positive: true,
    },
    {
      title: t('pages.finance.analytics.cards.quickRatio.title', 'Quick Ratio'),
      subtitle: t('pages.finance.analytics.cards.quickRatio.subtitle', 'Təcili likvidlik əmsalı'),
      value: "2.6",
      change: "+0.2",
      positive: true,
    },
    {
      title: t('pages.finance.analytics.cards.debtToEquity.title', 'Debt to Equity'),
      subtitle: t('pages.finance.analytics.cards.debtToEquity.subtitle', 'Borc/Kapital nisbəti'),
      value: "0.45",
      change: "-0.05",
      positive: false,
    },
  ];

  return (
    <div className="container mx-auto">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-semibold text-[#023E7D] dark:text-white">
            {t('pages.finance.analytics.title')}
          </h1>
          <p className="text-[16px] mt-2 mb-5 text-[#7D8597] dark:text-[#5C677D]">
            {t('pages.finance.analytics.subtitle')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {financeCards.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#33415C] rounded-xl 
                      border border-[#979DAC] dark:border-[#33415C] 
                      shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[#023E7D] dark:text-white font-medium text-[15px]">
                {item.title}
              </h3>
              <p className="text-sm text-[#7D8597] dark:text-[#5C677D] mt-1">
                {item.subtitle}
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-3xl font-semibold text-[#001233] dark:text-white">
                {item.value}
              </p>

              <span
                className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-md ${
                  item.positive
                    ? "bg-[#0466CB] text-white"
                    : "bg-[#D00000] text-white"
                }`}
              >
                {item.positive ? (
                  <FiArrowUpRight />
                ) : (
                  <FiArrowDownRight />
                )}
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="inline-flex mt-8 mb-6 overflow-hidden p-1 
                      rounded-full bg-[#979DAC] dark:bg-[#33415C]">

        {["cashflow", "rentabel", "likvid"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 
                        text-xs sm:text-sm font-medium transition-all duration-200 rounded-full ${
              activeTab === tab
                ? "bg-white dark:bg-[#023E7D] text-[#001233] dark:text-white shadow-sm"
                : "text-[#5C677D] dark:text-[#979DAC] hover:text-[#023E7D]"
            }`}
          >
            {t(`pages.finance.analytics.tabs.${tab === "cashflow" ? "cashFlow" : tab === "rentabel" ? "profitability" : "liquidity"}`)}
          </button>
        ))}
      </div>

      {activeTab === "cashflow" && <CashFlow />}
      {activeTab === "rentabel" && <Rentabel />}
      {activeTab === "likvid" && <Likvidlik />}

      <FinansSabiti />
    </div>
  );
};

export default Analitika;
