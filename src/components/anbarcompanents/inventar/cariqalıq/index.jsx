import { useState, useEffect } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { getInventory, createInventoryItem, updateInventoryItem, updateInventoryItemStatus } from "../../../../services";

export default function CariQaliqlar() {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    const [rows, setRows] = useState([]);
    const [editing, setEditing] = useState(null); // { index, data }
    const [newItem, setNewItem] = useState({
        sku: "",
        name: "",
        warehouse: "",
        location: "",
        balance: "",
        cost: "",
        total: ""
    });
    const [isNewOpen, setIsNewOpen] = useState(false);

    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            const data = await getInventory();
            setRows(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching inventory:", error);
        }
    };

    const filtered = rows.filter(item => {
        const q = search.trim().toLowerCase();
        if (!q) return true;
        return (
            (item.name && item.name.toLowerCase().includes(q)) ||
            (item.sku && item.sku.toLowerCase().includes(q)) ||
            (item.warehouse && item.warehouse.toLowerCase().includes(q)) ||
            (item.location && item.location.toLowerCase().includes(q))
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
    const saveEdit = async () => {
        if (!editing) return;
        try {
            const id = editing.data.id || editing.data._id;
            if (id) {
                await updateInventoryItem(id, editing.data);
                fetchInventory();
            }
            closeEdit();
        } catch (error) {
            console.error("Error updating inventory item:", error);
        }
    };
    const handleDelete = async (index) => {
        const msg = t('common.confirmDeleteRow');
        if (window.confirm(msg)) {
            const item = rows[index];
            const id = item.id || item._id;
            if (id) {
                try {
                    await updateInventoryItemStatus(id, 'deleted'); // Assuming status update for delete
                    fetchInventory();
                } catch (error) {
                    console.error("Error deleting inventory item:", error);
                }
            }
        }
    };

    const handleCreate = async () => {
        try {
            await createInventoryItem(newItem);
            fetchInventory();
            setNewItem({
                sku: "",
                name: "",
                warehouse: "",
                location: "",
                balance: "",
                cost: "",
                total: ""
            });
            setIsNewOpen(false);
        } catch (error) {
            console.error("Error creating inventory item:", error);
        }
    };

    return (
        <div className="p-6 bg-[#FFFFFF] dark:bg-[#001233] dark:text-white rounded-xl shadow-sm border border-[#33415C]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold dark:text-white text-[#023E7D]">{t('pages.warehouse.inventory.current.title')}</h2>
                <div className="flex gap-2 items-center">
                    <button 
                        onClick={() => setIsNewOpen(true)}
                        className="flex items-center gap-1 px-3 py-2 bg-[#0466CB] text-white rounded-md hover:bg-[#0453A4]"
                    >
                        <FiPlus />
                        <span className="hidden sm:inline">{t('common.add', { defaultValue: 'Add' })}</span>
                    </button>
                    <select className="border border-[#979DAC] dark:bg-[#001233] dark:text-white bg-[#FFFFFF] rounded-md px-3 py-2 text-sm">
                        <option>{t('pages.warehouse.inventory.current.filters.allWarehouses')}</option>
                        <option>{t('pages.warehouse.operations.common.warehouses.mainBaku')}</option>
                        <option>{t('pages.warehouse.operations.common.warehouses.branchGanja')}</option>
                    </select>
                    <div className="relative">
                        <FiSearch className="absolute left-2 top-2.5 text-[#7D8597]" />
                        <input
                            type="text"
                            placeholder={t('pages.warehouse.inventory.current.searchPlaceholder')}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-8 pr-3 py-2 border border-[#979DAC] rounded-md text-sm dark:bg-[#001233] dark:text-white bg-[#FFFFFF] text-[#001233] placeholder:text-[#7D8597]"
                        />
                    </div>
                </div>
            </div>
            <table className="w-full text-sm border-t border-[#979DAC]">
                <thead>
                    <tr className="text-left border-b border-[#979DAC] bg-[#F5F8FF] dark:bg-[#002244] text-[#5C677D] dark:text-[#7D8597]">
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
                            <td colSpan="8" className="py-4 text-center text-[#7D8597]">{t('common.noResults', { defaultValue: 'Nəticə tapılmadı' })}</td>
                        </tr>
                    )}
                    {filtered.map((item, i) => (
                        <tr key={i} className="border-b border-[#979DAC] hover:bg-[#F5F8FF] dark:hover:bg-[#002244]">
                            <td className="py-2 px-2">{item.sku}</td>
                            <td className="py-2 px-2">{item.name}</td>
                            <td className="py-2 px-2">{item.warehouse}</td>
                            <td className="py-2 px-2">{item.location}</td>
                            <td className="py-2 px-2">{item.balance}</td>
                            <td className="py-2 px-2">{item.cost}</td>
                            <td className="py-2 px-2">{item.total}</td>
                            <td className="py-2 px-2 text-right">
                                <button onClick={() => openEdit(rows.indexOf(item))} className="inline-flex items-center gap-1 px-2 py-1 border rounded border-[#0466CB] text-[#0466CB] hover:bg-[#0453A4] hover:text-white mr-2">
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
                    <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 dark:bg-[#001233] bg-[#FFFFFF] rounded-lg shadow-lg p-6 border border-[#33415C]">
                        <div className="flex justify-between items-center border-b border-[#979DAC] pb-3">
                            <h3 className="text-lg font-semibold dark:text-white text-[#023E7D]">{t('pages.warehouse.inventory.current.editRow', { defaultValue: 'Sətiri redaktə et' })}</h3>
                            <button onClick={closeEdit} className="text-xl text-[#7D8597] hover:text-[#023E7D]">×</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium">SKU</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={editing.data.sku} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, sku:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.product')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={editing.data.name} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, name:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.warehouse')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={editing.data.warehouse} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, warehouse:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.location')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={editing.data.location} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, location:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.balance')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={editing.data.balance} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, balance:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.cost')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={editing.data.cost} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, cost:e.target.value}}))} />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.total')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={editing.data.total} onChange={(e)=>setEditing(prev=>({...prev,data:{...prev.data, total:e.target.value}}))} />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 border-t border-[#979DAC] mt-4 pt-4">
                            <button onClick={closeEdit} className="px-4 py-2 border border-[#979DAC] rounded dark:bg-[#001233] dark:text-white dark:hover:bg-[#002244] bg-[#FFFFFF] text-[#023E7D] hover:bg-[#F5F8FF]">{t('common.cancel',{defaultValue:'Cancel'})}</button>
                            <button onClick={saveEdit} className="px-4 py-2 bg-[#0466CB] text-white rounded hover:bg-[#0453A4]">{t('common.save',{defaultValue:'Save'})}</button>
                        </div>
                    </div>
                </div>
            )}

            {isNewOpen && (
                <div>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" onClick={() => setIsNewOpen(false)}></div>
                    <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 dark:bg-[#001233] bg-[#FFFFFF] rounded-lg shadow-lg p-6 border border-[#33415C]">
                        <div className="flex justify-between items-center border-b border-[#979DAC] pb-3">
                            <h3 className="text-lg font-semibold dark:text-white text-[#023E7D]">{t('common.add', { defaultValue: 'Add New Item' })}</h3>
                            <button onClick={() => setIsNewOpen(false)} className="text-xl text-[#7D8597] hover:text-[#023E7D]">×</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium">SKU</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={newItem.sku} onChange={(e)=>setNewItem({...newItem, sku:e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.product')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={newItem.name} onChange={(e)=>setNewItem({...newItem, name:e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.warehouse')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={newItem.warehouse} onChange={(e)=>setNewItem({...newItem, warehouse:e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.location')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={newItem.location} onChange={(e)=>setNewItem({...newItem, location:e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.balance')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={newItem.balance} onChange={(e)=>setNewItem({...newItem, balance:e.target.value})} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.cost')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={newItem.cost} onChange={(e)=>setNewItem({...newItem, cost:e.target.value})} />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.current.table.total')}</label>
                                <input className="mt-1 w-full border border-[#979DAC] rounded px-3 py-2 dark:bg-[#001233] dark:text-white bg-[#FFFFFF]" value={newItem.total} onChange={(e)=>setNewItem({...newItem, total:e.target.value})} />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 border-t border-[#979DAC] mt-4 pt-4">
                            <button onClick={() => setIsNewOpen(false)} className="px-4 py-2 border border-[#979DAC] rounded dark:bg-[#001233] dark:text-white dark:hover:bg-[#002244] bg-[#FFFFFF] text-[#023E7D] hover:bg-[#F5F8FF]">{t('common.cancel',{defaultValue:'Cancel'})}</button>
                            <button onClick={handleCreate} className="px-4 py-2 bg-[#0466CB] text-white rounded hover:bg-[#0453A4]">{t('common.save',{defaultValue:'Save'})}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
