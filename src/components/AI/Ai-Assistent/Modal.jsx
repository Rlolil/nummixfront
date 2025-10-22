import React from "react";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";

const Modal = ({ onClose }) => {
    const { t } = useTranslation();
    return (
        <Overlay onClose={onClose}>
            <div className="w-[350px] sm:w-[600px] sm:h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in relative">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="px-3 py-2 rounded-xl flex bg-white/20 items-center">
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
                                className="lucide lucide-chart-column w-5 h-5"
                                aria-hidden="true"
                            >
                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">{t("pages.ai.assistant.modal.title")}</span>
                            <span className="font-semibold text-xs">{t("pages.ai.assistant.modal.subtitle")}</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-3xl cursor-pointer font-bold hover:text-gray-200"
                    >
                        ×
                    </button>
                </div>

                <div className="p-4 h-[530px] flex flex-col">
                    <div className="bg-gray-100 p-3 rounded-lg mt-10 text-gray-700 mb-4">
                        {t("pages.ai.assistant.modal.greeting")}
                    </div>

                    <div className="mt-auto">
                        <div className="mb-3">
                            <span className="text-sm font-semibold text-gray-700">
                                {t("pages.ai.assistant.modal.faqTitle")}
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
                                    {t("pages.ai.assistant.modal.quickQuestions.profitThisMonth")}
                                </button>
                                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
                                    {t("pages.ai.assistant.modal.quickQuestions.topSellingProduct")}
                                </button>
                                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
                                    {t("pages.ai.assistant.modal.quickQuestions.nextMonthPayroll")}
                                </button>
                                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
                                    {t("pages.ai.assistant.modal.quickQuestions.largestDebt")}
                                </button>
                            </div>
                        </div>

                        <div className="border-t border-gray-300 pt-3 flex gap-2">
                            <input
                                type="text"
                                placeholder={t("pages.ai.assistant.modal.inputPlaceholder")}
                                className="flex-grow border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg">
                                {t("pages.ai.assistant.modal.send")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Overlay>
    );
};

export default Modal;
