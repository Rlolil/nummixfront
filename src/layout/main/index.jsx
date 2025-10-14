import React, { useEffect } from "react";
import Header from "../header";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../../pages/sidebar";

function MainLayout() {
  const navigate = useNavigate()


  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="w-full overflow-x-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
