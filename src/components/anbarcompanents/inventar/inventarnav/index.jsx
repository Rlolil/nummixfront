
import { NavLink } from 'react-router-dom';
import { FiFileText, FiBarChart2 } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

export default function Inventarnav() {
    const { t } = useTranslation();


    const base = 'px-4 py-2 rounded-full font-semibold transition-colors';
    const getLinkClass = ({ isActive }) =>
        isActive
            ? `${base} bg-[#0466CB] text-white dark:text-white`
            : `${base} text-[#023E7D] hover:bg-[#0453A4] hover:text-white dark:text-white`;

    return (
        <div className="flex flex-col md:items-start md:justify-start gap-10 mb-6 px-4 md:px-0">
            <div>
                <h1 className="text-2xl font-bold text-[#023E7D]">{t('pages.warehouse.inventory.title')}</h1>
                <p className="text-sm text-[#7D8597]">{t('pages.warehouse.inventory.subtitle')}</p>
            </div>
            <div className="flex flex-wrap w-fit items-center dark:bg-[#001233] dark:text-white bg-[#FFFFFF] border border-[#979DAC] rounded-full gap-4 p-2">
                <NavLink to="/anbar/inventory/currentbalances" className={getLinkClass}>
                    <FiBarChart2 className="inline-block mr-1" />   {t('pages.warehouse.inventory.nav.currentBalances')}

                </NavLink>
                <NavLink to="/anbar/inventory/inventorycount" className={getLinkClass}>
                    <FiFileText className="inline-block mr-1" />{t('pages.warehouse.inventory.nav.inventoryCount')}
                </NavLink>


            </div>
        </div>
    );
}





