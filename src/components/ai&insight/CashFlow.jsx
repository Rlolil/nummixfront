import React from 'react'
import Allinsight from './Allinsight'

const CashFlow = () => {
    return (
        <div className="overflow-x-hidden w-full">
            <div className="bg-white shadow-md rounded-xl border min-h-[170px] mb-5 border-gray-200 py-4 px-3 sm:py-6 sm:px-4">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <span className="text-gray-700 font-bold flex items-center gap-1 text-sm sm:text-base md:text-lg break-words">
                        Cash Flow Analysis & Recommendations
                    </span>
                </div>
                <div className="text-center text-gray-400 text-sm sm:text-base px-2 break-words">
                    <p>No cash flow recommendations at this time. Your cash flow appears healthy.</p>
                </div>
            </div>
            <Allinsight />
        </div>
    )
}

export default CashFlow
