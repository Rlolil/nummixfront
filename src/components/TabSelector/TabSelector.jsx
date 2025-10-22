export default function TabSelector({ currentTab, setCurrentTab, tabs }) {
    return (
        <div className="w-full bg-zinc-200 p-1 rounded-xl grid grid-cols-3 md:grid-cols-6 gap-1">
            {tabs?.map((tab, index) => (
                <div
                    key={index}
                    onClick={() => setCurrentTab(index + 1)}
                    className={` ${currentTab === index + 1 ? "bg-white text-zinc-800" : "text-zinc-800 "}
                     font-semibold rounded-lg px-2 py-1 text-center cursor-pointer hover:bg-white hover:text-zinc-800 transition-all`}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
}   