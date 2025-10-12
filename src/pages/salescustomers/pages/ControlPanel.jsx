import { FiDollarSign } from "react-icons/fi";
import { MdPeopleOutline } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

import { Cell, Pie, PieChart } from "recharts";
import HeadCard from "../components/HeadCard";
import BodyCard from "../components/BodyCard";

const dataPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
            {`${((percent ?? 1) * 100).toFixed(0)}%`}
        </text>
    );
};

export default function ControlPanel() {
    return (
        <div className="w-full flex flex-col gap-6">
            <div>
                <h2 className="text-2xl font-semibold">İdarə Paneli</h2>
                <p className="text-zinc-600">Satış və müştəri məlumatlarına ümumi baxış</p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <HeadCard
                        title="Aylıq Satış"
                        amount={<div className="text-2xl">₼ 67,000</div>}
                        greenText="+12.5%"
                        description="əvvəlki aya nisbətən"
                        icon={<FiDollarSign />}
                    />
                    <HeadCard
                        title="Aktiv Müştərilər"
                        amount={<div className="text-2xl">248</div>}
                        greenText="+23"
                        description="yeni müştəri"
                        icon={<MdPeopleOutline />}
                    />
                    <HeadCard
                        title="Satış Sayı"
                        amount={<div className="text-2xl">1,250</div>}
                        greenText={null}
                        description="Bu ay"
                        icon={<IoCartOutline />}
                    />
                    <HeadCard
                        title="Mənfəət"
                        amount={<div className="text-2xl">₼ 21,000</div>}
                        greenText={null}
                        description="Brüt mənfəət"
                        icon={<AiOutlineRise />}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <BodyCard
                        title={<div>Satış Dinamikası</div>}
                        child={
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#0096FF"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        }
                    />
                    <BodyCard
                        title={<div>Məhsul Paylanması</div>}
                        child={
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={dataPie}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        fill="#000"
                                        dataKey="value"
                                    >
                                        {dataPie.map((entry, index) => (
                                            <Cell
                                                key={`cell-${entry.name}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        }
                    />
                    <BodyCard
                        title={<div>Məhsul Paylanması</div>}
                        child={
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center bg-zinc-100 p-3 rounded-lg">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">ABC Şirkəti</h3>
                                        <p className="text-sm text-zinc-700">₼45,000</p>
                                    </div>
                                    <div className="bg-green-100 rounded-md px-2 py-1">
                                        <p className="text-xs text-green-900">Aktiv</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-zinc-100 p-3 rounded-lg">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">ABC Şirkəti</h3>
                                        <p className="text-sm text-zinc-700">₼45,000</p>
                                    </div>
                                    <div className="bg-green-100 rounded-md px-2 py-1">
                                        <p className="text-xs text-green-900">Aktiv</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-zinc-100 p-3 rounded-lg">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">ABC Şirkəti</h3>
                                        <p className="text-sm text-zinc-700">₼45,000</p>
                                    </div>
                                    <div className="bg-red-100 rounded-md px-2 py-1">
                                        <p className="text-xs text-red-900">Gecikmiş</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-zinc-100 p-3 rounded-lg">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">ABC Şirkəti</h3>
                                        <p className="text-sm text-zinc-700">₼45,000</p>
                                    </div>
                                    <div className="bg-green-100 rounded-md px-2 py-1">
                                        <p className="text-xs text-green-900">Aktiv</p>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                    <BodyCard
                        title={
                            <div className="flex gap-2 items-center">
                                <RiErrorWarningLine className="text-red-500 size-5" />
                                <p>Gecikmiş Ödənişlər</p>
                            </div>
                        }
                        child={
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center outline-red-200 outline-2 bg-red-50 p-3 rounded-lg">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">DEF Holding</h3>
                                        <p className="text-sm text-zinc-700">15 gün gecikib</p>
                                    </div>
                                    <p className="text-red-500">₼5,400</p>
                                </div>
                                <div className="flex justify-between items-center outline-red-200 outline-2 bg-red-50 p-3 rounded-lg">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold">DEF Holding</h3>
                                        <p className="text-sm text-zinc-700">15 gün gecikib</p>
                                    </div>
                                    <p className="text-red-500">₼5,400</p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
