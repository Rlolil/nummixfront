export default function TabSelector({ activeTab, setActiveTab }) {
    return (
        <div className="w-full bg-zinc-200 p-2 rounded-xl grid grid-cols-5 gap-2">
            <div
                onClick={() => setActiveTab("controlPanel")}
                className={` ${
                    activeTab === "controlPanel" ? "bg-white text-zinc-800" : "text-zinc-800 "
                }
                     font-semibold  rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                Control Panel
            </div>
            <div
                onClick={() => setActiveTab("customers")}
                className={` ${
                    activeTab === "customers" ? "bg-white text-zinc-800" : "text-zinc-6800"
                }
                    font-semibold  rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
            >
                Customers
            </div>
        </div>
    );
}
