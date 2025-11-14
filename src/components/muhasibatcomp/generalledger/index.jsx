import { FaChartBar, FaSearch, FaArrowUp, FaArrowDown, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Ledger = () => {
  const { t } = useTranslation();
  const cards = [
    { title: t('pages.accounting.ledger.cards.totalAssets'), value: "₼1.000.000", icon: <FaArrowUp className="text-green-500" /> },
    { title: t('pages.accounting.ledger.cards.totalLiabilities'), value: "₼265.500", icon: <FaArrowDown className="text-red-500" /> },
    { title: t('pages.accounting.ledger.cards.totalEquity'), value: "₼656.500", icon: <FaChartBar className="text-blue-500" /> },
    { title: t('pages.accounting.ledger.cards.totalRevenue'), value: "₼675.000", icon: <FaArrowUp className="text-green-500" /> },
    { title: t('pages.accounting.ledger.cards.totalExpenses'), value: "₼621.000", icon: <FaArrowDown className="text-red-500" /> },
  ];

  const initialAccounts = [
    { code: "101", name: "Cash", type: "Asset", balance: "₼45.000", currency: "AZN" },
    { code: "201", name: "Bank Accounts", type: "Asset", balance: "₼285.000", currency: "AZN" },
    { code: "331", name: "Accounts Payable", type: "Liability", balance: "₼78.000", currency: "AZN" },
    { code: "701", name: "Sales Revenue", type: "Revenue", balance: "₼580.000", currency: "AZN" },
  ];
  const [accounts, setAccounts] = useState(initialAccounts);
  const [editing, setEditing] = useState(null); // {index, data}
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();
  const matches = (a) => {
    if (!normalizedSearch) return true;
    const hay = `${a.code} ${a.name} ${a.type} ${a.currency}`.toLowerCase();
    return hay.includes(normalizedSearch);
  };
  const filtered = accounts.filter(matches);

  const highlight = (text) => {
    if (!normalizedSearch) return text;
    const lower = String(text).toLowerCase();
    const idx = lower.indexOf(normalizedSearch);
    if (idx === -1) return text;
    const before = String(text).slice(0, idx);
    const match = String(text).slice(idx, idx + normalizedSearch.length);
    const after = String(text).slice(idx + normalizedSearch.length);
    return (
      <span>
        {before}<mark className="bg-yellow-200 px-0.5 rounded-sm">{match}</mark>{after}
      </span>
    );
  };

  const openEdit = (index) => {
    setEditing({ index, data: { ...accounts[index] } });
    document.body.style.overflow = 'hidden';
  };
  const closeEdit = () => {
    setEditing(null);
    document.body.style.overflow = 'auto';
  };
  const saveEdit = () => {
    if (!editing) return;
    const { index, data } = editing;
    setAccounts(prev => prev.map((a, i) => (i === index ? data : a)));
    closeEdit();
  };
  const handleDelete = (index) => {
    const confirmMsg = t('pages.accounting.ledger.confirmDeleteAccount', { defaultValue: 'Bu hesabı silmək istəyirsiniz? Bu əməliyyat geri alına bilməz.' });
    if (window.confirm(confirmMsg)) {
      setAccounts(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <main className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.accounting.tabs.ledger')}</h2>
          <p className="text-gray-500 text-sm sm:text-base">{t('pages.accounting.ledger.subtitle', { defaultValue: 'Chart of Accounts - Azerbaijan National Accounting Plan' })}</p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6">
        {cards.map((card, i) => (
          <div key={i} className="border rounded-lg border-gray-300 p-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 sm:mb-8 text-sm font-medium">
              {card.icon} {card.title}
            </div>
            <div className="text-xl sm:text-2xl font-semibold">{card.value}</div>
          </div>
        ))}
      </div>
      <div className="border rounded-lg border-gray-300 p-4 sm:p-6 overflow-x-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <h4 className="text-base sm:text-lg font-semibold">{t('pages.accounting.ledger.chartOfAccounts')}</h4>
          <div className="relative w-full sm:w-auto sm:max-w-xs mt-4 sm:mt-0">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder={t('pages.accounting.ledger.searchPlaceholder', { defaultValue: 'Search by code or name...' })}
              className="pl-10 pr-9 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Escape') setSearch(''); }}
            />
            {search && (
              <button
                aria-label={t('common.clear', { defaultValue: 'Clear' })}
                title={t('common.clear', { defaultValue: 'Clear' })}
                onClick={() => setSearch('')}
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 px-1"
              >
                ×
              </button>
            )}
          </div>
        </div>
        <div className="text-xs text-gray-500 mb-2">{t('common.results', { defaultValue: 'Nəticə' })}: {filtered.length}</div>

        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-2">{t('pages.accounting.ledger.table.code')}</th>
              <th className="text-left p-2">{t('pages.accounting.ledger.table.accountName')}</th>
              <th className="text-left p-2">{t('pages.accounting.ledger.table.type')}</th>
              <th className="text-right p-2">{t('pages.accounting.ledger.table.balance')}</th>
              <th className="text-left p-2">{t('pages.accounting.ledger.table.currency')}</th>
              <th className="text-right p-2">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">{t('common.noResults', { defaultValue: 'Nəticə tapılmadı' })}</td>
              </tr>
            )}
            {filtered.map((acc, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{highlight(acc.code)}</td>
                <td className="p-2">{highlight(acc.name)}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      acc.type === "Asset"
                        ? "bg-green-100 text-green-700"
                        : acc.type === "Liability"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {highlight(acc.type)}
                  </span>
                </td>
                <td className="p-2 text-right">{acc.balance}</td>
                <td className="p-2">{highlight(acc.currency)}</td>
                <td className="p-2 text-right">
                  <button
                    onClick={() => openEdit(accounts.indexOf(acc))}
                    className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2"
                    title={t('common.edit', { defaultValue: 'Edit' })}
                  >
                    <FaEdit />
                    <span className="hidden sm:inline">{t('common.edit', { defaultValue: 'Edit' })}</span>
                  </button>
                  <button
                    onClick={() => handleDelete(accounts.indexOf(acc))}
                    className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"
                    title={t('common.delete', { defaultValue: 'Delete' })}
                  >
                    <FaTrash />
                    <span className="hidden sm:inline">{t('common.delete', { defaultValue: 'Delete' })}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="p-6">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closeEdit}
          ></div>
          <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">{t('pages.accounting.ledger.editAccount', { defaultValue: 'Hesabı redaktə et' })}</h2>
              <button onClick={closeEdit} className="text-gray-500 hover:text-gray-700 text-xl" aria-label={t('common.close', { defaultValue: 'Close' })}>×</button>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">{t('pages.accounting.ledger.table.code')}</label>
                <input
                  type="text"
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={editing.data.code}
                  onChange={(e) => setEditing(prev => ({ ...prev, data: { ...prev.data, code: e.target.value } }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.accounting.ledger.table.accountName')}</label>
                <input
                  type="text"
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={editing.data.name}
                  onChange={(e) => setEditing(prev => ({ ...prev, data: { ...prev.data, name: e.target.value } }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.accounting.ledger.table.type')}</label>
                <select
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={editing.data.type}
                  onChange={(e) => setEditing(prev => ({ ...prev, data: { ...prev.data, type: e.target.value } }))}
                >
                  <option value="Asset">Asset</option>
                  <option value="Liability">Liability</option>
                  <option value="Equity">Equity</option>
                  <option value="Revenue">Revenue</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.accounting.ledger.table.currency')}</label>
                <select
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={editing.data.currency}
                  onChange={(e) => setEditing(prev => ({ ...prev, data: { ...prev.data, currency: e.target.value } }))}
                >
                  <option value="AZN">AZN</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">{t('pages.accounting.ledger.table.balance')}</label>
                <input
                  type="text"
                  className="mt-1 w-full border rounded-md px-3 py-2"
                  value={editing.data.balance}
                  onChange={(e) => setEditing(prev => ({ ...prev, data: { ...prev.data, balance: e.target.value } }))}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t mt-4">
              <button onClick={closeEdit} className="px-4 py-2 border rounded-md hover:bg-gray-100">
                {t('common.cancel', { defaultValue: 'Cancel' })}
              </button>
              <button onClick={saveEdit} className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
                {t('common.save', { defaultValue: 'Save' })}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Ledger;