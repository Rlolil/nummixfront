import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";

import { HiPlus } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import SalesTableRow from "../components/SalesTableRow";
import { useEffect, useState } from "react";

const data = [
    {
        invoiceNumber: "INV-2025-001",
        date: "2025-10-08",
        customer: "ABC Şirkəti",
        amount: "AZN 12,500",
        status: "Ödənildi",
    },
    {
        invoiceNumber: "INV-2025-002",
        date: "2025-10-10",
        customer: "XYZ MMC",
        amount: "AZN 8,750",
        status: "Ödənilməmiş",
    },
    {
        invoiceNumber: "INV-2025-003",
        date: "2025-10-12",
        customer: "123 Ltd.",
        amount: "AZN 5,300",
        status: "Gecikmiş",
    },
];

export default function Sales() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [newProducts, setNewProducts] = useState([]);

    const handleAddNewProduct = () => {
        const newProduct = { id: Date.now(), name: "", quantity: 1, price: 0, discount: 0 };
        setNewProducts([...newProducts, newProduct]);
    };

    const handleRemoveProduct = (id) => {
        setNewProducts(newProducts.filter((product) => product.id !== id));
    };

    const handleProductChange = (e, id, field) => {
        setNewProducts(
            newProducts.map((product) =>
                product.id === id ? { ...product, [field]: e.target.value } : product
            )
        );
    };

    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold">Müştərilər</h2>
                    <p className="text-zinc-600">Müştəri məlumatları və satış tarixçəsi</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">Yeni Faktura</p>
                    </button>
                    <dialog id="addNew" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("addNew").close()}
                            >
                                ✕
                            </button>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">Yeni Faktura Əlavə Et!</h3>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">Müştəri</p>
                                                <select
                                                    defaultValue="Müştəri Seçin"
                                                    className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                >
                                                    <option disabled>Müştəri Seçin</option>
                                                    {data?.map((item, index) => (
                                                        <option key={index} value={item.customer}>
                                                            {item.customer}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">Tarix</p>
                                                <input
                                                    type="date"
                                                    className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                    placeholder="Tarixi daxil edin"
                                                />
                                            </label>
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">Valyuta</p>
                                                <select
                                                    defaultValue="Valyuta Seçin"
                                                    className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                >
                                                    <option value="AZN">AZN</option>
                                                    <option value="USD">USD</option>
                                                    <option value="EUR">EUR</option>
                                                </select>
                                            </label>
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">Ödəniş Müddəti</p>
                                                <select
                                                    defaultValue="Ödəniş Müddəti Seçin"
                                                    className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                >
                                                    <option value="0">Nağd</option>
                                                    <option value="15">15 gün</option>
                                                    <option value="30">30 gün</option>
                                                    <option value="60">60 gün</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-semibold">Məhsullar</h3>
                                                <button
                                                    onClick={handleAddNewProduct}
                                                    className="btn btn-neutral btn-outline rounded-lg flex justify-between items-center gap-4 h-fit py-1"
                                                >
                                                    <HiPlus className="size-4.5" />
                                                    <p>Yeni Məhsul</p>
                                                </button>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="table">
                                                    <thead>
                                                        <tr className="bg-zinc-100 text-black">
                                                            <th>Məhsul</th>
                                                            <th>Miqdar</th>
                                                            <th>Qiymət</th>
                                                            <th>Endirim %</th>
                                                            <th>Cəmi</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* <tr>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                    placeholder="Məhsul"
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                    placeholder="Miqdar"
                                                                    min="1"
                                                                    max="10"
                                                                    defaultValue="1"
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                    placeholder="Qiymət"
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                    placeholder="Endirim %"
                                                                />
                                                            </td>
                                                            <td>₼ 100</td>
                                                            <td>
                                                                <button className="hover:bg-zinc-200 p-2 rounded-lg transition-all">
                                                                    <IoClose className="size-5" />
                                                                </button>
                                                            </td>
                                                        </tr> */}
                                                        {newProducts.map((product) => (
                                                            <tr key={product.id}>
                                                                <td>
                                                                    <input
                                                                        onChange={(e) =>
                                                                            handleProductChange(
                                                                                e,
                                                                                product.id,
                                                                                "name"
                                                                            )
                                                                        }
                                                                        type="text"
                                                                        className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                        placeholder="Məhsul"
                                                                        defaultValue={product.name}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        onChange={(e) =>
                                                                            handleProductChange(
                                                                                e,
                                                                                product.id,
                                                                                "quantity"
                                                                            )
                                                                        }
                                                                        type="number"
                                                                        className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                        placeholder="Miqdar"
                                                                        defaultValue={product.quantity}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        onChange={(e) =>
                                                                            handleProductChange(
                                                                                e,
                                                                                product.id,
                                                                                "price"
                                                                            )
                                                                        }
                                                                        type="number"
                                                                        className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                        placeholder="Qiymət"
                                                                        defaultValue={product.price}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        onChange={(e) =>
                                                                            handleProductChange(
                                                                                e,
                                                                                product.id,
                                                                                "discount"
                                                                            )
                                                                        }
                                                                        type="number"
                                                                        className="input input-sm focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                                        placeholder="Endirim %"
                                                                        defaultValue={product.discount}
                                                                    />
                                                                </td>
                                                                <td>₼</td>
                                                                <td>
                                                                    <button
                                                                        onClick={() =>
                                                                            handleRemoveProduct(product.id)
                                                                        }
                                                                        className="hover:bg-zinc-200 p-2 rounded-lg transition-all"
                                                                    >
                                                                        <IoClose className="size-5" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="flex flex-col gap-1 items-end">
                                                <p className="flex justify-between sm:w-64 w-full">
                                                    <span className="font-semibold">Ümumi:</span> ₼0
                                                </p>
                                                <p className="flex justify-between sm:w-64 w-full">
                                                    <span className="font-semibold">Endirim:</span> ₼0
                                                </p>
                                                <p className="flex justify-between sm:w-64 w-full">
                                                    <span className="font-semibold">ƏDV (18%):</span> ₼0
                                                </p>
                                                <div className="border-t border-zinc-300 mt-2 pt-2 w-full sm:w-fit">
                                                    <p className="font-semibold flex justify-between sm:w-64 w-full">
                                                        <span className="font-semibold">Yekun:</span> ₼0
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-end items-center">
                                        <button
                                            type="button"
                                            className="btn rounded-lg mt-4"
                                            onClick={() => document.getElementById("addNew").close()}
                                        >
                                            Ləğv et
                                        </button>
                                        <button className="btn btn-neutral rounded-lg mt-4" type="submit">
                                            Yadda saxla
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            className="modal-backdrop"
                            onClick={() => document.getElementById("addNew").close()}
                        />
                    </dialog>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="w-full col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl">₼ 42,400</div>}
                        greenText={null}
                        description="Ümumi Satış (Bu Ay)"
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-green-600">₼ 21,400</div>}
                        greenText={null}
                        description="Ödənilmiş"
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-orange-400">₼ 15,600</div>}
                        greenText={null}
                        description="Ödənilməmiş"
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-red-500">₼5,400</div>}
                        greenText={null}
                        description="Gecikmiş"
                        icon={null}
                    />
                </div>
                <BodyCard
                    title={null}
                    child={
                        <div className="w-full flex flex-col gap-6">
                            <h3>Fakturalar</h3>
                            <div className="overflow-x-auto">
                                <table className="table text-base">
                                    <thead>
                                        <tr className="text-black text-base">
                                            <th>Faktura №</th>
                                            <th className="hidden md:table-cell">Tarix</th>
                                            <th className="hidden md:table-cell">Müştəri</th>
                                            <th className="text-right">Məbləğ</th>
                                            <th className="hidden sm:table-cell">Status</th>
                                            <th className="text-right"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, index) => (
                                            <SalesTableRow key={index} item={item} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
