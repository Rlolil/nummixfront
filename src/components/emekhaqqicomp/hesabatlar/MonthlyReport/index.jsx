import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { FiEdit2, FiTrash2, FiX } from "react-icons/fi";

export default function MonthlyReport() {
  const { t } = useTranslation();
  const initialRows = useMemo(() => ([
    {
      label: t('pages.hr.reports.monthlyReport.rows.totalEmployees', { defaultValue: 'Total employees' }),
      current: "247",
      previous: "235",
      change: "+12 (+5.1%)",
      positive: true,
    },
    {
      label: t('pages.hr.reports.monthlyReport.rows.payrollFund', { defaultValue: 'Payroll fund' }),
      current: "₼485,320",
      previous: "₼482,000",
      change: "+₼3,320 (+0.7%)",
      positive: true,
    },
    {
      label: t('pages.hr.reports.monthlyReport.rows.averageSalary', { defaultValue: 'Average salary' }),
      current: "₼1,965",
      previous: "₼2,051",
      change: "-₼86 (-4.2%)",
      positive: false,
    },
    {
      label: t('pages.hr.reports.monthlyReport.rows.attendance', { defaultValue: 'Attendance' }),
      current: "96.5%",
      previous: "94.2%",
      change: "+2.3%",
      positive: true,
    },
    {
      label: t('pages.hr.reports.monthlyReport.rows.turnover', { defaultValue: 'Employee turnover' }),
      current: "5.7%",
      previous: "6.8%",
      change: "-1.1%",
      positive: true,
    },
  ]), [t]);

  const [rows, setRows] = useState(initialRows);
  const [editRow, setEditRow] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);

  const anyModalOpen = !!editRow;
  if (anyModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
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
    <div className="bg-white rounded-xl border  border-gray-200 shadow p-6">
      <h4 className="text-xl font-semibold mb-6">{t('pages.hr.reports.monthlyReport.title', { defaultValue: 'Monthly Summary Report' })}</h4>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">{t('pages.hr.reports.monthlyReport.headers.indicator', { defaultValue: 'Indicator' })}</th>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">{t('pages.hr.reports.monthlyReport.headers.thisMonth', { defaultValue: 'This month' })}</th>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">{t('pages.hr.reports.monthlyReport.headers.lastMonth', { defaultValue: 'Last month' })}</th>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">{t('pages.hr.reports.monthlyReport.headers.change', { defaultValue: 'Change' })}</th>
              <th className="text-left text-xs text-gray-500 uppercase px-6 py-3">{t('common.actions', { ns: 'translation', defaultValue: 'Actions' })}</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-6 text-center text-gray-500 text-sm">
                  {t('common.noResults', { ns: 'translation', defaultValue: 'No results' })}
                </td>
              </tr>
            )}
            {rows.map(({ label, current, previous, change, positive }, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 text-gray-900">{label}</td>
                <td className="px-6 py-4 text-gray-900">{current}</td>
                <td className="px-6 py-4 text-gray-600">{previous}</td>
                <td
                  className={`px-6 py-4 flex items-center gap-1 font-medium ${
                    positive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {positive ? <HiArrowSmUp /> : <HiArrowSmDown />}
                  {change}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md hover:bg-gray-100" title={t('common.edit', { ns: 'translation', defaultValue: 'Edit' })} onClick={() => openEdit({ label, current, previous, change, positive }, idx)}>
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

      {editRow && (
        <div>
          <div onClick={closeEdit} className="fixed inset-0 bg-black opacity-50 z-50"></div>
          <div role="dialog" aria-modal="true" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-51 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow p-6">
            <button onClick={closeEdit} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <FiX className="w-5 h-5" />
              <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
            </button>
            <h3 className="text-lg font-semibold mb-4">{t('pages.hr.reports.monthlyReport.editTitle', { defaultValue: 'Edit Row' })}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1">{t('pages.hr.reports.monthlyReport.headers.indicator', { defaultValue: 'Indicator' })}</label>
                <input className="w-full border rounded-md px-3 py-2 text-sm" value={editRow.label} onChange={(e) => setEditRow(r => ({ ...r, label: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1">{t('pages.hr.reports.monthlyReport.headers.thisMonth', { defaultValue: 'This month' })}</label>
                <input className="w-full border rounded-md px-3 py-2 text-sm" value={editRow.current} onChange={(e) => setEditRow(r => ({ ...r, current: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1">{t('pages.hr.reports.monthlyReport.headers.lastMonth', { defaultValue: 'Last month' })}</label>
                <input className="w-full border rounded-md px-3 py-2 text-sm" value={editRow.previous} onChange={(e) => setEditRow(r => ({ ...r, previous: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1">{t('pages.hr.reports.monthlyReport.headers.change', { defaultValue: 'Change' })}</label>
                <input className="w-full border rounded-md px-3 py-2 text-sm" value={editRow.change} onChange={(e) => setEditRow(r => ({ ...r, change: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1">{t('pages.hr.reports.monthlyReport.headers.trend', { defaultValue: 'Trend' })}</label>
                <select className="w-full border rounded-md px-3 py-2 text-sm" value={String(editRow.positive)} onChange={(e) => setEditRow(r => ({ ...r, positive: e.target.value === 'true' }))}>
                  <option value="true">{t('pages.hr.reports.monthlyReport.trend.up', { defaultValue: 'Up (positive)' })}</option>
                  <option value="false">{t('pages.hr.reports.monthlyReport.trend.down', { defaultValue: 'Down (negative)' })}</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="px-4 py-2 border rounded-md bg-white hover:bg-gray-50" onClick={closeEdit}>{t('pages.hr.employees.modal.cancel', { defaultValue: 'Cancel' })}</button>
              <button className="px-4 py-2 rounded-md bg-black text-white hover:opacity-80" onClick={saveEdit}>{t('pages.hr.employees.modal.save', { defaultValue: 'Save' })}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
