import React from 'react'
import Allinsight from './Allinsight'

const CostOptimization = () => {
    return (
        <div>
            <div className="overflow-x-hidden w-full">
                <div className="bg-white shadow-md rounded-xl border mb-[20px] border-gray-200 h-[150px] py-6 px-4">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-gray-700 font-bold flex items-center gap-1">
                            Cost Optimization Opportunities
                        </span>
                    </div>
                    <div className='text-center text-gray-400'>
                        <p>No cost optimization opportunities identified. Your expenses are well-managed.</p>
                    </div>
                </div>
                <Allinsight />
            </div>
        </div>
    )
}

export default CostOptimization