import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEdit, FaTrash } from "react-icons/fa";

function ChangeEquity() {
  const { t } = useTranslation();
  const [rows, setRows] = useState([
    { label: t('pages.accounting.financialReports.equityChanges.rows.beginning'), shareCapital: 500000, retainedEarnings: 102500 },
    { label: t('pages.accounting.financialReports.equityChanges.rows.netIncome'), shareCapital: 0, retainedEarnings: 54000 },
    { label: t('pages.accounting.financialReports.equityChanges.rows.dividends'), shareCapital: 0, retainedEarnings: 0 },
  ]);
  const [editing, setEditing] = useState(null); // { index, label, shareCapital, retainedEarnings }

  const sum = (arr) => arr.reduce((s, n) => s + Number(n || 0), 0);
  const totalsRow = rows.map(r => ({ ...r, total: Number(r.shareCapital) + Number(r.retainedEarnings) }));
  const ending = {
    shareCapital: sum(rows.map(r => r.shareCapital)),
    retainedEarnings: sum(rows.map(r => r.retainedEarnings)),
  };
  const fmtAZN = (v) => `₼${Number(v).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

  return (
    <div className="border border-gray-300 space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-lg sm:text-xl font-semibold">{t('pages.accounting.financialReports.equityChanges.title')}</p>
          <p className="text-gray-600 text-sm sm:text-base">{t('pages.accounting.financialReports.common.forPeriodEnding', { date: 'September 30, 2025' })}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.description')}</th>
              <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.shareCapital')}</th>
              <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.retainedEarnings')}</th>
              <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.equityChanges.columns.totalEquity')}</th>
              <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
            </tr>
          </thead>
          <tbody>
            {totalsRow.map((r, i) => (
              <tr key={`eq-${i}`} className="border-b">
                <td className="p-1 sm:p-2">{r.label}</td>
                <td className="p-1 sm:p-2 text-right">{fmtAZN(r.shareCapital)}</td>
                <td className="p-1 sm:p-2 text-right">{fmtAZN(r.retainedEarnings)}</td>
                <td className="p-1 sm:p-2 text-right">{fmtAZN(r.total)}</td>
                <td className="p-1 sm:p-2 text-right">
                  <button onClick={() => setEditing({ index: i, label: r.label, shareCapital: String(r.shareCapital), retainedEarnings: String(r.retainedEarnings) })} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                  <button onClick={() => { const c = t('common.confirmDeleteRow', { defaultValue: 'Sətir silinsin?' }); if (window.confirm(c)) setRows(prev => prev.filter((_, idx) => idx !== i)); }} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                </td>
              </tr>
            ))}
            <tr className="border-t-2 font-bold">
              <td className="p-1 sm:p-2">{t('pages.accounting.financialReports.equityChanges.rows.ending')}</td>
              <td className="p-1 sm:p-2 text-right">{fmtAZN(ending.shareCapital)}</td>
              <td className="p-1 sm:p-2 text-right">{fmtAZN(ending.retainedEarnings)}</td>
              <td className="p-1 sm:p-2 text-right">{fmtAZN(ending.shareCapital + ending.retainedEarnings)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="p-6">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setEditing(null)}></div>
          <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">{t('common.editRow', { defaultValue: 'Sətiri redaktə et' })}</h2>
              <button onClick={() => setEditing(null)} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm font-medium">{t('common.description', { defaultValue: 'Təsvir' })}</label>
                <input type="text" className="mt-1 w-full border rounded-md px-3 py-2" value={editing.label} onChange={(e) => setEditing(prev => ({ ...prev, label: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium">{t('pages.accounting.financialReports.equityChanges.columns.shareCapital')}</label>
                  <input type="number" className="mt-1 w-full border rounded-md px-3 py-2" value={editing.shareCapital} onChange={(e) => setEditing(prev => ({ ...prev, shareCapital: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-medium">{t('pages.accounting.financialReports.equityChanges.columns.retainedEarnings')}</label>
                  <input type="number" className="mt-1 w-full border rounded-md px-3 py-2" value={editing.retainedEarnings} onChange={(e) => setEditing(prev => ({ ...prev, retainedEarnings: e.target.value }))} />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t mt-4">
              <button onClick={() => setEditing(null)} className="px-4 py-2 border rounded-md hover:bg-gray-100">{t('common.cancel', { defaultValue: 'Cancel' })}</button>
              <button onClick={() => { setRows(prev => prev.map((r, i) => (i === editing.index ? { label: editing.label, shareCapital: Number(editing.shareCapital), retainedEarnings: Number(editing.retainedEarnings) } : r))); setEditing(null); }} className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">{t('common.save', { defaultValue: 'Save' })}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChangeEquity;