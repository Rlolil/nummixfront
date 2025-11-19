import React from 'react';
import { LuArrowLeftRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { FiArrowDownCircle, FiArrowUpCircle, FiRefreshCcw } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

export default function EmeliyyatNavbar() {
    const { t } = useTranslation();


    const base = 'px-4 py-2 rounded-full font-semibold transition-colors';
    const getLinkClass = ({ isActive }) =>
        isActive
            ? `${base} bg-[#0466CB] text-white dark:text-white`
            : `${base} text-[#023E7D] hover:bg-[#0453A4] hover:text-white dark:text-white`;

    return (
        <div className="flex flex-col md:items-start md:justify-start gap-10 mb-6 px-4 md:px-0">
            <div>
                <h1 className="text-2xl font-bold  dark:text-white text-[#023E7D]">{t('pages.warehouse.operations.title')}</h1>
                <p className="text-sm text-[#7D8597]">{t('pages.warehouse.operations.subtitle')}</p>
            </div>
            <div className="flex flex-wrap w-fit items-center bg-[#FFFFFF] dark:bg-[#001233] dark:border-[#33415C] border border-[#979DAC] rounded-full gap-4 p-2">
                <NavLink to="/anbar/warehouseoperations/grn" className={getLinkClass} >
                    <FiArrowUpCircle className="inline-block mr-1" />   {t('pages.warehouse.operations.nav.grn')}

                </NavLink>
                <NavLink to="/anbar/warehouseoperations/dn" className={getLinkClass}>
                    <FiArrowDownCircle className="inline-block mr-1" /> {t('pages.warehouse.operations.nav.dn')}
                </NavLink>
                <NavLink to="/anbar/warehouseoperations/transfer" className={getLinkClass} >
                    <div className="flex items-center gap-2"><LuArrowLeftRight /> {t('pages.warehouse.operations.nav.transfer')}</div>
                </NavLink>
                <NavLink to="/anbar/warehouseoperations/history" className={getLinkClass}>
                    {t('pages.warehouse.operations.nav.history')}
                </NavLink>

            </div>
        </div>
    );
}