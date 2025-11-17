import React, { use, useEffect } from "react";
import Header from "../header";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../../pages/sidebar";
import AiMini from "../../pages/aimini";

function MainLayout() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("muhasibat/dashboard")
  }, [])
  // Ensure saved theme is applied on initial load (dark/light)
  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'light'
    const root = window.document.documentElement
    if (stored === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [])
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="w-full overflow-x-hidden">
        <AiMini />
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
