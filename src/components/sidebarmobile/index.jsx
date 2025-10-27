import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import image from "../../assets/image/logo.png";
function SidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(["translation", "app"]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <div className="bg-white p-3 border-b border-gray-200 flex items-center justify-between fixed w-full z-20 md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <img src={image} alt={t("common.menu")} className="w-10 h-auto" />
        </button>
        <div className="relative flex-1 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            className="w-full h-9 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-9"
            placeholder={t("search_placeholder", { ns: "translation" })}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="relative hover:bg-gray-100 p-2 rounded-full focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="relative hover:bg-gray-100 p-2 text-sm font-bold text-black rounded-full focus:outline-none">
            <span className="flex items-center justify-center w-8 h-8">{t("header.initials", { ns: "translation" })}</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white border-r border-gray-200 text-black z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center gap-4 p-4">
          <img
            onClick={closeSidebar}
            src={image}
            alt={t("common.logoAlt")}
            className="w-12 h-auto"
          />
          <h2 className="text-xl font-bold">{t("brand.name")}</h2>
        </div>
        <hr className="border-gray-200" />
        <div className="flex flex-col p-4 gap-2 mb-12 text-black font-medium">
          <Link to="/dashboard">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
              </svg>
              <span>{t("pages.accounting.title")}</span>
            </button>
          </Link>
          <Link to="/bank-accounts">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                <path d="M10 6h4"></path>
                <path d="M10 10h4"></path>
                <path d="M10 14h4"></path>
                <path d="M10 18h4"></path>
              </svg>
              <span>{t("pages.finance.title")}</span>
            </button>
          </Link>
          <Link to="/payments">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              <span>{t("pages.sales.title")}</span>
            </button>
          </Link>
          <Link to="/transactions">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m21 16-4 4-4-4"></path>
                <path d="M17 20V4"></path>
                <path d="m3 8 4-4 4 4"></path>
                <path d="M7 4v16"></path>
              </svg>
              <span>{t("pages.supplier.title")}</span>
            </button>
          </Link>
          <Link to="/revenue-expenses">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <span>{t("pages.warehouse.title")}</span>
            </button>
          </Link>
          <Link to="/invoices">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              <span>{t("pages.assets.menuTitle", { defaultValue: t("pages.assets.title") })}</span>
            </button>
          </Link>
          <Link to="/reports-analytics">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
              <span>{t("pages.hr.title")}</span>
            </button>
          </Link>
          <Link to="/ai-insights">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              </svg>
              <span>{t("pages.ai.title")}</span>
            </button>
          </Link>
          <Link to="/customers">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <span>{t("pages.sales.tabs.customers")}</span>
            </button>
          </Link>
          <Link to="/calendar">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span>{t("pages.hr.tabs.calendar")}</span>
            </button>
          </Link>
          <Link to="/settings">
            <button onClick={() => setIsOpen(false)} className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>{t("pages.settings.title")}</span>
            </button>
          </Link>
        </div>
        <div className="text-gray-500 p-4 absolute bottom-0 w-full">
          <Link to="/login">
            <button className="flex items-center rounded-md text-md font-medium hover:bg-gray-200 h-9 px-4 py-2 cursor-pointer w-full justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
              <span>{t("common.signOut")}</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SidebarMobile;
