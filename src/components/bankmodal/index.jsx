import React from 'react';
import { FiX } from "react-icons/fi";
import Overlay from '../overlay';

const BankModal = ({ onClose }) => {
  return (
    <Overlay onClose={onClose}>
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm relative">
        <div className='flex justify-between'>
          <h2 className="text-[18px] font-bold mb-1">Add Bank Account</h2>
          <FiX onClick={onClose} className='cursor-pointer' />
        </div>
        <p className='text-[14px] text-gray-500'>Add a new bank account to track your finances. All information is encrypted and secure.</p>

        <div className="space-y-4">
          <div>
            <h1 className='text-[14px] font-semibold mb-1 mt-2'>Account Name</h1>
            <input
              type="text"
              placeholder="Account Name"
              className="w-full border p-2 text-[14px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <h1 className='text-[14px] font-semibold mb-1'>Bank Name</h1>
            <select
              className="w-40 border text-[14px] text-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>Select your bank</option>
              <option value="kapital">Kapital Bank</option>
              <option value="pasha">Paşa Bank</option>
              <option value="abb">ABB</option>
            </select>
          </div>

          <div>
            <h1 className='text-[14px] font-semibold mb-1'>Account Number</h1>
            <input
              type="text"
              placeholder="Account Number"
              className="w-full border p-2 text-[14px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className='flex flex-col space-y-4'>
            <div>
              <h1 className='text-[14px] font-semibold mb-1'>Account Type</h1>
              <select
                className="w-40 border text-[14px] text-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                defaultValue=""
              >
                <option value="" disabled>Select account type</option>
                <option value="checking">Checking</option>
                <option value="savings">Savings</option>
              </select>
            </div>

            <div>
              <h1 className='text-[14px] font-semibold mb-1'>Curency</h1>
              <select
                className="w-50 border text-[14px] text-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                defaultValue="azn"
              >
                <option value="azn">Azerbaijani Manat (₼)</option>
                <option value="usd">US Dollar ($)</option>
                <option value="eur">Euro (€)</option>
              </select>
            </div>
          </div>

          <div>
            <h1 className='text-[14px] font-semibold mb-1' >Current Balance</h1>
            <input
              type="number"
              placeholder="0.00"
              className="w-full border p-2 text-[14px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border cursor-pointer border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button onClick={onClose} className="px-4 py-2 rounded-md cursor-pointer bg-black text-white hover:bg-gray-800">
            Add Account
          </button>
        </div>


      </div>
    </Overlay>
  );
};

export default BankModal;
