import React from 'react'
import Allinsight from './Allinsight'

const CashFlow = () => {
    return (
        <div className="overflow-x-hidden w-full">
            <div className="bg-white shadow-md rounded-xl border mb-[20px] border-gray-200 h-[140px] py-6 px-4">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-gray-700 font-bold flex items-center gap-1">
                        Cash Flow Analysis & Recommendations
                    </span>
                </div>
                <div className='text-center text-gray-400'>
                    <p>No cash flow recommendations at this time. Your cash flow appears healthy.</p>
                </div>
            </div>
            <Allinsight />
        </div>
    )
}

export default CashFlow