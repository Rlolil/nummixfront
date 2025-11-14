import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function CariQaliqlar() {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    const [rows, setRows] = useState([
        { sku: "XM-A101", name: "Xammal A-101", warehouse: "Əsas Anbar - Bakı", location: "A1-R2-H5", balance: "5 kq", cost: "₼12.50", total: "₼62.50" },
        { sku: "HM-B205", name: "Hazır məhsul B-205", warehouse: "Əsas Anbar - Bakı", location: "B2-R1-H3", balance: "120 ədəd", cost: "₼45.00", total: "₼5400.00" },
        { sku: "BT-M1250", name: "Bolt M12x50", warehouse: "Əsas Anbar - Bakı", location: "C1-R3-H2", balance: "12 ədəd", cost: "₼0.85", total: "₼10.20" },
        { sku: "QT-500", name: "Qablaşdırma qutusu", warehouse: "Filial - Gəncə", location: "D1-R1-H1", balance: "25 ədəd", cost: "₼2.30", total: "₼57.50" },
    ]);
    const [editing, setEditing] = useState(null); // { index, data }

    const filtered = rows.filter(item => {
        const q = search.trim().toLowerCase();
        if (!q) return true;
        return (
            item.name.toLowerCase().includes(q) ||
            item.sku.toLowerCase().includes(q) ||
            item.warehouse.toLowerCase().includes(q) ||
            item.location.toLowerCase().includes(q)
        );
    });

    const openEdit = (index) => {
        setEditing({ index, data: { ...rows[index] } });
        document.body.style.overflow = 'hidden';
    };
    const closeEdit = () => {
        setEditing(null);
        document.body.style.overflow = 'auto';
    };
    const saveEdit = () => {
        if (!editing) return;
        setRows(prev => prev.map((r, i) => (i === editing.index ? editing.data : r)));
        closeEdit();
    };
    const handleDelete = (index) => {
        const msg = t('pages.warehouse.inventory.current.confirmDelete', { defaultValue: 'Bu sətiri silmək istəyirsiniz?' });
        if (window.confirm(msg)) {
            setRows(prev => prev.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{t('pages.warehouse.inventory.current.title')}</h2>
                <div className="flex gap-2 items-center">
                    <select className="border border-gray-200 rounded-md px-3 py-2 text-sm">
                        <option>{t('pages.warehouse.inventory.current.filters.allWarehouses')}</option>
                        <option>{t('pages.warehouse.operations.common.warehouses.mainBaku')}</option>
                        <option>{t('pages.warehouse.operations.common.warehouses.branchGanja')}</option>
                    </select>
                    <div className="relative">
                        <FiSearch className="absolute left-2 top-2.5 text-gray-400" />
                        <input
                            type="text"
                            placeholder={t('pages.warehouse.inventory.current.searchPlaceholder')}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-8 pr-3 py-2 border border-gray-200 rounded-md text-sm"
                        />
                    </div>
                </div>
            </div>

            <table className="w-full text-sm border-t border-gray-200">
                <thead>
                    <tr className="text-left border-b bg-gray-100">
                        <th className="py-2 px-2">{t('pages.warehouse.inventory.current.table.sku')}</th>
                        <th className="py-2 px-2">{t('pages.warehouse.inventory.current.table.product')}</th>
                        <th className="py-2 px-2">{t('pages.warehouse.inventory.current.table.warehouse')}</th>
                        <th className="py-2 px-2">{t('pages.warehouse.inventory.current.table.location')}</th>
                        <th className="py-2 px-2">{t('pages.warehouse.inventory.current.table.balance')}</th>
                        <th className="py-2 px-2">{t('pages.warehouse.inventory.current.table.cost')}</th>
                        <th className="py-2 px-2">{t('pages.warehouse.inventory.current.table.total')}</th>
                        <th className="py-2 px-2 text-right">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.length === 0 && (
                        <tr>
                            <td colSpan="8" className="py-4 text-center text-gray-500">{t('common.noResults', { defaultValue: 'Nəticə tapılmadı' })}</td>
                        </tr>
                    )}
                    {filtered.map((item, i) => (
                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-2 px-2">{item.sku}</td>
                            <td className="py-2 px-2">{item.name}</td>
                            <td className="py-2 px-2">{item.warehouse}</td>
                            <td className="py-2 px-2">{item.location}</td>
                            <td className="py-2 px-2">{item.balance}</td>
                            <td className="py-2 px-2">{item.cost}</td>
                            <td className="py-2 px-2">{item.total}</td>
                            <td className="py-2 px-2 text-right">
                                <button onClick={() => openEdit(rows.indexOf(item))} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2">
                                    <FaEdit />
                                    <span className="hidden sm:inline">{t('common.edit', { defaultValue: 'Edit' })}</span>
                                </button>
                                <button onClick={() => handleDelete(rows.indexOf(item))} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50">
                                    <FaTrash />
                                    <span className="hidden sm:inline">{t('common.delete', { defaultValue: 'Delete' })}</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editing && (
                <div>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" onClick={closeEdit}></div>
                    <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center border-b pb-3">
                            <h3 className="text-lg font-semibold">{t('pages.warehouse.inventory.current.editRow', { defaultValue: 'Sətiri redaktə et' })}</h3>
                            <button onClick={closeEdit} className="text-xl text-gray-500 hover:text-gray-700">×</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium">SKU</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.sku} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, sku:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.product')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.name} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, name:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.warehouse')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.warehouse} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, warehouse:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.location')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.location} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, location:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.balance')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.balance} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, balance:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.cost')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.cost} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, cost:e.target.value}}))} />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.total')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.total} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, total:e.target.value}}))} />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 border-t mt-4 pt-4">
                            <button onClick={closeEdit} className="px-4 py-2 border rounded hover:bg-gray-100">{t('common.cancel',{defaultValue:'Cancel'})}</button>
                            <button onClick={saveEdit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{t('common.save',{defaultValue:'Save'})}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
