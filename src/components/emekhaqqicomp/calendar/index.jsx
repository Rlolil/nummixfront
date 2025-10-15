import MonthlyEventsCard from "./events";
import UpcomingEventsCard from "./closeevents";
import EventCalendar from "./Teqvim";
function Calendar() {
  return (
    <div className="space-y-6 my-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl">Calendar</p>
          <p className="text-gray-600">Mühüm tarixlər və xatırlatmalar</p>
        </div>
        <div>
          <button
            // onClick={() => setModalOpen(true)}
            className="bg-blue-600 rounded-xl p-2 flex items-center gap-2 hover:bg-blue-700"
          >
            <span className="text-[18px] text-white">+</span>
            <span className="text-white">Yeni Sorğu</span>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr]  gap-4 grid-cols-1">
        <div className="border border-gray-200 rounded-xl shadow-sm p-4"><EventCalendar /></div>
        <div><UpcomingEventsCard /></div>
      </div>
      <div>
        <MonthlyEventsCard />
      </div>
    </div>
  );
}

export default Calendar;
