import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";

import BodyCard from "../components/BodyCard";

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

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

export default function Reports() {
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">Hesabatlar və Analitika</h2>
                    <p className="text-zinc-600">Satış performansı və tendensiyalar</p>
                </div>
                <div className="flex items-center gap-4">
                    <select className="select appearance-none input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0">
                        <option>Bu Ay</option>
                        <option>Ötən Ay</option>
                        <option>Son 3 Ay</option>
                        <option>Bu İl</option>
                        <option>Ötən İl</option>
                    </select>
                    <button className="flex items-center gap-2 hover:bg-gray-100 px-2 py-2 rounded-lg bg-white border border-zinc-200 transition-all">
                        <FiDownload />
                        <p className="text-sm font-semibold text-nowrap">Export Excel</p>
                    </button>
                    <button className="flex items-center gap-2 hover:bg-gray-100 px-2 py-2 rounded-lg bg-white border border-zinc-200 transition-all">
                        <FaRegFileAlt />
                        <p className="text-sm font-semibold text-nowrap">PDF Hesabat</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-4 border-1 border-zinc-200 p-4 rounded-lg">
                        <div className="bg-blue-100 p-3 rounded-xl">
                            <FaArrowTrendUp className="size-6 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-2xl -mb-2">₼ 42,400</p>
                            <h3 className="text-sm text-zinc-400 font-semibold mt-2">Ümumi Satış</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border-1 border-zinc-200 p-4 rounded-lg">
                        <div className="bg-green-100 p-3 rounded-xl">
                            <FaArrowTrendUp className="size-6 text-green-500" />
                        </div>
                        <div>
                            <p className="text-2xl -mb-2">₼ 96,000</p>
                            <h3 className="text-sm text-zinc-400 font-semibold mt-2">Brüt Mənfəət</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border-1 border-zinc-200 p-4 rounded-lg">
                        <div className="bg-purple-100 p-3 rounded-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-package h-6 w-6 text-purple-600"
                                ariaHidden="true"
                            >
                                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                <path d="M12 22V12"></path>
                                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                <path d="m7.5 4.27 9 5.15"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-2xl -mb-2">3,280</p>
                            <h3 className="text-sm text-zinc-400 font-semibold mt-2">Satılan Məhsul</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border-1 border-zinc-200 p-4 rounded-lg">
                        <div className="bg-orange-100 p-3 rounded-xl">
                            <IoPeopleOutline className="size-6 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-2xl -mb-2">26.6%</p>
                            <h3 className="text-sm text-zinc-400 font-semibold mt-2">Mənfəət Marjası</h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <BodyCard
                        title={null}
                        child={
                            <ResponsiveContainer className="min-h-80" width="100%" height="100%">
                                <BarChart
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
                                    <Bar
                                        dataKey="pv"
                                        fill="#3b82f6"
                                        activeBar={<Rectangle fill="#93c5fd" stroke="#1d4ed8" />}
                                    />
                                    <Bar
                                        dataKey="uv"
                                        fill="#22c55e"
                                        activeBar={<Rectangle fill="#bbf7d0" stroke="#16a34a" />}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        }
                    />
                    <BodyCard
                        title={null}
                        child={
                            <ResponsiveContainer className="min-h-80" width="100%" height="100%">
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
                                        strokeWidth={3}
                                        stroke="#3b82f6"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        }
                    />
                    <BodyCard
                        title={"Ən Çox Satılan Məhsullar"}
                        child={
                            <table className="table text-base">
                                <thead className="font-semibold text-black">
                                    <tr>
                                        <th className="text-start p-3 rounded-l-lg">Məhsul</th>
                                        <th className="text-start p-3">Satış Sayı</th>
                                        <th className="text-start p-3">Gəlir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3">Məhsul 1</td>
                                        <td className="p-3">100</td>
                                        <td className="p-3">₼1,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Məhsul 2</td>
                                        <td className="p-3">200</td>
                                        <td className="p-3">₼2,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Məhsul 3</td>
                                        <td className="p-3">300</td>
                                        <td className="p-3">₼3,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        }
                    />
                    <BodyCard
                        title={"Ən Gəlirli Müştərilər"}
                        child={
                            <table className="table text-base">
                                <thead className="font-semibold text-black">
                                    <tr>
                                        <th className="text-start p-3 rounded-l-lg">Müştəri</th>
                                        <th className="text-start p-3">Sifariş</th>
                                        <th className="text-start p-3">Gəlir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3">ABC Şirkəti</td>
                                        <td className="p-3">67</td>
                                        <td className="p-3">₼14,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">XYZ MMC</td>
                                        <td className="p-3">41</td>
                                        <td className="p-3">₼22,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">DEF Holding</td>
                                        <td className="p-3">21</td>
                                        <td className="p-3">₼39,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        }
                    />
                    <div className="col-span-2">
                        <BodyCard
                            title={"Əsas Performans Göstəriciləri (KPI)"}
                            child={
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Ümumi Gəlir:</p> <span>₼100,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Satış Artımı (MoM):</p>{" "}
                                        <span className="text-green-600">+21.8%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Ortalama Sifariş Dəyəri:</p>{" "}
                                        <span>₼500</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Yeni Müştərilər:</p> <span>50</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Mənfəət Artımı (MoM):</p>{" "}
                                        <span className="text-green-600">+27.3%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Müştəri Saxlanması:</p> <span>85%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Satış Konversiyası:</p> <span>4.5%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Ən Yaxşı Satış Kanalı:</p> <span>Onlayn</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-zinc-500">Gecikmiş Ödəniş %:</p> <span className="text-red-500">12.7%</span>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
