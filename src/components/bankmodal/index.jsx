import React from 'react';
import { FiX } from "react-icons/fi";
import Overlay from '../overlay';
import { useTranslation } from 'react-i18next';

const BankModal = ({ onClose }) => {
  const  {t} = useTranslation();
  return (
    <Overlay onClose={onClose}>
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm relative">
        <div className='flex justify-between'>
          <h2 className="text-[18px] font-bold mb-1">{t('Add_Your_First_Account')}</h2>
          <FiX onClick={onClose} className='cursor-pointer' />
        </div>
        <p className='text-[14px] text-gray-500'>{t('Add_a_new_bank_account_to_track_your_finances')}</p>

        <div className="space-y-4">
          <div>
            <h1 className='text-[14px] font-semibold mb-1 mt-2'>{t('Account_Name')}</h1>
            <input
              type="text"
              placeholder={t('Account_Name')}
              className="w-full border p-2 text-[14px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <h1 className='text-[14px] font-semibold mb-1'>{t('Bank_Name')}</h1>
            <select
              className="w-40 border text-[14px] text-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              defaultValue=""
            >
              <option value="" disabled>{t('Select_your_bank')}</option>
              <option value="kapital">Kapital Bank</option>
              <option value="pasha">Paşa Bank</option>
              <option value="abb">ABB</option>
            </select>
          </div>

          <div>
            <h1 className='text-[14px] font-semibold mb-1'>{t('Account_Number')}</h1>
            <input
              type="text"
              placeholder={t('Account_Number')}
              className="w-full border p-2 text-[14px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className='flex flex-col space-y-4'>
            <div>
              <h1 className='text-[14px] font-semibold mb-1'>{t('Account_Type')}</h1>
              <select
                className="w-40 border text-[14px] text-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                defaultValue=""
              >
                <option value="" disabled>{t('Select_account_type')}</option>
                <option value="checking">{t('Checking')}</option>
                <option value="savings">{t('Savings')}</option>
              </select>
            </div>

            <div>
              <h1 className='text-[14px] font-semibold mb-1'>{t('Currency')}</h1>
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
            <h1 className='text-[14px] font-semibold mb-1' >{t('Current_Balance')}</h1>
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
            {t('Cancel')}
          </button>
          <button onClick={onClose} className="px-4 py-2 rounded-md cursor-pointer bg-black text-white hover:bg-gray-800">
            {t("add_account")}
          </button>
        </div>


      </div>
    </Overlay>
  );
};

export default BankModal;
