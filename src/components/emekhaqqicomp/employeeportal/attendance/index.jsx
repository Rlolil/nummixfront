import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiEdit2, FiTrash2, FiX } from 'react-icons/fi';

const AttendanceInfo = () => {
  const { t } = useTranslation('app');
  const [rows, setRows] = useState([
    { date: '2025-10-09', checkIn: '09:05', checkOut: '18:30', hours: '9:25', status: 'present' },
    { date: '2025-10-08', checkIn: '09:00', checkOut: '18:00', hours: '9:00', status: 'present' },
    { date: '2025-10-07', checkIn: '09:15', checkOut: '18:15', hours: '9:00', status: 'late' },
    { date: '2025-10-04', checkIn: '08:55', checkOut: '18:10', hours: '9:15', status: 'present' },
    { date: '2025-10-03', checkIn: '09:00', checkOut: '18:05', hours: '9:05', status: 'present' },
  ]);
  const [editRow, setEditRow] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);

  const anyModalOpen = useMemo(() => !!editRow, [editRow]);
  if (anyModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const openEdit = (row, idx) => { setEditRow({ ...row }); setEditIndex(idx); };
  const closeEdit = () => { setEditRow(null); setEditIndex(-1); };
  const saveEdit = () => {
    if (editIndex < 0 || !editRow) return;
    const next = [...rows];
    next[editIndex] = { ...editRow };
    setRows(next);
    closeEdit();
  };
  const handleDelete = (idx) => {
    const confirmed = window.confirm(t('common.confirmDelete', { ns: 'translation', defaultValue: 'Are you sure you want to delete this item?' }));
    if (!confirmed) return;
    setRows(prev => prev.filter((_, i) => i !== idx));
  };
  return (
    <div className="space-y-6 text-[#001233] dark:text-white">
      {/* Son Davamiyyət Qeydləri */}
      <div className="bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white flex flex-col gap-6 rounded-xl border border-[#33415C] dark:border-[#979DAC] p-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-[#023E7D] dark:text-white">{t('pages.hr.portal.attendance.title')}</h4>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F5F8FF] dark:bg-[#001233] border-b border-[#979DAC]">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-[#5C677D] dark:text-[#979DAC] uppercase">{t('pages.hr.portal.attendance.headers.date')}</th>
                <th className="px-6 py-3 text-left text-xs text-[#5C677D] dark:text-[#979DAC] uppercase">{t('pages.hr.portal.attendance.headers.checkIn')}</th>
                <th className="px-6 py-3 text-left text-xs text-[#5C677D] dark:text-[#979DAC] uppercase">{t('pages.hr.portal.attendance.headers.checkOut')}</th>
                <th className="px-6 py-3 text-left text-xs text-[#5C677D] dark:text-[#979DAC] uppercase">{t('pages.hr.portal.attendance.headers.hours')}</th>
                <th className="px-6 py-3 text-left text-xs text-[#5C677D] dark:text-[#979DAC] uppercase">{t('pages.hr.portal.attendance.headers.status')}</th>
                <th className="px-6 py-3 text-left text-xs text-[#5C677D] dark:text-[#979DAC] uppercase">{t('common.actions', { ns: 'translation', defaultValue: 'Actions' })}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#979DAC]">
              {rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-6 text-center text-gray-500 text-sm">
                    {t('common.noResults', { ns: 'translation', defaultValue: 'No results' })}
                  </td>
                </tr>
              )}
              {rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-[#F5F8FF] dark:hover:bg-[#001233]">
                  <td className="px-6 py-4 text-[#001233] dark:text-white">{r.date}</td>
                  <td className="px-6 py-4 text-[#001233] dark:text-white">{r.checkIn}</td>
                  <td className="px-6 py-4 text-[#001233] dark:text-white">{r.checkOut}</td>
                  <td className="px-6 py-4 text-[#001233] dark:text-white">{r.hours}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ${r.status === 'late' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-200' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200'}`}>
                      {r.status === 'late' ? t('pages.hr.portal.attendance.status.late') : t('pages.hr.portal.attendance.status.present')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-[#F5F8FF] dark:hover:bg-[#001233] rounded-md" title={t('common.edit', { ns: 'translation', defaultValue: 'Edit' })} onClick={() => openEdit(r, idx)}>
                        <FiEdit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-md text-red-600 hover:text-red-700" title={t('common.delete', { ns: 'translation', defaultValue: 'Delete' })} onClick={() => handleDelete(idx)}>
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

      {editRow && (
        <div>
          <div onClick={closeEdit} className="fixed inset-0 bg-black opacity-50 z-50"></div>
          <div role="dialog" aria-modal="true" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-51 w-full max-w-md bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-lg shadow p-6">
            <button onClick={closeEdit} className="absolute top-4 right-4 text-[#7D8597] dark:text-[#979DAC] hover:text-[#023E7D] dark:hover:text-white">
              <FiX className="w-5 h-5" />
              <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
            </button>
            <h3 className="text-lg font-semibold mb-4 text-[#023E7D]">{t('pages.hr.portal.attendance.editTitle', { defaultValue: 'Edit Attendance' })}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.attendance.headers.date')}</label>
                <input type="date" className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.date} onChange={(e) => setEditRow(r => ({ ...r, date: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.attendance.headers.checkIn')}</label>
                  <input type="time" className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.checkIn} onChange={(e) => setEditRow(r => ({ ...r, checkIn: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.attendance.headers.checkOut')}</label>
                  <input type="time" className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.checkOut} onChange={(e) => setEditRow(r => ({ ...r, checkOut: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.attendance.headers.hours')}</label>
                <input className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.hours} onChange={(e) => setEditRow(r => ({ ...r, hours: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.attendance.headers.status')}</label>
                <select className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.status} onChange={(e) => setEditRow(r => ({ ...r, status: e.target.value }))}>
                  <option value="present">{t('pages.hr.portal.attendance.status.present')}</option>
                  <option value="late">{t('pages.hr.portal.attendance.status.late')}</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-[#023E7D] hover:bg-[#F5F8FF]" onClick={closeEdit}>{t('pages.hr.employees.modal.cancel', { defaultValue: 'Cancel' })}</button>
              <button className="px-4 py-2 rounded-md bg-[#0466CB] hover:bg-[#0453A4] text-white" onClick={saveEdit}>{t('pages.hr.employees.modal.save', { defaultValue: 'Save' })}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceInfo;
