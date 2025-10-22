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
    <div className="bg-base-100 text-base-content flex flex-col gap-6 rounded-xl border border-base-300 p-6 shadow-lg">
      <header>
        <h4 className="text-xl font-semibold leading-none">{t('pages.hr.attendance.latecomers.title', { defaultValue: 'Latecomers This Week' })}</h4>
      </header>

      <div className="space-y-3">
        {latecomers.map(({ name, departmentKey, lateBy, entryTime }) => (
          <div key={name} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-lg">
                {name[0]}
              </div>
              <div>
                <p className="text-gray-900">{name}</p>
                <p className="text-sm text-gray-600">{t(`pages.hr.departments.${departmentKey}`, { defaultValue: departmentKey })}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-orange-600">{lateBy} {t('pages.hr.attendance.latecomers.minutesSuffix', { defaultValue: 'min' })}</p>
              <p className="text-sm text-gray-500">{t('pages.hr.attendance.latecomers.entryLabel', { defaultValue: 'Check-in' })}: {entryTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatecomersCard;
