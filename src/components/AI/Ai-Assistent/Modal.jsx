import React from "react";
import Overlay from "../../overlay";
import { useTranslation } from "react-i18next";

const Modal = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <Overlay onClose={onClose}>
      <div className="w-[350px] sm:w-[600px] sm:h-[600px] rounded-2xl shadow-2xl overflow-hidden animate-fade-in relative
                      bg-white dark:bg-[#001233] text-black dark:text-white">
        <div className="px-4 py-3 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-white">
          <div className="flex items-center gap-2">
            <div className="px-3 py-2 rounded-xl flex bg-white/20 dark:bg-white/10 items-center">
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
                className="w-5 h-5"
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
              <span className="font-semibold text-xs text-[#7D8597] dark:text-[#979DAC]">
                {t("pages.ai.assistant.modal.subtitle")}
              </span>
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
          <div className="bg-[#F0F0F0] dark:bg-[#33415C] p-3 rounded-lg mt-10 text-[#001233] dark:text-white mb-4">
            {t("pages.ai.assistant.modal.greeting")}
          </div>

          <div className="mt-auto">
            <div className="mb-3">
              <span className="text-sm font-semibold text-[#5C677D] dark:text-[#7D8597]">
                {t("pages.ai.assistant.modal.faqTitle")}
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  t("pages.ai.assistant.modal.quickQuestions.profitThisMonth"),
                  t("pages.ai.assistant.modal.quickQuestions.topSellingProduct"),
                  t("pages.ai.assistant.modal.quickQuestions.nextMonthPayroll"),
                  t("pages.ai.assistant.modal.quickQuestions.largestDebt"),
                ].map((q, i) => (
                  <button
                    key={i}
                    className="px-3 py-1 text-sm bg-[#F0F0F0] dark:bg-[#33415C] hover:bg-[#E0E0E0] dark:hover:bg-[#5C677D] rounded-lg text-[#001233] dark:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-[#979DAC] dark:border-[#5C677D] pt-3 flex gap-2">
              <input
                type="text"
                placeholder={t("pages.ai.assistant.modal.inputPlaceholder")}
                className="flex-grow rounded-lg px-3 py-2 text-sm text-[#001233] dark:text-white
                           border border-[#979DAC] dark:border-[#5C677D] focus:outline-2 focus:outline-[#0466CB]
                           bg-white dark:bg-[#33415C]"
              />
              <button className="bg-[#0466CB] hover:bg-[#0453A4] text-white px-3 py-2 rounded-lg dark:bg-[#023E7D] dark:hover:bg-[#0453A4]">
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
