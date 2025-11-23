import React, { useEffect, useState } from "react";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";
import { getBudgets } from "../../../services";

const ViewBudgetsModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    fetchBudgets();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const fetchBudgets = async () => {
    try {
      const data = await getBudgets();
      console.log("Fetched budgets:", data);
      setBudgets(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  return (
    <Overlay onClose={onClose}>
      <div className="bg-white dark:bg-[#001233] w-[90%] md:w-[800px] rounded-2xl shadow-lg p-5 md:p-6 relative mx-auto overflow-y-auto max-h-[90vh] text-[#001233] dark:text-white">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-semibold">
            {t("pages.finance.budgeting.viewBudgets", { defaultValue: "View Budgets" })}
          </h2>
          <button
            onClick={onClose}
            className="text-[#5C677D] dark:text-[#7D8597] hover:text-[#0466CB] dark:hover:text-[#0466CB] transition"
          >
            ×
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[#7D8597] uppercase bg-gray-50 dark:bg-[#33415C] dark:text-white">
              <tr>
                <th className="px-4 py-3">{t("pages.finance.budgeting.tabs.departments", { defaultValue: "Department" })}</th>
                <th className="px-4 py-3">{t("common.year", { defaultValue: "Year" })}</th>
                <th className="px-4 py-3">{t("common.createdAt", { defaultValue: "Created At" })}</th>
                <th className="px-4 py-3">{t("common.updatedAt", { defaultValue: "Updated At" })}</th>
              </tr>
            </thead>
            <tbody>
              {budgets.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-4 py-3 text-center">
                    {t("common.noData", { defaultValue: "No data found" })}
                  </td>
                </tr>
              ) : (
                budgets.map((budget, index) => (
                  <tr key={index} className="border-b dark:border-[#33415C]">
                    <td className="px-4 py-3">{budget.department}</td>
                    <td className="px-4 py-3">{budget.year}</td>
                    <td className="px-4 py-3">{new Date(budget.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-3">{new Date(budget.updatedAt).toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Overlay>
  );
};

export default ViewBudgetsModal;
