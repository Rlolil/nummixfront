import React from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiRefreshCcw } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const operations = [
    {
        id: "GRN-001234",
        type: "Giriş",
        date: "2025-10-08 14:30",
        productCount: "5 məhsul",
        reference: "PO-5678",
        status: "Tamamlandı",
    },
    {
        id: "DN-001235",
        type: "Çıxış",
        date: "2025-10-08 12:15",
        productCount: "3 məhsul",
        reference: "INV-9012",
        status: "Tamamlandı",
    },
    {
        id: "TRF-001236",
        type: "Transfer",
        date: "2025-10-07 16:45",
        productCount: "8 məhsul",
        reference: "Bakı → Gəncə",
        status: "Yoldadır",
    },
];

const getTypeIcon = (type) => {
    switch (type) {
        case "Giriş":
            return <FiArrowDownCircle className="inline-block mr-1" />;
        case "Çıxış":
            return <FiArrowUpCircle className="inline-block mr-1" />;
        case "Transfer":
            return <FiRefreshCcw className="inline-block mr-1" />;
        default:
            return null;
    }
};

const getTypeStyle = (type) => {
    switch (type) {
        case "Giriş":
            return "bg-black text-white";
        case "Çıxış":
            return "bg-gray-200 text-black";
        case "Transfer":
            return "bg-gray-100 text-black";
        default:
            return "bg-gray-100 text-black";
    }
};

const getStatusStyle = (status) => {
    switch (status) {
        case "Tamamlandı":
            return "bg-black text-white";
        case "Yoldadır":
            return "bg-gray-200 text-black";
        default:
            return "bg-gray-100 text-black";
    }
};

const AnbarHistory = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">{t('pages.warehouse.operations.history.title')}</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b text-gray-600">
                        <tr className="text-left">
                            <th className="py-2">{t('pages.warehouse.operations.history.columns.docNo')}</th>
                            <th className="py-2">{t('pages.warehouse.operations.history.columns.type')}</th>
                            <th className="py-2">{t('pages.warehouse.operations.history.columns.date')}</th>
                            <th className="py-2">{t('pages.warehouse.operations.history.columns.productCount')}</th>
                            <th className="py-2">{t('pages.warehouse.operations.history.columns.reference')}</th>
                            <th className="py-2">{t('pages.warehouse.operations.history.columns.status')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map((op, index) => (
                            <tr key={index} className="border-b last:border-none hover:bg-gray-50">
                                <td className="py-2">{op.id}</td>
                                <td className="py-2">
                                    <span
                                        className={`px-2 py-1 rounded flex items-center justify-center w-fit ${getTypeStyle(
                                            op.type
                                        )}`}
                                    >
                                        {getTypeIcon(op.type)} {op.type}
                                    </span>
                                </td>
                                <td className="py-2">{op.date}</td>
                                <td className="py-2">{op.productCount}</td>
                                <td className="py-2">{op.reference}</td>
                                <td className="py-2">
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${getStatusStyle(op.status)}`}
                                    >
                                        {op.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnbarHistory;
