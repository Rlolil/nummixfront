export default function TabSelector({ currentTab, setCurrentTab, tabs }) {
    return (
        <div className="w-full p-3 rounded-xl border bg-white border-zinc-300 dark:bg-[#001433] dark:border-zinc-100 transition-all">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {tabs?.map((tab, index) => {
                    const active = currentTab === index + 1;

                    return (
                        <div
                            key={index}
                            onClick={() => setCurrentTab(index + 1)}
                            className={`
                                px-4 py-2 rounded-lg text-center font-semibold cursor-pointer border transition-all duration-200
                                ${active
                                    ? "bg-blue-500 text-white border-zinc-300 dark:bg-[#012a59] dark:text-white dark:border-zinc-100"
                                    : "bg-white text-zinc-700 border-zinc-300 hover:bg-blue-200 dark:bg-[#002b5c] dark:text-white/80 dark:border-zinc-100 dark:hover:bg-[#01386e]"
                                }
                            `}
                        >
                            {tab}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
