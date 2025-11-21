import React from 'react';
import { useTranslation } from 'react-i18next';
import SalaryHistoryTable from './SalaryHistoryTable';
import SalaryInfoCard from './SalaryInfoCard';


const EmployeeSalaryTab = () => {
  const { t } = useTranslation('app');
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SalaryInfoCard
          title={t('pages.hr.portal.salary.cards.baseSalary')}
          amount="₼3200"
          iconBg="bg-blue-50 dark:bg-blue-900/30"
          textColor="text-blue-600 dark:text-blue-400"
        />
        <SalaryInfoCard
          title={t('pages.hr.portal.salary.cards.lastNetSalary')}
          amount="₼2812"
          iconBg="bg-green-50 dark:bg-green-900/30"
          textColor="text-green-600 dark:text-green-400"
        />
        <SalaryInfoCard
          title={t('pages.hr.portal.salary.cards.annualFund')}
          amount="₼38400"
          iconBg="bg-purple-50 dark:bg-purple-900/30"
          textColor="text-purple-600 dark:text-purple-400"
        />
      </div>

      {/* Salary History Table */}
      <SalaryHistoryTable />
    </div>
  );
};

export default EmployeeSalaryTab;
