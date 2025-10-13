export default function CartProduct({ item }) {
    return (
        <div className="flex gap-4 items-center justify-between bg-zinc-100 rounded-lg px-3 py-2">
            <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-zinc-500 text-sm">
                    <span>₼{item.price}</span> x <span>{item.quantity}</span>
                </p>
            </div>
            <div className="flex items-center gap-4">
                <button className="outline-1 outline-zinc-300 bg-white hover:bg-zinc-200 p-2 rounded-lg transition-all">
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
                        class="lucide lucide-minus h-3 w-3"
                        ariaHidden="true"
                    >
                        <path d="M5 12h14"></path>
                    </svg>
                </button>
                <p>{item.quantity}</p>
                <button className="outline-1 outline-zinc-300 bg-white hover:bg-zinc-200 p-2 rounded-lg transition-all">
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
                        class="lucide lucide-plus h-3 w-3"
                        ariaHidden="true"
                    >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                </button>
                <button className="bg-white hover:bg-zinc-200 p-2 rounded-lg transition-all">
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
                        class="lucide lucide-trash2 lucide-trash-2 h-3 w-3"
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
                <p>₼{item.price * item.quantity}</p>
            </div>
        </div>
    );
}
