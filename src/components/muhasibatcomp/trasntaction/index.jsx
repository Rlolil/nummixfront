import { useState, useEffect } from "react";
import { FaPlus, FaFileInvoice, FaEdit, FaTrash } from "react-icons/fa";
import CreateJournalEntry from "../newjournalmodule";
import { useTranslation } from "react-i18next";
import { getTransactions, deleteTransaction, createTransaction, updateTransaction, getProfile } from "../../../services";

const Transactions = () => {
  const [moduleOpen, setModuleOpen] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState(null);
  const { t } = useTranslation();
  const [transactions, setTransactions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');

    fetchTransactions();
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const profile = await getProfile();
      setCurrentUser(profile);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      if (Array.isArray(data)) {
        const formatted = data.map((t) => {
          let displayDate = t.date;
          // Check if ISO date
          if (t.date && (typeof t.date === 'string' && (t.date.includes('T') || t.date.match(/^\d{4}-\d{2}-\d{2}$/)))) {
              const d = new Date(t.date);
              if (!isNaN(d.getTime())) {
                  // Format as DD/MM/YYYY
                  const day = String(d.getDate()).padStart(2, '0');
                  const month = String(d.getMonth() + 1).padStart(2, '0');
                  const year = d.getFullYear();
                  displayDate = `${day}/${month}/${year}`;
              }
          }

          return {
            ...t,
            date: displayDate,
            originalDate: t.date,
            mayeValue: t.mayeValue || formatAmount(getTotalNumber(t.entries || [])),
            currency: t.currency || 'AZN',
            amount: t.amount || (t.mayeValue ? t.mayeValue : formatAmount(getTotalNumber(t.entries || []))),
          };
        });
        setTransactions(formatted);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Helpers first so we can use them when initializing state
  function getTotalNumber(entries) {
    if (!entries) return 0;
    let debit = 0;
    entries.forEach((e) => {
      if (e.type === 'debit' && e.amount) {
          debit += Number(e.amount);
      } else if (e.debit && e.debit !== "-") {
          debit += Number(String(e.debit).replace(/[,]/g, ""));
      }
    });
    return debit;
  }
  function formatAmount(num) {
    if (num == null || Number.isNaN(num)) return "0";
    return Number(num).toLocaleString();
  }

  const getTotals = (entries) => {
    let debit = 0,
      credit = 0;
    entries.forEach((e) => {
      if (e.type === 'debit' && e.amount) debit += Number(e.amount);
      if (e.type === 'credit' && e.amount) credit += Number(e.amount);

      if (e.debit && e.debit !== "-") debit += Number(String(e.debit).replace(/[,]/g, ""));
      if (e.credit && e.credit !== "-") credit += Number(String(e.credit).replace(/[,]/g, ""));
    });
    return { debit: `${debit.toLocaleString()}`, credit: `${credit.toLocaleString()}` };
  };


  if (moduleOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const parseDateToISO = (dateStr) => {
    // Expecting DD/MM/YYYY -> YYYY-MM-DD
    if (!dateStr) return "";
    const parts = dateStr.split("/");
    if (parts.length !== 3) return "";
    const [dd, mm, yyyy] = parts;
    return `${yyyy}-${String(mm).padStart(2, "0")}-${String(dd).padStart(2, "0")}`;
  };

  const mapAccountCode = (code) => {
    // Best-effort mapping to existing modal select options
    if (code === "201") return "bank";
    if (code === "701") return "sales";
    // Could be treated as expenses if not clearly defined
    if (["221", "543", "551"].includes(code)) return "expenses";
    return ""; // leave unselected
  };

  const toNumberString = (val) => {
    if (!val || val === "-") return "";
    // Remove all non-digits
    const cleaned = String(val).replace(/[^\d]/g, "");
    return cleaned; // numeric string suitable for type=number inputs
  };

  const buildInitialDataFromTxn = (txn) => {
    const description = t(txn.titleKey, {
      defaultValue: txn.titleParams?.id ? `${txn.titleParams?.id}` : "",
      ...txn.titleParams,
    });

    const rawDate = txn.originalDate || txn.date;
    let dateStr = "";
    if (rawDate) {
        if (typeof rawDate === 'string' && rawDate.includes('T')) {
            dateStr = rawDate.split('T')[0];
        } else if (typeof rawDate === 'string' && rawDate.includes('/')) {
             dateStr = parseDateToISO(rawDate);
        } else {
            dateStr = rawDate;
        }
    }

    const mappedEntries = txn.entries.map((e) => {
        if (e.type) {
             return {
                account: e.account.toLowerCase() === 'expense' ? 'expenses' : e.account.toLowerCase(),
                debit: e.type === 'debit' ? String(e.amount) : "",
                credit: e.type === 'credit' ? String(e.amount) : "",
            };
        }
        return {
            account: mapAccountCode(e.code),
            debit: toNumberString(e.debit),
            credit: toNumberString(e.credit),
        };
    });

    return {
      date: dateStr,
      reference: txn.reference || txn.id,
      description: txn.description || description,
      mayeValue: toNumberString(txn.mayeValue || ""),
      amount: toNumberString(txn.amount || txn.mayeValue || ""),
      currency: txn.currency || 'AZN',
      entries: mappedEntries,
    };
  };

  const handleDelete = async (txn) => {
    const confirmMsg = t('common.confirmDelete');
    if (window.confirm(confirmMsg)) {
      try {
        await deleteTransaction(txn.id);
        fetchTransactions();
      } catch (error) {
        console.error("Error deleting transaction:", error);
      }
    }
  };

  const toDisplayDate = (iso) => {
    // YYYY-MM-DD -> DD/MM/YYYY
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    if (!y || !m || !d) return "";
    return `${d}/${m}/${y}`;
  };

  const mapAccountToCodeName = (acc) => {
    switch (acc) {
      case 'bank':
        return { code: '201', nameKey: 'bankAccounts' };
      case 'sales':
        return { code: '701', nameKey: 'salesRevenue' };
      case 'cash':
        return { code: '101', nameKey: 'cash' }; // fallback key
      case 'expenses':
        return { code: '600', nameKey: 'expenses' }; // fallback key
      default:
        return { code: '', nameKey: acc || '' };
    }
  };

  const handleSave = async (payload) => {
    // payload: { date, reference, description, entries: [{account, debit, credit}] }
    
    const backendEntries = [];
    (payload.entries || []).forEach((e) => {
      let accountName = "";
      // Map frontend account values to backend enum
      switch (e.account) {
        case "cash": accountName = "Cash"; break;
        case "bank": accountName = "Bank"; break;
        case "sales": accountName = "Sales"; break;
        case "expenses": accountName = "Expense"; break;
        default: accountName = "Cash"; // Default fallback
      }

      if (e.debit && parseFloat(e.debit) > 0) {
        backendEntries.push({
          account: accountName,
          type: "debit",
          amount: parseFloat(e.debit),
        });
      }

      if (e.credit && parseFloat(e.credit) > 0) {
        backendEntries.push({
          account: accountName,
          type: "credit",
          amount: parseFloat(e.credit),
        });
      }
    });

    // Get user info from profile
    let userFullName = "Admin User";
    let userId = undefined;
    
    if (currentUser) {
        userFullName = currentUser.fullName || currentUser.name || "Admin User";
        userId = currentUser.id || currentUser._id;
    }

    const txnData = {
      date: payload.date, // YYYY-MM-DD is valid for Date type in Mongoose
      reference: payload.reference,
      description: payload.description,
      entries: backendEntries,
      createdBy: {
        fullName: userFullName
      }
    };

    if (userId) {
        txnData.createdBy.userId = userId;
    }

    try {
      if (selectedTxn) {
        await updateTransaction(selectedTxn._id || selectedTxn.id, txnData);
      } else {
        await createTransaction(txnData);
      }
      fetchTransactions();
      setSelectedTxn(null);
      setModuleOpen(false);
    } catch (error) {
      console.error("Error saving transaction:", error);
      alert("Error saving transaction: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <main className="flex-1 overflow-auto bg-[#FFFFFF] text-[#001233] dark:bg-[#001233] dark:text-white">
      <div className="container mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#023E7D] dark:text-[#89A4D6]">{t('pages.accounting.transactions.title')}</h2>
            <p className="text-[#7D8597] dark:text-[#B0B8C5] text-sm sm:text-base">{t('pages.accounting.transactions.subtitle', { defaultValue: 'View and create accounting entries' })}</p>
          </div>
          <button
            onClick={() => { setSelectedTxn(null); setModuleOpen(true); }}
            className="flex items-center gap-2 bg-[#0466CB] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-[#0453A4] transition mt-4 sm:mt-0"
          >
            <FaPlus className="text-xs sm:text-sm" /> {t('pages.accounting.transactions.newJournalEntry')}
          </button>
          {moduleOpen && (
            <CreateJournalEntry
              setModuleOpen={setModuleOpen}
              mode={selectedTxn ? 'edit' : 'create'}
              initialData={selectedTxn ? buildInitialDataFromTxn(selectedTxn) : null}
              onSave={handleSave}
            />
          )}
        </div>
        <div className="space-y-6">
          {transactions.map((txn) => {
            const totals = getTotals(txn.entries);
            return (
              <div key={txn.id} className="border rounded-lg p-3 sm:p-4 border-[#33415C] dark:border-[#979DAC] bg-[#FFFFFF] dark:bg-[#002855] shadow-sm">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <FaFileInvoice className="text-[#001233] dark:text-white text-sm sm:text-base" />
                      <span className="font-medium text-sm sm:text-base">{txn.id}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#7D8597] dark:text-[#B0B8C5] mt-1">{t(txn.titleKey, { defaultValue: txn.titleParams?.id ? `${txn.titleParams?.id}` : '', ...txn.titleParams })}</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#7D8597] dark:text-[#B0B8C5] mt-2 sm:mt-0">
                    <div className="text-right">
                      <p>{txn.date}</p>
                      <p>{t('common.byUser', { user: txn.user, defaultValue: 'by {{user}}' })}</p>
                    </div>
                    <button
                      onClick={() => { setSelectedTxn(txn); setModuleOpen(true); }}
                      className="inline-flex items-center gap-1 px-2 py-1 border border-[#33415C] dark:border-[#979DAC] rounded text-[#0466CB] hover:bg-[#0453A4] hover:text-white transition-colors"
                      title={t('common.edit', { defaultValue: 'Edit' })}
                    >
                      <FaEdit className="text-xs" />
                      <span className="hidden sm:inline">{t('common.edit', { defaultValue: 'Edit' })}</span>
                    </button>
                    <button
                      onClick={() => handleDelete(txn)}
                      className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 dark:border-red-400/40 dark:hover:bg-red-900/30 hover:bg-red-50"
                      title={t('common.delete', { defaultValue: 'Delete' })}
                    >
                      <FaTrash className="text-xs" />
                      <span className="hidden sm:inline">{t('common.delete', { defaultValue: 'Delete' })}</span>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead className="border-b border-[#979DAC] dark:border-[#33415C] bg-[#FFFFFF] dark:bg-[#002855]">
                      <tr>
                        <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.accountCode')}</th>
                        <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.accountName')}</th>
                        <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.debit')}</th>
                        <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.credit')}</th>
                        <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.currency')}</th>
                        <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.amount')}</th>
                        <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.liquidValue')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {txn.entries.map((e, i) => (
                        <tr key={i} className="border-b border-[#979DAC] dark:border-[#33415C] hover:bg-[#0453A4]/10 dark:hover:bg-[#0453A4]/30">
                          <td className="p-1 sm:p-2">{e.code}</td>
                          <td className="p-1 sm:p-2">{t(`pages.accounting.transactions.accounts.${e.nameKey}`, { defaultValue: e.nameKey })}</td>
                          <td className="p-1 sm:p-2 text-right">{e.debit}</td>
                          <td className="p-1 sm:p-2 text-right">{e.credit}</td>
                          <td className="p-1 sm:p-2 text-right">{i === 0 ? txn.currency : ''}</td>
                          <td className="p-1 sm:p-2 text-right">{i === 0 ? txn.amount : ''}</td>
                          <td className="p-1 sm:p-2 text-right">{i === 0 ? txn.mayeValue : ''}</td>
                        </tr>
                      ))}
                      <tr className="font-medium border-t border-[#979DAC] dark:border-[#33415C]">
                        <td colSpan="2" className="p-1 sm:p-2">
                          {t('common.total', { defaultValue: 'Total' })}
                        </td>
                        <td className="p-1 sm:p-2 text-right">{totals.debit}</td>
                        <td className="p-1 sm:p-2 text-right">{totals.credit}</td>
                        <td className="p-1 sm:p-2 text-right">{txn.currency}</td>
                        <td className="p-1 sm:p-2 text-right">{txn.amount}</td>
                        <td className="p-1 sm:p-2 text-right">{txn.mayeValue}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Transactions;