import React from "react";
import { useTranslation } from "react-i18next";

const latecomers = [
  { name: "Kamran Məmmədov", departmentKey: "it", lateBy: 15, entryTime: "09:15" },
  { name: "Elvin Quliyev", departmentKey: "sales", lateBy: 30, entryTime: "09:30" },
  { name: "Tural Əhmədov", departmentKey: "it", lateBy: 5, entryTime: "09:05" },
];

function LatecomersCard() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#33415C] text-[#001233] dark:text-white flex flex-col gap-6 rounded-xl border border-[#33415C] dark:border-[#979DAC] p-6 shadow-sm">
      <header>
        <h4 className="text-xl font-semibold leading-none text-[#023E7D] dark:text-white">{t('pages.hr.attendance.latecomers.title', { defaultValue: 'Latecomers This Week' })}</h4>
      </header>

      <div className="space-y-3">
        {latecomers.map(({ name, departmentKey, lateBy, entryTime }) => (
          <div key={name} className="flex items-center justify-between p-4 bg-orange-50 dark:bg-[#002855] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-[#023E7D] text-orange-600 dark:text-[#0453A4] rounded-full flex items-center justify-center font-semibold text-lg">
                {name[0]}
              </div>
              <div>
                <p className="text-[#001233] dark:text-white">{name}</p>
                <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">{t(`pages.hr.departments.${departmentKey}`, { defaultValue: departmentKey })}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-orange-600 dark:text-[#0453A4]">{lateBy} {t('pages.hr.attendance.latecomers.minutesSuffix', { defaultValue: 'min' })}</p>
              <p className="text-sm text-[#7D8597] dark:text-[#5C677D]">{t('pages.hr.attendance.latecomers.entryLabel', { defaultValue: 'Check-in' })}: {entryTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatecomersCard;
