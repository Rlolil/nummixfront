import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaEdit, FaTrash } from "react-icons/fa";

function BalanceSheet() {
  const { t } = useTranslation();
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  const [currentAssets, setCurrentAssets] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.cashAndCashEquivalents111', { defaultValue: 'Nağd pul və onun ekvivalentləri (111)' }), amount: 12000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.accountsReceivable121', { defaultValue: 'Debitor borcları (121)' }), amount: 8000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.inventory131', { defaultValue: 'Ehtiyatlar (131)' }), amount: 5000 },
  ]);

  const [nonCurrentAssets, setNonCurrentAssets] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.fixedAssets241', { defaultValue: 'Əsas vəsaitlər (241)' }), amount: 10000 },
  ]);

  const [currentLiabilities, setCurrentLiabilities] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.shortTermLoans311', { defaultValue: 'Qısamüddətli kreditlər (311)' }), amount: 7000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.accountsPayable321', { defaultValue: 'Kreditor borcları (321)' }), amount: 4000 },
  ]);

  const [equityRows, setEquityRows] = useState([
    { label: t('pages.accounting.financialReports.balanceSheet.rows.shareCapital401', { defaultValue: 'Nizamnamə kapitalı (401)' }), amount: 10000 },
    { label: t('pages.accounting.financialReports.balanceSheet.rows.retainedEarnings421', { defaultValue: 'Bölüşdürülməmiş mənfəət (421)' }), amount: 13000 },
  ]);

  const [editing, setEditing] = useState(null); // { section, index, label, amount }

  const sum = (rows) => rows.reduce((s, r) => s + Number(r.amount || 0), 0);
  const fmt = (n) => n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const openEdit = (section, index, row) =>
    setEditing({ section, index, label: row.label, amount: String(row.amount) });

  const closeEdit = () => setEditing(null);

  const saveEdit = () => {
    if (!editing) return;
    const { section, index, label, amount } = editing;

    const upd = (list, setter) => {
      const copy = [...list];
      copy[index] = { ...copy[index], label, amount: Number(amount) };
      setter(copy);
    };

    if (section === 'CA') upd(currentAssets, setCurrentAssets);
    if (section === 'NCA') upd(nonCurrentAssets, setNonCurrentAssets);
    if (section === 'CL') upd(currentLiabilities, setCurrentLiabilities);
    if (section === 'EQ') upd(equityRows, setEquityRows);

    setEditing(null);
  };

  const delRow = (section, index) => {
    const confirmMsg = t('common.confirmDeleteRow', { defaultValue: 'Sətir silinsin?' });
    if (!window.confirm(confirmMsg)) return;

    const del = (list, setter) => {
      const copy = [...list];
      copy.splice(index, 1);
      setter(copy);
    };

    if (section === 'CA') del(currentAssets, setCurrentAssets);
    if (section === 'NCA') del(nonCurrentAssets, setNonCurrentAssets);
    if (section === 'CL') del(currentLiabilities, setCurrentLiabilities);
    if (section === 'EQ') del(equityRows, setEquityRows);
  };
  return (
    <div className="border border-[#33415C] dark:border-[#979DAC] space-y-4 p-3 sm:p-4 my-4 rounded-lg shadow-sm bg-[#FFFFFF] dark:bg-[#002855] text-[#001233] dark:text-white">
      <div>
        <p className="text-lg sm:text-xl font-semibold text-[#023E7D] dark:text-[#89A4D6]">{t('pages.accounting.financialReports.balanceSheet.title')}</p>
        <p className="text-[#7D8597] dark:text-[#B0B8C5] text-sm sm:text-base">{t('pages.accounting.financialReports.common.asOf', { date: 'September 30, 2025' })}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 text-[#001233] dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        </svg>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-[#023E7D] dark:text-[#89A4D6]">{t('pages.accounting.financialReports.balanceSheet.assets.title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#979DAC] dark:border-[#33415C]">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.assets.current')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {currentAssets.map((row, i) => (
                <tr key={`ca-${i}`} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/30">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('CA', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border border-[#33415C] dark:border-[#979DAC] rounded text-[#0466CB] hover:bg-[#0453A4] hover:text-white transition-colors mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('CA', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 dark:border-red-400/40 dark:hover:bg-red-900/30 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#979DAC] dark:border-[#33415C] font-semibold">
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
              <tr className="border-b border-[#979DAC] dark:border-[#33415C]">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.assets.nonCurrent')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {nonCurrentAssets.map((row, i) => (
                <tr key={`nca-${i}`} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/30">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('NCA', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border border-[#33415C] dark:border-[#979DAC] rounded text-[#0466CB] hover:bg-[#0453A4] hover:text-white transition-colors mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('NCA', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 dark:border-red-400/40 dark:hover:bg-red-900/30 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#979DAC] dark:border-[#33415C] font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalNonCurrentAssets')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(nonCurrentAssets))}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-[#023E7D] dark:text-[#89A4D6]">{t('pages.accounting.financialReports.balanceSheet.liabilities.title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#979DAC] dark:border-[#33415C]">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.liabilities.current')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {currentLiabilities.map((row, i) => (
                <tr key={`cl-${i}`} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/30">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('CL', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border border-[#33415C] dark:border-[#979DAC] rounded text-[#0466CB] hover:bg-[#0453A4] hover:text-white transition-colors mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('CL', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 dark:border-red-400/40 dark:hover:bg-red-900/30 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#979DAC] dark:border-[#33415C] font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalCurrentLiabilities')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(currentLiabilities))}</td>
                <td></td>
              </tr>
              <tr className="border-t border-[#979DAC] dark:border-[#33415C] font-semibold">
                <td className="text-left p-1 sm:p-2">{t('pages.accounting.financialReports.balanceSheet.totals.totalLiabilities')}</td>
                <td className="text-right p-1 sm:p-2">{fmt(sum(currentLiabilities))}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-[#023E7D] dark:text-[#89A4D6]">{t('pages.accounting.financialReports.balanceSheet.equity.title')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#979DAC] dark:border-[#33415C]">
                <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.balanceSheet.columns.equity')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.financialReports.common.amount')}</th>
                <th className="text-right p-1 sm:p-2 font-medium">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
              </tr>
            </thead>
            <tbody>
              {equityRows.map((row, i) => (
                <tr key={`eq-${i}`} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/30">
                  <td className="text-left p-1 sm:p-2">{row.label}</td>
                  <td className="text-right p-1 sm:p-2">{fmt(Number(row.amount))}</td>
                  <td className="text-right p-1 sm:p-2">
                    <button onClick={() => openEdit('EQ', i, row)} className="inline-flex items-center gap-1 px-2 py-1 border border-[#33415C] dark:border-[#979DAC] rounded text-[#0466CB] hover:bg-[#0453A4] hover:text-white transition-colors mr-2"><FaEdit /></button>
                    <button onClick={() => delRow('EQ', i)} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 dark:border-red-400/40 dark:hover:bg-red-900/30 hover:bg-red-50"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-[#979DAC] dark:border-[#33415C] font-semibold">
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
          <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] dark:bg-[#002855] rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center border-b border-[#979DAC] dark:border-[#33415C] pb-3">
              <h2 className="text-lg font-semibold dark:text-white">{t('common.editRow', { defaultValue: 'Sətiri redaktə et' })}</h2>
              <button onClick={closeEdit} className="text-[#7D8597] hover:text-[#001233] dark:hover:text-white text-xl">×</button>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm font-medium dark:text-white">{t('common.description', { defaultValue: 'Təsvir' })}</label>
                <input
                  type="text"
                  className="mt-1 w-full border border-[#33415C] dark:border-[#979DAC] rounded-md px-3 py-2 dark:bg-[#001F3F] dark:text-white"
                  value={editing.label}
                  onChange={(e) => setEditing(prev => ({ ...prev, label: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-white">{t('pages.accounting.financialReports.common.amount')}</label>
                <input
                  type="number"
                  className="mt-1 w-full border border-[#33415C] dark:border-[#979DAC] rounded-md px-3 py-2 dark:bg-[#001F3F] dark:text-white"
                  value={editing.amount}
                  onChange={(e) => setEditing(prev => ({ ...prev, amount: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t border-[#979DAC] dark:border-[#33415C] mt-4">
              <button onClick={closeEdit} className="px-4 py-2 border border-[#33415C] dark:border-[#979DAC] rounded-md hover:bg-[#0453A4] hover:text-white transition-colors">{t('common.cancel', { defaultValue: 'Cancel' })}</button>
              <button onClick={saveEdit} className="px-4 py-2 rounded-md text-white bg-[#0466CB] hover:bg-[#0453A4]">{t('common.save', { defaultValue: 'Save' })}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BalanceSheet;