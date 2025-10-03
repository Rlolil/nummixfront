import React, { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import { FiFilter } from 'react-icons/fi'
import { useTranslation } from 'react-i18next';




export default function TransactionsHeaders() {
    const  {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    return (
        <section className='flex flex-wrap items-center justify-between mt-5'>
            <article className="">
                <h3 className='text-3xl font-bold text-balance'>{t('transactions')}</h3>
                <p className='text-[#737373]'>{t('View_and_Message_all_your_financial_transactions')}</p>
            </article>
            <div>
                <div className='flex flex-row items-center gap-x-2'>
                    <Button
                        className="flex items-center gap-x-2 bg-white border border-zinc-400 text-black hover:bg-black/10 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
                    >
                        <span><FiFilter /></span>
                        {t('Filter')}
                    </Button>
                    <Button
                        onClick={open}
                        className="bg-black text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-black/80 transition-all duration-300"
                    >
                        + {t('Add_Transaction')}
                    </Button>
                </div>




                <Dialog open={isOpen} as="div" className="relative bg-black z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 bg-black/30">
                            <DialogPanel
                                transition
                                className="w-full max-w-lg rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                            >
                                <div className='flex items-center justify-end mb-3'>
                                    <Button className="cursor-pointer" onClick={close}><IoMdClose size={25} /></Button>
                                </div>

                                <DialogTitle as="h3" className="text-lg font-medium text-center text-black">
                                    {t('Create_New_Payment')}
                                </DialogTitle>
                                <DialogTitle as="p" className="text-base/7 text-center text-[#737373]">
                                    {t('Create_new_payment_transfer_or_record_an_incoming_payment')}
                                </DialogTitle>
                                <form className='flex flex-col gap-y-5 mt-4'>
                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Transaction_Type')}</label>
                                        <select className="select w-40 rounded-lg">
                                            <option>{t('Income')}</option>
                                            <option>{t('Expense')}</option>
                                            <option>{t('Transfer')}</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('bank_accounts')}</label>
                                        <select className="select rounded-lg">
                                            <option>{t('Select_account_optional')}</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Amount')}</label>
                                        <input placeholder='0.00' className="select rounded-lg" type='number' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Category')}</label>
                                        <select defaultValue="Pick a color" className="select rounded-lg">
                                            <option>{t('Food_Dining')}</option>
                                            <option>{t('Transportation')}</option>
                                            <option>{t('Shopping')}</option>
                                            <option>{t('Entertainment')}</option>
                                            <option>{t('Bills_Utilities')}</option>
                                            <option>{t('Healthcare')}</option>
                                            <option>{t('Education')}</option>
                                            <option>{t('Travel')}</option>
                                            <option>{t('Business')}</option>
                                            <option>{t('Investment')}</option>
                                            <option>{t('Salary')}</option>
                                            <option>{t('Freelance')}</option>
                                            <option>{t('Bonus')}</option>
                                            <option>{t('Gift')}</option>
                                            <option>{t('Other')}</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Description')}</label>
                                        {/* row cols number change */}
                                        <textarea className='input rounded-lg px-3 py-2 w-full' rows="20" cols='5' placeholder={t('Payment_description_or_notes')} />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Date')}</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' type='date' />
                                    </div>

                                </form>
                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <Button
                                        className=" inline-flex items-center gap-2 rounded-md bg-white border border-black/20 px-4 py-2 h-9 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/10 data-open:bg-black/10 transition-all duration-300"
                                        onClick={close}
                                    >
                                        {t('Close')}
                                    </Button>
                                    <Button
                                        className="inline-flex items-center gap-2 rounded-md bg-black border border-black/20 px-4 py-2 h-9 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/80 data-open:bg-black/80 transition-all duration-300"
                                    >
                                        {t('Create_Payment')}
                                    </Button>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </div>
        </section>
    )
}
