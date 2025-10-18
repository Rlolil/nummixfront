import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import NewQuestion from './new/indx';

const LeaveInfo = () => {
    const [modal, setModal] = useState(false);    
    if (modal) {
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = 'auto';
    }
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-gray-700 flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Cəmi Məzuniyyət</p>
          <p className="text-3xl text-blue-600 mt-2">28</p>
          <p className="text-sm text-gray-400 mt-1">gün</p>
        </div>
        <div className="text-gray-700 flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">İstifadə olunub</p>
          <p className="text-3xl text-orange-600 mt-2">8</p>
          <p className="text-sm text-gray-400 mt-1">gün</p>
        </div>
        <div className="text-gray-700 flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Qalıq</p>
          <p className="text-3xl text-green-600 mt-2">20</p>
          <p className="text-sm text-gray-400 mt-1">gün</p>
        </div>
        <div className="text-gray-700 flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Gözləyən</p>
          <p className="text-3xl text-purple-600 mt-2">0</p>
          <p className="text-sm text-gray-400 mt-1">sorğu</p>
        </div>
      </div>
      <div className="text-gray-700 flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">Məzuniyyət Tarixçəsi</h4>
          {modal && <NewQuestion setModal={setModal} />}
          <button
            onClick={() => setModal(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            <FaCalendarAlt className="text-white" />
            Yeni Sorğu
          </button>
        </div>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700">
                    İllik
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700">
                    Təsdiqlənib
                  </span>
                </div>
                <p className="text-gray-900 mt-2">2025-09-10 - 2025-09-15</p>
                <p className="text-sm text-blue-600">6 gün</p>
                <p className="text-sm text-gray-600 mt-1">Ailə ilə istirahət</p>
              </div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700">
                    Xəstəlik
                  </span>
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700">
                    Təsdiqlənib
                  </span>
                </div>
                <p className="text-gray-900 mt-2">2025-10-10 - 2025-10-12</p>
                <p className="text-sm text-blue-600">3 gün</p>
                <p className="text-sm text-gray-600 mt-1">Xəstəlik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveInfo;
