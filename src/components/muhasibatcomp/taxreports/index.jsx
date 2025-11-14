import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineAlert } from "react-icons/ai";
import VatDecleration from "./vatdecleration";
import ProfitTax from "./profittax";
import SocialContributions from "./social";
import SimplifiedTax from "./simlifiedtax";
import { useTranslation } from "react-i18next";

const taxData = {
  cards: [
    {
      title: "VAT Declaration",
      amount: 22500,
      status: "Pending",
      due: "20/10/2025",
    },
    {
      title: "Social Contributions",
      amount: 10000,
      status: "Submitted",
      due: "15/10/2025",
    },
    { title: "Profit Tax", amount: 10800, status: "Paid", due: "25/10/2025" },
    {
      title: "Simplified Tax",
      amount: 4500,
      status: "Pending",
      due: "20/10/2025",
    },
  ],
  egov: [
    { name: "e-taxes.gov.az", desc: "E-invoice ready", link: "https://e-taxes.gov.az" },
    { name: "DSMF Integration", desc: "Auto-reporting enabled", link: "https://www.dsmf.gov.az/az" },
    { name: "e-Portal", desc: "Data synchronized", link: "https://e-portal.gov.az" },
  ],
  vat: {
    output: [
      { desc: "Sales - Standard Rate (18%)", base: 150000, vat: 27000 },
      { desc: "Services - Standard Rate (18%)", base: 45000, vat: 8100 },
    ],
    input: [
      { desc: "Purchases - Goods", base: 85000, vat: 15300 },
      { desc: "Services", base: 18000, vat: 3240 },
    ],
  },
};

const tabs = [
  { id: "vat-declaration", labelKey: 'pages.accounting.taxReports.tabs.vat' },
  { id: "simplified-tax", labelKey: 'pages.accounting.taxReports.tabs.simplified' },
];

export default function TaxDashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("vat-declaration");
  const totalOutput = taxData.vat.output.reduce(
    (acc, item) => acc + item.vat,
    0
  );
  const totalInput = taxData.vat.input.reduce((acc, item) => acc + item.vat, 0);
  const vatPayable = totalOutput - totalInput;

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{t('pages.accounting.tabs.taxReports')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {taxData.cards.map((card, idx) => (
          <div key={idx} className="p-3 sm:p-4 border border-gray-200 rounded-lg shadow-sm">
            <h4 className="text-xs sm:text-sm font-medium">{t(`pages.accounting.taxReports.cards.names.${card.title}`, { defaultValue: card.title })}</h4>
            <div className="text-xl sm:text-2xl mt-2 mb-2">
              ₼{card.amount.toLocaleString()}
            </div>
            <div
              className={`flex items-center gap-1 text-xs font-medium ${
                card.status === "Paid" ? "text-green-600" : "text-red-600"
              }`}
            >
              {card.status === "Paid" ? (
                <AiOutlineCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <AiOutlineAlert className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
              <span>{t(`pages.accounting.taxReports.status.${card.status.toLowerCase()}`, { defaultValue: card.status })}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{t('pages.accounting.taxReports.due')}: {card.due}</p>
          </div>
        ))}
      </div>
      <div className="p-3 sm:p-4 mb-4 sm:mb-6 border border-gray-200 rounded-lg bg-blue-50">
        <h3 className="text-blue-900 text-sm sm:text-base font-medium mb-2 sm:mb-3">
          {t('pages.accounting.taxReports.egov.title')}
        </h3>
        <div className="flex flex-col gap-2 sm:gap-3">
          {taxData.egov.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 sm:gap-3">
              <AiOutlineCheckCircle className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="font-medium text-blue-900 text-xs sm:text-sm">{t(`pages.accounting.taxReports.egov.names.${idx}`, { defaultValue: item.name })}</p>
                <p className="text-xs sm:text-sm text-blue-700">{t(`pages.accounting.taxReports.egov.items.${idx}`, { defaultValue: item.desc })}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{item.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 bg-gray-100 rounded-2xl px-1 sm:px-2 py-2 mb-4 sm:mb-6 overflow-x-auto text-xs sm:text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-1 sm:py-2 rounded-2xl text-center transition ${
              activeTab === tab.id
                ? "bg-white text-black font-semibold"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>
      {activeTab === "vat-declaration" && (
        <VatDecleration
          taxData={taxData}
          totalInput={totalInput}
          totalOutput={totalOutput}
          vatPayable={vatPayable}
        />
      )}
      {activeTab === "simplified-tax" && <SimplifiedTax />}
    </div>
  );
}