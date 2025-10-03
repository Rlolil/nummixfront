import React from 'react'
import Allinsight from './Allinsight'
import { useTranslation } from 'react-i18next';

const CashFlow = () => {
    const {t} = useTranslation();
    return (
        <div className="overflow-x-hidden w-full">
            <div className="bg-white shadow-md rounded-xl border min-h-[170px] mb-5 border-gray-200 py-4 px-3 sm:py-6 sm:px-4">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <span className="text-gray-700 font-bold flex items-center gap-1 text-sm sm:text-base md:text-lg break-words">
                        {t('Cash_Flow_Analysis_Recommendations')}
                    </span>
                </div>
                <div className="text-center text-gray-400 text-sm sm:text-base px-2 break-words">
                    <p>{t('No_cash_flow_recommendations_at_this_time')}</p>
                </div>
            </div>
            <Allinsight />
        </div>
    )
}

export default CashFlow
