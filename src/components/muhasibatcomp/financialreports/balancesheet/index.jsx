import React from "react";

function BalanceSheet() {
  return (
    <div className="border border-gray-300 space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-lg sm:text-xl font-semibold">Balance Sheet (Balans)</p>
          <p className="text-gray-600 text-sm sm:text-base">As of September 30, 2025</p>
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
        <h3 className="text-base sm:text-lg font-semibold">ASSETS (AKTİVLƏR)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">Current Assets</th>
                <th className="text-right p-1 sm:p-2 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Cash</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Accounts Receivable</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Inventory</td>
                <td className="text-right p-1 sm:p-2">8,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">Total Current Assets</td>
                <td className="text-right p-1 sm:p-2">23,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">Non-Current Assets</th>
                <th className="text-right p-1 sm:p-2 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Fixed Assets (241)</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Total Non-Current Assets</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2 font-bold text-lg sm:text-2xl">Total Assets</td>
                <td className="text-right p-1 sm:p-2">23,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold">LIABILITIES (PASSIVLƏR)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">Current Liabilities</th>
                <th className="text-right p-1 sm:p-2 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Accounts Payable (331)</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">VAT Payable (341)</td>
                <td className="text-right p-1 sm:p-2">5,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Income Tax Payable (351)</td>
                <td className="text-right p-1 sm:p-2">8,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">Total Current Liabilities</td>
                <td className="text-right p-1 sm:p-2">23,000.00</td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2 font-bold text-lg sm:text-2xl">Total Liabilities</td>
                <td className="text-right p-1 sm:p-2">23,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold">EQUITY (KAPİTAL)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">Equity</th>
                <th className="text-right p-1 sm:p-2 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Share Capital (401)</td>
                <td className="text-right p-1 sm:p-2">10,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="text-left p-1 sm:p-2">Retained Earnings (421)</td>
                <td className="text-right p-1 sm:p-2">13,000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">Total Equity</td>
                <td className="text-right p-1 sm:p-2">23,000.00</td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2 font-bold text-lg sm:text-2xl">Total Equity</td>
                <td className="text-right p-1 sm:p-2">23,000.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BalanceSheet;