import React, { useState } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { FaBarcode } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

// Köməkçi funksiya — yeni məhsul yaradır
const createNewProduct = () => ({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    sku: '',
    quantity: '',
    lot: '',
    quality: 'Qəbul',
});

const Anbargrn = () => {
    const { t } = useTranslation();
    const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
    const [order, setOrder] = useState('');
    const [warehouse, setWarehouse] = useState('Əsas Anbar - Bakı');
    const [products, setProducts] = useState([createNewProduct()]);
    const [notes, setNotes] = useState('');

    // əlavə: form-u sıfırlayan funksiya
    const resetForm = () => {
        setDate(new Date().toISOString().split('T')[0]);
        setOrder('');
        setWarehouse('Əsas Anbar - Bakı');
        setProducts([createNewProduct()]);
        setNotes('');
    };

    const handleProductChange = (id, field, value) => {
        setProducts(prev =>
            prev.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const addProduct = () => {
        setProducts(prev => [...prev, createNewProduct()]);
    };

    const removeProduct = (id) => {
        setProducts(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className='min-h-screen p-4 lg:p-6 xl:p-8 space-y-8'>
            {/* Başlıq */}




            {/* Form hissəsi */}
            <div className="bg-white rounded-2xl border p-4 sm:p-6 space-y-6">
                {/* Başlıq */}
                <h2 className="text-lg font-semibold">{t('pages.warehouse.operations.grn.title')}</h2>

                {/* Əsas məlumatlar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Tarix */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.date')}</label>
                        <input
                            id="date"
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className="w-full bg-gray-50 rounded px-3 py-2"
                        />
                    </div>

                    {/* Sifariş */}
                    <div>
                        <label htmlFor="purchase-order" className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.grn.purchaseOrder')}</label>
                        <select
                            id="purchase-order"
                            value={order}
                            onChange={e => setOrder(e.target.value)}
                            className="w-full bg-gray-50 rounded px-3 py-2"
                        >
                            <option value="">{t('pages.warehouse.operations.common.select')}</option>
                            <option value="PO-5678">PO-5678 - Təchizatçı A</option>
                            <option value="PO-5679">PO-5679 - Təchizatçı B</option>
                            <option value="PO-5680">PO-5680 - Təchizatçı C</option>
                        </select>
                    </div>

                    {/* Anbar */}
                    <div>
                        <label htmlFor="warehouse" className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.warehouse')}</label>
                        <select
                            id="warehouse"
                            value={warehouse}
                            onChange={e => setWarehouse(e.target.value)}
                            className="w-full bg-gray-50 rounded px-3 py-2"
                        >
                            <option value="Əsas Anbar - Bakı">{t('pages.warehouse.operations.common.warehouses.mainBaku')}</option>
                            <option value="Filial Anbar - Gəncə">{t('pages.warehouse.operations.common.warehouses.branchGanja')}</option>
                            <option value="İstehsalat Anbarı">{t('pages.warehouse.operations.common.warehouses.production')}</option>
                        </select>
                    </div>
                </div>

                {/* Məhsul siyahısı */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{t('pages.warehouse.operations.common.products')}</span>
                        <button
                            type="button"
                            onClick={addProduct}
                            className="flex items-center gap-1 px-3 py-1 border rounded bg-white hover:bg-gray-100 text-black"
                        >
                            <FiPlus /> {t('pages.warehouse.operations.common.addProduct')}
                        </button>
                    </div>

                    <div className="space-y-3">
                        {products.map(item => (
                            <div key={item.id} className="flex flex-col lg:flex-row gap-2 items-center bg-gray-50 rounded-lg p-3">
                                {/* SKU */}
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.skuProduct')}</label>

                                    <div className="flex items-center gap-2">
                                        {/* Məhsul seçimi */}
                                        <select
                                            value={item.sku}
                                            onChange={(e) => handleProductChange(item.id, 'sku', e.target.value)}
                                            className="w-full bg-gray-100 rounded px-2 py-1"
                                        >
                                            <option value="">{t('pages.warehouse.operations.common.select')}</option>
                                            <option value="XM-A101">XM-A101 - Xammal A-101</option>
                                            <option value="HM-B205">HM-B205 - Hazır məhsul B-205</option>
                                            <option value="BT-M1250">BT-M1250 - Bolt M12x50</option>
                                        </select>

                                        {/* Ştrixkod şəkli yükləmə */}
                                        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 rounded p-2 flex items-center justify-center">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) =>
                                                    handleProductChange(item.id, 'barcodeImage', e.target.files[0])
                                                }
                                            />
                                            <FaBarcode />

                                        </label>
                                    </div>

                                    {/* Əgər ştrixkod şəkli yüklənibsə, önbaxış göstər */}
                                    {item.barcodeImage && (
                                        <div className="mt-2">
                                            <img
                                                src={URL.createObjectURL(item.barcodeImage)}
                                                alt={t('pages.warehouse.operations.common.barcodeImageAlt')}
                                                className="w-20 h-20 object-cover rounded border"
                                            />
                                        </div>
                                    )}
                                </div>



                                {/* Miqdar */}
                                <div className="flex-none w-full lg:w-36 xl:w-44" >
                                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.quantity')}</label>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={e => handleProductChange(item.id, 'quantity', e.target.value)}
                                        placeholder={t('pages.warehouse.operations.common.quantity')}
                                        className="w-full bg-gray-100 rounded px-2 py-1"
                                    />
                                </div>

                                {/* Lot */}
                                <div className="flex-none w-full lg:w-40 xl:w-56">
                                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.lot')}</label>
                                    <input
                                        type="text"
                                        value={item.lot}
                                        onChange={e => handleProductChange(item.id, 'lot', e.target.value)}
                                        placeholder="LOT-2025-001"
                                        className="w-full bg-gray-100 rounded px-2 py-1"
                                    />
                                </div>

                                {/* Keyfiyyət */}
                                <div className="flex-none w-full lg:w-40 xl:w-48 relative">
                                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.quality')}</label>
                                    <div className="absolute left-3 top-9">
                                        {item.quality === t('pages.warehouse.operations.common.qualityOptions.accept') ? (
                                            <IoMdCheckmarkCircleOutline className="text-green-500" />
                                        ) : (
                                            <FaXmark className="text-red-500" />
                                        )}
                                    </div>
                                    <select
                                        value={item.quality}
                                        onChange={e => handleProductChange(item.id, 'quality', e.target.value)}
                                        className="w-full bg-gray-100 rounded px-2 py-1 pl-10"
                                    >
                                        <option value={t('pages.warehouse.operations.common.qualityOptions.accept')}>{t('pages.warehouse.operations.common.qualityOptions.accept')}</option>
                                        <option value={t('pages.warehouse.operations.common.qualityOptions.reject')}>{t('pages.warehouse.operations.common.qualityOptions.reject')}</option>
                                    </select>
                                </div>

                                {products.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeProduct(item.id)}
                                        className="ml-2 text-red-500 hover:bg-gray-200 rounded p-1"
                                        title={t('pages.warehouse.operations.common.removeRow')}
                                    >
                                        <FiMinus />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Qeydlər */}
                <div>
                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.notes')}</label>
                    <textarea
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        placeholder={t('pages.warehouse.operations.common.notesPlaceholder')}
                        className="w-full bg-gray-50 rounded px-3 py-2"
                        rows={2}
                    />
                </div>

                {/* Əməliyyat düymələri */}
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="px-4 py-2 rounded bg-gray-100 text-black"
                    >
                        {t('common.cancel')}
                    </button>
                    <button className="px-4 py-2 rounded bg-black text-white  flex items-center gap-2">
                        <MdOutlineDone /> {t('pages.warehouse.operations.grn.confirm')}
                    </button>
                </div>
            </div >
        </div >
    );
};

export default Anbargrn;
