import { FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const AddEmployeeDialog = ({ isDialogOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div onClick={onClose} className="bg-black opacity-50 fixed inset-0 z-51"></div>
      <div
        role="dialog"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-52 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border rounded-lg shadow-lg p-6 sm:max-w-lg"
      >
        <button
          className="absolute top-4 right-4 opacity-70 hover:opacity-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onClick={onClose}
        >
          <FiX className="w-4 h-4" />
          <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
        </button>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-lg font-semibold">{t('pages.hr.employees.modal.title', { defaultValue: 'Add New Employee' })}</h2>
        </div>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.firstName', { defaultValue: 'First name' })}</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('pages.hr.employees.modal.firstNamePlaceholder', { defaultValue: 'Enter first name' })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.lastName', { defaultValue: 'Last name' })}</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('pages.hr.employees.modal.lastNamePlaceholder', { defaultValue: 'Enter last name' })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.position', { defaultValue: 'Position' })}</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('pages.hr.employees.modal.positionPlaceholder', { defaultValue: 'Enter position' })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.department', { defaultValue: 'Department' })}</label>
              <select className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>{t('pages.hr.employees.modal.selectDepartment', { defaultValue: 'Select department' })}</option>
                <option>{t('pages.hr.departments.finance', { defaultValue: 'Finance' })}</option>
                <option>{t('pages.hr.departments.it', { defaultValue: 'IT Department' })}</option>
                <option>{t('pages.hr.departments.marketing', { defaultValue: 'Marketing' })}</option>
                <option>{t('pages.hr.departments.sales', { defaultValue: 'Sales' })}</option>
                <option>{t('pages.hr.departments.hr', { defaultValue: 'Human Resources' })}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.salary', { defaultValue: 'Salary (₼)' })}</label>
              <input
                type="number"
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('pages.hr.employees.modal.salaryPlaceholder', { defaultValue: '2000' })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.contractDate', { defaultValue: 'Contract date' })}</label>
              <input
                type="date"
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.phone', { defaultValue: 'Phone' })}</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('pages.hr.employees.modal.phonePlaceholder', { defaultValue: '+994 50 123 45 67' })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('pages.hr.employees.modal.email', { defaultValue: 'Email' })}</label>
              <input
                type="email"
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t('pages.hr.employees.modal.emailPlaceholder', { defaultValue: 'email@company.az' })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t('pages.hr.employees.modal.tin', { defaultValue: 'TIN' })}</label>
            <input
              className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('pages.hr.employees.modal.tinPlaceholder', { defaultValue: 'Tax ID number' })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t('pages.hr.employees.modal.idSerial', { defaultValue: 'ID serial number' })}</label>
            <input
              className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('pages.hr.employees.modal.idSerialPlaceholder', { defaultValue: 'AZE1234567' })}
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button
              className="px-4 py-2 border rounded-md bg-white text-gray-900 hover:bg-gray-100"
              onClick={onClose}
            >
              {t('pages.hr.employees.modal.cancel', { defaultValue: 'Cancel' })}
            </button>
            <button onClick={onClose} className="px-4 py-2 bg-black text-white rounded-md hover:opacity-50">
              {t('pages.hr.employees.modal.save', { defaultValue: 'Save' })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeDialog;
