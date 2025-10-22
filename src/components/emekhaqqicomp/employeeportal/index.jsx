import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit } from "react-icons/fi";
import EmployeeSalaryTab from "./maas";
import LeaveInfo from "./mezuniyyet";
import { FiBell } from 'react-icons/fi';
import AttendanceInfo from "./attendance";
import PersonalDocuments from "./documents";
function EmployeePortal() {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(t('pages.hr.portal.tabs.salary', { defaultValue: 'Salary' }));
  return (
    <div className="overflow-auto my-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium">{t('pages.hr.portal.title', { defaultValue: 'Employee Portal' })}</h2>
          <p className="text-gray-600">{t('pages.hr.portal.subtitle', { defaultValue: 'Personal information and services' })}</p>
        </div>
        <div>
          <button className="bg-white border border-gray-200 rounded-xl flex items-center text-black py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell w-4 h-4 mr-2"
              aria-hidden="true"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
            </svg>
            {t('pages.hr.portal.notifications.button', { defaultValue: 'Notifications' })}
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
            K
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Kamran Məmmədov
              </h3>
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-md">
                EMP002
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <p className="text-gray-500">{t('pages.hr.portal.profile.position', { defaultValue: 'Position' })}</p>
                <p className="text-gray-900 font-medium">IT Meneceri</p>
              </div>
              <div>
                <p className="text-gray-500">{t('pages.hr.portal.profile.department', { defaultValue: 'Department' })}</p>
                <p className="text-gray-900 font-medium">{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</p>
              </div>
              <div>
                <p className="text-gray-500">{t('pages.hr.portal.profile.email', { defaultValue: 'Email' })}</p>
                <p className="text-gray-900 font-medium">
                  kamran.mammadov@company.az
                </p>
              </div>
              <div>
                <p className="text-gray-500">{t('pages.hr.portal.profile.phone', { defaultValue: 'Phone' })}</p>
                <p className="text-gray-900 font-medium">+994 55 234 56 78</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100 transition">
            <FiEdit className="w-4 h-4" />
            {t('pages.hr.portal.edit', { defaultValue: 'Edit' })}
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  items-center justify-between gap-4 bg-gray-200 p-2 rounded-md w-full">
        <button
          onClick={() => setActiveItem(t('pages.hr.portal.tabs.salary', { defaultValue: 'Salary' }))}
          className={` ${
            activeItem === t('pages.hr.portal.tabs.salary', { defaultValue: 'Salary' }) ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          {t('pages.hr.portal.tabs.salary', { defaultValue: 'Salary' })}
        </button>
        <button
          onClick={() => setActiveItem(t('pages.hr.portal.tabs.leave', { defaultValue: 'Leave' }))}
          className={` ${
            activeItem === t('pages.hr.portal.tabs.leave', { defaultValue: 'Leave' }) ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          {t('pages.hr.portal.tabs.leave', { defaultValue: 'Leave' })}
        </button>
        <button
          onClick={() => setActiveItem(t('pages.hr.portal.tabs.attendance', { defaultValue: 'Attendance' }))}
          className={` ${
            activeItem === t('pages.hr.portal.tabs.attendance', { defaultValue: 'Attendance' }) ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          {t('pages.hr.portal.tabs.attendance', { defaultValue: 'Attendance' })}
        </button>
        <button
          onClick={() => setActiveItem(t('pages.hr.portal.tabs.documents', { defaultValue: 'Documents' }))}
          className={` ${
            activeItem === t('pages.hr.portal.tabs.documents', { defaultValue: 'Documents' }) ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          {t('pages.hr.portal.tabs.documents', { defaultValue: 'Documents' })}
        </button>
      </div>
      <div>
        {activeItem === t('pages.hr.portal.tabs.salary', { defaultValue: 'Salary' }) && <EmployeeSalaryTab />}
        {activeItem === t('pages.hr.portal.tabs.leave', { defaultValue: 'Leave' }) && <LeaveInfo />}
        {activeItem === t('pages.hr.portal.tabs.attendance', { defaultValue: 'Attendance' }) && <AttendanceInfo />}
        {activeItem === t('pages.hr.portal.tabs.documents', { defaultValue: 'Documents' }) && <PersonalDocuments />}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex justify-between items-center pb-4">
          <h4 className="font-medium text-gray-900">{t('pages.hr.portal.notifications.title', { defaultValue: 'Recent Notifications' })}</h4>
          <FiBell className="w-6 h-6 text-gray-500" />
        </div>
        <div className="space-y-3 mt-4">
          <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-blue-900">{t('pages.hr.portal.notifications.salaryPaid.title', { defaultValue: 'Salary paid' })}</p>
                <p className="text-sm text-gray-600 mt-1">{t('pages.hr.portal.notifications.salaryPaid.message', { defaultValue: 'Your salary for this month has been transferred.' })}</p>
                <p className="text-xs text-gray-400 mt-2">2025-10-01</p>
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
            </div>
          </div>
          <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-blue-900">{t('pages.hr.portal.notifications.leaveApproved.title', { defaultValue: 'Leave approved' })}</p>
                <p className="text-sm text-gray-600 mt-1">{t('pages.hr.portal.notifications.leaveApproved.message', { defaultValue: 'Your leave request has been approved by management.' })}</p>
                <p className="text-xs text-gray-400 mt-2">2025-09-28</p>
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
            </div>
          </div>
          <div className="p-4 rounded-lg border bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-900">{t('pages.hr.portal.notifications.documentReminder.title', { defaultValue: 'Document renewal reminder' })}</p>
                <p className="text-sm text-gray-600 mt-1">{t('pages.hr.portal.notifications.documentReminder.message', { defaultValue: 'Your medical certificate expires this month. Please renew it.' })}</p>
                <p className="text-xs text-gray-400 mt-2">2025-09-25</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default EmployeePortal;
