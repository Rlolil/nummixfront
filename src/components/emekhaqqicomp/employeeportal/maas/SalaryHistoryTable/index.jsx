import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const salaryHistory = [
  {
    month: 'Sentyabr 2025',
    gross: '₼3700',
    tax: '₼518',
    social: '₼370',
    net: '₼2812',
    status: 'paid'
  },
  {
    month: 'Avqust 2025',
    gross: '₼3500',
    tax: '₼490',
    social: '₼350',
    net: '₼2660',
    status: 'paid'
  },
  {
    month: 'İyul 2025',
    gross: '₼3400',
    tax: '₼476',
    social: '₼340',
    net: '₼2584',
    status: 'paid'
  },
  {
    month: 'İyun 2025',
    gross: '₼3200',
    tax: '₼448',
    social: '₼320',
    net: '₼2432',
    status: 'paid'
  }
];

const SalaryHistoryTable = () => {
  const { t } = useTranslation('app');
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-6 pt-6">
        <h4 className="font-medium text-gray-900">{t('pages.hr.portal.salary.history.title')}</h4>
        <button className="flex items-center gap-2 text-sm px-3 py-2 border rounded-md hover:bg-gray-100">
          <FiDownload className="w-4 h-4" />
          {t('pages.hr.portal.salary.history.export')}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm mt-4">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.month')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.gross')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.tax')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.social')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.net')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.status')}</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {salaryHistory.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">{item.month}</td>
                <td className="px-6 py-4 text-gray-900">{item.gross}</td>
                <td className="px-6 py-4 text-gray-600">{item.tax}</td>
                <td className="px-6 py-4 text-gray-600">{item.social}</td>
                <td className="px-6 py-4 text-green-600">{item.net}</td>
                <td className="px-6 py-4">
                  <span className="text-green-700 bg-green-100 text-xs px-2 py-0.5 rounded-md font-medium">
                    {t(`pages.hr.payroll.status.${item.status}`)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-md">
                    <FiDownload className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryHistoryTable;
