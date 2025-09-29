import React, { useState } from "react";
import RevenueCharts from "../../components/revenuecharts";
import ExpensesBreakdown from "../../components/expensesbreakdown";
import MonthlyTrends from "../../components/mothlytrends";
import AddTransactionModuleForRevenue from "../../components/addtransictionmoduleforrevenue";

function RevenueExpenses() {
  const [activeTab, setActiveTab] = useState("Revenue Breakdown");
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="max-w-[1320px] mx-auto p-4 ml-[100px]">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            Revenue & Expenses
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Track your income, expenses, and profitability
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
          <button className="flex items-center gap-1 sm:gap-2 text-black md:text-[16px] text-[10px]  font-medium border border-gray-300 rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-100 shadow-sm transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 sm:h-5 w-4 sm:w-5 mr-1 sm:mr-2"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            This Month
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-black text-white flex items-center font-medium px-3 sm:px-4 py-1.5  md:text-[16px] text-[10px] sm:py-2 rounded-lg hover:bg-gray-800 shadow-sm transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 sm:h-5 w-4 sm:w-5 mr-1 sm:mr-2"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Transaction
          </button>
          {isOpen && (
            <AddTransactionModuleForRevenue
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200 max-w-full">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Monthly Revenue</p>
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
              className="lucide lucide-trending-up h-4 w-4 text-muted-foreground"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-bold text-green-600 text-[24px]">₼0</p>
            <div className="flex items-center gap-2">
              <p className="bg-black rounded-2xl px-2 py-1 text-white text-[14px]">
                +0.0%
              </p>
              <p className="text-gray-600 text-[14px]">vs last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200 max-w-full">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Monthly Expenses</p>
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
              className="lucide lucide-trending-down h-4 w-4 text-muted-foreground"
            >
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-bold text-red-600 text-[24px]">₼0</p>
            <div className="flex items-center gap-2">
              <p className="bg-black rounded-2xl px-2 py-1 text-[14px] text-white">
                +0.0%
              </p>
              <p className="text-gray-600 text-[14px]">vs last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200 max-w-full">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Net Profit</p>
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
              className="lucide lucide-chart-pie h-4 w-4 text-muted-foreground"
            >
              <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-green-600 text-[24px]">₼0</p>
            <p className="text-gray-600 text-[14px]">0% margin</p>
          </div>
        </div>
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200 max-w-full">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Expense Ratio</p>
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
              className="lucide lucide-trending-down h-4 w-4 text-muted-foreground"
            >
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-bold text-black text-[24px]">0%</p>
            <p className="text-gray-600">Expenses vs Revenue</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap gap-4 mt-6">
        <div className="shadow-xl md:flex-1 flex-10/12 border border-gray-200 rounded-xl p-4 max-w-full">
          <p className="text-black font-medium">Revenue vs Expenses Trend</p>
          <div className="mt-10 w-full">
            <RevenueCharts />
          </div>
        </div>
        <div className="space-y-4 flex-1 max-w-full">
          <div className="shadow-xl border relative w-full border-gray-200 rounded-xl p-4">
            <p className="text-green-600">Revenue by Category</p>
            <div className="text-center mt-20 mb-20">
              <p>No revenue data available</p>
            </div>
          </div>
          <div className="shadow-xl border relative w-full border-gray-200 rounded-xl p-4">
            <p className="text-red-600">Expenses by Category</p>
            <div className="text-center mt-20 mb-20">
              <p>No expense data available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-wrap bg-gray-100 gap-[10px] max-w-full p-2 rounded-xl mt-6">
          <button
            onClick={(e) => setActiveTab("Revenue Breakdown")}
            className={`border ${
              activeTab === "Revenue Breakdown"
                ? "bg-white border-gray-200"
                : "border-none"
            } rounded-lg py-1 px-4 sm:px-6 text-sm sm:text-base`}
          >
            Revenue Breakdown
          </button>
          <button
            onClick={(e) => setActiveTab("Expense Breakdown")}
            className={`border ${
              activeTab === "Expense Breakdown"
                ? "bg-white border-gray-200"
                : "border-none"
            } rounded-lg py-1 px-4 sm:px-6 text-sm sm:text-base`}
          >
            Expense Breakdown
          </button>
          <button
            onClick={(e) => setActiveTab("Monthly Trends")}
            className={`border ${
              activeTab === "Monthly Trends"
                ? "bg-white border-gray-200"
                : "border-none"
            } rounded-lg py-1 px-4 sm:px-6 text-sm sm:text-base`}
          >
            Monthly Trends
          </button>
        </div>
        {activeTab === "Revenue Breakdown" && (
          <div className="shadow-xl border border-gray-200 rounded-xl p-4 w-full">
            <div className="flex items-center gap-2 mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-trending-up h-5 w-5 text-green-600"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <p className="text-black font-medium text-sm sm:text-base">
                Revenue Sources - September 2025
              </p>
            </div>
            <div className="text-center mt-10 sm:mt-20 mb-10 sm:mb-20">
              <p className="text-gray-600 text-sm sm:text-base">
                No revenue recorded this month
              </p>
            </div>
          </div>
        )}
        {activeTab === "Expense Breakdown" && <ExpensesBreakdown />}
        {activeTab === "Monthly Trends" && <MonthlyTrends />}
      </div>
    </div>
  );
}

export default RevenueExpenses;
