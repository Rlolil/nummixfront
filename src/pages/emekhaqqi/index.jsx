import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
function EmekHaqqi() {
  const navigationItems = [
    "Dashboard",
    "Employees",
    "Payroll",
    "Leave",
    "Attendance",
    "Calendar",
    "Reports",
    "Employee Portal",
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/").pop();
  const [activeItem, setActiveItem] = useState("Dashboard");
  useEffect(() => {
    const matchedItem = navigationItems.find(
      (item) => item.toLowerCase().replace(/\s+/g, "") === currentPath
    );
    if (matchedItem) {
      setActiveItem(matchedItem);
    }
  }, [currentPath]);
  return (
    <div className=" sm:ml-[100px] sm:mt-[20px] max-w-[1320px] mt-[100px] ml-[0px] px-4 sm:px-6 lg:px-8">
      <h2 className="md:text-4xl  text-2xl font-bold mb-4">Hr & Emek Haqqi</h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  items-center justify-between gap-4 bg-gray-200 p-2 rounded-md w-full">
        {navigationItems.map((item) => (
          <Link
            onClick={() => setActiveItem(item)}
            to={`/emekhaqqi/${item.toLowerCase().replace(/\s+/g, "")}`}
            key={item}
            className={` ${
              activeItem === item ? "bg-gray-300" : ""
            } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
          >
            <button key={item}>{item}</button>
          </Link>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default EmekHaqqi;
