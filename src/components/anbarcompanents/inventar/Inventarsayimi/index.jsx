import { useState, useMemo, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function InventarSayimi() {
    const { t } = useTranslation();
    const { setInventoryStats, newInvOpen, setNewInvOpen } = useOutletContext(); // 📤 Inventar.jsx-dən gələn konteks
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([
        { sku: "XM-A101", name: "Xammal A-101", location: "A1-R2-H5", systemQty: 5, unit: "kq" },
        { sku: "HM-B205", name: "Hazır məhsul B-205", location: "B2-R1-H3", systemQty: 120, unit: "ədəd" },
        { sku: "BT-M1250", name: "Bolt M12x50", location: "C1-R3-H2", systemQty: 12, unit: "ədəd" },
        { sku: "QT-500", name: "Qablaşdırma qutusu", location: "D1-R1-H1", systemQty: 25, unit: "ədəd" },
    ]);
    const [counts, setCounts] = useState({
        "XM-A101": "",
        "HM-B205": "",
        "BT-M1250": "",
        "QT-500": "",
    });
    const [editing, setEditing] = useState(null); // {index, data}

    const handleChange = (sku, value) => {
        // yalnız rəqəm qəbul etsin
        if (!/^\d*$/.test(value)) return;
        setCounts({ ...counts, [sku]: value });
    };

    // 📊 Statistik hesablamalar
    const stats = useMemo(() => {
        const totalItems = items.length;
        let counted = 0;
        let totalDiff = 0;

        items.forEach((item) => {
            const real = counts[item.sku] ? parseFloat(counts[item.sku]) : null;
            if (real !== null && !isNaN(real)) {
                counted++;
                totalDiff += real - item.systemQty;
            }
        });

        return {
            totalItems,
            counted,
            diff: totalDiff,
        };
    }, [counts, items]);

    // 📤 Hər dəfə dəyişəndə statistik kartları yenilə
    useEffect(() => {
        setInventoryStats((prev) => ({
            ...prev,
            counted: stats.counted,
            difference: stats.diff,
            totalProducts: stats.totalItems,
        }));
    }, [stats, setInventoryStats]);

    const visibleData = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return items;
        return items.filter(item =>
            item.sku.toLowerCase().includes(q) ||
            item.name.toLowerCase().includes(q) ||
            item.location.toLowerCase().includes(q)
        );
    }, [search, items]);

    const openEdit = (index) => {
        setEditing({ index, data: { ...items[index] } });
        document.body.style.overflow = 'hidden';
    };
    const closeEdit = () => {
        setEditing(null);
        document.body.style.overflow = 'auto';
    };
    const saveEdit = () => {
        if (!editing) return;
        const prevSku = items[editing.index].sku;
        const nextSku = editing.data.sku;
        setItems(prev => prev.map((it, i) => (i === editing.index ? editing.data : it)));
        // If SKU changed, migrate counts key
        if (prevSku !== nextSku) {
            setCounts(prev => {
                const copy = { ...prev };
                copy[nextSku] = copy[prevSku] || "";
                delete copy[prevSku];
                return copy;
            });
        }
        closeEdit();
    };
    const handleDelete = (index) => {
        if (window.confirm(t('pages.warehouse.inventory.count.confirmDelete', { defaultValue: 'Bu sətiri silmək istəyirsiniz?' }))) {
            const sku = items[index].sku;
            setItems(prev => prev.filter((_, i) => i !== index));
            setCounts(prev => {
                const c = { ...prev };
                delete c[sku];
                return c;
            });
        }
    };

    // New Inventory modal form
    const [form, setForm] = useState({ sku: '', name: '', location: '', systemQty: '', unit: 'ədəd' });
    const resetForm = () => setForm({ sku: '', name: '', location: '', systemQty: '', unit: 'ədəd' });
    const handleCreate = (e) => {
        e.preventDefault();
        if (!form.sku || !form.name) return;
        const newItem = {
            sku: form.sku.trim(),
            name: form.name.trim(),
            location: form.location.trim(),
            systemQty: Number(form.systemQty || 0),
            unit: form.unit,
        };
        setItems(prev => [newItem, ...prev]);
        setCounts(prev => ({ ...prev, [newItem.sku]: '' }));
        resetForm();
        setNewInvOpen(false);
    };

    return (
        <div className="space-y-8">
            {/* Fiziki inventar cədvəli */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold mb-3">{t('pages.warehouse.inventory.count.title')}</h2>

                <div className="border border-gray-200 p-3 rounded-lg bg-blue-50 flex gap-2 items-start mb-4">
                    <AiOutlineInfoCircle className="text-blue-500 w-5 h-5 mt-1" />
                    <p className="text-sm text-blue-800">
                        {t('pages.warehouse.inventory.count.info')}
                    </p>
                </div>

                <div className="flex justify-end mb-3">
                    <input
                        type="text"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder={t('pages.warehouse.inventory.count.searchPlaceholder', { defaultValue: 'SKU, ad və ya yer...' })}
                        className="w-72 px-3 py-2 border border-gray-200 rounded-lg bg-gray-100 outline-none"
                    />
                </div>

                <table className="w-full text-sm border-t border-gray-200">
                    <thead>
                        <tr className="text-left border-b border-gray-200">
                            <th className="py-2 px-2"></th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.sku')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.product')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.location')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.systemQty')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.actualQty')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.difference')}</th>
                            <th className="py-2 px-2">{t('pages.warehouse.inventory.count.table.status')}</th>
                            <th className="py-2 px-2 text-right">{t('common.actions', { defaultValue: 'Fəaliyyətlər' })}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {visibleData.map((item) => {
                            const real = counts[item.sku] ? parseFloat(counts[item.sku]) : null;
                            const diff = real !== null && !isNaN(real) ? real - item.systemQty : null;

                            let status = t('pages.warehouse.inventory.count.status.pending');
                            let statusColor = "bg-gray-100 text-gray-700";

                            if (diff !== null) {
                                if (diff === 0) {
                                    status = t('pages.warehouse.inventory.count.status.match');
                                    statusColor = "bg-green-100 text-green-700";
                                } else if (diff < 0) {
                                    status = t('pages.warehouse.inventory.count.status.missing');
                                    statusColor = "bg-red-100 text-red-700";
                                } else if (diff > 0) {
                                    status = t('pages.warehouse.inventory.count.status.excess');
                                    statusColor = "bg-yellow-100 text-yellow-700";
                                }
                            }

                            return (
                                <tr key={item.sku} className="border-b border-gray-200 hover:bg-gray-50 transition">
                                    <td className="py-2 px-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="py-2 px-2">{item.sku}</td>
                                    <td className="py-2 px-2">{item.name}</td>
                                    <td className="py-2 px-2">{item.location}</td>
                                    <td className="py-2 px-2">
                                        {item.systemQty} {item.unit}
                                    </td>

                                    <td className="py-2 px-2">
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            value={counts[item.sku]}
                                            onChange={(e) => handleChange(item.sku, e.target.value)}
                                            className="border border-gray-200 rounded-md px-2 py-1 w-20 text-sm text-center"
                                        />
                                    </td>

                                    <td className="py-2 px-2 text-center">
                                        {diff !== null ? (
                                            <span
                                                className={
                                                    diff === 0
                                                        ? "text-gray-600"
                                                        : diff > 0
                                                            ? "text-green-600"
                                                            : "text-red-600"
                                                }
                                            >
                                                {diff > 0 ? `+${diff}` : diff}
                                            </span>
                                        ) : (
                                            "—"
                                        )}
                                    </td>

                                    <td className="py-2 px-2 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
                                        >
                                            {status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-2 text-right whitespace-nowrap">
                                        <button onClick={() => openEdit(items.findIndex(x=>x.sku===item.sku))} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-blue-600 border-blue-200 hover:bg-blue-50 mr-2">
                                            {t('common.edit', { defaultValue: 'Edit' })}
                                        </button>
                                        <button onClick={() => handleDelete(items.findIndex(x=>x.sku===item.sku))} className="inline-flex items-center gap-1 px-2 py-1 border rounded text-red-600 border-red-200 hover:bg-red-50">
                                            {t('common.delete', { defaultValue: 'Delete' })}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={() =>
                            setCounts({
                                "XM-A101": "",
                                "HM-B205": "",
                                "BT-M1250": "",
                                "QT-500": "",
                            })
                        }
                        className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-100"
                    >
                        {t('common.cancel')}
                    </button>

                    <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                        {t('pages.warehouse.inventory.count.confirm', { count: Object.values(counts).filter((v) => v).length })}
                    </button>
                </div>
            </div>
            {/* Edit modal */}
            {editing && (
                <div>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" onClick={closeEdit}></div>
                    <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center border-b pb-3">
                            <h3 className="text-lg font-semibold">{t('pages.warehouse.inventory.count.editRow', { defaultValue: 'Sətiri redaktə et' })}</h3>
                            <button onClick={closeEdit} className="text-xl text-gray-500 hover:text-gray-700">×</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium">SKU</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.sku} onChange={(e)=>setEditing(prev=>({...prev, data:{...prev.data, sku:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.count.table.product')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.name} onChange={(e)=>setEditing(prev=>({...prev, data:{...prev.data, name:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.count.table.location')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={editing.data.location} onChange={(e)=>setEditing(prev=>({...prev, data:{...prev.data, location:e.target.value}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.count.table.systemQty')}</label>
                                <input type="number" className="mt-1 w-full border rounded px-3 py-2" value={editing.data.systemQty} onChange={(e)=>setEditing(prev=>({...prev, data:{...prev.data, systemQty:Number(e.target.value)}}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.count.table.status')}</label>
                                <input disabled className="mt-1 w-full border rounded px-3 py-2 bg-gray-100" value={''} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Vahid</label>
                                <select className="mt-1 w-full border rounded px-3 py-2" value={editing.data.unit} onChange={(e)=>setEditing(prev=>({...prev, data:{...prev.data, unit:e.target.value}}))}>
                                    <option value="ədəd">ədəd</option>
                                    <option value="kq">kq</option>
                                    <option value="litr">litr</option>
                                    <option value="metr">metr</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 border-t mt-4 pt-4">
                            <button onClick={closeEdit} className="px-4 py-2 border rounded hover:bg-gray-100">{t('common.cancel',{defaultValue:'Cancel'})}</button>
                            <button onClick={saveEdit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{t('common.save',{defaultValue:'Save'})}</button>
                        </div>
                    </div>
                </div>
            )}

            {/* New Inventory modal (triggered from parent button) */}
            {newInvOpen && (
                <div>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" onClick={()=>{ setNewInvOpen(false); resetForm(); }}></div>
                    <div className="fixed top-1/2 left-1/2 z-51 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center border-b pb-3">
                            <h3 className="text-lg font-semibold">{t('pages.warehouse.inventory.count.newInventory', { defaultValue: 'Yeni inventar' })}</h3>
                            <button onClick={()=>{ setNewInvOpen(false); resetForm(); }} className="text-xl text-gray-500 hover:text-gray-700">×</button>
                        </div>
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" onSubmit={handleCreate}>
                            <div>
                                <label className="block text-sm font-medium">SKU</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={form.sku} onChange={(e)=>setForm(prev=>({...prev, sku:e.target.value}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.count.table.product')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={form.name} onChange={(e)=>setForm(prev=>({...prev, name:e.target.value}))} />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.count.table.location')}</label>
                                <input className="mt-1 w-full border rounded px-3 py-2" value={form.location} onChange={(e)=>setForm(prev=>({...prev, location:e.target.value}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">{t('pages.warehouse.inventory.count.table.systemQty')}</label>
                                <input type="number" className="mt-1 w-full border rounded px-3 py-2" value={form.systemQty} onChange={(e)=>setForm(prev=>({...prev, systemQty:e.target.value}))} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Vahid</label>
                                <select className="mt-1 w-full border rounded px-3 py-2" value={form.unit} onChange={(e)=>setForm(prev=>({...prev, unit:e.target.value}))}>
                                    <option value="ədəd">ədəd</option>
                                    <option value="kq">kq</option>
                                    <option value="litr">litr</option>
                                    <option value="metr">metr</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2 flex justify-end gap-2 border-t pt-4 mt-2">
                                <button type="button" onClick={()=>{ setNewInvOpen(false); resetForm(); }} className="px-4 py-2 border rounded hover:bg-gray-100">{t('common.cancel',{defaultValue:'Cancel'})}</button>
                                <button type="submit" className="px-4 py-2 bg-black text-white rounded">{t('common.save',{defaultValue:'Save'})}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
