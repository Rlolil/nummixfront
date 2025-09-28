import React, { useState } from 'react'
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'

export default function Headers() {
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
                <h3 className='text-3xl font-bold text-balance'>Payments</h3>
                <p className='text-[#737373]'>Manage payments, transfers, and transactions</p>
            </article>
            <div>
                <Button
                    onClick={open}
                    className="bg-black text-white px-3 py-2 rounded-lg"
                >
                    + New Payment
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
                                    Create New Payment
                                </DialogTitle>
                                <DialogTitle as="p" className="text-base/7 text-center text-[#737373]">
                                    Create new payment, transfer or record an incoming payment.
                                </DialogTitle>
                                <form className='flex flex-col gap-y-5 mt-4'>
                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Payment Type</label>
                                        <select defaultValue="Pick a color" className="select rounded-lg">
                                            <option>Outgoing Payment</option>
                                            <option>Incoming Payment</option>
                                            <option>Transfer Between Accounts</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Amount (₼)</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' placeholder='0.00' type='number' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Category</label>
                                        <select defaultValue="Pick a color" className="select rounded-lg">
                                            <option>Payment</option>
                                            <option>Transfer</option>
                                            <option>Salary</option>
                                            <option>Refund</option>
                                            <option>Subscription</option>
                                            <option>Utilities</option>
                                            <option>Rent</option>
                                            <option>Insurance</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Recipient Name</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' placeholder='Enter name' type='text' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Recipient Account</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' placeholder='Account number or details' type='text' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Description</label>
                                        {/* row cols number change */}
                                        <textarea className='input rounded-lg px-3 py-2 w-full' rows="20" cols='5' placeholder='Payment description or notes' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Date</label>
                                        <input className='input rounded-lg px-3 py-2 w-full' type='date' />
                                    </div>

                                </form>
                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <Button
                                        className=" inline-flex items-center gap-2 rounded-md bg-white border border-black/20 px-4 py-2 h-9 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/10 data-open:bg-black/10 transition-all duration-300"
                                        onClick={close}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        className="inline-flex items-center gap-2 rounded-md bg-black border border-black/20 px-4 py-2 h-9 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/80 data-open:bg-black/80 transition-all duration-300"
                                    >
                                        Create Payment
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
