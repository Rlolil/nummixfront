import React, { useMemo, useState } from "react";
import { FiCalendar, FiEdit2, FiTrash2, FiX } from "react-icons/fi";
import { FaCircle } from 'react-icons/fa';
import LeaveRequestModal from "./new";
import { useTranslation } from "react-i18next";
function Leave() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  const initialBalances = [
    { name: "Nigar Əliyeva", departmentKey: "finance", total: 28, used: 12, remaining: 16, statusKey: "active" },
    { name: "Kamran Məmmədov", departmentKey: "it", total: 28, used: 8, remaining: 20, statusKey: "active" },
    { name: "Səbinə Həsənova", departmentKey: "marketing", total: 28, used: 15, remaining: 13, statusKey: "active" },
    { name: "Elvin Quliyev", departmentKey: "sales", total: 28, used: 5, remaining: 23, statusKey: "active" },
  ];
  const [balances, setBalances] = useState(initialBalances);
  const [editItem, setEditItem] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);

  const anyModalOpen = useMemo(() => modalOpen || !!editItem, [modalOpen, editItem]);
  if (anyModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const openEdit = (item, idx) => {
    setEditItem({ ...item });
    setEditIndex(idx);
  };
  const closeEdit = () => {
    setEditItem(null);
    setEditIndex(-1);
  };
  const handleEditChange = (field, value) => {
    setEditItem((prev) => ({ ...prev, [field]: value }));
  };
  const toInt = (v) => {
    const n = parseInt(v, 10);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  };
  const saveEdit = () => {
    if (editIndex < 0 || !editItem) return;
    const total = toInt(editItem.total);
    const used = Math.min(toInt(editItem.used), total);
    const updated = [...balances];
    updated[editIndex] = { ...editItem, total, used, remaining: total - used };
    setBalances(updated);
    closeEdit();
  };
  const handleDelete = (idx) => {
    const emp = balances[idx];
    const confirmed = window.confirm(
      t('common.confirmDeleteWithName', { name: emp?.name })
    );
    if (!confirmed) return;
    setBalances((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="overflow-auto p-6 space-y-6 text-[#001233] dark:text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium text-[#023E7D] dark:text-blue-400">{t('pages.hr.leave.title', { defaultValue: 'Leave Management' })}</h2>
          <p className="text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.leave.subtitle', { defaultValue: 'Permissions and leave schedule' })}</p>
        </div>
        <div>
          {modalOpen && (
            <LeaveRequestModal onClose={() => setModalOpen(false)} />
          )}
          <button onClick={() => setModalOpen(true)} className="bg-[#0466CB] dark:bg-[#023E7D] hover:bg-[#0453A4] rounded-xl p-2 flex items-center gap-2">
            <span className="text-[18px] text-white">+</span>
            <span className="text-white">{t('pages.hr.leave.newRequest', { defaultValue: 'New Request' })}</span>
          </button>
        </div>
      </div>

      <div className="lg:grid-cols-4 grid md:grid-cols-2 grid-cols-1 items-center justify-between gap-4">
        <div className="border border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.leave.cards.totalDays', { defaultValue: 'Total leave days' })}</p>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-2xl">28</p>
          </div>
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
        <div className="border border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.leave.cards.used', { defaultValue: 'Used' })}</p>
            <p className="text-green-600 dark:text-green-400 font-medium text-2xl">12</p>
          </div>
          <div className="rounded-2xl bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
        <div className="border border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.leave.cards.remaining', { defaultValue: 'Remaining' })}</p>
            <p className="text-red-600 dark:text-red-400 font-medium text-2xl">16</p>
          </div>
          <div className="rounded-2xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
        <div className="border border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl px-4  py-6 flex items-center justify-between shadow-sm">
          <div>
            <p className="text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.leave.cards.pending', { defaultValue: 'Pending requests' })}</p>
            <p className="text-purple-600 dark:text-purple-400 font-medium text-2xl">5</p>
          </div>
          <div className="rounded-2xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xl flex items-center justify-center p-4">
            <FiCalendar />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6">
        <div className="border border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#33415C] p-4 rounded-xl shadow-sm">
          <h2>{t('pages.hr.leave.requests.title', { defaultValue: 'Leave Requests' })}</h2>
          <div>
            <div className="p-2 space-y-2">
              <div className="border border-[#979DAC] rounded-xl space-y-2 shadow-sm p-3 bg-[#FFFFFF] dark:bg-[#001233]">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-blue-600 dark:text-blue-400 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center gap-1 px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3 h-3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="border border-[#979DAC] rounded-xl space-y-2 shadow-sm p-3 bg-[#FFFFFF] dark:bg-[#001233]">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-blue-600 dark:text-blue-400 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center gap-1 px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3 h-3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="border border-[#979DAC] rounded-xl space-y-2 shadow-sm p-3 bg-[#FFFFFF] dark:bg-[#001233]">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-blue-600 dark:text-blue-400 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center gap-1 px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3 h-3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <div className="border border-[#979DAC] rounded-xl space-y-2 shadow-sm p-3 bg-[#FFFFFF] dark:bg-[#001233]">
                <div className="flex items-center gap-2">
                  <p>Nigar Əliyeva</p>
                  <p className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-blue-600 dark:text-blue-400 rounded-xl">
                    {t('pages.hr.leave.requests.type.annual', { defaultValue: 'Annual' })}
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center gap-1 px-2 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check w-3 h-3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="">{t('pages.hr.leave.requests.status.approved', { defaultValue: 'Approved' })}</p>
                  </div>
                </div>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p>2025-10-15</p>
                    <p>-</p>
                    <p>2025-10-22</p>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
                </div>
                <p>{t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' })}</p>
                <p className="text-[#7D8597] dark:text-[#979DAC] text-[16px]">{t('pages.hr.leave.requests.approvedBy', { by: 'Management', date: '2025-10-05', defaultValue: 'Approved by: {{by}} ({{date}})' })}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#33415C] p-4 rounded-xl shadow-sm">
          <h2>{t('pages.hr.leave.upcoming.title', { defaultValue: 'Upcoming Leaves' })}</h2>
          <div className="space-y-4 p-2">
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/30 p-3 flex gap-3">
              <div className="bg-blue-600 rounded-full flex items-center justify-center w-10 h-10 text-white font-medium">N</div>
              <div className="space-y-2">
                <p>Nigar Əliyeva</p>
                <p className="text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-[#7D8597] dark:text-[#979DAC]" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>2025-10-15</p>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/30 p-3 flex gap-3">
              <div className="bg-blue-600 rounded-full flex items-center justify-center w-10 h-10 text-white font-medium">N</div>
              <div className="space-y-2">
                <p>Nigar Əliyeva</p>
                <p className="text-[#7D8597] dark:text-[#979DAC]">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</p>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 text-[#7D8597] dark:text-[#979DAC]" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <p>2025-10-15</p>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{`8 ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl shadow-sm p-6">
        <h4 className="text-lg font-semibold mb-4 text-[#023E7D] dark:text-blue-400">{t('pages.hr.leave.balance.title', { defaultValue: 'Leave Balance by Employee' })}</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F5F8FF] dark:bg-[#001233] text-[#5C677D] dark:text-[#979DAC] uppercase text-xs border-b border-[#979DAC]">
              <tr>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.employee', { defaultValue: 'Employee' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.department', { defaultValue: 'Department' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.total', { defaultValue: 'Total Entitlement' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.used', { defaultValue: 'Used' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.remaining', { defaultValue: 'Remaining' })}</th>
                <th className="text-left px-4 py-2">{t('pages.hr.leave.table.status', { defaultValue: 'Status' })}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#979DAC]">
              {balances.map((employee, idx) => (
                <tr key={idx} className="hover:bg-[#F5F8FF] dark:hover:bg-[#001233]">
                  <td className="px-4 py-2">{employee.name}</td>
                  <td className="px-4 py-2 text-[#7D8597] dark:text-[#979DAC]">{t(`pages.hr.departments.${employee.departmentKey}`, { defaultValue: employee.departmentKey })}</td>
                  <td className="px-4 py-2">{`${employee.total} ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</td>
                  <td className="px-4 py-2">{`${employee.used} ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</td>
                  <td className="px-4 py-2 text-blue-600 dark:text-blue-400">{`${employee.remaining} ${t('pages.hr.leave.common.daysSuffix', { defaultValue: 'days' })}`}</td>
                  <td className="px-4 py-2">
                    <span className="inline-flex items-center gap-1 text-green-700 dark:text-green-200 text-xs font-medium bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                      <FaCircle className="text-green-500 text-[8px]" />
                      {t(`pages.hr.employees.status.${employee.statusKey}`, { defaultValue: employee.statusKey })}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-md dark:hover:bg-[#33415C] hover:bg-[#F5F8FF]" onClick={() => openEdit(employee, idx)} title={t('common.edit', { ns: 'translation', defaultValue: 'Edit' })}>
                        <FiEdit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-md text-red-600 hover:text-red-700" onClick={() => handleDelete(idx)} title={t('common.delete', { ns: 'translation', defaultValue: 'Delete' })}>
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editItem && (
        <div>
          <div onClick={closeEdit} className="bg-black opacity-50 fixed inset-0 z-51"></div>
          <div role="dialog" className="fixed dark:bg-[#001233] dark:text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-52 w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border border-[#33415C] rounded-lg shadow-lg p-6">
            <button className="absolute top-4 right-4 opacity-70 hover:opacity-100 focus:ring-2 focus:ring-blue-500 focus:outline-none" onClick={closeEdit}>
              <FiX className="w-4 h-4" />
              <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
            </button>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-lg font-semibold dark:text-white text-[#023E7D]">{t('pages.hr.leave.balance.editTitle', { defaultValue: 'Edit Leave Balance' })}</h2>
            </div>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C677D]">{t('pages.hr.leave.table.employee', { defaultValue: 'Employee' })}</label>
                  <input className="w-full dark:bg-[#001233] dark:text-white h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none" value={editItem.name} onChange={(e) => handleEditChange('name', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C677D]">{t('pages.hr.leave.table.department', { defaultValue: 'Department' })}</label>
                  <select className="w-full dark:bg-[#001233] dark:text-white h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-sm text-[#001233] focus:outline-none" value={editItem.departmentKey} onChange={(e) => handleEditChange('departmentKey', e.target.value)}>
                    <option value="finance">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</option>
                    <option value="it">{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</option>
                    <option value="marketing">{t('pages.hr.departments.marketing', { defaultValue: 'Marketing' })}</option>
                    <option value="sales">{t('pages.hr.departments.sales', { defaultValue: 'Sales' })}</option>
                    <option value="hr">{t('pages.hr.departments.hr', { defaultValue: 'Human Resources' })}</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C677D]">{t('pages.hr.leave.table.total', { defaultValue: 'Total Entitlement' })}</label>
                  <input type="number" min="0" className="w-full dark:bg-[#001233] dark:text-white h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none" value={editItem.total} onChange={(e) => handleEditChange('total', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C677D]">{t('pages.hr.leave.table.used', { defaultValue: 'Used' })}</label>
                  <input type="number" min="0" className="w-full dark:bg-[#001233] dark:text-white h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none" value={editItem.used} onChange={(e) => handleEditChange('used', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C677D]">{t('pages.hr.leave.table.status', { defaultValue: 'Status' })}</label>
                  <select className="w-full dark:bg-[#001233] dark:text-white h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-sm text-[#001233] focus:outline-none" value={editItem.statusKey} onChange={(e) => handleEditChange('statusKey', e.target.value)}>
                    <option value="active">{t('pages.hr.employees.status.active', { defaultValue: 'Active' })}</option>
                    <option value="onLeave">{t('pages.hr.employees.status.onLeave', { defaultValue: 'On Leave' })}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#5C677D]">{t('pages.hr.leave.table.remaining', { defaultValue: 'Remaining' })}</label>
                  <input disabled className="w-full dark:bg-[#001233] dark:text-white h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#F5F8FF] text-base text-[#001233]" value={Math.max(0, toInt(editItem.total) - Math.min(toInt(editItem.used), toInt(editItem.total)))} />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button className="px-4 py-2 border border-[#979DAC] dark:hover:bg-[#33415C] dark:bg-[#001233] dark:text-white rounded-md bg-[#FFFFFF] text-[#023E7D] hover:bg-[#F5F8FF]" onClick={closeEdit}>{t('pages.hr.employees.modal.cancel', { defaultValue: 'Cancel' })}</button>
                <button className="px-4 py-2 bg-[#0466CB] hover:bg-[#0453A4] text-white rounded-md" onClick={saveEdit}>{t('pages.hr.employees.modal.save', { defaultValue: 'Save' })}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Leave;
