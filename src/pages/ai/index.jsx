import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import Modal from "../../components/AI/Ai-Assistent/Modal";
import Notification from "../../components/AI/Ai-Assistent/Notification";
import { useTranslation } from "react-i18next";

const Ai = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState(false);
  const { t } = useTranslation();

  document.body.style.overflow = isOpen || notification ? "hidden" : "auto";

  const navItems = [
    { to: "dashboard", label: t("pages.ai.tabs.dashboard") },
    { to: "maliyyeAi", label: t("pages.ai.tabs.finance") },
    { to: "satis", label: t("pages.ai.tabs.sales") },
    { to: "anbar", label: t("pages.ai.tabs.warehouse") },
    { to: "hr", label: t("pages.ai.tabs.hr") },
    { to: "vergi", label: t("pages.ai.tabs.tax") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-between px-6 py-3 mt-20 sm:mt-0 bg-white shadow-lg rounded-sm relative z-10 sm:ml-[80px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 18V5"></path>
              <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
              <path d="M18 18a4 4 0 0 0 2-7.464"></path>
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
              <path d="M6 18a4 4 0 0 1-2-7.464"></path>
              <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg font-semibold">{t("pages.ai.title")}</h1>
            <span className="text-sm text-gray-500">{t("pages.ai.subtitle")}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setNotification(!notification)} className="relative">
            <FaRegBell className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              5
            </span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 cursor-pointer flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md whitespace-nowrap"
          >
            <FiMessageSquare className="text-lg " />
            <span className="text-sm ">{t("pages.ai.openAssistant")}</span>
          </button>
        </div>
      </div>

      <nav className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center justify-between gap-4 bg-gray-200 p-2 rounded-md w-full sm:w-[1210px] mx-auto mt-10 sm:mt-4 shadow-inner">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `w-full flex-1 py-2 px-4 text-center rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                ? "bg-gray-300 text-black shadow-inner"
                : "text-gray-700 hover:bg-gray-300"
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

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      {notification && <Notification onClose={() => setNotification(false)} />}
    </div>
  );
};

export default Ai;
