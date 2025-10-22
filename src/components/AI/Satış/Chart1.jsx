import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const Chart1 = () => {
  const { t } = useTranslation();
  const data = [
    { month: "jan", value: 85000 },
    { month: "feb", value: 91000 },
    { month: "mar", value: 88000 },
    { month: "apr", value: 110000 },
    { month: "may", value: 95000 },
    { month: "jun", value: 118000 },
  ];
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tickFormatter={(m) => t(`pages.ai.common.months.${m}`)} />
          <YAxis />
          <Tooltip formatter={(v) => [v, t("pages.ai.salesAi.series.sales")]} labelFormatter={(label) => t(`pages.ai.common.months.${label}`)} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ r: 4, stroke: "#8b5cf6", strokeWidth: 2, fill: "white" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart1;
