import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

// Use stable route slugs and translate only labels
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
    const match = items.find((n) => n.to === currentPath) || items[0];
    setActiveItem(match?.label);
  }, [currentPath, items]);
  return (
    <div className=" sm:ml-[100px] sm:mt-[20px] max-w-[1320px] mt-[100px] ml-[0px] px-4 sm:px-6 lg:px-8">
  <h2 className="md:text-4xl  text-2xl font-bold mb-4">{t("pages.accounting.title")}</h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  items-center justify-between gap-4 bg-gray-200 p-2 rounded-md w-full">
        {items.map((item) => (
          <Link
            onClick={() => setActiveItem(item.label)}
            to={`/muhasibat/${item.to}`}
            key={item.to}
            className={` ${
              activeItem === item.label ? "bg-gray-300" : ""
            } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
          >
            <button key={item.to}>{item.label}</button>
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
