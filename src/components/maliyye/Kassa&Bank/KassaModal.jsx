import React from "react";
import { IoClose } from "react-icons/io5";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";

const KassaModal = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <Overlay onClose={onClose}>
      <div className="bg-white w-[300px] sm:w-[550px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-5 sm:p-6 relative">
        <div className="flex justify-between items-start sm:items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">{t('pages.finance.cashBank.modal.newOperationTitle')}</h2>
            <p className="text-gray-500 text-sm">{t('pages.finance.cashBank.modal.newOperationSubtitle')}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl sm:text-xl">
            <IoClose />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm">{t('pages.finance.cashBank.form.type')}</label>
            <select className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
              <option>{t('pages.finance.common.select')}</option>
              <option>{t('pages.finance.common.inflow')}</option>
              <option>{t('pages.finance.common.outflow')}</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 text-sm">{t('pages.finance.common.amount')}</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm">{t('pages.finance.common.currency')}</label>
              <select className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
                <option>AZN</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-gray-600 text-sm">{t('pages.finance.common.category')}</label>
            <select className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
              <option>{t('pages.finance.common.select')}</option>
              <option>{t('pages.finance.common.categories.salary')}</option>
              <option>{t('pages.finance.common.categories.sales')}</option>
              <option>{t('pages.finance.common.categories.other')}</option>
            </select>
          </div>

          <div>
            <label className="text-gray-600 text-sm">{t('pages.finance.common.description')}</label>
            <textarea
              placeholder={t('pages.finance.cashBank.form.notePlaceholder')}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition w-full sm:w-auto"
          >
            {t('common.cancel')}
          </button>
          <button className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition w-full sm:w-auto">
            {t('common.save')}
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default KassaModal;
