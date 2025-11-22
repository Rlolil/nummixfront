import { useState } from "react";
import { useTranslation } from "react-i18next";
import BodyCard from "../components/BodyCard";
import CartProduct from "../components/CartProduct";

export default function Cart() {
    const { t } = useTranslation();
    const [cart, setCart] = useState([
        { _id: 1, name: "pages.sales.pos.products.productA", cateogry: "Category 1", price: 67, stock: 10, quantity: 0 },
        { _id: 2, name: "pages.sales.pos.products.productB", cateogry: "Category 2", price: 42, stock: 20, quantity: 0 },
        { _id: 3, name: "pages.sales.pos.products.productC", cateogry: "Category 3", price: 21, stock: 15, quantity: 0 },
    ]);

    const [searchedCart, setSearchedCart] = useState(cart);

    const handleSearch = (e) => {
        const filteredData = cart.filter((item) =>
            t(item.name).toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchedCart(filteredData);
    };

    return (
        <div className="w-full flex flex-col gap-6 bg-[#FFFFFF] dark:bg-[#001233] text-[#001233] dark:text-[#FFFFFF]">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-[#001233] dark:text-[#FFFFFF]">
                        {t('pages.sales.pos.title')}
                    </h2>
                    <p className="text-[#5C677D] dark:text-[#7D8597]">{t('pages.sales.pos.subtitle')}</p>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-6">
                {/* Left Panel */}
                <div className="flex flex-col gap-4 w-full sm:w-2/3">
                    {/* Barcode Input */}
                    <div className="w-full flex gap-4 border border-[#979DAC] dark:border-[#33415C] rounded-xl p-6 bg-[#FFFFFF] dark:bg-[#33415C]">
                        <input
                            type="text"
                            placeholder={t('pages.sales.pos.placeholders.scanOrEnterBarcode')}
                            className="w-full rounded-lg border bg-[#F5F5F5] dark:bg-[#002855] border-[#979DAC] dark:border-[#5C677D] px-4 text-[#001233] dark:text-[#FFFFFF] placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        />
                        <button className="btn btn-neutral rounded-lg bg-[#0466CB] text-[#FFFFFF] hover:bg-[#0453A4] dark:bg-[#0466CB] dark:hover:bg-[#0453A4]">
                            {t('pages.sales.pos.actions.add')}
                        </button>
                    </div>

                    {/* Product Search + Grid */}
                    <BodyCard
                        title={null}
                        child={
                            <div className="flex flex-col gap-6">
                                {/* Search Input */}
                                <div>
                                    <label className="input w-full rounded-lg bg-[#F5F5F5] dark:bg-[#002855] border-0 flex items-center px-3">
                                        <svg
                                            className="h-[1em] opacity-50 text-[#001233] dark:text-[#FFFFFF] mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <path d="m21 21-4.3-4.3"></path>
                                            </g>
                                        </svg>
                                        <input
                                            type="search"
                                            className="grow bg-transparent text-[#001233] dark:text-[#FFFFFF] placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                            placeholder={t('pages.sales.pos.placeholders.searchProduct')}
                                            onChange={handleSearch}
                                        />
                                    </label>
                                </div>

                                {/* Products Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {searchedCart.length ? (
                                        searchedCart.map((item) => (
                                            <div
                                                className="border border-[#979DAC] dark:border-[#33415C] hover:bg-[#F5F5F5] dark:hover:bg-[#023E7D] transition-all rounded-xl p-3 flex flex-col gap-2 bg-[#FFFFFF] dark:bg-[#33415C]"
                                                key={item._id}
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="font-semibold text-[#001233] dark:text-[#FFFFFF]">{t(item.name)}</h3>
                                                    <p className="text-[#5C677D] dark:text-[#7D8597] text-sm">{item.cateogry}</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-[#001233] dark:text-[#FFFFFF]">${item.price}</p>
                                                    <p className="text-[#5C677D] dark:text-[#7D8597] text-xs">Stock: {item.stock}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="sm:col-span-2 md:col-span-3 text-center text-lg text-[#5C677D] dark:text-[#7D8597]">
                                            {t('pages.sales.pos.empty')}
                                        </div>
                                    )}
                                </div>
                            </div>
                        }
                    />
                </div>

                {/* Right Panel (Cart + Summary) */}
                <div className="w-full sm:w-1/3 flex flex-col gap-4">
                    {/* Cart Items */}
                    <BodyCard
                        title={t('pages.sales.pos.cart.title')}
                        child={
                            <div className="flex flex-col gap-2">
                                {cart.map((item) => (
                                    <CartProduct item={item} key={item._id} />
                                ))}
                            </div>
                        }
                    />

                    {/* Summary + Actions */}
                    <BodyCard
                        title={null}
                        child={
                            <div className="flex flex-col gap-4">
                                {/* Summary */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between">
                                            <p className="text-[#5C677D] dark:text-[#7D8597]">{t('pages.sales.pos.summary.subtotal')}:</p>
                                            <p className="text-[#001233] dark:text-[#FFFFFF]">₼245.00</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-[#5C677D] dark:text-[#7D8597]">{t('pages.sales.pos.summary.vat', { percent: 18 })}:</p>
                                            <p className="text-[#001233] dark:text-[#FFFFFF]">₼44.28</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-lg text-[#001233] dark:text-[#FFFFFF]">{t('pages.sales.pos.summary.total')}:</p>
                                        <p className="text-2xl text-[#0466CB] dark:text-[#0466CB]">₼290.27</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="btn rounded-lg flex items-center justify-center bg-[#0466CB] text-[#FFFFFF] hover:bg-[#0453A4] dark:bg-[#0466CB] dark:hover:bg-[#0453A4]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-banknote h-4 w-4 mr-2"
                                            aria-hidden="true"
                                        >
                                            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                            <circle cx="12" cy="12" r="2"></circle>
                                            <path d="M6 12h.01M18 12h.01"></path>
                                        </svg>
                                        <p>{t('pages.sales.pos.payment.cash')}</p>
                                    </button>
                                    <button className="btn rounded-lg flex items-center justify-center bg-[#0453A4] text-[#FFFFFF] hover:bg-[#023E7D] dark:bg-[#0453A4] dark:hover:bg-[#023E7D]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-credit-card h-4 w-4 mr-2"
                                            aria-hidden="true"
                                        >
                                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                            <line x1="2" x2="22" y1="10" y2="10"></line>
                                        </svg>
                                        <p>{t('pages.sales.pos.payment.card')}</p>
                                    </button>
                                    <button className="btn rounded-lg col-span-2 flex items-center justify-center bg-[#023E7D] text-[#FFFFFF] hover:bg-[#0466CB] dark:bg-[#023E7D] dark:hover:bg-[#0466CB]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-printer h-4 w-4 mr-2"
                                            aria-hidden="true"
                                        >
                                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                            <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
                                            <rect x="6" y="14" width="12" height="8" rx="1"></rect>
                                        </svg>
                                        <p>{t('pages.sales.pos.actions.print')}</p>
                                    </button>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
