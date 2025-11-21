import React, { useMemo, useState } from 'react';
import { FiDownload, FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const initialSalaryHistory = [
  { month: 'Sentyabr 2025', gross: '₼3700', tax: '₼518', social: '₼370', net: '₼2812', status: 'paid' },
  { month: 'Avqust 2025', gross: '₼3500', tax: '₼490', social: '₼350', net: '₼2660', status: 'paid' },
  { month: 'İyul 2025', gross: '₼3400', tax: '₼476', social: '₼340', net: '₼2584', status: 'paid' },
  { month: 'İyun 2025', gross: '₼3200', tax: '₼448', social: '₼320', net: '₼2432', status: 'paid' },
];

const SalaryHistoryTable = () => {
  const { t } = useTranslation('app');
  const [rows, setRows] = useState(initialSalaryHistory);
  const [editRow, setEditRow] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);

  const anyModalOpen = useMemo(() => !!editRow, [editRow]);
  if (anyModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const openEdit = (row, idx) => {
    setEditRow({ ...row });
    setEditIndex(idx);
  };
  const closeEdit = () => {
    setEditRow(null);
    setEditIndex(-1);
  };
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
    <div className="bg-[#FFFFFF] dark:bg-[#33415C] border border-[#33415C] dark:border-[#979DAC] rounded-xl overflow-hidden shadow-sm text-[#001233] dark:text-white">
      <div className="flex items-center justify-between px-6 pt-6">
        <h4 className="font-medium text-[#023E7D] dark:text-white">{t('pages.hr.portal.salary.history.title')}</h4>
        <button className="flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-[#0466CB] text-white hover:bg-[#0453A4] transition">
          <FiDownload className="w-4 h-4" />
          {t('pages.hr.portal.salary.history.export')}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm mt-4 divide-y divide-[#979DAC]">
          <thead className="bg-[#F5F8FF] dark:bg-[#001233] text-[#5C677D] dark:text-[#979DAC] uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.month')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.gross')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.tax')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.social')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.net')}</th>
              <th className="px-6 py-3 text-left">{t('pages.hr.portal.salary.history.headers.status')}</th>
              <th className="px-6 py-3 text-left">{t('common.actions', { ns: 'translation', defaultValue: 'Actions' })}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#979DAC]">
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-6 text-center text-[#7D8597] text-sm">
                  {t('common.noResults', { ns: 'translation', defaultValue: 'No results' })}
                </td>
              </tr>
            )}
            {rows.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#F5F8FF] dark:hover:bg-[#001233]">
                <td className="px-6 py-4 text-[#001233] dark:text-white">{item.month}</td>
                <td className="px-6 py-4 text-[#001233] dark:text-white">{item.gross}</td>
                <td className="px-6 py-4 text-[#001233] dark:text-white">{item.tax}</td>
                <td className="px-6 py-4 text-[#001233] dark:text-white">{item.social}</td>
                <td className="px-6 py-4 text-green-600 dark:text-green-400">{item.net}</td>
                <td className="px-6 py-4">
                  <span className="text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-900/30 text-xs px-2 py-0.5 rounded-md font-medium">
                    {t(`pages.hr.payroll.status.${item.status}`)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-[#F5F8FF] dark:hover:bg-[#001233] rounded-md" title={t('common.edit', { ns: 'translation', defaultValue: 'Edit' })} onClick={() => openEdit(item, idx)}>
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md text-red-600 hover:text-red-700" title={t('common.delete', { ns: 'translation', defaultValue: 'Delete' })} onClick={() => handleDelete(idx)}>
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-[#F5F8FF] dark:hover:bg-[#001233] rounded-md" title={t('pages.hr.portal.salary.history.export')}>
                      <FiDownload className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editRow && (
        <div>
          <div onClick={closeEdit} className="fixed inset-0 bg-black opacity-50 z-50"></div>
          <div role="dialog" aria-modal="true" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-51 w-full max-w-md bg-[#FFFFFF] border border-[#33415C] rounded-lg shadow p-6 text-[#001233]">
            <button onClick={closeEdit} className="absolute top-4 right-4 text-[#7D8597] hover:text-[#001233]">
              <FiX className="w-5 h-5" />
              <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
            </button>
            <h3 className="text-lg font-semibold mb-4 text-[#023E7D]">{t('pages.hr.portal.salary.history.editTitle', { defaultValue: 'Edit Salary Row' })}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.salary.history.headers.month')}</label>
                <input className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.month} onChange={(e) => setEditRow(r => ({ ...r, month: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.salary.history.headers.gross')}</label>
                  <input className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.gross} onChange={(e) => setEditRow(r => ({ ...r, gross: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.salary.history.headers.tax')}</label>
                  <input className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.tax} onChange={(e) => setEditRow(r => ({ ...r, tax: e.target.value }))} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.salary.history.headers.social')}</label>
                  <input className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.social} onChange={(e) => setEditRow(r => ({ ...r, social: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.salary.history.headers.net')}</label>
                  <input className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.net} onChange={(e) => setEditRow(r => ({ ...r, net: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.portal.salary.history.headers.status')}</label>
                <select className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editRow.status} onChange={(e) => setEditRow(r => ({ ...r, status: e.target.value }))}>
                  <option value="paid">{t('pages.hr.payroll.status.paid', { defaultValue: 'Paid' })}</option>
                  <option value="pending">{t('pages.hr.payroll.status.pending', { defaultValue: 'Pending' })}</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 rounded-md border border-[#33415C] bg-[#FFFFFF] text-[#001233] hover:bg-[#F5F8FF]" onClick={closeEdit}>{t('pages.hr.employees.modal.cancel', { defaultValue: 'Cancel' })}</button>
              <button className="px-4 py-2 rounded-md bg-[#0466CB] text-white hover:bg-[#0453A4]" onClick={saveEdit}>{t('pages.hr.employees.modal.save', { defaultValue: 'Save' })}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryHistoryTable;
