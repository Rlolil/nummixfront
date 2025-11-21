import { useTranslation } from "react-i18next";

const AttendanceCard = () => {
  const { t } = useTranslation();
  const data = [
    {
      name: "Nigar Əliyeva",
      departmentKey: "finance",
      entry: "09:00",
      exit: "18:00",
      workTime: "9:00",
      statusKey: "present",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Kamran Məmmədov",
      departmentKey: "it",
      entry: "09:15 (+15m)",
      exit: "18:30",
      workTime: "9:15",
      statusKey: "late",
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "Səbinə Həsənova",
      departmentKey: "marketing",
      entry: "08:55",
      exit: "18:00",
      workTime: "9:05",
      statusKey: "present",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Elvin Quliyev",
      departmentKey: "sales",
      entry: "09:30 (+30m)",
      exit: "--",
      workTime: "--",
      statusKey: "present",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Ləman Rəhimova",
      departmentKey: "hr",
      entry: "--",
      exit: "--",
      workTime: "--",
      statusKey: "onLeave",
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "Tural Əhmədov",
      departmentKey: "it",
      entry: "09:05 (+5m)",
      exit: "--",
      workTime: "--",
      statusKey: "present",
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="p-6 bg-[#FFFFFF] dark:bg-[#33415C] rounded-xl border border-[#33415C] dark:border-[#979DAC] max-w-5xl text-[#001233] dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#023E7D] dark:text-white">{t('pages.hr.attendance.todayTitle', { defaultValue: "Today's Attendance" })}</h2>
        <span className="text-sm px-3 py-1 rounded bg-blue-50 dark:bg-[#023E7D] text-blue-600 dark:text-[#0453A4]">9 Oct 2025</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#F5F8FF] dark:bg-[#002855] text-[#5C677D] dark:text-[#5C677D] text-xs uppercase border-b border-[#979DAC] dark:border-[#979DAC]">
            <tr>
              <th className="px-4 py-2 text-left">{t('pages.hr.attendance.table.employee', { defaultValue: 'Employee' })}</th>
              <th className="px-4 py-2 text-left">{t('pages.hr.attendance.table.checkIn', { defaultValue: 'Check-in' })}</th>
              <th className="px-4 py-2 text-left">{t('pages.hr.attendance.table.checkOut', { defaultValue: 'Check-out' })}</th>
              <th className="px-4 py-2 text-left">{t('pages.hr.attendance.table.workHours', { defaultValue: 'Work hours' })}</th>
              <th className="px-4 py-2 text-left">{t('pages.hr.attendance.table.status', { defaultValue: 'Status' })}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#979DAC] dark:divide-[#979DAC]">
            {data.map((item, idx) => (
              <tr key={idx} className="hover:bg-[#F5F8FF] dark:hover:bg-[#002855]">
                <td className="px-4 py-2">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-[#7D8597] dark:text-[#5C677D]">{t(`pages.hr.departments.${item.departmentKey}`, { defaultValue: item.departmentKey })}</div>
                </td>
                <td className="px-4 py-2">{item.entry}</td>
                <td className="px-4 py-2">{item.exit}</td>
                <td className="px-4 py-2">{item.workTime}</td>
                <td className="px-4 py-2">
                  <span className={`text-xs px-2 py-1 rounded ${item.color}`}>
                    {t(`pages.hr.attendance.status.${item.statusKey}`, { defaultValue: item.statusKey })}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceCard;
