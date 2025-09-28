import React, { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import { FiFilter } from 'react-icons/fi'

export default function TransactionsHeaders() {
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
                <h3 className='text-3xl font-bold text-balance'>Transactions</h3>
                <p className='text-[#737373]'>View and Message all your financial transactions</p>
            </article>
            <div>
                <div className='flex flex-row items-center gap-x-2'>
                    <Button
                        className="flex items-center gap-x-2 bg-white border border-zinc-400 text-black hover:bg-black/10 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
                    >
                        <span><FiFilter /></span>
                        Filter
                    </Button>
                    <Button
                        onClick={open}
                        className="bg-black text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-black/80 transition-all duration-300"
                    >
                        + Add Transaction
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
                                    Create New Payment
                                </DialogTitle>
                                <DialogTitle as="p" className="text-base/7 text-center text-[#737373]">
                                    Create new payment, transfer or record an incoming payment.
                                </DialogTitle>
                                <form className='flex flex-col gap-y-5 mt-4'>
                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Transaction Type</label>
                                        <select className="select w-40 rounded-lg">
                                            <option>Income</option>
                                            <option>Expense</option>
                                            <option>Transfer</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Bank Account</label>
                                        <select className="select rounded-lg">
                                            <option>Select account (optional)</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Amount (₼)</label>
                                        <input placeholder='0.00' className="select rounded-lg" type='number' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='font-medium pb-1'>Category</label>
                                        <select defaultValue="Pick a color" className="select rounded-lg">
                                            <option>Food & Dining</option>
                                            <option>Transportation</option>
                                            <option>Shopping</option>
                                            <option>Entertainment</option>
                                            <option>Bills & Utilities</option>
                                            <option>Helthcare</option>
                                            <option>Eduction</option>
                                            <option>Travel</option>
                                            <option>Business</option>
                                            <option>Insvestment</option>
                                            <option>Salary</option>
                                            <option>Freelance</option>
                                            <option>Bonus</option>
                                            <option>Gift</option>
                                            <option>Other</option>
                                        </select>
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
