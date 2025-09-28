import React from 'react'
import Allinsight from './Allinsight'

const Revenue = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="bg-white shadow-md rounded-xl border mb-[20px] min-h-[170px] border-gray-200 py-6 px-4">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-700 font-bold flex items-center gap-1 break-words text-base sm:text-lg md:text-xl">
            Revenue Growth Insights
          </span>
        </div>

        <div className="text-center text-gray-400">
          <p className="text-sm sm:text-base">
            No specific revenue insights available. Continue monitoring your revenue streams.
          </p>
        </div>
      </div>

      <Allinsight />
    </div>
  )
}

export default Revenue
