import React from "react";

function ExpensesBreakdown() {
  return (
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
          className="lucide lucide-trending-down h-5 w-5 text-red-600"
        >
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
          <polyline points="16 17 22 17 22 11"></polyline>
        </svg>
        <p className="text-black font-medium text-sm sm:text-base">
          Expense Categories - September 2025
        </p>
      </div>
      <div className="text-center mt-10 sm:mt-20 mb-10 sm:mb-20">
        <p className="text-gray-600 text-sm sm:text-base">No expenses recorded this month</p>
      </div>
    </div>
  );
}

export default ExpensesBreakdown;