import React from 'react'
import { LuCreditCard } from 'react-icons/lu'

export default function Tabs() {
    return (
        <section>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab h-10" aria-label="All Payments" />

                <input type="radio" name="my_tabs_1" className="tab" aria-label="Completed" defaultChecked />

                <input type="radio" name="my_tabs_1" className="tab" aria-label="Pending" />
            </div>
            <div className="border border-zinc-300/50 rounded-2xl shadow-md p-10">
                <article className='flex flex-col justify-center items-center gap-y-3'>
                    <span className='text-[3rem] text-[#737373]'><LuCreditCard /></span>
                    <h3 className='text-lg font-semibold mb-2'> No payments found </h3>
                    <p className='text-[#737373]'>Create your first payment to get started</p>
                </article>
            </div>
        </section>
    )
}
