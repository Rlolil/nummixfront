import { FiDownload, FiTrendingUp } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { ChartsGroup } from "../anbarqrafiks";
import { useTranslation } from "react-i18next";

function ItkiVeZayStatistikasi() {
  const { t } = useTranslation();
  const initial = [
    {
      tarix: "2025-10-01",
      mehsul: "Xammal A-101",
      miqdar: 2,
      sebeb: "Keyfiyyətsiz",
      itki: 25.0,
    },
    {
      tarix: "2025-10-03",
      mehsul: "Qablaşdırma qutusu",
      miqdar: 5,
      sebeb: "Zədələnmiş",
      itki: 11.5,
    },
    {
      tarix: "2025-10-05",
      mehsul: "Motor yağı",
      miqdar: 1,
      sebeb: "Son istifadə tarixi",
      itki: 18.75,
    },
  ];
  const [rows, setRows] = useState(initial);
  const [editing, setEditing] = useState(null); // { index, data }

  const openEdit = (index) => setEditing({ index, data: { ...rows[index] } });
  const closeEdit = () => setEditing(null);
  const saveEdit = () => {
    if (!editing) return;
    setRows((prev) =>
      prev.map((r, i) =>
        i === editing.index
          ? {
              ...editing.data,
              miqdar: Number(editing.data.miqdar || 0),
              itki: Number(editing.data.itki || 0),
            }
          : r
      )
    );
    closeEdit();
  };
  const handleDelete = (index) => {
    if (window.confirm(t('common.confirmDelete'))) {
      setReports((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="bg-[#FFFFFF]  dark:bg-[#001233] dark:text-white border border-[#33415C] rounded-2xl p-6 shadow-sm mt-6">
      <h3 className="text-lg font-medium dark:text-white text-[#023E7D] mb-4">
        {t('pages.warehouse.reports.lossAndWasteTitle')}
      </h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[#5C677D] border-b border-[#979DAC]">
            <th className="py-2">{t('pages.warehouse.table.date')}</th>
            <th className="py-2">{t('pages.warehouse.table.product')}</th>
            <th className="py-2">{t('pages.warehouse.table.quantity')}</th>
            <th className="py-2">{t('pages.warehouse.table.reason')}</th>
            <th className="py-2">{t('pages.warehouse.table.loss')} (₼)</th>
            <th className="py-2 text-right">{t('pages.warehouse.common.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#979DAC]">
              <td className="py-2">{row.tarix}</td>
              <td className="py-2">{row.mehsul}</td>
              <td>{row.miqdar}</td>
              <td>
                <span className="bg-[#FFFFFF] dark:bg-[#001233] dark:text-white border border-[#979DAC] text-[#5C677D] px-2 py-1 rounded-full text-xs">
                  {row.sebeb}
                </span>
              </td>
              <td className="text-red-500">₼{Number(row.itki).toFixed(2)}</td>
              <td className="py-2 text-right whitespace-nowrap">
                <button
                  onClick={() => openEdit(i)}
                  className="inline-flex items-center gap-1 px-2 py-1 border rounded border-[#0466CB] text-[#0466CB] hover:bg-[#0453A4] hover:text-white mr-2"
                >
                  <FaEdit />
                  <span className="hidden sm:inline">{t('pages.warehouse.common.edit')}</span>
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50"
                >
                  <FaTrash />
                  <span className="hidden sm:inline">{t('pages.warehouse.common.delete')}</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4  mr-15 text-sm font-medium">
        {t('common.total')}:{" "}
        <span className="text-red-500">
          ₼
          {rows.reduce((sum, row) => sum + Number(row.itki || 0), 0).toFixed(2)}
        </span>
      </div>

      {editing && (
        <div>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            onClick={closeEdit}
          ></div>
          <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl dark:bg-[#001233] dark:text-white -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-lg shadow-lg p-6 border border-[#33415C]">
            <div className="flex justify-between items-center border-b border-[#979DAC] pb-3">
              <h3 className="text-lg font-semibold dark:text-white text-[#023E7D]">
                {t('pages.warehouse.common.editRow')}
              </h3>
              <button
                onClick={closeEdit}
                className="text-xl text-[#7D8597] hover:text-[#023E7D]"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium">{t('pages.warehouse.table.date')}</label>
                <input
                  type="date"
                  className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]"
                  value={editing.data.tarix}
                  onChange={(e) =>
                    setEditing((prev) => ({
                      ...prev,
                      data: { ...prev.data, tarix: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.warehouse.table.product')}</label>
                <input
                  className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]"
                  value={editing.data.mehsul}
                  onChange={(e) =>
                    setEditing((prev) => ({
                      ...prev,
                      data: { ...prev.data, mehsul: e.target.value },
                    }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.warehouse.table.quantity')}</label>
                <input
                  type="number"
                  className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]"
                  value={editing.data.miqdar}
                  onChange={(e) =>
                    setEditing((prev) => ({
                      ...prev,
                      data: { ...prev.data, miqdar: Number(e.target.value) },
                    }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">{t('pages.warehouse.table.reason')}</label>
                <input
                  className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]"
                  value={editing.data.sebeb}
                  onChange={(e) =>
                    setEditing((prev) => ({
                      ...prev,
                      data: { ...prev.data, sebeb: e.target.value },
                    }))
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">{t('pages.warehouse.table.loss')} (₼)</label>
                <input
                  type="number"
                  step="any"
                  className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]"
                  value={editing.data.itki}
                  onChange={(e) =>
                    setEditing((prev) => ({
                      ...prev,
                      data: { ...prev.data, itki: Number(e.target.value) },
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 border-t border-[#979DAC] mt-4 pt-4">
              <button
                onClick={closeEdit}
                className="px-4 py-2 border border-[#979DAC]  dark:bg-[#001233] dark:text-white dark:hover:bg-[#002244] rounded bg-[#FFFFFF] text-[#023E7D] hover:bg-[#F5F8FF]"
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-[#0466CB] text-white rounded hover:bg-[#0453A4]"
              >
                {t('common.save')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HesabatAnalitika() {
  const { t } = useTranslation();
  return (
    <div className="p-6 space-y-6 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold dark:text-white text-[#023E7D]">
            {t('pages.warehouse.reports.title')}
          </h1>
          <p className="text-sm text-[#7D8597]">
            {t('pages.warehouse.reports.subtitle')}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <select className="border border-[#979DAC] dark:bg-[#001233] dark:text-white bg-[#FFFFFF] rounded-xl px-3 py-2 text-sm">
            <option>{t('common.period.thisMonth')}</option>
            <option>{t('common.period.thisWeek')}</option>
            <option>{t('common.period.thisQuarter')}</option>
            <option>{t('common.period.thisYear')}</option>
          </select>
          <button className="flex items-center gap-2 border border-[#979DAC] dark:hover:bg-[#002244] dark:text-white text-[#023E7D] rounded-xl px-4 py-2 hover:bg-[#F5F8FF] transition">
            <FiDownload className="w-4 h-4" /> {t('common.downloadPDF')}
          </button> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#FFFFFF]  dark:bg-[#001233] dark:text-white border border-[#33415C] rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-medium dark:text-white text-[#5C677D] flex items-center gap-2">
            {t('pages.warehouse.reports.stockTurnover')} <FiTrendingUp className="w-4 h-4" />
          </h3>
          <p className="text-3xl font-semibold mt-2  dark:text-white text-[#023E7D]">4.8x</p>
          <p className="text-xs text-green-600">+0.5 {t('pages.warehouse.reports.vsLastMonth')}</p>
        </div>

        <div className="bg-[#FFFFFF]  dark:bg-[#001233] dark:text-white border border-[#33415C] rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-medium dark:text-white text-[#5C677D] flex items-center gap-2">
            {t('pages.warehouse.reports.avgTurnoverTime')} <FiTrendingUp className="w-4 h-4" />
          </h3>
          <p className="text-3xl font-semibold mt-2  dark:text-white text-[#023E7D]">23 {t('pages.ai.common.days')}</p>
          <p className="text-xs text-green-600">-2 {t('pages.ai.common.days')} {t('pages.warehouse.reports.improvement')}</p>
        </div>

        <div className="bg-[#FFFFFF]  dark:bg-[#001233] dark:text-white border border-[#33415C] rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-medium dark:text-white text-[#5C677D]">{t('pages.warehouse.reports.totalLoss')}</h3>
          <p className="text-3xl font-semibold mt-2  dark:text-white text-[#023E7D]">₼ 55.25</p>
          <p className="text-xs text-[#7D8597]">{t('pages.warehouse.reports.lossDescription')}</p>
        </div>

        <div className="bg-[#FFFFFF]  dark:bg-[#001233] dark:text-white border border-[#33415C] rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-medium dark:text-white text-[#5C677D]">
            {t('pages.warehouse.reports.inventoryAccuracy')}
          </h3>
          <p className="text-3xl font-semibold mt-2  dark:text-white text-[#023E7D]">97.5%</p>
          <p className="text-xs text-[#7D8597]">{t('pages.warehouse.reports.lastInventoryCount')}</p>
        </div>
      </div>

      {/* 🔹 Ən çox satılan və ləng hərəkət edən məhsullar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#FFFFFF]  dark:bg-[#001233] dark:text-white border border-[#33415C] rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-medium dark:text-white mb-3">
            {t('pages.warehouse.reports.topSellingProducts')}
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left dark:text-white border-b border-[#979DAC]">
                <th className="py-2">{t('pages.warehouse.table.product')}</th>
                <th className="py-2">{t('pages.warehouse.table.quantity')}</th>
                <th className="py-2">{t('pages.warehouse.table.revenue')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#979DAC]">
                <td className="py-2">
                  Hazır məhsul B-205 <br />
                  <span className="text-xs text-[#7D8597]">HM-B205</span>
                </td>
                <td>450</td>
                <td>₼20 250</td>
              </tr>
              <tr className="border-b border-[#979DAC]">
                <td className="py-2">
                  Xammal A-101 <br />
                  <span className="text-xs text-[#7D8597]">XM-A101</span>
                </td>
                <td>380</td>
                <td>₼4 750</td>
              </tr>
              <tr>
                <td className="py-2">
                  Bolt M12x50 <br />
                  <span className="text-xs text-[#7D8597]">BT-M1250</span>
                </td>
                <td>1200</td>
                <td>₼1 020</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#FFFFFF]  dark:bg-[#001233] dark:text-white border border-[#33415C] rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-medium dark:text-white mb-3">
            {t('pages.warehouse.reports.slowMovingProducts')}
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[#5C677D] border-b border-[#979DAC]">
                <th className="py-2">{t('pages.warehouse.table.product')}</th>
                <th className="py-2">{t('pages.warehouse.table.stock')}</th>
                <th className="py-2">{t('pages.warehouse.table.duration')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">
                  Qablaşdırma qutusu <br />
                  <span className="text-xs text-[#7D8597]">QT-500</span>
                </td>
                <td>25</td>
                <td>
                  <span className="bg-[#FFFFFF] border border-[#979DAC] text-[#5C677D] px-2 py-1 rounded-full text-xs">
                    45 {t('pages.ai.common.days')}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-2">
                  Motor yağı 5W-30 <br />
                  <span className="text-xs text-[#7D8597]">YG-5W30</span>
                </td>
                <td>8</td>
                <td>
                  <span className="bg-[#FFFFFF] border border-[#979DAC] text-[#5C677D] px-2 py-1 rounded-full text-xs">
                    38 {t('pages.ai.common.days')}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 🔹 ChartsGroup burdan sonra gəlir */}
      <ChartsGroup />
      <ItkiVeZayStatistikasi />
    </div>
  );
}
