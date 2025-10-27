import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { FaCircle } from 'react-icons/fa';
import LeaveRequestModal from "./new";
import { useTranslation } from "react-i18next";
function Leave() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const data = [
    {
      name: "Nigar Əliyeva",
      departmentKey: "finance",
      total: 28,
      used: 12,
      remaining: 16,
      statusKey: "active",
    },
    {
      name: "Kamran Məmmədov",
      departmentKey: "it",
      total: 28,
      used: 8,
      remaining: 20,
      statusKey: "active",
    },
    {
      name: "Səbinə Həsənova",
      departmentKey: "marketing",
      total: 28,
      used: 15,
      remaining: 13,
      statusKey: "active",
    },
    {
      name: "Elvin Quliyev",
      departmentKey: "sales",
      total: 28,
      used: 5,
      remaining: 23,
      statusKey: "active",
    },
  ];
  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="overflow-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium">{t('pages.hr.leave.title', { defaultValue: 'Leave Management' })}</h2>
          <p className="text-gray-600">{t('pages.hr.leave.subtitle', { defaultValue: 'Permissions and leave schedule' })}</p>
        </div>
        <div>
          {modalOpen && <LeaveRequestModal onClose={() => setModalOpen(false)} />}
          <button  onClick={() => setModalOpen(true)} className="bg-black rounded-xl p-2 flex items-center gap-2 hover:opacity-50">
            <span className="text-[18px] text-white">+</span>
            <span className="text-white">{t('pages.hr.leave.newRequest', { defaultValue: 'New Request' })}</span>
          </button>
        </div>
      </div>
      <div className="lg:grid-cols-4 grid md:grid-cols-2 grid-cols-1 items-center justify-between gap-4">
        <div className="border border-gray-200 rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.leave.cards.totalDays', { defaultValue: 'Total leave days' })}</p>
            <p className="text-blue-600 font-medium text-2xl">28</p>
          </div>
          <div className="rounded-2xl bg-blue-50 text-blue-600 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.leave.cards.used', { defaultValue: 'Used' })}</p>
            <p className="text-green-600 font-medium text-2xl">12</p>
          </div>
          <div className="rounded-2xl bg-green-50 text-green-600 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.leave.cards.remaining', { defaultValue: 'Remaining' })}</p>
            <p className="text-red-600 font-medium text-2xl">16</p>
          </div>
          <div className="rounded-2xl bg-red-50 text-red-600 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-gray-600">{t('pages.hr.leave.cards.pending', { defaultValue: 'Pending requests' })}</p>
            <p className="text-purple-600 font-medium text-2xl">5</p>
          </div>
          <div className="rounded-2xl bg-purple-50 text-purple-600 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
        <div className="border border-gray-200 p-4 rounded-xl shadow-sm">
          <h2>{t('pages.hr.leave.requests.title', { defaultValue: 'Leave Requests' })}</h2>
          <div>
            <div className="p-2 space-y-2">
              <div className="border  border-gray-200 rounded-xl space-y-2 shadow-sm p-3">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 px-2 py-1 text-blue-600 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 text-green-600 rounded-2xl flex items-center gap-1 px-2 py-1">
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
                      class="lucide lucide-check w-3 h-3"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="border  border-gray-200 rounded-xl space-y-2 shadow-sm p-3">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 px-2 py-1 text-blue-600 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 text-green-600 rounded-2xl flex items-center gap-1 px-2 py-1">
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
                      class="lucide lucide-check w-3 h-3"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="border  border-gray-200 rounded-xl space-y-2 shadow-sm p-3">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 px-2 py-1 text-blue-600 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 text-green-600 rounded-2xl flex items-center gap-1 px-2 py-1">
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
                      class="lucide lucide-check w-3 h-3"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="border  border-gray-200 rounded-xl space-y-2 shadow-sm p-3">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 px-2 py-1 text-blue-600 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 text-green-600 rounded-2xl flex items-center gap-1 px-2 py-1">
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
                      class="lucide lucide-check w-3 h-3"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-gray-600 text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-4 rounded-xl shadow-sm">
          <h2>{t('pages.hr.leave.upcoming.title', { defaultValue: 'Upcoming Leaves' })}</h2>
          <div className="space-y-4 p-2">
            <div className="rounded-2xl bg-blue-50 p-3 flex gap-3">
              <div className="bg-blue-600 rounded-full flex items-center justify-center w-10 h-10 text-white font-medium">
                N
              </div>
              <div className="space-y-2">
                <p>Nigar Əliyeva</p>
                <p className="text-gray-600">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-2">
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
                    class="lucide lucide-calendar w-4 h-4 text-gray-400"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>2025-10-15</p>
                </div>
                <p className="text-blue-600 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-blue-50 p-3 flex gap-3">
              <div className="bg-blue-600 rounded-full flex items-center justify-center w-10 h-10 text-white font-medium">
                N
              </div>
              <div className="space-y-2">
                <p>Nigar Əliyeva</p>
                <p className="text-gray-600">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-2">
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
                    class="lucide lucide-calendar w-4 h-4 text-gray-400"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>2025-10-15</p>
                </div>
                <p className="text-blue-600 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h4 className="text-lg font-semibold mb-4">{t('pages.hr.leave.balance.title', { defaultValue: 'Leave Balance by Employee' })}</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs border-b">
              <tr>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.employee', { defaultValue: 'Employee' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.department', { defaultValue: 'Department' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.total', { defaultValue: 'Total Entitlement' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.used', { defaultValue: 'Used' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.remaining', { defaultValue: 'Remaining' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.status', { defaultValue: 'Status' })}</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map((employee, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{employee.name}</td>
                  <td className="px-4 py-2 text-gray-600">
                    {t(`pages.hr.departments.${employee.departmentKey}`, { defaultValue: employee.departmentKey })}
                  </td>
                  <td className="px-4 py-2">{`${employee.total} ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</td>
                  <td className="px-4 py-2">{`${employee.used} ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</td>
                  <td className="px-4 py-2 text-blue-600">
                    {`${employee.remaining} ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-flex items-center gap-1 text-green-700 text-xs font-medium bg-green-100 px-2 py-1 rounded">
                      <FaCircle className="text-green-500 text-[8px]" />
                      {t(`pages.hr.employees.status.${employee.statusKey}`, { defaultValue: employee.statusKey })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leave;
