import React from 'react';
import { 
  FaChevronDown, 
  FaCalculator, 
  FaDownload, 
  FaWallet, 
  FaArrowUp 
} from 'react-icons/fa';
import { FiTrendingUp } from "react-icons/fi";
import { useTranslation } from 'react-i18next';


const PayrollManagement = () => {
  const { t, i18n } = useTranslation();
  const payrollData = [
    {
      name: 'Nigar Əliyeva',
      department: t('pages.hr.departments.finance', { defaultValue: 'Finance' }),
      baseSalary: '₼2500',
      bonus: '₼300',
      gross: '₼2800',
      net: '₼2128',
      status: t('pages.hr.payroll.status.paid', { defaultValue: 'Paid' }),
      statusColor: 'green',
    },
    {
      name: 'Kamran Məmmədov',
      department: t('pages.hr.departments.it', { defaultValue: 'IT Department' }),
      baseSalary: '₼3200',
      bonus: '₼500',
      gross: '₼3900',
      net: '₼2964',
      status: t('pages.hr.payroll.status.paid', { defaultValue: 'Paid' }),
      statusColor: 'green',
    },
    {
      name: 'Səbinə Həsənova',
      department: t('pages.hr.departments.marketing', { defaultValue: 'Marketing' }),
      baseSalary: '₼2800',
      bonus: '₼400',
      gross: '₼3200',
      net: '₼2432',
      status: t('pages.hr.payroll.status.paid', { defaultValue: 'Paid' }),
      statusColor: 'green',
    },
    {
      name: 'Elvin Quliyev',
      department: t('pages.hr.departments.sales', { defaultValue: 'Sales' }),
      baseSalary: '₼1800',
      bonus: '₼600',
      gross: '₼2550',
      net: '₼1938',
      status: t('pages.hr.payroll.status.pending', { defaultValue: 'Pending' }),
      statusColor: 'orange',
    },
    {
      name: 'Ləman Rəhimova',
      department: t('pages.hr.departments.hr', { defaultValue: 'Human Resources' }),
      baseSalary: '₼1600',
      bonus: '₼0',
      gross: '₼1600',
      net: '₼1216',
      status: t('pages.hr.payroll.status.paid', { defaultValue: 'Paid' }),
      statusColor: 'green',
    },
  ];

  const taxData = [
    { label: t('pages.hr.payroll.taxes.incomeTax', { defaultValue: 'Income tax (14%)' }), amount: '₼67.945', progress: 100 },
    { label: t('pages.hr.payroll.taxes.socialInsurance', { defaultValue: 'Social insurance' }), amount: '₼48.532', progress: 100 },
    { label: t('pages.hr.payroll.taxes.unemploymentInsurance', { defaultValue: 'Unemployment insurance' }), amount: '₼2.426', progress: 5 },
    { label: t('pages.hr.payroll.taxes.medicalInsurance', { defaultValue: 'Mandatory medical insurance' }), amount: '₼9.706', progress: 20 },
  ];

  const accountingData = [
    { type: t('pages.hr.payroll.accounting.debit', { defaultValue: 'Debit' }), account: '543 - ' + t('pages.hr.payroll.accounting.salaryExpenses', { defaultValue: 'Salary expenses' }), amount: '₼485.320', color: 'green' },
    { type: t('pages.hr.payroll.accounting.credit', { defaultValue: 'Credit' }), account: '531 - ' + t('pages.hr.payroll.accounting.settlementsWithEmployees', { defaultValue: 'Settlements with employees' }), amount: '₼368.843', color: 'red' },
    { type: t('pages.hr.payroll.accounting.credit', { defaultValue: 'Credit' }), account: '533 - ' + t('pages.hr.payroll.accounting.settlementsWithBudgetTaxes', { defaultValue: 'Settlements with budget (taxes)' }), amount: '₼67.945', color: 'red' },
    { type: t('pages.hr.payroll.accounting.credit', { defaultValue: 'Credit' }), account: '535 - ' + t('pages.hr.payroll.accounting.settlementsWithSocialInsurance', { defaultValue: 'Settlements with social insurance' }), amount: '₼48.532', color: 'red' },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{t('pages.hr.payroll.title', { defaultValue: 'Payroll Management' })}</h2>
          <p className="text-gray-500">{t('pages.hr.payroll.subtitle', { defaultValue: 'Salary calculations and payments' })}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select className="w-40 h-9 px-3 py-2 border border-gray-200 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>{t('pages.hr.common.months.october', { defaultValue: 'October' })} 2025</option>
            <option>{t('pages.hr.common.months.september', { defaultValue: 'September' })} 2025</option>
            <option>{t('pages.hr.common.months.august', { defaultValue: 'August' })} 2025</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md bg-white text-sm hover:bg-gray-100">
            <FaCalculator className="w-4 h-4" />
            {t('pages.hr.payroll.actions.calculate', { defaultValue: 'Calculate' })}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:opacity-50">
            <FaDownload className="w-4 h-4" />
            {t('pages.hr.payroll.actions.export', { defaultValue: 'Export' })}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200  rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{t('pages.hr.payroll.cards.totalGross', { defaultValue: 'Total Gross Salary' })}</p>
            <p className="text-gray-900 mt-1">₼485.320</p>
          </div>
          <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
            <FaWallet className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white border border-gray-200  rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{t('pages.hr.payroll.cards.totalNet', { defaultValue: 'Total Net Salary' })}</p>
            <p className="text-gray-900 mt-1">₼368.843</p>
          </div>
          <div className="bg-green-50 text-green-600 p-3 rounded-lg">
            <FiTrendingUp className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white border border-gray-200  rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{t('pages.hr.payroll.cards.taxes', { defaultValue: 'Taxes' })}</p>
            <p className="text-gray-900 mt-1">₼67.945</p>
          </div>
          <div className="bg-orange-50 text-orange-600 p-3 rounded-lg">
            <FaCalculator className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-white border border-gray-200rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{t('pages.hr.payroll.cards.bonuses', { defaultValue: 'Bonuses' })}</p>
            <p className="text-gray-900 mt-1">₼25.400</p>
          </div>
          <div className="bg-purple-50 text-purple-600 p-3 rounded-lg">
            <FiTrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200  rounded-xl lg:col-span-1">
          <div className="px-6 pt-6">
            <h4 className="font-semibold">{t('pages.hr.payroll.sections.taxesAndContributions', { defaultValue: 'Taxes and Contributions' })}</h4>
          </div>
          <div className="px-6 pb-6 space-y-4">
            {taxData.map((tax, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-700">{tax.label}</p>
                  <p className="text-gray-900">{tax.amount}</p>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-full rounded-full"
                    style={{ width: `${tax.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 ">
              <div className="flex items-center justify-between">
                <p className="text-gray-900">{t('pages.hr.payroll.totalContributions', { defaultValue: 'Total contributions' })}</p>
                <p className="text-gray-900">₼128.609</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl lg:col-span-2">
          <div className="px-6 pt-6">
            <h4 className="font-semibold">{t('pages.hr.payroll.sections.salariesByEmployee', { defaultValue: 'Salaries by Employee' })}</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">{t('pages.hr.payroll.table.employee', { defaultValue: 'Employee' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">{t('pages.hr.payroll.table.baseSalary', { defaultValue: 'Base Salary' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">{t('pages.hr.payroll.table.bonus', { defaultValue: 'Bonus' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">{t('pages.hr.payroll.table.gross', { defaultValue: 'Gross' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">{t('pages.hr.payroll.table.net', { defaultValue: 'Net' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-500 uppercase">{t('pages.hr.payroll.table.status', { defaultValue: 'Status' })}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payrollData.map((employee, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div>
                        <div className="text-gray-900">{employee.name}</div>
                        <div className="text-xs text-gray-500">{employee.department}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-900">{employee.baseSalary}</td>
                    <td className="px-4 py-3 text-gray-900">{employee.bonus}</td>
                    <td className="px-4 py-3 text-gray-900">{employee.gross}</td>
                    <td className="px-4 py-3 text-gray-900">{employee.net}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md border ${
                          employee.statusColor === 'green'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200  rounded-xl">
        <div className="px-6 pt-6">
          <h4 className="font-semibold">{t('pages.hr.payroll.sections.accountingReconciliation', { defaultValue: 'Accounting Reconciliation' })}</h4>
        </div>
        <div className="px-6 pb-6 space-y-3">
          {accountingData.map((entry, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg ${
                entry.color === 'green' ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div>
                <p className="text-sm text-gray-600">{entry.type}</p>
                <p className="text-gray-900">{entry.account}</p>
              </div>
              <p className="text-gray-900">{entry.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;