import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Overlay from "../../components/overlay";
import { FiX } from "react-icons/fi";

function AddTransactionModuleForRevenue({ isOpen, onClose }) {
  const [openType, setOpenType] = useState(false);
  const [selectedType, setSelectedType] = useState("Select Type");
  const [openAccount, setOpenAccount] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(
    "Select Account (optional)"
  );
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Select Category (optional)"
  );

  return (
    <div>
      <Overlay onClose={onClose} />
      <div className="fixed inset-0 w-full max-w-[90vw] sm:max-w-[450px] h-full max-h-[90vh] sm:max-h-[720px] mx-auto my-auto border border-gray-200 bg-white shadow-xl rounded-xl z-[51] overflow-y-auto">
        <div className="w-full p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-black font-medium text-lg sm:text-xl">
                Add Transaction
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Record a new income, expense, or transfer transaction.
              </p>
            </div>
            <FiX
              size={24}
              onClick={onClose}
              className="cursor-pointer hover:text-gray-500"
            />
          </div>
          <div className="space-y-4">
            <div className="relative">
              <p className="font-medium text-sm sm:text-base">
                Transaction Type
              </p>
              <button
                onClick={() => setOpenType(!openType)}
                className="border border-gray-200 hover:bg-gray-100 transition-all duration-300 rounded-lg p-2 mt-2 w-full flex items-center justify-between text-gray-600 text-sm sm:text-base"
              >
                {selectedType}
                <MdKeyboardArrowDown />
              </button>
              {openType && (
                <ul className="absolute bg-white shadow-md mt-2 w-full border border-gray-200 rounded-lg z-[60] p-2">
                  {["Selected Type", "Income", "Expense", "Transfer"].map(
                    (type) => (
                      <li
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setOpenType(false);
                        }}
                        className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm sm:text-base"
                      >
                        {type}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
            <div className="relative">
              <p className="font-medium text-sm sm:text-base">Bank Accounts</p>
              <button
                onClick={() => setOpenAccount(!openAccount)}
                className="border border-gray-200 hover:bg-gray-100 transition-all duration-300 rounded-lg p-2 mt-2 w-full flex items-center justify-between text-gray-600 text-sm sm:text-base"
              >
                {selectedAccount}
                <MdKeyboardArrowDown />
              </button>
              {openAccount && (
                <ul className="absolute bg-white shadow-md mt-2 w-full border border-gray-200 rounded-lg z-[60] p-2">
                  {[
                    "Selected Account (optional)",
                    "Kapital Bank",
                    "Paşa Bank",
                    "İş Bankası",
                  ].map((account) => (
                    <li
                      key={account}
                      onClick={() => {
                        setSelectedAccount(account);
                        setOpenAccount(false);
                      }}
                      className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm sm:text-base"
                    >
                      {account}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <p className="font-medium text-sm sm:text-base">Amount</p>
              <input
                required
                type="number"
                step="0.01"
                placeholder="0.00"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm sm:text-base placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="relative">
              <p className="font-medium text-sm sm:text-base">Category</p>
              <button
                onClick={() => setOpenCategory(!openCategory)}
                className="border border-gray-200 hover:bg-gray-100 transition-all duration-300 rounded-lg p-2 mt-2 w-full flex items-center justify-between text-gray-600 text-sm sm:text-base"
              >
                {selectedCategory}
                <MdKeyboardArrowDown />
              </button>
              {openCategory && (
                <ul className="absolute bg-white shadow-md mt-2 w-full border border-gray-200 rounded-lg z-[60] p-2">
                  {[
                    "Selected Category (optional)",
                    "Food & Dining",
                    "Shopping",
                    "Salary",
                  ].map((category) => (
                    <li
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setOpenCategory(false);
                      }}
                      className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer text-sm sm:text-base"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="font-medium text-sm sm:text-base">Description</p>
              <textarea
                rows="3"
                placeholder="Add a note (optional)"
                className="w-full border text-gray-600 border-gray-200 rounded-md p-2 text-sm sm:text-base resize-y"
              ></textarea>
            </div>
            <div>
              <p className="font-medium text-sm sm:text-base">Date</p>
              <input
                type="date"
                className="w-full border text-gray-600 border-gray-200 rounded-md p-2 text-sm sm:text-base"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="bg-white text-black shadow-sm border border-gray-200 rounded-md py-2 px-4 text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="bg-black hover:opacity-70 transition-all duration-300 text-white font-medium rounded-md py-2 px-4 text-sm sm:text-base"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTransactionModuleForRevenue;
