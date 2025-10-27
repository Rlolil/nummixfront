import React from "react";
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
import { useTranslation } from "react-i18next";

const dataRows = [
  { month: "jan", incomeTax: 11500, social: 4800, vat: 7200 },
  { month: "feb", incomeTax: 11400, social: 4700, vat: 7600 },
  { month: "mar", incomeTax: 12000, social: 4900, vat: 7300 },
  { month: "apr", incomeTax: 12100, social: 5000, vat: 8600 },
  { month: "may", incomeTax: 12600, social: 5200, vat: 8000 },
  { month: "jun", incomeTax: 12800, social: 5400, vat: 8900 },
];

const Chart = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataRows}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#555" }} tickFormatter={(m) => t(`pages.ai.common.months.${m}`)} />
          <YAxis tick={{ fill: "#555" }} />
          <Tooltip labelFormatter={(m) => t(`pages.ai.common.months.${m}`)} />
          <Legend />
          <Bar dataKey="incomeTax" name={t("pages.ai.taxAi.series.incomeTax")} fill="#9b5de5" radius={[6, 6, 0, 0]} />
          <Bar dataKey="social" name={t("pages.ai.taxAi.series.social")} fill="#06d6a0" radius={[6, 6, 0, 0]} />
          <Bar dataKey="vat" name={t("pages.ai.taxAi.series.vat")} fill="#4895ef" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
