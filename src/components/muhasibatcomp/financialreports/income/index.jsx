import React from "react";

function IncomeStatement() {
  return (
    <div className="border border-gray-300 space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-lg sm:text-xl font-semibold">Income Statement (Mənfəət və Zərər Haqqında Hesabat)</p>
          <p className="text-gray-600 text-sm sm:text-base">For the period ending September 30, 2025</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">Revenue</th>
                <th className="text-right p-1 sm:p-2 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Sales Revenue (701)</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Service Revenue (711)</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">Total Revenue</td>
                <td className="text-right p-1 sm:p-2">15,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">Cost of Sales</th>
                <th className="text-right p-1 sm:p-2 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Cost of Sales (601)</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">Gross Profit</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">Operating Expenses</th>
                <th className="text-right p-1 sm:p-2 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Payroll (543)</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Social Contributions (551)</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Administrative Expenses (731)</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Sales Expenses (741)</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Operating Expenses (721)</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">Total Operating Expenses</td>
                <td className="text-right p-1 sm:p-2">35,000.00</td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2 font-bold text-lg sm:text-2xl">Net Income</td>
                <td className="text-right p-1 sm:p-2">-30,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IncomeStatement;