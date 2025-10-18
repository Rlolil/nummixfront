import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import EmployeeSalaryTab from "./maas";
import LeaveInfo from "./mezuniyyet";
import { FiBell } from 'react-icons/fi';
import AttendanceInfo from "./attendance";
import PersonalDocuments from "./documents";
function EmployeePortal() {
  const [activeItem, setActiveItem] = useState("Maaş");
  return (
    <div className="overflow-auto my-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-medium">İşçi Portalı</h2>
          <p className="text-gray-600">Şəxsi məlumatlar və xidmətlər</p>
        </div>
        <div>
          <button className="bg-white border border-gray-200 rounded-xl flex items-center text-black py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell w-4 h-4 mr-2"
              aria-hidden="true"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
            </svg>
            Bildirişlər
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
            K
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Kamran Məmmədov
              </h3>
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-md">
                EMP002
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <p className="text-gray-500">Vəzifə</p>
                <p className="text-gray-900 font-medium">IT Meneceri</p>
              </div>
              <div>
                <p className="text-gray-500">Şöbə</p>
                <p className="text-gray-900 font-medium">IT Şöbəsi</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="text-gray-900 font-medium">
                  kamran.mammadov@company.az
                </p>
              </div>
              <div>
                <p className="text-gray-500">Telefon</p>
                <p className="text-gray-900 font-medium">+994 55 234 56 78</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100 transition">
            <FiEdit className="w-4 h-4" />
            Redaktə et
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  items-center justify-between gap-4 bg-gray-200 p-2 rounded-md w-full">
        <button
          onClick={() => setActiveItem("Maaş")}
          className={` ${
            activeItem === "Maaş" ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          Maaş
        </button>
        <button
          onClick={() => setActiveItem("Məzuniyyət")}
          className={` ${
            activeItem === "Məzuniyyət" ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          Məzuniyyət
        </button>
        <button
          onClick={() => setActiveItem("Davamiyyət")}
          className={` ${
            activeItem === "Davamiyyət" ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          Davamiyyət
        </button>
        <button
          onClick={() => setActiveItem("Sənədlər")}
          className={` ${
            activeItem === "Sənədlər" ? "bg-gray-300" : ""
          } w-full flex-1 py-2 px-4 text-center rounded-md hover:bg-gray-300 transition-colors duration-200`}
        >
          Sənədlər
        </button>
      </div>
      <div>
        {activeItem === "Maaş" && <EmployeeSalaryTab />}
        {activeItem === "Məzuniyyət" && <LeaveInfo />}
        {activeItem === "Davamiyyət" && <AttendanceInfo />}
        {activeItem === "Sənədlər" && <PersonalDocuments />}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex justify-between items-center pb-4">
          <h4 className="font-medium text-gray-900">Son Bildirişlər</h4>
          <FiBell className="w-6 h-6 text-gray-500" />
        </div>
        <div className="space-y-3 mt-4">
          <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-blue-900">Maaş ödənilib</p>
                <p className="text-sm text-gray-600 mt-1">
                  Sentyabr ayı üçün əməkhaqqınız hesabınıza köçürülüb
                </p>
                <p className="text-xs text-gray-400 mt-2">2025-10-01</p>
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
            </div>
          </div>
          <div className="p-4 rounded-lg border bg-blue-50 border-blue-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-blue-900">Məzuniyyət təsdiqləndi</p>
                <p className="text-sm text-gray-600 mt-1">
                  Məzuniyyət sorğunuz rəhbərlik tərəfindən təsdiqləndi
                </p>
                <p className="text-xs text-gray-400 mt-2">2025-09-28</p>
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
            </div>
          </div>
          <div className="p-4 rounded-lg border bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-gray-900">Sənəd yeniləmə xatırlatması</p>
                <p className="text-sm text-gray-600 mt-1">
                  Tibbi arayışınızın müddəti bu ay bitir. Yeniləyin.
                </p>
                <p className="text-xs text-gray-400 mt-2">2025-09-25</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default EmployeePortal;
