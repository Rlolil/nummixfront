import { GoArrowDown } from "react-icons/go";
import  { useState } from "react";
function NewQuestion({ setModal }) {
  const [vacationType, setVacationType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
    const handleClose = () => {
        setModal(false);
    }
  return (
    <div>
      <div onClick={handleClose} className="bg-black opacity-50 fixed inset-0 z-50"></div>
      <div
        role="dialog"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg p-6 bg-white border rounded-lg shadow-lg border-gray-200 "
      >
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold">Məzuniyyət Sorğusu</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Məzuniyyət növü
            </label>
            <button
              type="button"
              className="w-full p-2 border border-gray-300 rounded-md flex justify-between items-center"
            >
              <span>{vacationType || "Növ seçin"}</span>
              <GoArrowDown className="text-gray-600" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Başlanğıc
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bitmə</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Səbəb</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Məzuniyyət səbəbi..."
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Ləğv et
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Göndər
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          X
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}

export default NewQuestion;
