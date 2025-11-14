import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SettingsButton from "../../components/SettingsButton.jsx/SettingsButton";

const Maliyye = () => {
  const { t } = useTranslation();
  const navItems = [
    { to: "idare-paneli", label: t("pages.finance.tabs.dashboard") },
    { to: "kassa-bank", label: t("pages.finance.tabs.cashBank") },
    { to: "odenisler", label: t("pages.finance.tabs.payments") },
    { to: "budce-planlamasi", label: t("pages.finance.tabs.budgeting") },
    { to: "analitika", label: t("pages.finance.tabs.analytics") },
  ];

  return (
    <div className="flex sm:ml-[100px] ml-0 flex-col min-h-screen dark:bg-[#001233] dark:text-white ">
      <nav className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-center justify-between gap-4 bg-gray-200 dark:bg-zinc-700 p-2 rounded-md w-full sm:w-[1210px] mx-auto mt-10 sm:mt-4 shadow-inner">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `w-full flex-1 py-2 px-4 text-center rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                ? "bg-gray-300 dark:bg-zinc-600 text-black dark:text-white shadow-inner"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-600"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>


      <div className="p-6 flex-grow">
        <Outlet />
      </div>
      <SettingsButton/>
    </div>
  );
};

export default Maliyye;
