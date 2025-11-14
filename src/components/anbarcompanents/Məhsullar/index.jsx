import React, { useState } from 'react';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";

// Dummy məhsul məlumatları (unitofmeasure ilə)
const initialProducts = [
    {
        sku: "XM-A101",
        name: "Xammal A-101",
        barcode: "8594562341234",
        category: "Xammal",
        unitofmeasure: "kq",
        quantity: "5",
        min: 50,
        max: 500,
        location: "A1-R2-H5",
        cost: 12.50,
        image: null,
    },
    {
        sku: "HM-B205",
        name: "Hazır məhsul B-205",
        barcode: "8594562341235",
        category: "Hazır məhsul",
        unitofmeasure: "ədəd",
        quantity: "120",
        min: 50,
        max: 300,
        location: "B2-R1-H3",
        cost: 45.00,
        image: null,
    },
    {
        sku: "BT-M1250",
        name: "Bolt M12x50",
        barcode: "8594562341236",
        category: "Ehtiyat hissələri",
        unitofmeasure: "ədəd",
        quantity: "12",
        min: 100,
        max: 1000,
        location: "C1-R3-H2",
        cost: 0.85,
        image: null,
    },
    {
        sku: "QT-500",
        name: "Qablaşdırma qutusu 500x300",
        barcode: "8594562341237",
        category: "Qablaşdırma",
        unitofmeasure: "ədəd",
        quantity: "25",
        min: 200,
        max: 2000,
        location: "D1-R1-H1",
        cost: 2.30,
        image: null,
    },
    {
        sku: "YG-5W30",
        name: "Motor yağı 5W-30",
        barcode: "8594562341238",
        category: "Xammal",
        unitofmeasure: "litr",
        quantity: "8",
        min: 30,
        max: 200,
        location: "A2-R4-H6",
        cost: 18.75,
        image: null,
    },
];

const Məhsullar = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(initialProducts);
    const [modalMode, setModalMode] = useState('create'); // 'create' | 'edit'
    const [editIndex, setEditIndex] = useState(null);
    const [form, setForm] = useState({
        sku: '',
        barcode: '',
        name: '',
        category: '',
        unitofmeasure: '',
        min: '',
        max: '',
        quantity: '',
        location: '',
        cost: '',
        image: null,
    });

    const handleFormChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            setForm(prev => ({ ...prev, image: reader.result })); // store Data URL
        };
        reader.readAsDataURL(file);
    };

    const resetForm = () => {
        setForm({
            sku: '', barcode: '', name: '', category: '', unitofmeasure: '',
            min: '', max: '', quantity: '', location: '', cost: '', image: null,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!form.sku || !form.name) return;
        const newItem = {
            sku: form.sku.trim(),
            name: form.name.trim(),
            barcode: form.barcode.trim(),
            category: form.category,
            unitofmeasure: form.unitofmeasure,
            quantity: String(form.quantity || '0'),
            min: Number(form.min || 0),
            max: Number(form.max || 0),
            location: form.location.trim(),
            cost: Number(form.cost || 0),
            image: form.image || null,
        };
        if (modalMode === 'edit' && editIndex !== null) {
            setProducts(prev => prev.map((p, i) => (i === editIndex ? newItem : p)));
        } else {
            setProducts(prev => [newItem, ...prev]);
        }
        resetForm();
        setEditIndex(null);
        setOpen(false);
    };

    const openCreate = () => {
        setModalMode('create');
        resetForm();
        setEditIndex(null);
        setOpen(true);
    };

    const openEdit = (index) => {
        const p = products[index];
        setModalMode('edit');
        setEditIndex(index);
        setForm({
            sku: p.sku || '',
            barcode: p.barcode || '',
            name: p.name || '',
            category: p.category || '',
            unitofmeasure: p.unitofmeasure || '',
            min: String(p.min ?? ''),
            max: String(p.max ?? ''),
            quantity: String(p.quantity ?? ''),
            location: p.location || '',
            cost: String(p.cost ?? ''),
            image: p.image || null,
        });
        setOpen(true);
    };

    const handleDelete = (index) => {
        if (window.confirm('Bu məhsulu silmək istəyirsiniz?')) {
            setProducts(prev => prev.filter((_, i) => i !== index));
        }
    };

    // Axtarış üçün filter
    const filtered = products.filter(
        (m) =>
            m.sku.toLowerCase().includes(search.toLowerCase()) ||
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.barcode.includes(search)
    );

    return (
        <div className='mt-9 px-6'>
            {/* Başlıq və düymə */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold">Məhsullar ({filtered.length})</h2>
                    <p className="text-gray-500 text-sm">Bütün mal-material siyahısı</p>
                </div>
                <button
                    onClick={openCreate}
                    className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800"
                >
                    <span className="text-xl">+</span>
                    <span className="text-white font-semibold">Yeni Məhsul</span>
                </button>
            </div>

            {/* Axtarış inputu */}
            <div className="flex justify-end mb-3">
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="SKU, ad və ya ştrixkod..."
                    className="w-72 px-3 py-2 border border-gray-200 rounded-lg bg-gray-100 outline-none"
                />
            </div>

            {/* Məhsullar cədvəli */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-500 text-sm border-b">
                            <th className="py-2 font-semibold">Şəkil</th>
                            <th className="py-2 font-semibold">SKU</th>
                            <th className="py-2 font-semibold">Məhsul</th>
                            <th className="py-2 font-semibold">Kateqoriya</th>
                            <th className="py-2 font-semibold">Qalıq</th>
                            <th className="py-2 font-semibold">Min/Max</th>
                            <th className="py-2 font-semibold">Status</th>
                            <th className="py-2 font-semibold">Yer</th>
                            <th className="py-2 font-semibold">Maya</th>
                            <th className="py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((m) => {
                            const qaliq = Number(m.quantity);
                            let status = "";
                            let statusClass = "";
                            if (qaliq < m.min) {
                                status = "Aşağı";
                                statusClass = "bg-rose-400";
                            } else if (qaliq > m.max) {
                                status = "Yuxarı";
                                statusClass = "bg-blue-400";
                            } else {
                                status = "Yaxşı";
                                statusClass = "bg-black";
                            }
                            return (
                                <tr key={m.sku} className="border-b last:border-b-0 hover:bg-gray-50">
                                    <td className="py-2">
                                        {m.image ? (
                                            <img src={m.image} alt={m.name} className="w-10 h-10 rounded object-cover border" />
                                        ) : (
                                            <div className="w-10 h-10 rounded bg-gray-100 border flex items-center justify-center text-gray-400">
                                                <FaBox />
                                            </div>
                                        )}
                                    </td>
                                    <td className="py-2 font-medium flex items-center gap-2">
                                        <FaBox className="text-gray-400" /> {m.sku}
                                    </td>
                                    <td className="py-2">
                                        <div className="font-semibold">{m.name}</div>
                                        <div className="text-xs text-gray-400">{m.barcode}</div>
                                    </td>
                                    <td className="py-2">{m.category}</td>
                                    <td className="py-2">{m.quantity} {m.unitofmeasure}</td>
                                    <td className="py-2">{m.min} / {m.max}</td>
                                    <td className="py-2">
                                        <span className={`${statusClass} text-white px-3 py-1 rounded-full text-xs`}>
                                            {status}
                                        </span>
                                    </td>
                                    <td className="py-2">{m.location}</td>
                                    <td className="py-2 font-semibold">₼{m.cost.toFixed(2)}</td>
                                    <td className="py-2 flex items-center gap-2">
                                        <button onClick={() => openEdit(products.indexOf(m))} className="p-1 rounded hover:bg-gray-200 text-blue-600 border border-blue-200">
                                            <FaRegEdit />
                                        </button>
                                        <button onClick={() => handleDelete(products.indexOf(m))} className="p-1 rounded hover:bg-gray-200 text-red-600 border border-red-200">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Modal - Yeni Məhsul Əlavə Et (image upload dəstəyi ilə) */}
            {open && (
                <div className="fixed inset-0 backdrop-blur-xl bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 w-[500px] max-w-full relative shadow-lg">
                        {/* Modal başlıq */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-xl font-bold">Yeni Məhsul Əlavə Et</h3>
                                <p className="text-gray-500 text-sm">Məhsul məlumatlarını daxil edin</p>
                            </div>
                            <button onClick={() => { setOpen(false); resetForm(); }} className="text-2xl text-gray-400 hover:text-black">×</button>
                        </div>

                        {/* Form sahələri */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">SKU</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="XM-A101" value={form.sku} onChange={(e)=>handleFormChange('sku', e.target.value)} />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">Ştrixkod</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="8594562341234" value={form.barcode} onChange={(e)=>handleFormChange('barcode', e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label className="block font-semibold text-sm mb-1">Məhsul adı</label>
                                <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="Məhsul adını daxil edin" value={form.name} onChange={(e)=>handleFormChange('name', e.target.value)} />
                            </div>
                            {/* Şəkil yükləmə */}
                            <div>
                                <label className="block font-semibold text-sm mb-1">Şəkil</label>
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 rounded bg-gray-100 border flex items-center justify-center overflow-hidden">
                                        {form.image ? (
                                            <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <FaBox className="text-gray-400" />
                                        )}
                                    </div>
                                    <input type="file" accept="image/*" onChange={handleImageChange} />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">Kateqoriya</label>
                                    <select className="w-full border rounded px-2 py-1 bg-gray-100" value={form.category} onChange={(e)=>handleFormChange('category', e.target.value)}>
                                        <option hidden>Seçin</option>
                                        <option value="Xammal">Xammal</option>
                                        <option value="Hazır məhsul">Hazır məhsul</option>
                                        <option value="Ehtiyat hissələri">Ehtiyat hissələri</option>
                                        <option value="Qablaşdırma">Qablaşdırma</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">Ölçü vahidi</label>
                                    <select className="w-full border rounded px-2 py-1 bg-gray-100" value={form.unitofmeasure} onChange={(e)=>handleFormChange('unitofmeasure', e.target.value)}>
                                        <option hidden>Seçin</option>
                                        <option value="kq">kq</option>
                                        <option value="ədəd">ədəd</option>
                                        <option value="litr">litr</option>
                                        <option value="metr">metr</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">Min. Stok</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" type='number' placeholder="50" value={form.min} onChange={(e)=>handleFormChange('min', e.target.value)} />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">Max. Stok</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" type='number' placeholder="500" value={form.max} onChange={(e)=>handleFormChange('max', e.target.value)} />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">Maya dəyəri (₼)</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" type='number' step="any" placeholder="12.50" value={form.cost} onChange={(e)=>handleFormChange('cost', e.target.value)} />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">İlkin Qalıq</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" type='number' placeholder="0" value={form.quantity} onChange={(e)=>handleFormChange('quantity', e.target.value)} />
                                </div>
                                <div className="flex-1">
                                    <label className="block font-semibold text-sm mb-1">Saxlama yeri</label>
                                    <input className="w-full border rounded px-2 py-1 bg-gray-100" placeholder="A1-R2-H5" value={form.location} onChange={(e)=>handleFormChange('location', e.target.value)} />
                                </div>
                            </div>

                            {/* Modal alt düymələri */}
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={() => { setOpen(false); resetForm(); }}
                                    className="px-4 py-2 rounded bg-gray-100 text-black"
                                >
                                    Ləğv et
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-black text-white font-bold"
                                >
                                    Yadda saxla
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Məhsullar;
