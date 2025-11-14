import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEdit, FaTrash } from "react-icons/fa";

function IncomeStatement() {
  const { t } = useTranslation();
  const [revenueRows, setRevenueRows] = useState([
    { label: t('pages.accounting.financialReports.income.rows.salesRevenue701'), amount: 10000 },
    { label: t('pages.accounting.financialReports.income.rows.serviceRevenue711'), amount: 5000 },
  ]);
  const [costRows, setCostRows] = useState([
    { label: t('pages.accounting.financialReports.income.rows.costOfSales601'), amount: 10000 },
  ]);
  const [operatingRows, setOperatingRows] = useState([
    { label: t('pages.accounting.financialReports.income.rows.payroll543'), amount: 10000 },
    { label: t('pages.accounting.financialReports.income.rows.socialContributions551'), amount: 10000 },
    { label: t('pages.accounting.financialReports.income.rows.administrativeExpenses731'), amount: 5000 },
    { label: t('pages.accounting.financialReports.income.rows.salesExpenses741'), amount: 5000 },
    { label: t('pages.accounting.financialReports.income.rows.operatingExpenses721'), amount: 5000 },
  ]);

  const [editing, setEditing] = useState(null); // { section, index, label, amount }
  const sum = (rows) => rows.reduce((s, r) => s + Number(r.amount || 0), 0);
  const fmt = (n) => n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const openEdit = (section, index, row) => setEditing({ section, index, label: row.label, amount: String(row.amount) });
  const closeEdit = () => setEditing(null);
  const saveEdit = () => {
    if (!editing) return;
    const { section, index, label, amount } = editing;
    const upd = (rows, setter) => setter(rows.map((r, i) => (i === index ? { label, amount: Number(amount) } : r)));
    if (section === 'REV') upd(revenueRows, setRevenueRows);
    if (section === 'COST') upd(costRows, setCostRows);
    if (section === 'OPEX') upd(operatingRows, setOperatingRows);
    closeEdit();
  };
  const delRow = (section, index) => {
    const confirmMsg = t('common.confirmDeleteRow', { defaultValue: 'Sətir silinsin?' });
    if (!window.confirm(confirmMsg)) return;
    const del = (rows, setter) => setter(rows.filter((_, i) => i !== index));
    if (section === 'REV') del(revenueRows, setRevenueRows);
    if (section === 'COST') del(costRows, setCostRows);
    if (section === 'OPEX') del(operatingRows, setOperatingRows);
  };

  const totalRevenue = sum(revenueRows);
  const totalCost = sum(costRows);
  const grossProfit = totalRevenue - totalCost;
  const totalOperating = sum(operatingRows);
  const netIncome = grossProfit - totalOperating;
  return (
    <div className="border border-gray-300 space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-lg sm:text-xl font-semibold">{t('pages.accounting.financialReports.income.title')}</p>
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
      <div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.columns.revenue')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {revenueRows.map((row, i) => (
                <tr key={`rev-${i}`} className="border-b">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('REV', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('REV', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.totalRevenue')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(totalRevenue)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.columns.costOfSales')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row, i) => (
                <tr key={`cost-${i}`} className="border-b">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('COST', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('COST', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.grossProfit')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(grossProfit)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.income.columns.operatingExpenses')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {operatingRows.map((row, i) => (
                <tr key={`opex-${i}`} className="border-b">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('OPEX', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('OPEX', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.income.totals.totalOperatingExpenses')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(totalOperating)}</td>
                <td></td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2 font-bold text-lg sm:text-2xl">{t('pages.accounting.financialReports.income.totals.netIncome')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(netIncome)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {editing && (
        <div className="p-6">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={closeEdit}></div>
          <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">{t('common.editRow', { defaultValue: 'Sətiri redaktə et' })}</h2>
              <button onClick={closeEdit} className="text-gray-500 hover:text-gray-700 text-xl">×</button>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm font-medium">{t('common.description', { defaultValue: 'Təsvir' })}</label>
                <input type="text" className="mt-1 w-full border rounded-md px-3 py-2" value={editing.label} onChange={(e) => setEditing(prev => ({ ...prev, label: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.accounting.financialReports.common.amount')}</label>
                <input type="number" className="mt-1 w-full border rounded-md px-3 py-2" value={editing.amount} onChange={(e) => setEditing(prev => ({ ...prev, amount: e.target.value }))} />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t mt-4">
              <button onClick={closeEdit} className="px-4 py-2 border rounded-md hover:bg-gray-100">{t('common.cancel', { defaultValue: 'Cancel' })}</button>
              <button onClick={saveEdit} className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">{t('common.save', { defaultValue: 'Save' })}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IncomeStatement;