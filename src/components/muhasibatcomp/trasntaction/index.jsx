import { useState } from "react";
import { FaPlus, FaFileInvoice } from "react-icons/fa";
import CreateJournalEntry from "../newjournalmodule";
import { useTranslation } from "react-i18next";

const Transactions = () => {
  const [moduleOpen, setModuleOpen] = useState(false);
  const { t } = useTranslation();
  const transactions = [
    {
      id: "INV-2025-1045",
      titleKey: "pages.accounting.transactions.samples.salesInvoice",
      titleParams: { id: "#INV-2025-1045" },
      date: "06/10/2025",
      user: "Leyla Mammadova",
      entries: [
        { code: "211", nameKey: "accountsReceivable", debit: "₼18.000", credit: "-" },
        { code: "701", nameKey: "salesRevenue", debit: "-", credit: "₼15.000" },
        { code: "341", nameKey: "vatPayable", debit: "-", credit: "₼3.000" },
      ],
    },
    {
      id: "PUR-2025-0892",
      titleKey: "pages.accounting.transactions.samples.purchaseInvoice",
      titleParams: { id: "#PUR-2025-0892" },
      date: "06/10/2025",
      user: "Rauf Aliyev",
      entries: [
        { code: "221", nameKey: "inventory", debit: "₼12.000", credit: "-" },
        { code: "331", nameKey: "accountsPayable", debit: "-", credit: "₼12.000" },
      ],
    },
    {
      id: "SAL-SEP-2025",
      titleKey: "pages.accounting.transactions.samples.salaryPaymentMonth",
      titleParams: { period: "September 2025" },
      date: "05/10/2025",
      user: "Nigar Hasanova",
      entries: [
        { code: "543", nameKey: "payroll", debit: "₼45.000", credit: "-" },
        { code: "551", nameKey: "socialContributions", debit: "₼10.000", credit: "-" },
        { code: "201", nameKey: "bankAccounts", debit: "-", credit: "₼55.000" },
      ],
    },
    {
      id: "VAT-SEP-2025",
      titleKey: "pages.accounting.transactions.samples.vatPaymentMonth",
      titleParams: { period: "September 2025" },
      date: "05/10/2025",
      user: "Leyla Mammadova",
      entries: [
        { code: "341", nameKey: "vatPayable", debit: "₼8.500", credit: "-" },
        { code: "201", nameKey: "bankAccounts", debit: "-", credit: "₼8.500" },
      ],
    },
    {
      id: "BANK-TRF-458",
      titleKey: "pages.accounting.transactions.samples.bankTransferFromClient",
      date: "04/10/2025",
      user: "Rauf Aliyev",
      entries: [
        { code: "201", nameKey: "bankAccounts", debit: "₼25.000", credit: "-" },
        { code: "211", nameKey: "accountsReceivable", debit: "-", credit: "₼25.000" },
      ],
    },
  ];

  const getTotals = (entries) => {
    let debit = 0,
      credit = 0;
    entries.forEach((e) => {
      if (e.debit !== "-") debit += Number(e.debit.replace(/[₼,]/g, ""));
      if (e.credit !== "-") credit += Number(e.credit.replace(/[₼,]/g, ""));
    });
    return { debit: `₼${debit.toLocaleString()}`, credit: `₼${credit.toLocaleString()}` };
  };

  if (moduleOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="container mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">{t('pages.accounting.transactions.title')}</h2>
            <p className="text-gray-500 text-sm sm:text-base">{t('pages.accounting.transactions.subtitle', { defaultValue: 'View and create accounting entries' })}</p>
          </div>
          <button
            onClick={() => setModuleOpen(true)}
            className="flex items-center gap-2 bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-gray-600 transition mt-4 sm:mt-0"
          >
            <FaPlus className="text-xs sm:text-sm" /> {t('pages.accounting.transactions.newJournalEntry')}
          </button>
          {moduleOpen && <CreateJournalEntry setModuleOpen={setModuleOpen} />}
        </div>
        <div className="space-y-6">
          {transactions.map((txn) => {
            const totals = getTotals(txn.entries);
            return (
              <div key={txn.id} className="border rounded-lg p-3 sm:p-4 border-gray-300 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <FaFileInvoice className="text-gray-500 text-sm sm:text-base" />
                      <span className="font-medium text-sm sm:text-base">{txn.id}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{t(txn.titleKey, { defaultValue: txn.titleParams?.id ? `${txn.titleParams?.id}` : '', ...txn.titleParams })}</p>
                  </div>
                  <div className="text-right text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
                    <p>{txn.date}</p>
                    <p>{t('common.byUser', { user: txn.user, defaultValue: 'by {{user}}' })}</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead className="border-b bg-gray-50">
                      <tr>
                        <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.accountCode')}</th>
                        <th className="text-left p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.accountName')}</th>
                        <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.debit')}</th>
                        <th className="text-right p-1 sm:p-2 font-medium">{t('pages.accounting.transactions.table.credit')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {txn.entries.map((e, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="p-1 sm:p-2">{e.code}</td>
                          <td className="p-1 sm:p-2">{t(`pages.accounting.transactions.accounts.${e.nameKey}`)}</td>
                          <td className="p-1 sm:p-2 text-right">{e.debit}</td>
                          <td className="p-1 sm:p-2 text-right">{e.credit}</td>
                        </tr>
                      ))}
                      <tr className="font-medium border-t">
                        <td colSpan="2" className="p-1 sm:p-2">
                          {t('common.total', { defaultValue: 'Total' })}
                        </td>
                        <td className="p-1 sm:p-2 text-right">{totals.debit}</td>
                        <td className="p-1 sm:p-2 text-right">{totals.credit}</td>
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