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

const data = [
  { ay: "Yan", "Gəlir Vergisi": 11500, Sosial: 4800, ƏDV: 7200 },
  { ay: "Fev", "Gəlir Vergisi": 11400, Sosial: 4700, ƏDV: 7600 },
  { ay: "Mar", "Gəlir Vergisi": 12000, Sosial: 4900, ƏDV: 7300 },
  { ay: "Apr", "Gəlir Vergisi": 12100, Sosial: 5000, ƏDV: 8600 },
  { ay: "May", "Gəlir Vergisi": 12600, Sosial: 5200, ƏDV: 8000 },
  { ay: "İyn", "Gəlir Vergisi": 12800, Sosial: 5400, ƏDV: 8900 },
];

const Chart = () => {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="ay" tick={{ fill: "#555" }} />
          <YAxis tick={{ fill: "#555" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Gəlir Vergisi" fill="#9b5de5" radius={[6, 6, 0, 0]} />
          <Bar dataKey="Sosial" fill="#06d6a0" radius={[6, 6, 0, 0]} />
          <Bar dataKey="ƏDV" fill="#4895ef" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
