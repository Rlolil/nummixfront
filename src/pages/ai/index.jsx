import React from "react";
import { NavLink, Outlet } from "react-router";

const Ai = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-center gap-8 bg-white border-b py-4 shadow-sm">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="maliyyeAi"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Maliyye
        </NavLink>
        <NavLink
          to="satis"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Satış
        </NavLink>
        <NavLink
          to="anbar"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Anbar
        </NavLink>
        <NavLink
          to="hr"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          HR
        </NavLink>
        <NavLink
          to="vergi"
          className={({ isActive }) =>
            `font-medium hover:text-blue-600 ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600"}`
          }
        >
          Vergi
        </NavLink>
      </nav>

      <div className="p-6 bg-gray-50 flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Ai;
