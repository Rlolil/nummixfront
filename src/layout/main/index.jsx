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
