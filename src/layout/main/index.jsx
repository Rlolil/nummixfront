import React from "react";
import Header from "../header";
import { Outlet } from "react-router";
import Sidebar from "../../pages/sidebar";

function MainLayout() {
  return (
    <div className="flex w-screen overflow-x-hidden">
      <Sidebar />
      <div className="w-full overflow-x-hidden">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
