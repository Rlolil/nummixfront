const AttendanceCard = () => {
  const data = [
    {
      name: "Nigar Əliyeva",
      dept: "Maliyyə",
      entry: "09:00",
      exit: "18:00",
      workTime: "9:00",
      status: "İşdə",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Kamran Məmmədov",
      dept: "IT Şöbəsi",
      entry: "09:15 (+15m)",
      exit: "18:30",
      workTime: "9:15",
      status: "Gecikib",
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "Səbinə Həsənova",
      dept: "Marketinq",
      entry: "08:55",
      exit: "18:00",
      workTime: "9:05",
      status: "İşdə",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Elvin Quliyev",
      dept: "Satış",
      entry: "09:30 (+30m)",
      exit: "--",
      workTime: "--",
      status: "İşdə",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Ləman Rəhimova",
      dept: "İnsan Resursları",
      entry: "--",
      exit: "--",
      workTime: "--",
      status: "Məzuniyyət",
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "Tural Əhmədov",
      dept: "IT Şöbəsi",
      entry: "09:05 (+5m)",
      exit: "--",
      workTime: "--",
      status: "İşdə",
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl border border-gray-200 max-w-5xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Bugünkü Davamiyyət</h2>
        <span className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-600">9 Oktyabr 2025</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
            <tr>
              <th className="px-4 py-2 text-left">İşçi</th>
              <th className="px-4 py-2 text-left">Giriş</th>
              <th className="px-4 py-2 text-left">Çıxış</th>
              <th className="px-4 py-2 text-left">İş saatı</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.dept}</div>
                </td>
                <td className="px-4 py-2">{item.entry}</td>
                <td className="px-4 py-2">{item.exit}</td>
                <td className="px-4 py-2">{item.workTime}</td>
                <td className="px-4 py-2">
                  <span className={`text-xs px-2 py-1 rounded ${item.color}`}>
                    {item.status}
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
