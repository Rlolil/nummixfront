import { NavLink } from 'react-router-dom';
import { LuArrowLeftRight } from "react-icons/lu";
import { MdOutlineInventory } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";


const Navbar = () => {
    // Aktiv link üçün className funksiyası
    const getLinkClass = ({ isActive }) =>
        isActive
            ? ' bg-gray-300 xl:px-5 xl:py-3 px-3 py-1 flex items-center gap-3'
            : '  hover:bg-gray-300 duration-100 xl:px-5 xl:py-3 px-3 py-1 flex items-center gap-3';

    return (
        <div className=' lg:w-[70%] md:p-6    mx-64 lg:h-[60px]   xl:text-[15px] bg-gray-100  xl:p-9   mt-25 sm:mt-11 flex lg:flex-row flex-col gap-3 justify-around items-center m-auto '>
            <NavLink to="/anbar/dashboard" className={getLinkClass}>
                <HiOutlineSquares2X2 /> Əsas Səhifə

            </NavLink>
            <NavLink to="/anbar/products" className={getLinkClass}>
                <FaBox /> Məhsullar
            </NavLink>
            <NavLink to="/anbar/warehouseoperations/grn" className={getLinkClass}>
                <LuArrowLeftRight /> Anbar Əməliyyatları
            </NavLink>
            <NavLink to="/anbar/inventory/currentbalances" className={getLinkClass}>
                <MdOutlineInventory /> İnventar
            </NavLink>
            <NavLink to="/anbar/reports" className={getLinkClass}>
                <IoStatsChart /> Hesabatlar
            </NavLink>
        </div>
    )
}

export default Navbar