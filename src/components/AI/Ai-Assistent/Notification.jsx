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
        tagColor: "bg-black",
    },
    {
        id: 3,
        icon: <Boxes className="text-orange-400" size={22} />,
        title: t("pages.ai.assistant.notifications.items.minWarehouse.title"),
        desc: t("pages.ai.assistant.notifications.items.minWarehouse.desc"),
        time: t("pages.ai.assistant.notifications.items.minWarehouse.time"),
        action: t("pages.ai.assistant.notifications.items.minWarehouse.action"),
        tag: t("pages.ai.assistant.notifications.items.minWarehouse.tag"),
        tagColor: "bg-black",
    },
    {
        id: 4,
        icon: <DollarSign className="text-blue-500" size={22} />,
        title: t("pages.ai.assistant.notifications.items.overdueDebt.title"),
        desc: t("pages.ai.assistant.notifications.items.overdueDebt.desc"),
        time: t("pages.ai.assistant.notifications.items.overdueDebt.time"),
        action: t("pages.ai.assistant.notifications.items.overdueDebt.action"),
        tag: t("pages.ai.assistant.notifications.items.overdueDebt.tag"),
        tagColor: "bg-gray-200 text-gray-800",
    },
]);

const Notification = ({ onClose }) => {
    const { t } = useTranslation();
    const notifications = useNotifications(t);
    return (
        <Overlay onClose={onClose}>
            <div className="fixed z-50 flex flex-col overflow-hidden shadow-2xl bg-white dark:bg-zinc-800 rounded-2xl animate-slide-in-right right-0 top-20 h-[600px] w-[370px] sm:w-[420px] sm:right-10 sm:top-20 md:rounded-2xl sm:animate-slide-in-right max-sm:animate-fade-in max-sm:inset-0 max-sm:w-[90%] max-sm:h-[80%] max-sm:top-1/2 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2">
                <div className="bg-white dark:bg-zinc-700 border-b border-gray-300 dark:border-zinc-600 px-5 py-4 flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-gray-800 dark:text-white text-lg">{t("pages.ai.assistant.notifications.title")}</h2>
                        <p className="text-sm text-blue-600">{t("pages.ai.assistant.notifications.unreadCount", { count: 5 })}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-3xl cursor-pointer font-bold text-gray-400 hover:text-gray-600"
                    >
                        ×
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {notifications.map((item) => (
                        <div
                            key={item.id}
                            className="relative border-b border-gray-300 dark:border-zinc-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-zinc-700 transition"
                        >
                            <div className="flex gap-3">
                                <div className="mt-1">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-medium text-gray-800 dark:text-white">{item.title}</h3>
                                        {item.tag && (
                                            <span
                                                className={`text-xs text-white px-2 py-0.5 rounded-md ${item.tagColor}`}
                                            >
                                                {item.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.desc}</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-xs text-gray-400 dark:text-gray-400">{item.time}</span>
                                        <button className="text-blue-600 text-sm font-medium hover:underline">
                                            {item.action}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-300 dark:border-zinc-600 py-3 flex justify-center bg-gray-50 dark:bg-zinc-700">
                    <button className="text-sm text-blue-600 font-medium hover:underline">
                        {t("pages.ai.assistant.notifications.markAllRead")}
                    </button>
                </div>
            </div>
        </Overlay>
    );
};

export default Notification;
