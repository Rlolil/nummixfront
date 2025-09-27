import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
function AddTransactionModuleForRevenue() {
  return (
    <div className="fixed inset-0 w-[600px] mx-auto my-auto h-[500px] bg-white z-50">
      <div className="w-full border border-gray-200 rounded-xl shadow-xl p-4 gap-4">
        <h3 className="text-black font-medium text-[20px]">Add Transaction</h3>
        <p className="text-gray-600 text-[14px]">Record a new income, expense, or transfer transaction.</p>
        <div className="mt-4">
            <div>
                <p>Transaction Type</p>
                <button className="border border-gray-200 hover:bg-gray-100 transition-all duration-300 rounded-lg p-2 mt-2 w-auto flex items-center gap-[10px] text-gray-600 text-left">
                    Select Type
                    <MdKeyboardArrowDown className=""/>
                </button>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
}

export default AddTransactionModuleForRevenue;
