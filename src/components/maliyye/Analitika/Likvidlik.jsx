import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Q1 2024", current: 2.8, quick: 2.0 },
  { name: "Q2 2024", current: 3.2, quick: 2.2 },
  { name: "Q3 2024", current: 2.9, quick: 2.1 },
  { name: "Q4 2024", current: 3.3, quick: 2.4 },
  { name: "Q1 2025", current: 3.4, quick: 2.55 },
];

function Likvidlik() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const textColor = isDark ? "text-white" : "text-[#023E7D]";
  const subtitleColor = isDark ? "text-[#D7E3FC]" : "text-[#7D8597]";
  const chartBg = isDark ? "bg-[#33415C] border-[#5C677D]" : "bg-white border-[#979DAC]";
  const barCurrent = "#0466CB"; 
  const barQuick = "#2BBF6A";   

  return (
    <div className={`p-5 rounded-xl shadow-md border ${chartBg}`}>
      <h2 className={`text-lg font-semibold mb-1 ${textColor}`}>
        {t('pages.finance.analytics.liquidity.title')}
      </h2>

      <p className={`text-sm mb-4 ${subtitleColor}`}>
        {t('pages.finance.analytics.liquidity.subtitle')}
      </p>

      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={10}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#5C677D" : "#E5E7EB"} />
            <XAxis dataKey="name" stroke={isDark ? "#D7E3FC" : "#023E7D"} tick={{ fill: isDark ? "#D7E3FC" : "#023E7D" }} />
            <YAxis domain={[0, 3.5]} stroke={isDark ? "#D7E3FC" : "#023E7D"} tick={{ fill: isDark ? "#D7E3FC" : "#023E7D" }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: isDark ? "#001845" : "#fff",
                borderColor: isDark ? "#5C677D" : "#E5E7EB",
                color: isDark ? "#fff" : "#023E7D"
              }}
            />
            <Legend wrapperStyle={{ color: isDark ? "#D7E3FC" : "#023E7D" }} />
            <Bar dataKey="current" fill={barCurrent} name={t('pages.finance.analytics.liquidity.current', 'Current Ratio')} />
            <Bar dataKey="quick" fill={barQuick} name={t('pages.finance.analytics.liquidity.quick', 'Quick Ratio')} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={`mt-6 p-4 rounded-xl ${isDark ? "bg-[#023E7D] text-white" : "bg-[#EFF6FF] text-[#023E7D]"}`}>
        <p className="font-medium">
          {t('pages.finance.analytics.liquidity.currentSummary.title')}: <span className="font-semibold">3.4</span> – {t('pages.finance.analytics.liquidity.currentSummary.rating')}
        </p>
        <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{t('pages.finance.analytics.liquidity.currentSummary.text')}</p>
      </div>

      <div className={`mt-3 p-4 rounded-xl ${isDark ? "bg-[#023E7D] text-white" : "bg-[#EFF6FF] text-[#023E7D]"}`}>
        <p className="font-medium">
          {t('pages.finance.analytics.liquidity.quickSummary.title')}: <span className="font-semibold">2.6</span> – {t('pages.finance.analytics.liquidity.quickSummary.rating')}
        </p>
        <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{t('pages.finance.analytics.liquidity.quickSummary.text')}</p>
      </div>
    </div>
  );
}

export default Likvidlik;


