import React, { useState, useEffect } from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiRefreshCcw } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { getWarehouseHistory } from "../../../../services";

const getTypeIcon = (type) => {
    switch (type) {
        case "Giriş":
        case "GRN":
            return <FiArrowDownCircle className="inline-block mr-1" />;
        case "Çıxış":
        case "Delivery":
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
        case "GRN":
            return "bg-[#0466CB] text-white";
        case "Çıxış":
        case "Delivery":
            return "bg-[#023E7D] text-white";
        case "Transfer":
            return "bg-[#979DAC] text-white";
        default:
            return "bg-[#979DAC] text-white";
    }
};

const getStatusStyle = (status) => {
    switch (status) {
        case "Tamamlandı":
        case "Completed":
            return "bg-[#0466CB] text-white";
        case "Yoldadır":
        case "In Transit":
            return "bg-[#979DAC] text-white";
        default:
            return "bg-[#979DAC] text-white";
    }
};

const AnbarHistory = () => {
    const { t } = useTranslation();
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const data = await getWarehouseHistory();
            setOperations(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching warehouse history:", error);
        }
    };

    return (
        <div className="bg-[#FFFFFF] rounded-2xl dark:bg-[#001233]  border border-[#33415C] p-4 sm:p-6 mt-6 text-[#001233] dark:text-white">
            <h2 className="text-lg font-semibold mb-4 dark:text-white text-[#023E7D]">{t('pages.warehouse.operations.history.title')}</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-[#979DAC] text-[#5C677D] dark:text-white">
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
                        {operations.length === 0 && (
                            <tr>
                                <td colSpan="6" className="py-4 text-center text-[#7D8597]">{t('common.noResults', { defaultValue: 'No operations found' })}</td>
                            </tr>
                        )}
                        {operations.map((op, index) => (
                            <tr key={index} className="border-b border-[#979DAC] last:border-none dark:hover:bg-[#002244] hover:bg-[#F5F8FF]">
                                <td className="py-2">{op.id || op.docNo}</td>
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
