import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    <div className="sm:ml-[100px] sm:mt-[20px] max-w-[1320px] mt-[100px] ml-[0px] px-4 sm:px-6 lg:px-8 dark:bg-[#001233] dark:text-white">
      <nav
        className="
          grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2
          items-center justify-between gap-2
          p-3 rounded-md w-full mx-auto
          mt-10 sm:mt-4 shadow-md border
          bg-white border-[#33415C]
          dark:bg-[#002855] dark:border-[#979DAC]
        "
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `w-full flex-1 py-2 text-center rounded-md text-sm font-medium transition-colors duration-200 border 
              ${
                isActive
                  ? "bg-[#0466CB] text-white border-[#0466CB] dark:bg-[#0453A4] dark:border-[#023E7D]"
                  : "border-[#33415C] text-[#001233] bg-whit dark:border-[#979DAC] dark:text-white dark:bg-[#002855] dark:hover:bg-[#023E7D]"
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
    </div>
  );
};

export default Maliyye;
