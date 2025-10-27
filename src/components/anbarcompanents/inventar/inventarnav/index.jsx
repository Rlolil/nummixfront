
import { NavLink } from 'react-router-dom';
import { FiFileText, FiBarChart2 } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

export default function Inventarnav() {
    const { t } = useTranslation();


    const getLinkClass = ({ isActive }) =>
        isActive
            ? 'bg-white text-black px-4 py-2 rounded-full font-semibold'
            : ' text-black px-4 py-2 rounded-full font-semibold';

    return (
        <div className=" flex flex-col   md:items-start md:justify-start gap-10    mb-6 px-4 md:px-0">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">{t('pages.warehouse.inventory.title')}</h1>
                <p className="text-gray-500 text-sm">{t('pages.warehouse.inventory.subtitle')}</p>
            </div>
            <div className=" flex flex-wrap w-fit items-center bg-gray-200 rounded-full gap-4 p-2">
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





