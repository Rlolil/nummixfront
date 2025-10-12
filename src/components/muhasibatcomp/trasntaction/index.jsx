import { useState } from "react";
import { FaPlus, FaFileInvoice } from "react-icons/fa";
import CreateJournalEntry from "../newjournalmodule";

const Transactions = () => {
  const [moduleOpen, setModuleOpen] = useState(false);
  const transactions = [
    {
      id: "INV-2025-1045",
      title: "Sales Invoice #INV-2025-1045",
      date: "06/10/2025",
      user: "Leyla Mammadova",
      entries: [
        { code: "211", name: "Accounts Receivable", debit: "₼18.000", credit: "-" },
        { code: "701", name: "Sales Revenue", debit: "-", credit: "₼15.000" },
        { code: "341", name: "VAT Payable", debit: "-", credit: "₼3.000" },
      ],
    },
    {
      id: "PUR-2025-0892",
      title: "Purchase Invoice #PUR-2025-0892",
      date: "06/10/2025",
      user: "Rauf Aliyev",
      entries: [
        { code: "221", name: "Inventory", debit: "₼12.000", credit: "-" },
        { code: "331", name: "Accounts Payable", debit: "-", credit: "₼12.000" },
      ],
    },
    {
      id: "SAL-SEP-2025",
      title: "Salary Payment - September 2025",
      date: "05/10/2025",
      user: "Nigar Hasanova",
      entries: [
        { code: "543", name: "Payroll", debit: "₼45.000", credit: "-" },
        { code: "551", name: "Social Contributions", debit: "₼10.000", credit: "-" },
        { code: "201", name: "Bank Accounts", debit: "-", credit: "₼55.000" },
      ],
    },
    {
      id: "VAT-SEP-2025",
      title: "VAT Payment - September 2025",
      date: "05/10/2025",
      user: "Leyla Mammadova",
      entries: [
        { code: "341", name: "VAT Payable", debit: "₼8.500", credit: "-" },
        { code: "201", name: "Bank Accounts", debit: "-", credit: "₼8.500" },
      ],
    },
    {
      id: "BANK-TRF-458",
      title: "Bank Transfer from Client",
      date: "04/10/2025",
      user: "Rauf Aliyev",
      entries: [
        { code: "201", name: "Bank Accounts", debit: "₼25.000", credit: "-" },
        { code: "211", name: "Accounts Receivable", debit: "-", credit: "₼25.000" },
      ],
    },
  ];

  const getTotals = (entries) => {
    let debit = 0,
      credit = 0;
    entries.forEach((e) => {
      if (e.debit !== "-") debit += Number(e.debit.replace(/[₼,]/g, ""));
      if (e.credit !== "-") credit += Number(e.credit.replace(/[₼,]/g, ""));
    });
    return { debit: `₼${debit.toLocaleString()}`, credit: `₼${credit.toLocaleString()}` };
  };

  if (moduleOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="container mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Transactions & Journal</h2>
            <p className="text-gray-500 text-sm sm:text-base">View and create accounting entries</p>
          </div>
          <button
            onClick={() => setModuleOpen(true)}
            className="flex items-center gap-2 bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-gray-600 transition mt-4 sm:mt-0"
          >
            <FaPlus className="text-xs sm:text-sm" /> New Journal Entry
          </button>
          {moduleOpen && <CreateJournalEntry setModuleOpen={setModuleOpen} />}
        </div>
        <div className="space-y-6">
          {transactions.map((t) => {
            const totals = getTotals(t.entries);
            return (
              <div key={t.id} className="border rounded-lg p-3 sm:p-4 border-gray-300 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <FaFileInvoice className="text-gray-500 text-sm sm:text-base" />
                      <span className="font-medium text-sm sm:text-base">{t.id}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{t.title}</p>
                  </div>
                  <div className="text-right text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
                    <p>{t.date}</p>
                    <p>by {t.user}</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead className="border-b bg-gray-50">
                      <tr>
                        <th className="text-left p-1 sm:p-2 font-medium">Account Code</th>
                        <th className="text-left p-1 sm:p-2 font-medium">Account Name</th>
                        <th className="text-right p-1 sm:p-2 font-medium">Debit</th>
                        <th className="text-right p-1 sm:p-2 font-medium">Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.entries.map((e, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="p-1 sm:p-2">{e.code}</td>
                          <td className="p-1 sm:p-2">{e.name}</td>
                          <td className="p-1 sm:p-2 text-right">{e.debit}</td>
                          <td className="p-1 sm:p-2 text-right">{e.credit}</td>
                        </tr>
                      ))}
                      <tr className="font-medium border-t">
                        <td colSpan="2" className="p-1 sm:p-2">
                          Total
                        </td>
                        <td className="p-1 sm:p-2 text-right">{totals.debit}</td>
                        <td className="p-1 sm:p-2 text-right">{totals.credit}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Transactions;