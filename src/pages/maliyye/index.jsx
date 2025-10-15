import React from "react";
import { NavLink, Outlet } from "react-router";

const Maliyye = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-center gap-8 bg-white border-b py-4 shadow-sm">
        <NavLink
          to="idare-paneli"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          İdarə Paneli
        </NavLink>
        <NavLink
          to="kassa-bank"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Kassa və Bank
        </NavLink>
        <NavLink
          to="odenisler"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Ödənişlər
        </NavLink>
        <NavLink
          to="budce-planlamasi"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Büdcə Planlaması
        </NavLink>
        <NavLink
          to="analitika"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Analitika
        </NavLink>
      </nav>

      <div className="p-6 bg-gray-50 flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Maliyye;
