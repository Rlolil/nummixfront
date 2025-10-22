import React from 'react'
import { useTranslation } from 'react-i18next'

const DaxilolmaTab = () => {
    const { t } = useTranslation()
    const odenisData = [
        { name: "TechSupply MMC", cat: t('pages.finance.common.categories.it', 'IT'), date: "2025-10-06", status: t('pages.finance.payments.status.overdue'), amount: "5,000 AZN", emeliyyat: t('pages.finance.payments.actions.collect', 'Collect') },
        { name: "OfficeWorld", cat: t('pages.finance.common.categories.office', 'Office'), date: "2025-10-12", status: t('pages.finance.payments.status.pending'), amount: "1,200 AZN", emeliyyat: t('pages.finance.payments.actions.collect', 'Collect') },
        { name: "Marketing Pro", cat: t('pages.finance.common.categories.marketing', 'Marketing'), date: "2025-10-15", status: t('pages.finance.payments.status.pending'), amount: "800 AZN", emeliyyat: t('pages.finance.payments.actions.collect', 'Collect') },
        { name: "DataCenter LLC", cat: t('pages.finance.common.categories.it', 'IT'), date: "2025-10-20", status: t('pages.finance.payments.status.scheduled'), amount: "3,500 AZN", emeliyyat: t('pages.finance.payments.actions.collect', 'Collect') },
        { name: "CleanCo", cat: t('pages.finance.common.categories.services', 'Services'), date: "2025-09-30", status: t('pages.finance.payments.status.paid'), amount: "3,500 AZN", emeliyyat: t('pages.finance.payments.actions.collect', 'Collect') },
    ]

    return (
        <div className="rounded-xl">
            <div className='block md:hidden text-[16px] mb-5'>
                <h1 className='font-semibold'>{t('pages.finance.payments.inflows.title')}</h1>
                <h1 className='text-[#717182]'>{t('pages.finance.payments.inflows.subtitle')}</h1>
            </div>

            <div className="hidden md:block p-5 overflow-x-auto border border-gray-300 rounded-xl">
                <div className='hidden md:block text-[16px] mb-5'>
                    <h1 className='font-semibold'>{t('pages.finance.payments.inflows.title')}</h1>
                    <h1 className='text-[#717182]'>{t('pages.finance.payments.inflows.subtitle')}</h1>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 text-sm">
                            <th className="py-3">{t('pages.supplier.orders.table.columns.supplier')}</th>
                            <th className="py-3">{t('pages.finance.common.category')}</th>
                            <th className="py-3">{t('pages.supplier.common.dueDate')}</th>
                            <th className="py-3">{t('pages.supplier.orders.table.columns.status')}</th>
                            <th className="py-3 text-right">{t('pages.finance.common.amount')}</th>
                            <th className="py-3 text-right">{t('pages.finance.payments.actions.title', 'Actions')}</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {odenisData.map((item, i) => (
                            <tr key={i} className="border-b border-gray-300 hover:bg-gray-50 transition">
                                <td className="py-3">{item.name}</td>
                                <td className="py-3">{item.cat}</td>
                                <td className="py-3">{item.date}</td>
                                <td className="py-3">{item.status}</td>
                                <td className={`py-3 text-right font-medium text-black`}>{item.amount}</td>
                                <td className="py-3 text-right">{item.emeliyyat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden flex flex-col gap-4">
                {odenisData.map((item, i) => (
                    <div key={i} className="border border-gray-300 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">{t('pages.supplier.orders.table.columns.supplier')}:</span>
                            <span className="font-medium text-xs">{item.name}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">{t('pages.finance.common.category')}:</span>
                            <span>{item.cat}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">{t('pages.supplier.common.dueDate')}:</span>
                            <span>{item.date}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">{t('pages.supplier.orders.table.columns.status')}:</span>
                            <span>{item.status}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 text-sm">{t('pages.finance.common.amount')}:</span>
                            <span className="font-medium">{item.amount}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">{t('pages.finance.payments.actions.title', 'Actions')}:</span>
                            <span>{item.emeliyyat}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DaxilolmaTab
