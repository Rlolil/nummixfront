import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const navConfig = [
  { labelKey: "pages.hr.tabs.dashboard", to: "dashboard" },
  { labelKey: "pages.hr.tabs.employees", to: "employees" },
  { labelKey: "pages.hr.tabs.payroll", to: "payroll" },
  { labelKey: "pages.hr.tabs.leave", to: "leave" },
  { labelKey: "pages.hr.tabs.attendance", to: "attendance" },
  { labelKey: "pages.hr.tabs.calendar", to: "calendar" },
  { labelKey: "pages.hr.tabs.reports", to: "reports" },
  { labelKey: "pages.hr.tabs.portal", to: "employeeportal" },
];

function EmekHaqqi() {
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
    <div className=" sm:ml-[100px] dark:bg-[#001233]  dark:text-white sm:mt-[20px] max-w-[1320px] mt-[100px] ml-[0px] px-4 sm:px-6 lg:px-8 text-[#001233]">
      <h2 className="md:text-4xl  text-2xl font-bold mb-4 dark:text-white text-[#023E7D]">
        {t("pages.hr.title")}
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center justify-between gap-4 dark:bg-[#33415C] dark:text-white bg-[#FFFFFF] border border-[#33415C] dark:border-[#979DAC] p-2 rounded-xl w-full">
        {items.map((item) => (
          <Link
            onClick={() => setActiveItem(item.label)}
            to={`/emekhaqqi/${item.to}`}
            key={item.to}
            className={`${
              activeItem === item.label
                ? "bg-[#0466CB] dark:bg-[#023E7D] hover:bg-[#0453A4] text-white border-transparent"
                : "bg-[#FFFFFF] dark:bg-[#33415C] dark:text-white dark:hover:bg-[#023E7D] text-[#023E7D] hover:bg-[#F5F8FF]"
            } w-full flex-1 py-2 px-4 text-center rounded-md border border-[#979DAC] dark:border-[#979DAC] transition-colors duration-200`}
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

export default EmekHaqqi;
