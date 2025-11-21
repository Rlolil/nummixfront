import React from 'react';
import { FaCalculator, FaDownload, FaWallet, FaArrowUp } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const PayrollManagement = () => {
  const { t } = useTranslation();

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
      bonus: '₼750',
      gross: '₼2550',
      net: '₼1938',
      status: t('pages.hr.payroll.status.pending', { defaultValue: 'Pending' }),
      statusColor: 'orange',
    },
  ];

  const taxData = [
    {
      label: t('pages.hr.payroll.taxes.incomeTax', { defaultValue: 'Income tax (14%)' }),
      amount: '₼67.945',
      progress: 100,
    },
    {
      label: t('pages.hr.payroll.taxes.medicalInsurance', { defaultValue: 'Mandatory medical insurance' }),
      amount: '₼9.706',
      progress: 20,
    },
  ];

  const accountingData = [
    {
      type: t('pages.hr.payroll.accounting.debit', { defaultValue: 'Debit' }),
      account: '543 - ' + t('pages.hr.payroll.accounting.salaryExpenses', { defaultValue: 'Salary expenses' }),
      amount: '₼485.320',
      color: 'green',
    },
    {
      type: t('pages.hr.payroll.accounting.credit', { defaultValue: 'Credit' }),
      account: '533 - ' + t('pages.hr.payroll.accounting.settlementsWithBudgetTaxes', { defaultValue: 'Settlements with budget (taxes)' }),
      amount: '₼67.945',
      color: 'red',
    },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 space-y-6 text-[#001233] dark:text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#023E7D] dark:text-white">{t('pages.hr.payroll.title', { defaultValue: 'Payroll Management' })}</h2>
          <p className="text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.payroll.subtitle', { defaultValue: 'Manage salaries, bonuses, and taxes' })}</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0466CB] hover:bg-[#0453A4] dark:bg-[#023E7D] dark:hover:bg-[#0453A4] text-white px-4 py-2 rounded-md">
          <FaDownload className="w-4 h-4" />
          {t('pages.hr.payroll.export', { defaultValue: 'Export Payroll' })}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.payroll.cards.totalGross', { defaultValue: 'Total Gross Salary' })}</p>
            <p className="text-[#023E7D] dark:text-white mt-1">₼485.320</p>
          </div>
          <div className="bg-blue-50 dark:bg-[#023E7D] text-blue-600 dark:text-[#0453A4] p-3 rounded-lg">
            <FaWallet className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.payroll.cards.totalNet', { defaultValue: 'Total Net Salary' })}</p>
            <p className="text-[#023E7D] dark:text-white mt-1">₼368.843</p>
          </div>
          <div className="bg-green-50 dark:bg-[#023E7D] text-green-600 dark:text-[#0453A4] p-3 rounded-lg">
            <FaArrowUp className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.payroll.cards.bonuses', { defaultValue: 'Bonuses' })}</p>
            <p className="text-[#023E7D] dark:text-white mt-1">₼25.400</p>
          </div>
          <div className="bg-purple-50 dark:bg-[#023E7D] text-purple-600 dark:text-[#0453A4] p-3 rounded-lg">
            <FiTrendingUp className="w-6 h-6" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.payroll.cards.taxes', { defaultValue: 'Taxes' })}</p>
            <p className="text-[#023E7D] dark:text-white mt-1">₼67.945</p>
          </div>
          <div className="bg-orange-50 dark:bg-[#023E7D] text-orange-600 dark:text-[#0453A4] p-3 rounded-lg">
            <FaCalculator className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl lg:col-span-2">
          <div className="px-6 pt-6">
            <h4 className="font-semibold">{t('pages.hr.payroll.sections.salariesByEmployee', { defaultValue: 'Salaries by Employee' })}</h4>
          </div>
          <div className="px-6 pb-6">
            <table className="w-full text-sm">
              <thead className="bg-[#F5F8FF] dark:bg-[#002855] border-b border-[#979DAC] dark:border-[#979DAC]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-[#5C677D] dark:text-[#7D8597] uppercase">{t('pages.hr.payroll.table.employee', { defaultValue: 'Employee' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-[#5C677D] dark:text-[#7D8597] uppercase">{t('pages.hr.payroll.table.baseSalary', { defaultValue: 'Base Salary' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-[#5C677D] dark:text-[#7D8597] uppercase">{t('pages.hr.payroll.table.bonus', { defaultValue: 'Bonus' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-[#5C677D] dark:text-[#7D8597] uppercase">{t('pages.hr.payroll.table.gross', { defaultValue: 'Gross' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-[#5C677D] dark:text-[#7D8597] uppercase">{t('pages.hr.payroll.table.net', { defaultValue: 'Net' })}</th>
                  <th className="px-4 py-3 text-left text-xs text-[#5C677D] dark:text-[#7D8597] uppercase">{t('pages.hr.payroll.table.status', { defaultValue: 'Status' })}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#979DAC] dark:divide-[#979DAC]">
                {payrollData.map((employee, index) => (
                  <tr key={index} className="hover:bg-[#F5F8FF] dark:hover:bg-[#002855]">
                    <td className="px-4 py-3">
                      <div>
                        <div className="text-[#001233] dark:text-white">{employee.name}</div>
                        <div className="text-xs text-[#7D8597] dark:text-[#5C677D]">{employee.department}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#001233] dark:text-white">{employee.baseSalary}</td>
                    <td className="px-4 py-3 text-[#001233] dark:text-white">{employee.bonus}</td>
                    <td className="px-4 py-3 text-[#001233] dark:text-white">{employee.gross}</td>
                    <td className="px-4 py-3 text-[#001233] dark:text-white">{employee.net}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md ${
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

        <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl lg:col-span-1">
          <div className="px-6 pt-6">
            <h4 className="font-semibold">{t('pages.hr.payroll.sections.taxesAndContributions', { defaultValue: 'Taxes and Contributions' })}</h4>
          </div>
          <div className="px-6 pb-6 space-y-4">
            {taxData.map((tax, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-[#5C677D] dark:text-[#5C677D]">{tax.label}</p>
                  <p className="text-[#001233] dark:text-white">{tax.amount}</p>
                </div>
                <div className="bg-[#979DAC] dark:bg-[#5C677D] rounded-full h-2">
                  <div
                    className="bg-[#0466CB] dark:bg-[#0466CB] h-full rounded-full"
                    style={{ width: `${tax.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-[#979DAC] dark:border-[#979DAC]">
              <div className="flex items-center justify-between">
                <p className="text-[#001233] dark:text-white">{t('pages.hr.payroll.totalContributions', { defaultValue: 'Total contributions' })}</p>
                <p className="text-[#001233] dark:text-white">₼128.609</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl">
        <div className="px-6 pt-6">
          <h4 className="font-semibold">{t('pages.hr.payroll.sections.accountingReconciliation', { defaultValue: 'Accounting Reconciliation' })}</h4>
        </div>
        <div className="px-6 pb-6 space-y-3">
          {accountingData.map((entry, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg ${
                entry.color === 'green' ? 'bg-green-50 dark:bg-[#002855]' : 'bg-red-50 dark:bg-[#002855]'
              }`}
            >
              <div>
                <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">{entry.type}</p>
                <p className="text-[#001233] dark:text-white">{entry.account}</p>
              </div>
              <p className="text-[#001233] dark:text-white">{entry.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;