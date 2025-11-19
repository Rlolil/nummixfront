import { useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import DashboardCards from "./reportscard";
import MaasFonduDinamikasi from "./dynamiccharts";
import SobelerUzereBolgu from "./SobelerUzereBolgu";
import EmployeeTurnoverChart from "./EmployeeTurnoverChart";
import AttendanceChart from "./AttendanceChart";
import MonthlyReport from "./MonthlyReport";
import { useTranslation } from "react-i18next";

function Reports() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState(
    t('pages.hr.reports.filters.range.thisMonth', { defaultValue: 'This month' })
  );

  const options = [
    t('pages.hr.reports.filters.range.thisMonth', { defaultValue: 'This month' }),
    t('pages.hr.reports.filters.range.lastMonth', { defaultValue: 'Last month' }),
    t('pages.hr.reports.filters.range.last3Months', { defaultValue: 'Last 3 months' }),
    t('pages.hr.reports.filters.range.last6Months', { defaultValue: 'Last 6 months' }),
    t('pages.hr.reports.filters.range.oneYear', { defaultValue: '1 year' })
  ];

  const handleSelect = (option) => {
    setSelectedPeriod(option);
    setOpen(false);
  };

  return (
    <div className="my-4 space-y-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-gray-900 text-xl font-semibold">{t('pages.hr.reports.title', { defaultValue: 'Reports & Analytics' })}</h2>
          <p className="text-gray-500">{t('pages.hr.reports.subtitle', { defaultValue: 'HR and payroll statistics' })}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 relative">
          {/* Dropdown button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between gap-2 w-40 px-3 py-2 h-9 border rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50"
            >
              {selectedPeriod}
              <FaChevronDown className="w-4 h-4 opacity-50" />
            </button>

            {/* Dropdown menu */}
            {open && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-md text-sm text-gray-700">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* PDF Button */}
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 h-9 border rounded-md text-sm bg-white text-gray-800 hover:bg-gray-100"
          >
            <FaDownload className="w-4 h-4" />
            {t('common.downloadPDF', { defaultValue: 'Download PDF' })}
          </button>

          {/* Excel Button */}
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 h-9 rounded-md text-sm bg-[#0466CB] text-white hover:opacity-50"
          >
            <FaDownload className="w-4 h-4" />
            {t('common.export', { ns: 'translation', defaultValue: 'Export' })}
          </button>
        </div>
      </div>
      <div>
        <DashboardCards />
      </div>
      <div>
        <MaasFonduDinamikasi  />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <SobelerUzereBolgu  />
        </div>
        <div>
          <EmployeeTurnoverChart />
        </div>
      </div>
      <div>
        <AttendanceChart />
      </div>
      <div>
        <MonthlyReport />
      </div>
    </div>
  );
}

export default Reports;
