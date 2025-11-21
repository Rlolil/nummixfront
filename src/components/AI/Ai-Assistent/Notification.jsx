import React from "react";
import { AlertTriangle, Package, Boxes, DollarSign } from "lucide-react";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";

const useNotifications = (t) => ([
    {
        id: 1,
        icon: <AlertTriangle className="text-red-500" size={22} />,
        title: t("pages.ai.assistant.notifications.items.vatDue.title"),
        desc: t("pages.ai.assistant.notifications.items.vatDue.desc"),
        time: t("pages.ai.assistant.notifications.items.vatDue.time"),
        action: t("pages.ai.assistant.notifications.items.vatDue.action"),
        tag: t("pages.ai.assistant.notifications.items.vatDue.tag"),
        tagColor: "bg-red-500",
    },
    {
        id: 2,
        icon: <Package className="text-amber-500" size={22} />,
        title: t("pages.ai.assistant.notifications.items.criticalStock.title"),
        desc: t("pages.ai.assistant.notifications.items.criticalStock.desc"),
        time: t("pages.ai.assistant.notifications.items.criticalStock.time"),
        action: t("pages.ai.assistant.notifications.items.criticalStock.action"),
        tag: t("pages.ai.assistant.notifications.items.criticalStock.tag"),
        tagColor: "bg-[#023E7D] text-white",
    },
    {
        id: 3,
        icon: <Boxes className="text-orange-400" size={22} />,
        title: t("pages.ai.assistant.notifications.items.minWarehouse.title"),
        desc: t("pages.ai.assistant.notifications.items.minWarehouse.desc"),
        time: t("pages.ai.assistant.notifications.items.minWarehouse.time"),
        action: t("pages.ai.assistant.notifications.items.minWarehouse.action"),
        tag: t("pages.ai.assistant.notifications.items.minWarehouse.tag"),
        tagColor: "bg-[#023E7D] text-white",
    },
    {
        id: 4,
        icon: <DollarSign className="text-blue-500" size={22} />,
        title: t("pages.ai.assistant.notifications.items.overdueDebt.title"),
        desc: t("pages.ai.assistant.notifications.items.overdueDebt.desc"),
        time: t("pages.ai.assistant.notifications.items.overdueDebt.time"),
        action: t("pages.ai.assistant.notifications.items.overdueDebt.action"),
        tag: t("pages.ai.assistant.notifications.items.overdueDebt.tag"),
        tagColor: "bg-[#0466CB] text-white",
    },
]);

const Notification = ({ onClose }) => {
    const { t } = useTranslation();
    const notifications = useNotifications(t);

    return (
        <Overlay onClose={onClose}>
            <div className="fixed z-50 flex flex-col overflow-hidden shadow-2xl
                            bg-white dark:bg-[#001233] rounded-2xl
                            animate-slide-in-right right-0 top-20 h-[600px] w-[370px] sm:w-[420px] sm:right-10 sm:top-20
                            max-sm:inset-0 max-sm:w-[90%] max-sm:h-[80%] max-sm:top-1/2 max-sm:left-1/2
                            max-sm:-translate-x-1/2 max-sm:-translate-y-1/2">

                <div className="px-5 py-4 flex justify-between items-center
                                bg-[#0466CB] dark:bg-[#002855] rounded-t-2xl
                                border-b border-[#979DAC] dark:border-[#5C677D]">
                    <div>
                        <h2 className="font-semibold text-white">{t("pages.ai.assistant.notifications.title")}</h2>
                        <p className="text-sm text-[#FFFFFF]/80">{t("pages.ai.assistant.notifications.unreadCount", { count: 5 })}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-3xl cursor-pointer font-bold text-white hover:text-gray-200"
                    >
                        ×
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FFFFFF] dark:bg-[#001845]">
                    {notifications.map((item) => (
                        <div
                            key={item.id}
                            className="relative rounded-lg p-4 border border-[#979DAC] dark:border-[#5C677D]
                                       hover:bg-[#F0F0F0] dark:hover:bg-[#33415C] transition"
                        >
                            <div className="flex gap-3">
                                <div className="mt-1">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium text-[#001233] dark:text-white">{item.title}</h3>
                                        {item.tag && (
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-md ${item.tagColor}`}
                                            >
                                                {item.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-[#7D8597] dark:text-[#5C677D] mt-1">{item.desc}</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-xs text-[#979DAC] dark:text-[#7D8597]">{item.time}</span>
                                        <button className="text-[#0466CB] dark:text-[#0466CB] text-sm font-medium hover:underline">
                                            {item.action}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-[#979DAC] dark:border-[#5C677D] py-3 flex justify-center bg-[#F9F9F9] dark:bg-[#001845] rounded-b-2xl">
                    <button className="text-[#0466CB] dark:text-[#0466CB] text-sm font-medium hover:underline">
                        {t("pages.ai.assistant.notifications.markAllRead")}
                    </button>
                </div>
            </div>
        </Overlay>
    );
};

export default Notification;
