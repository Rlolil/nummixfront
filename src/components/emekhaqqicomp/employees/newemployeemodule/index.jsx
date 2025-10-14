import { FiX } from "react-icons/fi";

const AddEmployeeDialog = ({ isDialogOpen, onClose }) => {

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
          <span className="sr-only">Close</span>
        </button>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-lg font-semibold">Yeni İşçi Əlavə Et</h2>
        </div>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Ad</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ad daxil edin"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Soyad</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Soyad daxil edin"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Vəzifə</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Vəzifə daxil edin"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Şöbə</label>
              <select className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Şöbə seçin</option>
                <option>Maliyyə</option>
                <option>IT Şöbəsi</option>
                <option>Marketinq</option>
                <option>Satış</option>
                <option>İnsan Resursları</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Əmək haqqı (₼)</label>
              <input
                type="number"
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="2000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Müqavilə tarixi</label>
              <input
                type="date"
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Telefon</label>
              <input
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+994 50 123 45 67"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@company.az"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">VÖEN</label>
            <input
              className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="VÖEN nömrəsi"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Şəxsiyyət vəsiqəsi seriya nömrəsi
            </label>
            <input
              className="w-full h-9 px-3 py-1 border rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="AZE1234567"
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button
              className="px-4 py-2 border rounded-md bg-white text-gray-900 hover:bg-gray-100"
              onClick={onClose}
            >
              Ləğv et
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Yadda saxla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeDialog;
