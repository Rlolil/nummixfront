import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Apr', revenue: 4000, expenses: 2400 },
  { name: 'May', revenue: 3000, expenses: 1398 },
  { name: 'Jun', revenue: 2000, expenses: 9800 },
  { name: 'Jul', revenue: 2780, expenses: 3908 },
  { name: 'Aug', revenue: 1890, expenses: 4800 },
  { name: 'Sep', revenue: 2390, expenses: 3800 },
];

export default function RevenueCharts() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}