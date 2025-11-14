import { NavLink } from 'react-router-dom';
import { LuArrowLeftRight } from "react-icons/lu";
import { MdOutlineInventory } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t } = useTranslation();
    // Aktiv link üçün className funksiyası
    const getLinkClass = ({ isActive }) =>
        isActive
            ? ' bg-gray-300 xl:px-5 xl:py-3 w-full px-3 rounded-2xl py-1 flex items-center justify-center gap-3'
            : '  hover:bg-gray-300 duration-100 xl:px-5 xl:py-3 w-full px-3 rounded-2xl py-1 flex items-center justify-center gap-3';

    return (
        <div className=' md:p-3 lg:h-[60px] rounded-xl xl:text-[15px] bg-gray-100  xl:p-7   mt-25 sm:mt-11 flex lg:flex-row flex-col gap-3 justify-around items-center'>
            <NavLink to="/anbar/dashboard" className={getLinkClass}>
                <HiOutlineSquares2X2 /> {t('pages.warehouse.nav.dashboard')}
            </NavLink>
            <NavLink to="/anbar/products" className={getLinkClass}>
                <FaBox /> {t('pages.warehouse.nav.products')}
            </NavLink>
            <NavLink to="/anbar/warehouseoperations" className={getLinkClass}>
                <LuArrowLeftRight /> {t('pages.warehouse.nav.operations')}
            </NavLink>
            <NavLink to="/anbar/inventory" className={getLinkClass}>
                <MdOutlineInventory /> {t('pages.warehouse.nav.inventory')}
            </NavLink>
            <NavLink to="/anbar/reports" className={getLinkClass}>
                <IoStatsChart /> {t('pages.warehouse.nav.reports')}
            </NavLink>
        </div>
    )
}

export default Navbar