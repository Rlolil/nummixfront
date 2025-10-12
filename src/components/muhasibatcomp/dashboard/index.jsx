import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiFileText,
  FiAlertCircle,
} from "react-icons/fi";
import RevenueExpenseChart from "../Revenueexpenseschart";
import NetProfitChart from "../ProfitTrendcharts";
import BalancePieChart from "../Balancesheetcharts";
import {
  FaCircleCheck,
  FaCircleExclamation,
} from "react-icons/fa6";
import { BsCheckCircle } from "react-icons/bs";
const taxes = [
  {
    name: "VAT",
    period: "September 2025",
    amount: "₼22,500",
    status: "Pending",
    color: "text-orange-600",
    icon: <FaCircleExclamation className="h-3 w-3 text-orange-600" />,
  },
  {
    name: "Social Contributions",
    period: "September 2025",
    amount: "₼10,000",
    status: "Submitted",
    color: "text-blue-600",
    icon: <BsCheckCircle className="h-3 w-3 text-blue-600" />,
  },
  {
    name: "Profit Tax",
    period: "Q3 2025",
    amount: "₼10,800",
    status: "Paid",
    color: "text-green-600",
    icon: <FaCircleCheck className="h-3 w-3 text-green-600" />,
  },
  {
    name: "Simplified Tax",
    period: "September 2025",
    amount: "₼4,500",
    status: "Pending",
    color: "text-orange-600",
    icon: <FaCircleExclamation className="h-3 w-3 text-orange-600" />,
  },
];

const DashboardCards = () => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4  my-4">
        <div className="bg-white text-gray-900 flex flex-col gap-4 rounded-xl border shadow-sm border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Total Revenue</h4>
            <FiDollarSign className="text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-semibold">₼675.000</div>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <FiTrendingUp className="text-green-600" />
              <span className="text-green-600 font-medium">+12.5%</span>
              from last quarter
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-900 flex flex-col gap-4 rounded-xl border  shadow-sm border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Net Income</h4>
            <FiTrendingUp className="text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-semibold">₼54.000</div>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <FiTrendingDown className="text-red-600" />
              <span className="text-red-600 font-medium">-8.2%</span>
              from last quarter
            </p>
          </div>
        </div>
        <div className="bg-white text-gray-900 flex flex-col gap-4 rounded-xl border  shadow-sm border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Total Assets</h4>
            <FiFileText className="text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-semibold">₼1.000.000</div>
            <p className="text-xs text-gray-500 mt-1">Liabilities: ₼265.500</p>
          </div>
        </div>
        <div className="bg-white text-gray-900 flex flex-col gap-4 rounded-xl border  shadow-sm border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Pending Taxes</h4>
            <FiAlertCircle className="text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-semibold">2</div>
            <p className="text-xs text-gray-500 mt-1">Action required</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
        <div className="border border-gray-300 p-4 rounded-xl shadow-sm bg-white">
          <h3 className="text-lg font-medium mb-2">
            Revenue vs Expenses (6 Months)
          </h3>
          <RevenueExpenseChart />
        </div>
        <div className="border border-gray-300 p-4 rounded-xl shadow-sm bg-white">
          <h3 className="text-lg font-medium mb-2">Profit trend</h3>
          <NetProfitChart />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
        <div className="border border-gray-300 p-4 rounded-xl shadow-sm bg-white">
          <h3 className="text-lg font-medium mb-2">
            Balance Sheet Distribution
          </h3>
          <BalancePieChart />
        </div>
        <div className="border border-gray-300 p-4 rounded-xl shadow-sm bg-white">
          <h3 className="text-lg font-medium mb-2">Upcoming Tax Obligations</h3>
          <div className="pb-6 space-y-4">
            {taxes.map((tax, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-3 last:border-0"
              >
                <div>
                  <p className="font-medium">{tax.name}</p>
                  <p className="text-sm text-muted-foreground">{tax.period}</p>
                </div>
                <div className="text-right">
                  <p>{tax.amount}</p>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    {tax.icon}
                    <span className={`text-xs ${tax.color}`}>{tax.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
