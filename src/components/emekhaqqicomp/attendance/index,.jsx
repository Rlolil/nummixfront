import React from "react";
import StatCard from "./statscard";
import { useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import AttendanceCard from "./AttendanceCard";
import WeeklySummary from "./weeklysummary";
import LatecomersCard from "./LatecomersCard";
import MyBigCalendar from "./Date";
function Attendance() {
  const stats = [
    {
      title: "Davamiyyət %",
      value: "96.5%",
      subtitle: "+2.3%",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "İşdə olan",
      value: "229",
      subtitle: "247-dən",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Gecikmələr",
      value: "8",
      subtitle: "Bu həftə",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Qeyri-ixtiyari",
      value: "10",
      subtitle: "Xəstə/İcazəli",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];
  const [selected, setSelected] = useState("Bu ay");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Bu ay", "Keçən ay", "Bu il", "Hamısı"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="space-y-6  my-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl">Davamiyyət Uçotu</p>
          <p className="text-gray-600">İş vaxtı qeydiyyatı və statistika</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-40 h-full">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              <span>{selected}</span>
              <FaChevronDown className="text-gray-400 text-xs ml-2" />
            </button>

            {isOpen && (
              <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md text-sm">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                      option === selected ? "bg-gray-50 font-medium" : ""
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <FaDownload className="w-4 h-4" />
            İxrac
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-4">
        <div className="">
          <AttendanceCard />
        </div>
        <div className="border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">
          <h2 className="text-xl font-medium">Teqvim</h2>
          <MyBigCalendar />
          <div className="space-y-2">
            <div className="flex items-center text-xl gap-2">
              <div className="rounded-full bg-green-600 w-4 h-4"></div>
              <p>İş günü</p>
            </div>
            <div className="flex items-center text-xl gap-2">
              <div className="rounded-full bg-red-600 w-4 h-4"></div>
              <p>Qeyri-iş günü</p>
            </div>
            <div className="flex items-center text-xl gap-2">
              <div className="rounded-full bg-blue-600 w-4 h-4"></div>
              <p>Bayram</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WeeklySummary />
      </div>
      <div>
        <LatecomersCard />
      </div>
    </div>
  );
}

export default Attendance;
