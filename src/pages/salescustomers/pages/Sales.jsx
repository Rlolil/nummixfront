import BodyCard from "../components/BodyCard";
import HeadCard from "../components/HeadCard";

import { HiPlus } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import SalesTableRow from "../components/SalesTableRow";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const data = [
    {
        invoiceNumber: "INV-2025-001",
        date: "2025-10-08",
        customer: "ABC Şirkəti",
        amount: "AZN 12,500",
        statusCode: "paid",
    },
    {
        invoiceNumber: "INV-2025-002",
        date: "2025-10-10",
        customer: "XYZ MMC",
        amount: "AZN 8,750",
        statusCode: "unpaid",
    },
    {
        invoiceNumber: "INV-2025-003",
        date: "2025-10-12",
        customer: "123 Ltd.",
        amount: "AZN 5,300",
        statusCode: "overdue",
    },
];

export default function Sales() {
    const { t } = useTranslation();
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
                    <h2 className="text-2xl font-semibold">{t("pages.sales.sales.title")}</h2>
                    <p className="text-zinc-600">{t("pages.sales.sales.subtitle")}</p>
                </div>
                <div>
                    <button
                        className="btn btn-neutral rounded-lg flex justify-between items-center gap-4"
                        onClick={() => document.getElementById("addNew").showModal()}
                    >
                        <HiPlus className="size-4.5 text-white" />
                        <p className="text-nowrap">{t("pages.sales.sales.actions.newInvoice")}</p>
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
                                <h3 className="font-bold text-lg">{t("pages.sales.sales.modal.title")}</h3>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">{t("pages.sales.sales.form.customer")}</p>
                                                <select
                                                    defaultValue="select"
                                                    className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                >
                                                    <option disabled value="select">{t("pages.sales.sales.placeholders.selectCustomer")}</option>
                                                    {data?.map((item, index) => (
                                                        <option key={index} value={item.customer}>
                                                            {item.customer}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">{t("pages.sales.sales.form.date")}</p>
                                                <input
                                                    type="date"
                                                    className="input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                    placeholder={t("pages.sales.sales.placeholders.date")}
                                                />
                                            </label>
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">{t("pages.sales.sales.form.currency")}</p>
                                                <select
                                                    defaultValue="AZN"
                                                    className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                >
                                                    <option value="AZN">{t("pages.sales.sales.currencyOptions.AZN")}</option>
                                                    <option value="USD">{t("pages.sales.sales.currencyOptions.USD")}</option>
                                                    <option value="EUR">{t("pages.sales.sales.currencyOptions.EUR")}</option>
                                                </select>
                                            </label>
                                            <label className="flex flex-col gap-2">
                                                <p className="font-semibold text-sm">{t("pages.sales.sales.form.paymentTerm")}</p>
                                                <select
                                                    defaultValue="cash"
                                                    className="select input h-fit py-2 w-full focus:outline-2 focus:outline-zinc-400 placeholder:text-gray-600 rounded-md bg-zinc-100 border-0"
                                                >
                                                    <option value="cash">{t("pages.sales.sales.paymentTerms.cash")}</option>
                                                    <option value="15">{t("pages.sales.sales.paymentTerms.days15")}</option>
                                                    <option value="30">{t("pages.sales.sales.paymentTerms.days30")}</option>
                                                    <option value="60">{t("pages.sales.sales.paymentTerms.days60")}</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-semibold">{t("pages.sales.sales.products.title")}</h3>
                                                <button
                                                    onClick={handleAddNewProduct}
                                                    className="btn btn-neutral btn-outline rounded-lg flex justify-between items-center gap-4 h-fit py-1"
                                                >
                                                    <HiPlus className="size-4.5" />
                                                    <p>{t("pages.sales.sales.products.add")}</p>
                                                </button>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="table">
                                                    <thead>
                                                        <tr className="bg-zinc-100 text-black">
                                                            <th>{t("pages.sales.sales.products.table.product")}</th>
                                                            <th>{t("pages.sales.sales.products.table.quantity")}</th>
                                                            <th>{t("pages.sales.sales.products.table.price")}</th>
                                                            <th>{t("pages.sales.sales.products.table.discount")}</th>
                                                            <th>{t("pages.sales.sales.products.table.total")}</th>
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
                                                                        placeholder={t("pages.sales.sales.placeholders.product")}
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
                                                                        placeholder={t("pages.sales.sales.placeholders.quantity")}
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
                                                                        placeholder={t("pages.sales.sales.placeholders.price")}
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
                                                                        placeholder={t("pages.sales.sales.placeholders.discount")}
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
                                                    <span className="font-semibold">{t("pages.sales.sales.summary.total")}:</span> ₼0
                                                </p>
                                                <p className="flex justify-between sm:w-64 w-full">
                                                    <span className="font-semibold">{t("pages.sales.sales.summary.discount")}:</span> ₼0
                                                </p>
                                                <p className="flex justify-between sm:w-64 w-full">
                                                    <span className="font-semibold">{t("pages.sales.sales.summary.vat", { percent: 18 })}:</span> ₼0
                                                </p>
                                                <div className="border-t border-zinc-300 mt-2 pt-2 w-full sm:w-fit">
                                                    <p className="font-semibold flex justify-between sm:w-64 w-full">
                                                        <span className="font-semibold">{t("pages.sales.sales.summary.grandTotal")}:</span> ₼0
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
                                            {t("common.cancel")}
                                        </button>
                                        <button className="btn btn-neutral rounded-lg mt-4" type="submit">
                                            {t("common.save")}
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
                        description={t("pages.sales.sales.cards.totalSalesThisMonth")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-green-600">₼ 21,400</div>}
                        greenText={null}
                        description={t("pages.sales.sales.cards.paid")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-orange-400">₼ 15,600</div>}
                        greenText={null}
                        description={t("pages.sales.sales.cards.unpaid")}
                        icon={null}
                    />
                    <HeadCard
                        title={null}
                        amount={<div className="text-2xl text-red-500">₼5,400</div>}
                        greenText={null}
                        description={t("pages.sales.sales.cards.overdue")}
                        icon={null}
                    />
                </div>
                <BodyCard
                    title={null}
                    child={
                        <div className="w-full flex flex-col gap-6">
                            <h3>{t("pages.sales.sales.table.title")}</h3>
                            <div className="overflow-x-auto">
                                <table className="table text-base">
                                    <thead>
                                        <tr className="text-black text-base">
                                            <th>{t("pages.sales.sales.table.columns.invoiceNo")}</th>
                                            <th className="hidden md:table-cell">{t("pages.sales.sales.table.columns.date")}</th>
                                            <th className="hidden md:table-cell">{t("pages.sales.sales.table.columns.customer")}</th>
                                            <th className="text-right">{t("pages.sales.sales.table.columns.amount")}</th>
                                            <th className="hidden sm:table-cell">{t("pages.sales.sales.table.columns.status")}</th>
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
