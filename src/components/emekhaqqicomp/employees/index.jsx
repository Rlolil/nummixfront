import React, { useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiChevronDown,
  FiDownload,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import AddEmployeeDialog from "./newemployeemodule";

const Employees = () => {
  const employees = [
    {
      id: "EMP001",
      name: "Nigar Əliyeva",
      position: "Baş Mühasib",
      email: "nigar.aliyeva@company.az",
      department: "Maliyyə",
      salary: "₼2.500",
      status: "Aktiv",
      statusColor: "green",
    },
    {
      id: "EMP002",
      name: "Kamran Məmmədov",
      position: "IT Meneceri",
      email: "kamran.mammadov@company.az",
      department: "IT Şöbəsi",
      salary: "₼3.200",
      status: "Aktiv",
      statusColor: "green",
    },
    {
      id: "EMP003",
      name: "Səbinə Həsənova",
      position: "Marketinq Direktoru",
      email: "sabina.hasanova@company.az",
      department: "Marketinq",
      salary: "₼2.800",
      status: "Aktiv",
      statusColor: "green",
    },
    {
      id: "EMP004",
      name: "Elvin Quliyev",
      position: "Satış Meneceri",
      email: "elvin.quliyev@company.az",
      department: "Satış",
      salary: "₼1.800",
      status: "Aktiv",
      statusColor: "green",
    },
    {
      id: "EMP005",
      name: "Ləman Rəhimova",
      position: "HR Mütəxəssisi",
      email: "leman.rahimova@company.az",
      department: "İnsan Resursları",
      salary: "₼1.600",
      status: "Məzuniyyətdə",
      statusColor: "orange",
    },
    {
      id: "EMP006",
      name: "Tural Əhmədov",
      position: "Proqramçı",
      email: "tural.ahmadov@company.az",
      department: "IT Şöbəsi",
      salary: "₼2.200",
      status: "Aktiv",
      statusColor: "green",
    },
  ];
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  if (isDialogOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="flex-1 overflow-auto p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">İşçilər</h2>
          <p className="text-gray-500">Bütün işçilərin idarə olunması</p>
        </div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <FiPlus className="w-4 h-4" />
          Yeni İşçi
        </button>
        {isDialogOpen && (
          <AddEmployeeDialog
            isDialogOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        )}
      </div>
      <div className="bg-white border rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              className="w-full pl-10 pr-3 py-2 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="İşçi axtar (ad, vəzifə, ID)"
            />
          </div>
          <select className="flex items-center justify-between gap-2 px-3 py-2 border rounded-md bg-white text-sm w-full sm:w-48">
            <option>Filter</option>
            <option>Bütün şöbələr</option>
            <option>Maliyyə</option>
            <option>IT Şöbəsi</option>
            <option>Marketinq</option>
            <option>Satış</option>
            <option>İnsan Resursları</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-sm hover:bg-gray-100">
            <FiDownload className="w-4 h-4" />
            <span className="hidden sm:inline">İxrac</span>
          </button>
        </div>
      </div>
      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                İşçi
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Vəzifə
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Şöbə
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Maaş
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">
                Əməliyyatlar
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      {employee.name[0]}
                    </div>
                    <div className="ml-4">
                      <div className="text-gray-900">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-900">{employee.position}</div>
                  <div className="text-sm text-gray-500">{employee.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {employee.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {employee.salary}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-md border ${
                      employee.statusColor === "green"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md hover:bg-gray-100">
                      <FiEye className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md hover:bg-gray-100">
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md text-red-600 hover:text-red-700">
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-500">
        Göstərilir: {employees.length} nəticə (Ümumi: {employees.length} işçi)
      </div>
    </div>
  );
};

export default Employees;
