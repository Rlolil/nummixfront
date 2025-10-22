import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LeaveRequestModal({ onClose }) {
  const { t } = useTranslation();
  const [worker, setWorker] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada təqdim etmə loqikasını əlavə et
    console.log({ worker, leaveType, startDate, endDate, reason });
    onClose();
  };

  return (
    <div>
      <div onClick={onClose} className="bg-black opacity-50 z-50 fixed inset-0"></div>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-200 bg-base-100 p-6 shadow-lg"
        tabIndex={-1}
      >
        <header className="mb-4 text-center sm:text-left">
          <h2 className="text-lg font-semibold">{t('pages.hr.leave.modal.title', { defaultValue: 'Leave Request' })}</h2>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('pages.hr.leave.modal.employee', { defaultValue: 'Employee' })}</label>
            <select
              value={worker}
              onChange={(e) => setWorker(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            >
              <option value="" disabled>
                {t('pages.hr.leave.modal.selectEmployee', { defaultValue: 'Select employee' })}
              </option>
              <option value="kamran">Kamran Məmmədov</option>
              <option value="elvin">Elvin Quliyev</option>
              <option value="tural">Tural Əhmədov</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('pages.hr.leave.modal.leaveType', { defaultValue: 'Leave type' })}</label>
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            >
              <option value="" disabled>
                {t('pages.hr.leave.modal.selectType', { defaultValue: 'Select type' })}
              </option>
              <option value="annual">{t('pages.hr.leave.modal.types.annual', { defaultValue: 'Annual' })}</option>
              <option value="sick">{t('pages.hr.leave.modal.types.sick', { defaultValue: 'Sick' })}</option>
              <option value="other">{t('pages.hr.leave.modal.types.other', { defaultValue: 'Other' })}</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('pages.hr.leave.modal.startDate', { defaultValue: 'Start date' })}</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('pages.hr.leave.modal.endDate', { defaultValue: 'End date' })}</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('pages.hr.leave.modal.reason', { defaultValue: 'Reason' })}</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              placeholder={t('pages.hr.leave.modal.reasonPlaceholder', { defaultValue: 'Enter reason for leave' })}
              className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-100"
            >
              {t('pages.hr.leave.modal.cancel', { defaultValue: 'Cancel' })}
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            >
              {t('pages.hr.leave.modal.submit', { defaultValue: 'Submit' })}
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 rounded text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LeaveRequestModal;
