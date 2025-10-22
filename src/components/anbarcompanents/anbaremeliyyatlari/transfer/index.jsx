import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AnbarTransfer() {
    const { t } = useTranslation();
    const [transfer, setTransfer] = useState({
        from: t('pages.warehouse.operations.common.warehouses.mainBaku'),
        to: "",
        date: new Date().toISOString().split("T")[0],
        products: [
            { id: 1, product: "", quantity: "", newLocation: "" },
        ],
    });

    // Məhsul əlavə et
    const addProduct = () => {
        setTransfer((prev) => ({
            ...prev,
            products: [
                ...prev.products,
                { id: Date.now(), product: "", quantity: "", newLocation: "" },
            ],
        }));
    };

    // Dəyişiklikləri idarə et
    const handleChange = (id, field, value) => {
        setTransfer((prev) => ({
            ...prev,
            products: prev.products.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            ),
        }));
    };

    // “Ləğv et” – sıfırla
    const handleReset = () => {
        setTransfer({
            from: t('pages.warehouse.operations.common.warehouses.mainBaku'),
            to: "",
            date: new Date().toISOString().split("T")[0],
            products: [{ id: 1, product: "", quantity: "", newLocation: "" }],
        });
    };

    // “Transferi təsdiqlə” – (hələ backend yoxdursa, sadəcə console)
    const handleSubmit = () => {
        if (transfer.from === transfer.to) {
            alert(t('pages.warehouse.operations.transfer.validation.sameWarehouse'));
            return;
        }
        console.log("Transfer məlumatı:", transfer);
        alert(t('pages.warehouse.operations.transfer.success'));
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">{t('pages.warehouse.operations.transfer.title')}</h2>

            {/* Ümumi məlumat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.transfer.from')}</label>
                    <select
                        value={transfer.from}
                        onChange={(e) =>
                            setTransfer({ ...transfer, from: e.target.value })
                        }
                        className="w-full bg-gray-100 rounded px-3 py-2"
                    >
                        <option hidden>{t('pages.warehouse.operations.common.select')}</option>
                        <option value="anbar_bakı">{t('pages.warehouse.operations.common.warehouses.mainBaku')}</option>
                        <option value="anbar_gəncə">{t('pages.warehouse.operations.common.warehouses.branchGanja')}</option>
                        <option value="anbar_istehsalat">{t('pages.warehouse.operations.common.warehouses.production')}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.transfer.to')}</label>
                    <select
                        value={transfer.to}
                        onChange={(e) => setTransfer({ ...transfer, to: e.target.value })}
                        className="w-full bg-gray-100 rounded px-3 py-2"
                    >
                        <option hidden>{t('pages.warehouse.operations.common.select')}</option>
                        <option value="anbar_bakı">{t('pages.warehouse.operations.common.warehouses.mainBaku')}</option>
                        <option value="anbar_gəncə">{t('pages.warehouse.operations.common.warehouses.branchGanja')}</option>
                        <option value="anbar_istehsalat">{t('pages.warehouse.operations.common.warehouses.production')}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">{t('pages.warehouse.operations.common.date')}</label>
                    <input
                        type="date"
                        value={transfer.date}
                        onChange={(e) =>
                            setTransfer({ ...transfer, date: e.target.value })
                        }
                        className="w-full bg-gray-100 rounded px-3 py-2"
                    />
                </div>
            </div>

            {/* Məhsullar */}
            <h3 className="font-semibold mb-2">{t('pages.warehouse.operations.transfer.productsTitle')}</h3>
            <div className="space-y-3 mb-4">
                {transfer.products.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center"
                    >
                        <div className="flex flex-col  gap-2">
                            <label >{t('pages.warehouse.operations.common.product')}</label>
                            <select
                                value={item.product}
                                onChange={(e) =>
                                    handleChange(item.id, "product", e.target.value)
                                }
                                className="bg-gray-100 rounded px-3 py-2"
                            >
                                <option hidden>{t('pages.warehouse.operations.common.select')}</option>
                                <option value="HM-B205 - Hazır məhsul B-205">
                                    HM-B205 - Hazır məhsul B-205
                                </option>
                                <option value="XM-A101 - Xammal A-101">
                                    XM-A101 - Xammal A-101
                                </option>
                                <option value="BT-M1250 - Bolt M12x50">
                                    BT-M1250 - Bolt M12x50
                                </option>
                            </select>
                        </div>

                        <div className="flex flex-col  gap-2">
                            <label >{t('pages.warehouse.operations.common.quantity')}</label>
                            <input
                                type="number"

                                value={item.quantity}
                                onChange={(e) =>
                                    handleChange(item.id, "quantity", e.target.value)
                                }
                                className="bg-gray-100 rounded px-3 py-2"
                            />
                        </div>

                        <div className="flex flex-col  gap-2"> <label >{t('pages.warehouse.operations.transfer.newLocation')}</label>

                            <input

                                type="text"
                                placeholder="B1-R3-H4"
                                value={item.newLocation}
                                onChange={(e) =>
                                    handleChange(item.id, "newLocation", e.target.value)
                                }
                                className="bg-gray-100 rounded px-3 py-2"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={addProduct}
                className="text-sm font-medium text-blue-600 mb-4"
            >
                + {t('pages.warehouse.operations.common.addProduct')}
            </button>

            {/* Əməliyyat düymələri */}
            <div className="flex justify-end gap-3">
                <button
                    onClick={handleReset}
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                    {t('common.cancel')}
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    {t('pages.warehouse.operations.transfer.confirm')}
                </button>
            </div>
        </div>
    );
}

