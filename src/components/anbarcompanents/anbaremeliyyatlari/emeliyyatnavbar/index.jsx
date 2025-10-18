import React, { useEffect, useState } from 'react';
import { LuArrowLeftRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { FiArrowDownCircle, FiArrowUpCircle, FiRefreshCcw } from "react-icons/fi";

export default function EmeliyyatNavbar({ isActive = 'grn', onSelect }) {


    const getLinkClass = ({ isActive }) =>
        isActive
            ? 'bg-white text-black px-4 py-2 rounded-full font-semibold'
            : ' text-black px-4 py-2 rounded-full font-semibold';

    return (
        <div className=" flex flex-col   md:items-start md:justify-start gap-10    mb-6 px-4 md:px-0">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Anbar Əməliyyatları</h1>
                <p className="text-gray-500 text-sm">Giriş, çıxış və yerdəyişmə əməliyyatları</p>
            </div>
            <div className=" flex flex-wrap w-fit items-center bg-gray-200 rounded-full gap-4 p-2">
                <NavLink to="/anbar/warehouseoperations/grn" className={getLinkClass} >
                    <FiArrowUpCircle className="inline-block mr-1" />   Mal Qəbulu (GRN)

                </NavLink>
                <NavLink to="/anbar/warehouseoperations/dn" className={getLinkClass}>
                    <FiArrowDownCircle className="inline-block mr-1" /> Mal Çıxışı (DN)
                </NavLink>
                <NavLink to="/anbar/warehouseoperations/transfer" className={getLinkClass} >
                    <div className="flex items-center gap-2"><LuArrowLeftRight /> Transfer</div>
                </NavLink>
                <NavLink to="/anbar/warehouseoperations/history" className={getLinkClass}>
                    Tarixçə
                </NavLink>

            </div>
        </div>
    );
}