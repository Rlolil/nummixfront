import React from 'react';

const PersonalDocuments = () => {
  return (
    <div className="space-y-6">
      {/* Şəxsi Sənədlər */}
      <div className="bg-white text-gray-700 flex flex-col gap-6 rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">Şəxsi Sənədlər</h4>
        </div>

        {/* Document List */}
        <div className="space-y-3">
          {/* First Document */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-8 h-8 text-blue-600">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <div>
                <p className="text-gray-900">Əmək müqaviləsi</p>
                <p className="text-sm text-gray-500">Yüklənmə tarixi: 2019-06-01</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md h-8 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 mr-2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              Yüklə
            </button>
          </div>

          {/* Second Document */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-8 h-8 text-green-600">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <div>
                <p className="text-gray-900">Tibbi arayış</p>
                <p className="text-sm text-gray-500">Etibarlılıq: 2025-12-31</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center text-sm font-medium bg-green-600 text-white hover:bg-green-700 rounded-md h-8 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 mr-2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              Yüklə
            </button>
          </div>

          {/* Third Document */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-8 h-8 text-purple-600">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <div>
                <p className="text-gray-900">Şəxsiyyət vəsiqəsi surəti</p>
                <p className="text-sm text-gray-500">Yüklənmə tarixi: 2023-05-15</p>
              </div>
            </div>
            <button className="inline-flex items-center justify-center text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 rounded-md h-8 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 mr-2">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              Yüklə
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDocuments;
