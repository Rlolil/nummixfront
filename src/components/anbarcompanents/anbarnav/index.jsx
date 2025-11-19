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
    const baseItem = 'xl:px-5 xl:py-3 w-full px-3 rounded-xl py-1 flex items-center justify-center gap-3 transition-colors duration-150';
    const getLinkClass = ({ isActive }) =>
        isActive
            ? `${baseItem} bg-[#0466CB] text-white`
            : `${baseItem} text-[#023e7d] w-full py-2 px-4 rounded-md dark:text-white border hover:bg-[#0453A4] transition-all duration-300 hover:text-white`;

    return (
        <div className='md:p-3 lg:h-[60px] dark:bg-[#001233] dark:border-[#979DAC] rounded-xl xl:text-[15px] bg-[#FFFFFF] border border-[#979DAC] xl:p-7 mt-25 sm:mt-11 flex lg:flex-row flex-col gap-3 justify-around items-center'>
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