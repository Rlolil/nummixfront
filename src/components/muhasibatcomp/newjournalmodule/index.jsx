import React, { useState } from "react";

export default function CreateJournalEntry({ setModuleOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [entries, setEntries] = useState([{ account: "", debit: "", credit: "" }]);

  const addLine = () => setEntries([...entries, { account: "", debit: "", credit: "" }]);

  const removeLine = (index) => setEntries(entries.filter((_, i) => i !== index));

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const totalDebit = entries.reduce((sum, e) => sum + Number(e.debit || 0), 0);
  const totalCredit = entries.reduce((sum, e) => sum + Number(e.credit || 0), 0);

  const closeModal = () => setModuleOpen(false);

  return (
    <div className="p-6">
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closeModal}
          ></div>
          <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">Create Journal Entry</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-xl">
                ×
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Date</label>
                  <input
                    type="date"
                    className="mt-1 w-full border rounded-md px-3 py-2"
                    defaultValue="2025-10-07"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Reference</label>
                  <input
                    type="text"
                    placeholder="e.g., INV-2025-1046"
                    className="mt-1 w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <input
                  type="text"
                  placeholder="Transaction description"
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Journal Entries</label>
                  <button
                    onClick={addLine}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
                  >
                    + Add Line
                  </button>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 border-b">
                      <tr>
                        <th className="text-left px-2 py-2 w-[40%]">Account</th>
                        <th className="text-left px-2 py-2 w-[25%]">Debit (₼)</th>
                        <th className="text-left px-2 py-2 w-[25%]">Credit (₼)</th>
                        <th className="w-[10%]"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry, i) => (
                        <tr key={i} className="border-b">
                          <td className="px-2 py-2">
                            <select
                              value={entry.account}
                              onChange={(e) => handleChange(i, "account", e.target.value)}
                              className="w-full border rounded-md px-2 py-1"
                            >
                              <option value="">Select account</option>
                              <option value="cash">Cash</option>
                              <option value="bank">Bank</option>
                              <option value="sales">Sales</option>
                              <option value="expenses">Expenses</option>
                            </select>
                          </td>
                          <td className="px-2 py-2">
                            <input
                              type="number"
                              value={entry.debit}
                              onChange={(e) => handleChange(i, "debit", e.target.value)}
                              placeholder="0.00"
                              className="w-full border rounded-md px-2 py-1"
                            />
                          </td>
                          <td className="px-2 py-2">
                            <input
                              type="number"
                              value={entry.credit}
                              onChange={(e) => handleChange(i, "credit", e.target.value)}
                              placeholder="0.00"
                              className="w-full border rounded-md px-2 py-1"
                            />
                          </td>
                          <td className="px-2 py-2 text-center">
                            <button
                              onClick={() => removeLine(i)}
                              className="text-red-500 hover:text-red-700 text-lg"
                            >
                              ×
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold bg-gray-50">
                        <td className="px-2 py-2">Total</td>
                        <td className="px-2 py-2">₼{totalDebit.toFixed(2)}</td>
                        <td className="px-2 py-2">₼{totalCredit.toFixed(2)}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  disabled={totalDebit !== totalCredit || totalDebit === 0}
                  className={`px-4 py-2 rounded-md text-white ${
                    totalDebit === totalCredit && totalDebit > 0
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Post Entry
                </button>
              </div>
            </div>
          </div>
        </>
    </div>
  );
}
