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
                                ${
                                    active
                                        ? "bg-[#0466CB] text-white border-[#0466CB] dark:bg-[#0453A4] dark:border-[#023E7D]"
                                        : "border-[#33415C] text-[#001233] bg-white dark:border-[#979DAC] dark:text-white dark:bg-[#002855] dark:hover:bg-[#023E7D]"
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
