import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

// Route slugs (constant) + i18n keys
const navConfig = [
  { labelKey: "pages.accounting.tabs.dashboard", to: "dashboard" },
  { labelKey: "pages.accounting.tabs.ledger", to: "generalledger" },
  { labelKey: "pages.accounting.tabs.transactions", to: "transactions" },
  { labelKey: "pages.accounting.tabs.financialReports", to: "financialreports" },
  { labelKey: "pages.accounting.tabs.taxReports", to: "taxreports" },
];

function Muhasibat() {
  const { t } = useTranslation();
  const location = useLocation();

  const currentPath = location.pathname.split("/").pop();

  const items = useMemo(
    () => navConfig.map((n) => ({ ...n, label: t(n.labelKey) })),
    [t]
  );

  const [activeItem, setActiveItem] = useState(items[0]?.label);

  useEffect(() => {
    const matched = items.find((n) => n.to === currentPath) || items[0];
    setActiveItem(matched.label);
  }, [currentPath, items]);

  return (
    <div className="accounting-theme sm:ml-[100px] sm:mt-[20px] max-w-[1320px] mt-[100px] ml-0 px-4 sm:px-6 lg:px-8">
      <h2 className="md:text-4xl text-2xl font-bold mb-4 acc-heading">
        {t("pages.accounting.title")}
      </h2>

      {/* Navigation Tabs */}
      <div
        className="
          grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 p-2 w-full
          bg-white dark:bg-[#002855]
          dark:text-white
          border border-[#33415C] dark:border-[#979DAC]
          rounded-md 
        "
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={`/muhasibat/${item.to}`}
            onClick={() => setActiveItem(item.label)}
            className={`
              w-full flex-1 text-center rounded-md transition-colors duration-200 border
              ${
                activeItem === item.label
                  ? "bg-[#0466CB] text-white border-transparent dark:bg-[#023E7D]"
                  : "bg-white text-[#023E7D] border-[#33415C] hover:bg-[#0453A4] hover:text-white dark:bg-[#002855] dark:text-white dark:border-[#979DAC] dark:hover:bg-[#0453A4]"
              }
            `}
          >
            <button className="w-full py-2 px-4 rounded-md transition-all duration-300">
              {item.label}
            </button>
          </Link>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Muhasibat;
