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

const data = [
  { name: "Yan", gelir: 85000 },
  { name: "Fev", gelir: 91000 },
  { name: "Mar", gelir: 88000 },
  { name: "Apr", gelir: 110000 },
  { name: "May", gelir: 95000 },
  { name: "İyn", gelir: 118000 },
];

const Chart1 = () => {
  return (
    <div className="w-full h-[200px] mt-7">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="gelir"
            stroke="#ED8907" 
            strokeWidth={3}
            dot={{ r: 4, stroke: "#ED8907", strokeWidth: 2, fill: "white" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart1;
