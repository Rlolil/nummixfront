import { FaChartBar, FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";
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

  const accounts = [
    { code: "101", name: "Cash", type: "Asset", balance: "₼45.000", currency: "AZN" },
    { code: "201", name: "Bank Accounts", type: "Asset", balance: "₼285.000", currency: "AZN" },
    { code: "331", name: "Accounts Payable", type: "Liability", balance: "₼78.000", currency: "AZN" },
    { code: "701", name: "Sales Revenue", type: "Revenue", balance: "₼580.000", currency: "AZN" },
  ];

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
              className="pl-10 pr-3 py-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        <table className="w-full text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-2">{t('pages.accounting.ledger.table.code')}</th>
              <th className="text-left p-2">{t('pages.accounting.ledger.table.accountName')}</th>
              <th className="text-left p-2">{t('pages.accounting.ledger.table.type')}</th>
              <th className="text-right p-2">{t('pages.accounting.ledger.table.balance')}</th>
              <th className="text-left p-2">{t('pages.accounting.ledger.table.currency')}</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{acc.code}</td>
                <td className="p-2">{acc.name}</td>
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
                    {acc.type}
                  </span>
                </td>
                <td className="p-2 text-right">{acc.balance}</td>
                <td className="p-2">{acc.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Ledger;