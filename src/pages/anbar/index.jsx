import React, { useEffect, useState } from "react";
import Navbar from "../../components/anbarcompanents/anbarnav";
import { Outlet } from "react-router";


export default function Anbar() {
  return (

    <div className="sm:ml-[100px] ml-0 min-h-screen bg-[#FFFFFF] dark:bg-[#001233] text-[#001233]">
      <Navbar></Navbar>

      <Outlet />
    </div>
  )
}

