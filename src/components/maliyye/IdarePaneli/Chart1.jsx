import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { financeDashChart } from "../../../services"; 

const Chart1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await financeDashChart();
       console.log("API-dən gələn data:", res); 

      const formatted = res.map(item => ({
        name: item.month,     
        uv: item.income,   
        pv: item.expense  
      }));

      setData(formatted);
    };

    load();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="inc" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#18C99D" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#18C99D" stopOpacity={0.1} />
          </linearGradient>

          <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#78480B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#78480B" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#18C99D"
          fill="url(#inc)"
        />

        <Area
          type="monotone"
          dataKey="pv"
          stroke="#78480B"
          fill="url(#exp)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart1;

