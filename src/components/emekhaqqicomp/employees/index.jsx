import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  FiPlus,
  FiSearch,
  FiDownload,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import AddEmployeeDialog from "./newemployeemodule";

const Employees = () => {
  const { t } = useTranslation();
  const initialEmployees = [
    {
      id: "EMP001",
      name: "Nigar Əliyeva",
      position: "Baş Mühasib",
      email: "nigar.aliyeva@company.az",
      departmentKey: "finance",
      salary: "₼2.500",
      statusKey: "active",
      statusColor: "green",
    },
    {
      id: "EMP002",
      name: "Kamran Məmmədov",
      position: "IT Meneceri",
      email: "kamran.mammadov@company.az",
      departmentKey: "it",
      salary: "₼3.200",
      statusKey: "active",
      statusColor: "green",
    },
    {
      id: "EMP003",
      name: "Səbinə Həsənova",
      position: "Marketinq Direktoru",
      email: "sabina.hasanova@company.az",
      departmentKey: "marketing",
      salary: "₼2.800",
      statusKey: "active",
      statusColor: "green",
    },
    {
      id: "EMP004",
      name: "Elvin Quliyev",
      position: "Satış Meneceri",
      email: "elvin.quliyev@company.az",
      departmentKey: "sales",
      salary: "₼1.800",
      statusKey: "active",
      statusColor: "green",
    },
    {
      id: "EMP005",
      name: "Ləman Rəhimova",
      position: "HR Mütəxəssisi",
      email: "leman.rahimova@company.az",
      departmentKey: "hr",
      salary: "₼1.600",
      statusKey: "onLeave",
      statusColor: "orange",
    },
    {
      id: "EMP006",
      name: "Tural Əhmədov",
      position: "Proqramçı",
      email: "tural.ahmadov@company.az",
      departmentKey: "it",
      salary: "₼2.200",
      statusKey: "active",
      statusColor: "green",
    },
  ];
  const [employees, setEmployees] = useState(initialEmployees);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewEmployee, setViewEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);
  const [search, setSearch] = useState("");

  const anyModalOpen = useMemo(
    () => isDialogOpen || !!viewEmployee || !!editEmployee,
    [isDialogOpen, viewEmployee, editEmployee]
  );
  if (anyModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const openView = (emp) => setViewEmployee(emp);
  const closeView = () => setViewEmployee(null);
  const openEdit = (emp, idx) => {
    setEditEmployee({ ...emp });
    setEditIndex(idx);
  };
  const closeEdit = () => {
    setEditEmployee(null);
    setEditIndex(-1);
  };
  const handleEditChange = (field, value) => {
    setEditEmployee((prev) => ({ ...prev, [field]: value }));
  };
  const normalizeStatusColor = (statusKey) =>
    statusKey === "active" ? "green" : "orange";
  const ensureSalaryFormat = (salary) => {
    if (salary == null) return "";
    const s = String(salary).trim();
    return s.startsWith("₼") ? s : `₼${s}`;
  };
  const saveEdit = () => {
    if (editIndex < 0 || !editEmployee) return;
    const updated = [...employees];
    updated[editIndex] = {
      ...editEmployee,
      salary: ensureSalaryFormat(editEmployee.salary),
      statusColor: normalizeStatusColor(editEmployee.statusKey),
    };
    setEmployees(updated);
    closeEdit();
  };
  const handleDelete = (idx) => {
    const emp = employees[idx];
    const confirmed = window.confirm(
      t("pages.hr.employees.confirmDelete", {
        defaultValue: "Delete {{name}} ({{id}})?",
        name: emp?.name,
        id: emp?.id,
      })
    );
    if (!confirmed) return;
    setEmployees((prev) => prev.filter((_, i) => i !== idx));
  };

  const filteredEmployees = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return employees;
    const tokens = q.split(/\s+/);
    return employees.filter((emp) =>
      tokens.every((tok) =>
        (emp.name && emp.name.toLowerCase().includes(tok)) ||
        (emp.position && emp.position.toLowerCase().includes(tok)) ||
        (emp.id && emp.id.toLowerCase().includes(tok)) ||
        (emp.email && emp.email.toLowerCase().includes(tok)) ||
        (emp.departmentKey && emp.departmentKey.toLowerCase().includes(tok))
      )
    );
  }, [employees, search]);

  return (
    <div className="flex-1 overflow-auto p-6 space-y-6 text-[#001233]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#023E7D]">{t('pages.hr.employees.title', { defaultValue: 'Employees' })}</h2>
          <p className="text-[#7D8597]">{t('pages.hr.employees.subtitle', { defaultValue: 'Manage all employees' })}</p>
        </div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 bg-[#0466CB] hover:bg-[#0453A4] text-white px-4 py-2 rounded-md"
        >
          <FiPlus className="w-4 h-4" />
          {t('pages.hr.employees.new', { defaultValue: 'New Employee' })}
        </button>
        {isDialogOpen && (
          <AddEmployeeDialog
            isDialogOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        )}
      </div>
      <div className="bg-[#FFFFFF] border border-[#33415C] rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#7D8597]" />
            <input
              className="w-full pl-10 pr-3 py-2 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] placeholder:text-[#7D8597] focus:outline-none"
              placeholder={t('pages.hr.employees.searchPlaceholder', { defaultValue: 'Search employee (name, position, ID)' })}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7D8597] hover:text-[#023E7D]"
                aria-label={t('common.clear', { ns: 'translation', defaultValue: 'Clear' })}
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>
          <select className="flex items-center justify-between gap-2 px-3 py-2 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-sm w-full sm:w-48">
            <option>{t('pages.hr.employees.filters.label', { defaultValue: 'Filter' })}</option>
            <option>{t('pages.hr.employees.filters.allDepartments', { defaultValue: 'All departments' })}</option>
            <option>{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</option>
            <option>{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</option>
            <option>{t('pages.hr.departments.marketing', { defaultValue: 'Marketing' })}</option>
            <option>{t('pages.hr.departments.sales', { defaultValue: 'Sales' })}</option>
            <option>{t('pages.hr.departments.hr', { defaultValue: 'Human Resources' })}</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-2 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-sm text-[#023E7D] hover:bg-[#F5F8FF]">
            <FiDownload className="w-4 h-4" />
            <span className="hidden sm:inline">{t('common.export', { ns: 'translation', defaultValue: 'Export' })}</span>
          </button>
        </div>
      </div>
      <div className="bg-[#FFFFFF] border border-[#33415C] rounded-xl overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F5F8FF] border-b border-[#979DAC]">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-[#5C677D] uppercase">
                {t('pages.hr.employees.table.employee', { defaultValue: 'Employee' })}
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#5C677D] uppercase">
                {t('pages.hr.employees.table.position', { defaultValue: 'Position' })}
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#5C677D] uppercase">
                {t('pages.hr.employees.table.department', { defaultValue: 'Department' })}
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#5C677D] uppercase">
                {t('pages.hr.employees.table.salary', { defaultValue: 'Salary' })}
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#5C677D] uppercase">
                {t('pages.hr.employees.table.status', { defaultValue: 'Status' })}
              </th>
              <th className="px-6 py-3 text-left text-xs text-[#5C677D] uppercase">
                {t('pages.hr.employees.table.actions', { defaultValue: 'Actions' })}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#979DAC]">
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-6 text-center text-sm text-[#7D8597]">
                  {t('common.noResults', { ns: 'translation', defaultValue: 'No results found' })}
                </td>
              </tr>
            )}
            {filteredEmployees.map((employee, idx) => (
              <tr key={employee.id} className="hover:bg-[#F5F8FF]">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      {employee.name[0]}
                    </div>
                    <div className="ml-4">
                      <div className="text-[#001233]">{employee.name}</div>
                      <div className="text-sm text-[#7D8597]">{employee.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-[#001233]">{employee.position}</div>
                  <div className="text-sm text-[#7D8597]">{employee.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#001233]">
                  {t(`pages.hr.departments.${employee.departmentKey}`, { defaultValue: employee.departmentKey })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#001233]">
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
                    {t(`pages.hr.employees.status.${employee.statusKey}`, { defaultValue: employee.statusKey })}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md hover:bg-[#F5F8FF]" onClick={() => openView(employee)}>
                      <FiEye className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md hover:bg-[#F5F8FF]" onClick={() => openEdit(employee, idx)}>
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-md text-red-600 hover:text-red-700" onClick={() => handleDelete(idx)}>
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-[#7D8597]">
        {t('pages.hr.employees.footer.showing', { count: filteredEmployees.length, total: employees.length, defaultValue: 'Showing: {{count}} results (Total: {{total}} employees)' })}
      </div>
      {viewEmployee && (
        <div>
          <div onClick={closeView} className="bg-black opacity-50 fixed inset-0 z-51"></div>
          <div
            role="dialog"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-52 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border border-[#33415C] rounded-lg shadow-lg p-6 sm:max-w-lg"
          >
            <button
              className="absolute top-4 right-4 opacity-70 hover:opacity-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onClick={closeView}
            >
              <FiX className="w-4 h-4" />
              <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
            </button>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-[#023E7D]">{t('pages.hr.employees.viewTitle', { defaultValue: 'Employee Details' })}</h2>
            </div>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-[#7D8597]">{t('pages.hr.employees.table.employee', { defaultValue: 'Employee' })}</div>
                  <div className="font-medium">{viewEmployee.name} ({viewEmployee.id})</div>
                </div>
                <div>
                  <div className="text-sm text-[#7D8597]">{t('pages.hr.employees.table.position', { defaultValue: 'Position' })}</div>
                  <div className="font-medium">{viewEmployee.position}</div>
                </div>
                <div>
                  <div className="text-sm text-[#7D8597]">Email</div>
                  <div className="font-medium">{viewEmployee.email}</div>
                </div>
                <div>
                  <div className="text-sm text-[#7D8597]">{t('pages.hr.employees.table.department', { defaultValue: 'Department' })}</div>
                  <div className="font-medium">{t(`pages.hr.departments.${viewEmployee.departmentKey}`, { defaultValue: viewEmployee.departmentKey })}</div>
                </div>
                <div>
                  <div className="text-sm text-[#7D8597]">{t('pages.hr.employees.table.salary', { defaultValue: 'Salary' })}</div>
                  <div className="font-medium">{viewEmployee.salary}</div>
                </div>
                <div>
                  <div className="text-sm text-[#7D8597]">{t('pages.hr.employees.table.status', { defaultValue: 'Status' })}</div>
                  <div className="font-medium">{t(`pages.hr.employees.status.${viewEmployee.statusKey}`, { defaultValue: viewEmployee.statusKey })}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {editEmployee && (
        <div>
          <div onClick={closeEdit} className="bg-black opacity-50 fixed inset-0 z-51"></div>
          <div
            role="dialog"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-52 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border border-[#33415C] rounded-lg shadow-lg p-6 sm:max-w-lg"
          >
            <button
              className="absolute top-4 right-4 opacity-70 hover:opacity-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onClick={closeEdit}
            >
              <FiX className="w-4 h-4" />
              <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
            </button>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-[#023E7D]">{t('pages.hr.employees.editTitle', { defaultValue: 'Edit Employee' })}</h2>
            </div>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('pages.hr.employees.modal.name', { defaultValue: 'Name' })}</label>
                  <input
                    className="w-full h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none"
                    value={editEmployee.name}
                    onChange={(e) => handleEditChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">ID</label>
                  <input
                    className="w-full h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none"
                    value={editEmployee.id}
                    onChange={(e) => handleEditChange('id', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('pages.hr.employees.table.position', { defaultValue: 'Position' })}</label>
                  <input
                    className="w-full h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none"
                    value={editEmployee.position}
                    onChange={(e) => handleEditChange('position', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none"
                    value={editEmployee.email}
                    onChange={(e) => handleEditChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('pages.hr.employees.table.department', { defaultValue: 'Department' })}</label>
                  <select
                    className="w-full h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-sm text-[#001233] focus:outline-none"
                    value={editEmployee.departmentKey}
                    onChange={(e) => handleEditChange('departmentKey', e.target.value)}
                  >
                    <option value="finance">{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</option>
                    <option value="it">{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</option>
                    <option value="marketing">{t('pages.hr.departments.marketing', { defaultValue: 'Marketing' })}</option>
                    <option value="sales">{t('pages.hr.departments.sales', { defaultValue: 'Sales' })}</option>
                    <option value="hr">{t('pages.hr.departments.hr', { defaultValue: 'Human Resources' })}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('pages.hr.employees.table.salary', { defaultValue: 'Salary' })}</label>
                  <input
                    className="w-full h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-base text-[#001233] focus:outline-none"
                    value={editEmployee.salary}
                    onChange={(e) => handleEditChange('salary', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('pages.hr.employees.table.status', { defaultValue: 'Status' })}</label>
                  <select
                    className="w-full h-9 px-3 py-1 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-sm text-[#001233] focus:outline-none"
                    value={editEmployee.statusKey}
                    onChange={(e) => handleEditChange('statusKey', e.target.value)}
                  >
                    <option value="active">{t('pages.hr.employees.status.active', { defaultValue: 'Active' })}</option>
                    <option value="onLeave">{t('pages.hr.employees.status.onLeave', { defaultValue: 'On Leave' })}</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  className="px-4 py-2 border border-[#979DAC] rounded-md bg-[#FFFFFF] text-[#023E7D] hover:bg-[#F5F8FF]"
                  onClick={closeEdit}
                >
                  {t('pages.hr.employees.modal.cancel', { defaultValue: 'Cancel' })}
                </button>
                <button
                  onClick={saveEdit}
                  className="px-4 py-2 bg-[#0466CB] hover:bg-[#0453A4] text-white rounded-md"
                >
                  {t('pages.hr.employees.modal.save', { defaultValue: 'Save' })}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
