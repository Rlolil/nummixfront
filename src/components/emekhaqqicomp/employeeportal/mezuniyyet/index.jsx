import React, { useMemo, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import NewQuestion from './new/indx';

const LeaveInfo = () => {
    const [modal, setModal] = useState(false);
    const { t } = useTranslation('app');
    const [items, setItems] = useState([
      { type: 'annual', status: 'approved', start: '2025-09-10', end: '2025-09-15', days: 6, description: t('pages.hr.leave.requests.description.annual', { defaultValue: 'Annual leave' }) },
      { type: 'sick', status: 'approved', start: '2025-10-10', end: '2025-10-12', days: 3, description: t('pages.hr.leave.modal.types.sick', { defaultValue: 'Sick leave' }) },
    ]);
    const [editItem, setEditItem] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const anyModalOpen = useMemo(() => modal || !!editItem, [modal, editItem]);
    if (anyModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    const openEdit = (item, idx) => { setEditItem({ ...item }); setEditIndex(idx); };
    const closeEdit = () => { setEditItem(null); setEditIndex(-1); };
    const saveEdit = () => {
      if (editIndex < 0 || !editItem) return;
      const next = [...items];
      next[editIndex] = { ...editItem };
      setItems(next);
      closeEdit();
    };
    const handleDelete = (idx) => {
      const confirmed = window.confirm(t('common.confirmDelete', { ns: 'translation', defaultValue: 'Are you sure you want to delete this item?' }));
      if (!confirmed) return;
      setItems(prev => prev.filter((_, i) => i !== idx));
    };
  return (
    <div className="space-y-6 text-[#001233]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#FFFFFF] flex flex-col gap-6 rounded-xl border border-[#33415C] p-6">
          <p className="text-sm text-[#5C677D]">{t('pages.hr.leave.cards.totalDays')}</p>
          <p className="text-3xl text-blue-600 mt-2">28</p>
          <p className="text-sm text-[#7D8597] mt-1">{t('pages.hr.leave.common.daysSuffix')}</p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col gap-6 rounded-xl border border-[#33415C] p-6">
          <p className="text-sm text-[#5C677D]">{t('pages.hr.leave.cards.used')}</p>
          <p className="text-3xl text-orange-600 mt-2">8</p>
          <p className="text-sm text-[#7D8597] mt-1">{t('pages.hr.leave.common.daysSuffix')}</p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col gap-6 rounded-xl border border-[#33415C] p-6">
          <p className="text-sm text-[#5C677D]">{t('pages.hr.leave.cards.remaining')}</p>
          <p className="text-3xl text-green-600 mt-2">20</p>
          <p className="text-sm text-[#7D8597] mt-1">{t('pages.hr.leave.common.daysSuffix')}</p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col gap-6 rounded-xl border border-[#33415C] p-6">
          <p className="text-sm text-[#5C677D]">{t('pages.hr.leave.cards.pending')}</p>
          <p className="text-3xl text-purple-600 mt-2">0</p>
          <p className="text-sm text-[#7D8597] mt-1">{t('pages.hr.portal.leave.suffix.requests')}</p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] flex flex-col gap-6 rounded-xl border border-[#33415C] p-6">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-[#023E7D]">{t('pages.hr.portal.leave.history.title')}</h4>
          {modal && <NewQuestion setModal={setModal} />}
          <button
            onClick={() => setModal(true)}
            className="flex items-center justify-center gap-2 bg-[#0466CB] hover:bg-[#0453A4] text-white py-2 px-4 rounded-md"
          >
            <FaCalendarAlt className="text-white" />
            {t('pages.hr.leave.newRequest')}
          </button>
        </div>
        <div className="space-y-4">
          {items.length === 0 && (
            <div className="p-6 text-center text-[#7D8597] text-sm border border-dashed rounded-lg">
              {t('common.noResults', { ns: 'translation', defaultValue: 'No results' })}
            </div>
          )}
          {items.map((it, idx) => (
            <div key={idx} className="p-4 border border-[#979DAC] rounded-lg bg-[#FFFFFF]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ${it.type === 'sick' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                      {it.type === 'sick' ? t('pages.hr.leave.modal.types.sick') : t('pages.hr.leave.modal.types.annual')}
                    </span>
                    <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ${it.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {it.status === 'approved' ? t('pages.hr.leave.requests.status.approved') : t('pages.hr.leave.requests.status.pending', { defaultValue: 'Pending' })}
                    </span>
                  </div>
                  <p className="text-[#001233] mt-2">{it.start} - {it.end}</p>
                  <p className="text-sm text-blue-600">{it.days} {t('pages.hr.leave.common.daysSuffix')}</p>
                  <p className="text-sm text-[#7D8597] mt-1">{it.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-[#F5F8FF] rounded-md" title={t('common.edit', { ns: 'translation', defaultValue: 'Edit' })} onClick={() => openEdit(it, idx)}>
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-md text-red-600 hover:text-red-700" title={t('common.delete', { ns: 'translation', defaultValue: 'Delete' })} onClick={() => handleDelete(idx)}>
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {editItem && (
          <div>
            <div onClick={closeEdit} className="fixed inset-0 bg-black opacity-50 z-50"></div>
            <div role="dialog" aria-modal="true" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-51 w-full max-w-md bg-[#FFFFFF] border border-[#33415C] rounded-lg shadow p-6 text-[#001233]">
              <button onClick={closeEdit} className="absolute top-4 right-4 text-[#7D8597] hover:text-[#001233]">
                <FiX className="w-5 h-5" />
                <span className="sr-only">{t('pages.hr.employees.modal.close', { defaultValue: 'Close' })}</span>
              </button>
              <h3 className="text-lg font-semibold mb-4 text-[#023E7D]">{t('pages.hr.portal.leave.history.editTitle', { defaultValue: 'Edit Leave' })}</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.leave.modal.leaveType', { defaultValue: 'Leave type' })}</label>
                  <select className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editItem.type} onChange={(e) => setEditItem(r => ({ ...r, type: e.target.value }))}>
                    <option value="annual">{t('pages.hr.leave.modal.types.annual')}</option>
                    <option value="sick">{t('pages.hr.leave.modal.types.sick')}</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.leave.modal.startDate')}</label>
                    <input type="date" className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editItem.start} onChange={(e) => setEditItem(r => ({ ...r, start: e.target.value }))} />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.leave.modal.endDate')}</label>
                    <input type="date" className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editItem.end} onChange={(e) => setEditItem(r => ({ ...r, end: e.target.value }))} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.leave.common.days', { defaultValue: 'Days' })}</label>
                    <input type="number" min="1" className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editItem.days} onChange={(e) => setEditItem(r => ({ ...r, days: Number(e.target.value) }))} />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.leave.requests.status.label', { defaultValue: 'Status' })}</label>
                    <select className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editItem.status} onChange={(e) => setEditItem(r => ({ ...r, status: e.target.value }))}>
                      <option value="approved">{t('pages.hr.leave.requests.status.approved')}</option>
                      <option value="pending">{t('pages.hr.leave.requests.status.pending', { defaultValue: 'Pending' })}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1 text-[#5C677D]">{t('pages.hr.leave.modal.reason', { defaultValue: 'Reason' })}</label>
                  <input className="w-full border border-[#979DAC] rounded-md px-3 py-2 text-sm bg-[#FFFFFF]" value={editItem.description} onChange={(e) => setEditItem(r => ({ ...r, description: e.target.value }))} />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="px-4 py-2 rounded-md border border-[#33415C] bg-[#FFFFFF] text-[#001233] hover:bg-[#F5F8FF]" onClick={closeEdit}>{t('pages.hr.employees.modal.cancel', { defaultValue: 'Cancel' })}</button>
                <button className="px-4 py-2 rounded-md bg-[#0466CB] text-white hover:bg-[#0453A4]" onClick={saveEdit}>{t('pages.hr.employees.modal.save', { defaultValue: 'Save' })}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveInfo;
