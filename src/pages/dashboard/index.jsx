import React from "react";

function Dashboard() {
  return (
    <div className="p-4 max-w-[1320px] mx-auto">
      <div className="flex lg:flex-nowrap flex-wrap items-center justify-between">
        <div>
          <h2 className="text-[32px] font-bold text-black">
            Welcome back, UserName
          </h2>
          <p className="text-md text-gray-600">
            Here's your financial overview for today
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center gap-3">
          <button className="shadow-md bg-white border border-gray-200 text-black font-medium px-4 py-2 rounded-md flex items-center hover:bg-gray-100 transition">
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
              class="lucide lucide-zap mr-2 h-4 w-4"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            Generate AI Analysis
          </button>
          <a href="https://portal.asxm.gov.az/login" target="_blank">
            <button className="shadow-md bg-white border border-gray-200 text-black font-medium px-4 py-2 rounded-md  hover:bg-gray-100 transition">
              E taxes
            </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Total Balance</p>
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
              class="lucide lucide-dollar-sign h-4 w-4 text-muted-foreground"
            >
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold text-black text-[24px]">₼0</p>
            <p className="text-gray-600">Across 0 accounts</p>
          </div>
        </div>
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Monthly Income</p>
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
              class="lucide lucide-trending-up h-4 w-4 text-muted-foreground"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-bold text-green-600 text-[24px]">+₼0</p>
            <p className="text-gray-600">This Month</p>
          </div>
        </div>
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Monthly Expenses</p>
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
              class="lucide lucide-trending-down h-4 w-4 text-muted-foreground"
            >
              <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
              <polyline points="16 17 22 17 22 11"></polyline>
            </svg>
          </div>
          <div>
            <p className="font-bold text-red-600 text-[24px]">-₼0</p>
            <p className="text-gray-600">This Month</p>
          </div>
        </div>
        <div className="bg-white shadow-xl space-y-8 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium">Net Cash Flow</p>
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
              class="lucide lucide-credit-card h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
          </div>
          <div>
            <p className="font-bold text-green-600 text-[24px]">₼0</p>
            <p className="text-gray-600">This Month</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-white shadow-xl h-[300px] space-y-8 rounded-xl p-4 border border-gray-200">
          <p className="text-black font-medium">Recent Transactions</p>
          <p className="text-gray-600">No recent transactions</p>
        </div>
        <div className="bg-white shadow-xl h-[300px] space-y-8 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-2">
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
              class="lucide lucide-brain h-5 w-5"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
            <p className="text-black font-medium">AI Financial Insights</p>
          </div>
          <div className="text-center mt-4 space-y-4">
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
              class="h-12 w-12 mx-auto mb-3"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
            <p className="text-gray-600">No AI insights available yet.</p>
            <button className="shadow-md bg-white border border-gray-200 text-black font-medium px-4 py-2 rounded-md  hover:bg-gray-100 transition">
              Generate AI Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
