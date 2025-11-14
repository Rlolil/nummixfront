import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEdit, FaTrash } from "react-icons/fa";

function BalanceSheet() {
  const { t } = useTranslation();
  // State-driven rows for edit/delete
  const [currentAssets, setCurrentAssets] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.cash'), amount: 10000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.accountsReceivable'), amount: 5000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.inventory'), amount: 8000 },
  ]);
  const [nonCurrentAssets, setNonCurrentAssets] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.fixedAssets241'), amount: 10000 },
  ]);
  const [currentLiabilities, setCurrentLiabilities] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.accountsPayable331'), amount: 10000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.vatPayable341'), amount: 5000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.incomeTaxPayable351'), amount: 8000 },
  ]);
  const [equityRows, setEquityRows] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.shareCapital401'), amount: 10000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.retainedEarnings421'), amount: 13000 },
  ]);

  const [editing, setEditing] = useState(null); // { section, index, label, amount }

  const sum = (rows) => rows.reduce((s, r) => s + Number(r.amount || 0), 0);
  const fmt = (n) => n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const openEdit = (section, index, row) => setEditing({ section, index, label: row.label, amount: String(row.amount) });
  const closeEdit = () => setEditing(null);
  const saveEdit = () => {
    if (!editing) return;
    const { section, index, label, amount } = editing;
    const upd = (rows, setter) => {
      setter(rows.map((r, i) => (i === index ? { label, amount: Number(amount) } : r)));
    };
    if (section === 'CA') upd(currentAssets, setCurrentAssets);
    if (section === 'NCA') upd(nonCurrentAssets, setNonCurrentAssets);
    if (section === 'CL') upd(currentLiabilities, setCurrentLiabilities);
    if (section === 'EQ') upd(equityRows, setEquityRows);
    closeEdit();
  };
  const delRow = (section, index) => {
    const confirmMsg = t('common.confirmDeleteRow', { defaultValue: 'Sətir silinsin?' });
    if (!window.confirm(confirmMsg)) return;
    const del = (rows, setter) => setter(rows.filter((_, i) => i !== index));
    if (section === 'CA') del(currentAssets, setCurrentAssets);
    if (section === 'NCA') del(nonCurrentAssets, setNonCurrentAssets);
    if (section === 'CL') del(currentLiabilities, setCurrentLiabilities);
    if (section === 'EQ') del(equityRows, setEquityRows);
  };
  return (
    <div className="border border-gray-300 space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-white">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-lg sm:text-xl font-semibold">{t('pages.accounting.financialReports.balanceSheet.title')}</p>
          <p className="text-gray-600 text-sm sm:text-base">{t('pages.accounting.financialReports.common.asOf', { date: 'September 30, 2025' })}</p>
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
        <h3 className="text-base sm:text-lg font-semibold">{t('pages.accounting.financialReports.balanceSheet.assets.title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.assets.current')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {currentAssets.map((row, i) => (
                <tr key={`ca-${i}`} className="border-b">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('CA', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('CA', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalCurrentAssets')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(currentAssets))}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.assets.nonCurrent')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {nonCurrentAssets.map((row, i) => (
                <tr key={`nca-${i}`} className="border-b">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('NCA', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('NCA', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalNonCurrentAssets')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(nonCurrentAssets))}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold">{t('pages.accounting.financialReports.balanceSheet.liabilities.title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.liabilities.current')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {currentLiabilities.map((row, i) => (
                <tr key={`cl-${i}`} className="border-b">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('CL', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('CL', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalCurrentLiabilities')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(currentLiabilities))}</td>
                <td></td>
              </tr>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalLiabilities')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(currentLiabilities))}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold">{t('pages.accounting.financialReports.balanceSheet.equity.title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.columns.equity')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {equityRows.map((row, i) => (
                <tr key={`eq-${i}`} className="border-b">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('EQ', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('EQ', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalEquity')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(equityRows))}</td>
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
                <input
                  type="text"
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={editing.label}
                  onChange={(e) => setEditing(prev => ({ ...prev, label: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.accounting.financialReports.common.amount')}</label>
                <input
                  type="number"
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={editing.amount}
                  onChange={(e) => setEditing(prev => ({ ...prev, amount: e.target.value }))}
                />
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

export default BalanceSheet;