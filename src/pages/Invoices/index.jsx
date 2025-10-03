import React from "react";
import { useTranslation } from "react-i18next";
import { PiExportBold } from "react-icons/pi";

function Invoices() {
  const  {t} = useTranslation();
  const invoices = [
    { id: "INV-001", customer: "Customer A", date: "04/01/24", due: "04/02/24", amount: "$500.00", status: "Paid" },
    { id: "INV-002", customer: "Customer B", date: "04/01/24", due: "04/02/24", amount: "$250.00", status: "Pending" },
    { id: "INV-003", customer: "Customer C", date: "04/01/24", due: "04/02/24", amount: "$125.00", status: "Overdue" },
    { id: "INV-004", customer: "Customer D", date: "04/01/24", due: "04/02/24", amount: "$1,000.00", status: "Overdue" },
    { id: "INV-005", customer: "Customer E", date: "04/02/24", due: "04/02/24", amount: "$750.00", status: "Paid" },
  ];

  return (
    <div className="p-4 max-w-[1320px] sm:mt-0 mt-[80px] sm:ml-[100px]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{t("Invoices")}</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <button className="px-4 py-2 text-black border border-gray-300 rounded-lg text-sm sm:text-base">
          + {t("Create_Invoice")}
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 text-sm sm:text-base">
          <PiExportBold /> {t("Export")}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:gap-10 items-start sm:items-center p-4 border-b border-gray-300">
            <div className="mb-4 sm:mb-0">
              <p className="font-bold mb-2 text-sm sm:text-base">{t("Date_range")}</p>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base w-full">
                <option>{t("this_month")}</option>
                <option>{t("last_month")}</option>
                <option>{t("This_Year")}</option>
              </select>
            </div>

            <div>
              <p className="font-bold mb-2 text-sm sm:text-base">{t("Status")}</p>
              <div className="flex flex-wrap items-center border border-gray-300 rounded-lg px-3 py-2 gap-4 text-xs sm:text-sm">
                <span className="flex items-center gap-1 text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span> {t("Paid")}
                </span>
                <span className="flex items-center gap-1 text-yellow-600">
                  <span className="w-2 h-2 rounded-full bg-yellow-600"></span> {t("Pending")}
                </span>
                <span className="flex items-center gap-1 text-red-600">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span> {t("Overdue")}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">{t("Invoice_No")}</th>
                  <th className="px-4 py-2">{t("Customer")}</th>
                  <th className="px-4 py-2">{t("Date")}</th>
                  <th className="px-4 py-2">{t("Due_Date")}</th>
                  <th className="px-4 py-2">{t("Amount")}</th>
                  <th className="px-4 py-2">{t("Actions")}</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-gray-300">
                    <td className="px-4 py-2">{inv.id}</td>
                    <td className="px-4 py-2">{inv.customer}</td>
                    <td className="px-4 py-2">{inv.date}</td>
                    <td className="px-4 py-2">{inv.due}</td>
                    <td className="px-4 py-2">{inv.amount}</td>
                    <td className="px-4 py-2">
                      <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm">{t("View")}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="block sm:hidden space-y-4 p-4">
            {invoices.map((inv) => (
              <div key={inv.id} className="border border-gray-300 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="font-bold text-sm">{inv.id}</span>
                  <span
                    className={`text-xs ${inv.status === "Paid"
                        ? "text-green-600"
                        : inv.status === "Pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                  >
                    {inv.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{t("Customer")}: {inv.customer}</p>
                <p className="text-sm text-gray-600">{t("Date")}: {inv.date}</p>
                <p className="text-sm text-gray-600">{t("Due")}: {inv.due}</p>
                <p className="text-sm text-gray-600">{t("Amount")}: {inv.amount}</p>
                <button className="mt-2 px-3 py-1 border border-gray-300 rounded-lg text-sm w-full">
                  {t("View")}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">{t("Invoices_Summary")}</h2>
          <div className="space-y-2 text-gray-700 text-sm sm:text-base">
            <p>
              {t("Total_Invoices")}: <span className="font-bold">{invoices.length}</span>
            </p>
            <p>
              {t("Paid")}: <span className="font-bold">{invoices.filter((i) => i.status === "Paid").length}</span>
            </p>
            <p>
              {t("Pending")}: <span className="font-bold">{invoices.filter((i) => i.status === "Pending").length}</span>
            </p>
            <p>
              {t("Overdue")}: <span className="font-bold">{invoices.filter((i) => i.status === "Overdue").length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
