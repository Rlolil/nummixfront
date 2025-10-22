import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Maliyye = () => {
  const navItems = [
    { to: "idare-paneli", label: "İdarə Paneli" },
    { to: "kassa-bank", label: "Kassa və Bank" },
    { to: "odenisler", label: "Ödənişlər" },
    { to: "budce-planlamasi", label: "Büdcə Planlaması" },
    { to: "analitika", label: "Analitika" },
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      <nav className="flex justify-center items-center sm:w-[1200px] bg-gray-300 rounded-xl mx-auto mt-25 sm:mt-4 p-1 shadow-inner ">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `px-20 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                ? "bg-gray-400 text-black shadow-inner"
                : "text-gray-700 hover:bg-gray-200"
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
