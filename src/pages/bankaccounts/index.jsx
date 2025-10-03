import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaManatSign } from "react-icons/fa6";
import BankModal from '../../components/bankmodal';
import { useTranslation } from 'react-i18next';

function BankAccounts() {
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslation();
  if(isOpen) {
    document.body.style.overflow = "hidden"
  }
  return (
    <div className="p-4 max-w-[1320px] sm:mt-0 mt-[80px] sm:ml-[100px] mx-auto">
      <div className="flex lg:flex-nowrap flex-wrap items-center justify-between">
        <div>
          <h2 className="text-[32px] font-bold text-black">
            {t('bank_accounts')}
          </h2>
          <p className="text-md text-gray-600">
            {t('Manage_your_bank_accounts_and_monitor_balances')}
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center gap-3">
          <button onClick={() => setIsOpen(true)} className="shadow-md cursor-pointer gap-3 bg-black border border-gray-200 text-white font-medium px-4 py-2 rounded-md flex items-center hover:bg-gray-800 transition-colors duration-200">
            <FaPlus />
            {t('add_account')}
          </button>
        </div>
      </div>
      <div className="bg-white shadow space-y-8 mt-[20px] rounded-xl p-4 border border-gray-200">
        <div className="text-[16px] font-bold flex items-center gap-2">
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
            className="lucide lucide-building2 h-5 w-5"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
          <h1>{t('Account_Summary')}</h1>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto">
            <h1 className="text-[14px] text-gray-500">{t('Total_Accounts')}</h1>
            <p className="text-[24px]">0</p>
          </div>
          <div className="w-full sm:w-auto">
            <h1 className="text-[14px] text-gray-500">{t('Active_Accounts')}</h1>
            <p className="text-green-400 text-[24px]">0</p>
          </div>
          <div className="w-full sm:w-auto">
            <h1 className="text-[14px] text-gray-500">{t('Total_Balance')}</h1>
            <p className="flex items-center text-[24px]">
              <FaManatSign />0
            </p>
          </div>
        </div>
      </div>


      <div className="bg-white shadow-xl rounded-xl p-4 border border-gray-200  flex flex-col items-center justify-center text-center min-h-[300px] space-y-3 mt-[30px]">
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
          className="lucide lucide-building2 h-12 w-12 text-gray-500 mb-4"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
          <path d="M10 6h4"></path>
          <path d="M10 10h4"></path>
          <path d="M10 14h4"></path>
          <path d="M10 18h4"></path>
        </svg>

        <p className="font-bold text-[18px]">{t('No_banks_accounts_yet')}</p>
        <p className="text-[16px] text-gray-500">
          {t('Add_your_first_bank_account_to_start_tracking_your_finances')}
        </p>

        <button onClick={() => setIsOpen(true)} className="shadow-md cursor-pointer gap-3 bg-black border border-gray-200 text-white font-medium px-4 py-2 rounded-md flex items-center hover:bg-gray-800 transition-colors duration-200">
          <FaPlus />
          {t('Add_Your_First_Account')}
        </button>
      </div>
      {isOpen && <BankModal onClose={() => setIsOpen(false)} />}


    </div>
  )
}

export default BankAccounts