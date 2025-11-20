import { useTranslation } from "react-i18next";

export default function CartProduct({ item }) {
    const { t } = useTranslation();
    return (
        <div className="flex gap-4 items-center justify-between bg-[#FFFFFF] dark:bg-[#001233] rounded-lg px-3 py-2">
            <div>
                <h3 className="font-semibold text-[#001233] dark:text-[#FFFFFF]">{item.name}</h3>
                <p className="text-[#5C677D] dark:text-[#7D8597] text-sm">
                    <span>₼{item.price}</span> x <span>{item.quantity}</span>
                </p>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="outline-1 outline-[#979DAC] bg-[#FFFFFF] dark:bg-[#023E7D] hover:bg-[#0453A4] dark:hover:bg-[#0466CB] p-2 rounded-lg transition-all"
                    title={t('pages.sales.pos.cart.decrease')}
                    aria-label={t('pages.sales.pos.cart.decrease')}
                >
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
                        className="lucide lucide-minus h-3 w-3 dark:text-[#FFFFFF]"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14"></path>
                    </svg>
                </button>
                <p className="text-[#001233] dark:text-[#FFFFFF]">{item.quantity}</p>
                <button
                    className="outline-1 outline-[#979DAC] bg-[#FFFFFF] dark:bg-[#023E7D] hover:bg-[#0453A4] dark:hover:bg-[#0466CB] p-2 rounded-lg transition-all"
                    title={t('pages.sales.pos.cart.increase')}
                    aria-label={t('pages.sales.pos.cart.increase')}
                >
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
                        className="lucide lucide-plus h-3 w-3 dark:text-[#FFFFFF]"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                </button>
                <button
                    className="bg-[#FFFFFF] dark:bg-[#023E7D] hover:bg-[#0453A4] dark:hover:bg-[#0466CB] p-2 rounded-lg transition-all"
                    title={t('pages.sales.pos.cart.remove')}
                    aria-label={t('pages.sales.pos.cart.remove')}
                >
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
                        className="lucide lucide-trash2 lucide-trash-2 h-3 w-3 dark:text-[#FFFFFF]"
                        aria-hidden="true"
                    >
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M3 6h18"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
            <div>
                <p className="text-[#001233] dark:text-[#FFFFFF]">₼{item.price * item.quantity}</p>
            </div>
        </div>
    );
}
