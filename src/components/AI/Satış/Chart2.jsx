import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const buckets = ["oneToTen", "elevenToTwenty", "twentyOneToThirtyOne"];

const Chart2 = () => {
  const { t } = useTranslation();
  const data = [
    { bucket: "oneToTen", value: 35 },
    { bucket: "elevenToTwenty", value: 28 },
    { bucket: "twentyOneToThirtyOne", value: 65 },
  ];
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <BarChart data={data} barSize={60}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bucket" tickFormatter={(b) => t(`pages.ai.salesAi.salesCycles.buckets.${b}`)} />
          <YAxis />
          <Tooltip labelFormatter={(b) => t(`pages.ai.salesAi.salesCycles.buckets.${b}`)} />
          <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart2;
