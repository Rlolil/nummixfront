import React, { useState } from "react";
function Settings() {
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("UTC (04:00)");
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="p-8 max-w-6xl sm:ml-[100px] sm:mt-0 mt-[80px]">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* General Section */}
      <h2 className="text-xl font-semibold mb-4 text-[1.6rem] ">General</h2>
      <section className="mb-3 max-w-4xl shadow rounded-2xl shadow-md">
        <div className="bg-white rounded-lg  ">
          <div className="p-6 flex flex-wrap  gap-4">
            <label className="text-base font-medium">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className=" px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-left w-full "
            >
              <option className="w-full text-left">English</option>
              <option className="w-full text-left">Azərbaycan</option>
              <option className="w-full text-left">Русский</option>
            </select>
          </div>

          {/* Time Zone */}
          <div className="p-6 flex flex-wrap gap-5">
            <label className="text-base font-medium">Time Zone</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="px-4 py-2 bg-gray-50 border  w-full border-gray-300 rounded-lg focus:outline-none  text-left"
            >
              <option>UTC (04:00)</option>
              <option>UTC (03:00)</option>
              <option>UTC (05:00)</option>
            </select>
          </div>
        </div>

        {/* Account Section */}
        <h2 className="text-xl font-semibold mb-4 ml-4  text-[1.6rem]">
          Account
        </h2>
        <section className="max-w-4xl  rounded-md">
          <div className="bg-white rounded-lg  ">
            {/* Email */}
            <div className="p-6 flex items-center justify-between ">
              <label className="text-base font-medium">Email</label>
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="text-gray-500 w-60 border border-gray-300 rounded-md px-3 py-2 
             focus:outline-none focus:ring-0 focus:border-gray-300"
                />
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailNotifications ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      emailNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="p-6 flex items-center justify-between ">
              <label className="text-base font-medium">Password</label>
              <button className="px-6 py-2 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                Change Password
              </button>
            </div>

            <div className="p-6">
              <label className="text-base font-medium">
                Two Factor Authentication
              </label>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Settings;
