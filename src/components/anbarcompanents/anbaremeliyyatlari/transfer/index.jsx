import React, { useState } from "react";

export default function AnbarTransfer() {
    const [transfer, setTransfer] = useState({
        from: "Əsas Anbar - Bakı",
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
            from: "Əsas Anbar - Bakı",
            to: "",
            date: new Date().toISOString().split("T")[0],
            products: [{ id: 1, product: "", quantity: "", newLocation: "" }],
        });
    };

    // “Transferi təsdiqlə” – (hələ backend yoxdursa, sadəcə console)
    const handleSubmit = () => {
        if (transfer.from === transfer.to) {
            alert("Eyni anbardan eyni anbara transfer etmək olmaz!");
            return;
        }
        console.log("Transfer məlumatı:", transfer);
        alert("Transfer uğurla qeyd edildi (mock)");
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-sm md:mx-64">
            <h2 className="text-xl font-semibold mb-4">Anbar Transfer</h2>

            {/* Ümumi məlumat */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Haradan</label>
                    <select
                        value={transfer.from}
                        onChange={(e) =>
                            setTransfer({ ...transfer, from: e.target.value })
                        }
                        className="w-full bg-gray-100 rounded px-3 py-2"
                    >
                        <option hidden>Seçin</option>
                        <option value="anbar_bakı">Əsas Anbar - Bakı</option>
                        <option value="anbar_gəncə">Filial Anbarı - Gəncə</option>
                        <option value="anbar_istehsalat">İstehsalat Anbarı</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Hara</label>
                    <select
                        value={transfer.to}
                        onChange={(e) => setTransfer({ ...transfer, to: e.target.value })}
                        className="w-full bg-gray-100 rounded px-3 py-2"
                    >
                        <option hidden>Seçin</option>
                        <option value="anbar_bakı">Əsas Anbar - Bakı</option>
                        <option value="anbar_gəncə">Filial Anbarı - Gəncə</option>
                        <option value="anbar_istehsalat">İstehsalat Anbarı</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Tarix</label>
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
            <h3 className="font-semibold mb-2">Transfer məhsulları</h3>
            <div className="space-y-3 mb-4">
                {transfer.products.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center"
                    >
                        <div className="flex flex-col  gap-2">
                            <label > Məhsul</label>
                            <select
                                value={item.product}
                                onChange={(e) =>
                                    handleChange(item.id, "product", e.target.value)
                                }
                                className="bg-gray-100 rounded px-3 py-2"
                            >
                                <option hidden>Seçin</option>
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
                            <label > Miqdar</label>
                            <input
                                type="number"

                                value={item.quantity}
                                onChange={(e) =>
                                    handleChange(item.id, "quantity", e.target.value)
                                }
                                className="bg-gray-100 rounded px-3 py-2"
                            />
                        </div>

                        <div className="flex flex-col  gap-2"> <label >Yeni yer</label>

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
                + Məhsul əlavə et
            </button>

            {/* Əməliyyat düymələri */}
            <div className="flex justify-end gap-3">
                <button
                    onClick={handleReset}
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                    Ləğv et
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Transferi təsdiqlə
                </button>
            </div>
        </div>
    );
}

