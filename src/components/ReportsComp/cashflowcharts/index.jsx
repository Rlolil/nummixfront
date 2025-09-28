import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Aug31', revenue: 4000, expenses: 2400 },
  { name: 'Sep2', revenue: 3000, expenses: 1398 },
  { name: 'Sep4', revenue: 2000, expenses: 9800 },
  { name: 'Sep6', revenue: 2780, expenses: 3908 },
  { name: 'Sep8', revenue: 1890, expenses: 4800 },
  { name: 'Sep12', revenue: 2390, expenses: 3800 },
  { name: 'Sep14', revenue: 2390, expenses: 3800 },
  { name: 'Sep16', revenue: 2390, expenses: 3800 },
  { name: 'Sep18', revenue: 2390, expenses: 3800 },
  { name: 'Sep20', revenue: 2390, expenses: 3800 },
  { name: 'Sep22', revenue: 2390, expenses: 3800 },
  { name: 'Sep24', revenue: 2390, expenses: 3800 },
];

export default function CashFlowChart() {
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
