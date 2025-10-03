import React, { useState } from 'react'
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import { useTranslation } from 'react-i18next';

export default function Headers() {
    const { t } = useTranslation();
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    return (
        <section className='flex flex-wrap items-center justify-between mt-5'>
            <article className="">
                <h3 className='text-3xl font-bold text-balance'>{t('payments')}</h3>
                <p className='text-[#737373]'>{t('Manage_payments_transfers_and_transactions')}</p>
            </article>
            <div>
                <Button
                    onClick={open}
                    className="bg-black text-white px-3 py-2 rounded-lg"
                >
                    + {t('Create_New_Payment')}
                </Button>

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
                                        <label className='font-medium pb-1'>{t('Payment_Type')}</label>
                                        <select defaultValue="Pick a color" className="select rounded-lg">
                                            <option>{t('Outgoing_Payment')}</option>
                                            <option>{t('Incoming_Payment')}</option>
                                            <option>{t('Transfer_Between_Accounts')}</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Amount')} (₼)</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' placeholder='0.00' type='number' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Category')}</label>
                                        <select defaultValue="Pick a color" className="select rounded-lg">
                                            <option>{t('Payment')}</option>
                                            <option>{t('Transfer')}</option>
                                            <option>{t('Salary')}</option>
                                            <option>{t('Refund')}</option>
                                            <option>{t('Subscription')}</option>
                                            <option>{t('Utilities')}</option>
                                            <option>{t('Rent')}</option>
                                            <option>{t('Insurance')}</option>
                                            <option>{t('Other')}</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Recipient_Name')}</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' placeholder={t('Enter_name')} type='text' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>{t('Recipient_Account')}</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' placeholder={t('Enter_account_details')} type='text' />
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
                                        {t('Cancel')}
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
