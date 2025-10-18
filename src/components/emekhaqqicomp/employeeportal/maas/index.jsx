import React from 'react';
import SalaryHistoryTable from './SalaryHistoryTable';
import SalaryInfoCard from './SalaryInfoCard';


const EmployeeSalaryTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SalaryInfoCard
          title="Əsas Maaş"
          amount="₼3200"
          iconBg="bg-blue-50"
          textColor="text-blue-600"
        />
        <SalaryInfoCard
          title="Son Maaş (Net)"
          amount="₼2812"
          iconBg="bg-green-50"
          textColor="text-green-600"
        />
        <SalaryInfoCard
          title="İllik Maaş Fondu"
          amount="₼38400"
          iconBg="bg-purple-50"
          textColor="text-purple-600"
        />
      </div>

      {/* Salary History Table */}
      <SalaryHistoryTable />
    </div>
  );
};

export default EmployeeSalaryTab;
