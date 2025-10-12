export default function TabSelector({ currentTab, setCurrentTab }) {
    return (
        <div className="w-full bg-zinc-200 p-1 rounded-xl grid grid-cols-6 gap-1">
            <div
                onClick={() => setCurrentTab(1)}
                className={` ${currentTab === 1 ? "bg-white text-zinc-800" : "text-zinc-800 "}
                     font-semibold rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                Control Panel
            </div>
            <div
                onClick={() => setCurrentTab(2)}
                className={` ${currentTab === 2 ? "bg-white text-zinc-800" : "text-zinc-800"}
                    font-semibold rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                Customers
            </div>
            <div
                onClick={() => setCurrentTab(3)}
                className={` ${currentTab === 3 ? "bg-white text-zinc-800" : "text-zinc-800"}
                    font-semibold rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                Sales
            </div>
            <div
                onClick={() => setCurrentTab(4)}
                className={` ${currentTab === 4 ? "bg-white text-zinc-800" : "text-zinc-800"}
                    font-semibold rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                POS Cart
            </div>
            <div
                onClick={() => setCurrentTab(5)}
                className={` ${currentTab === 5 ? "bg-white text-zinc-800" : "text-zinc-800"}
                    font-semibold rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                Payments
            </div>
            <div
                onClick={() => setCurrentTab(6)}
                className={` ${currentTab === 6 ? "bg-white text-zinc-800" : "text-zinc-800"}
                    font-semibold rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                Reports
            </div>
        </div>
    );
}
