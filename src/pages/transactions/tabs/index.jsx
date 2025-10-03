import React, { use } from 'react'
import { LuCreditCard } from 'react-icons/lu'
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';


export default function Tabs() {
    const {t}  = useTranslation();
    return (
        <section>
            {/* name of each tab group should be unique */}
            
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_1" className="tab h-10" aria-label={`${t("All")} (0)`} />

                    <input type="radio" name="my_tabs_1" className="tab" aria-label={`${t("Income")} (0)`} defaultChecked />

                    <input type="radio" name="my_tabs_1" className="tab" aria-label={`${t("Expense")} (0)`} />
                    <input type="radio" name="my_tabs_1" className="tab" aria-label={`${t("Transfer")} (0)`} />
                </div>
            <div className="border border-zinc-300/50 rounded-2xl shadow-md p-10">
                <article className='flex flex-col justify-center items-center gap-y-3'>
                    <span className='text-[3rem] text-[#737373]'><HiMiniArrowsUpDown />
</span>
                    <h3 className='text-lg font-semibold mb-2'> {t('No_transactions_found')} </h3>
                    <p className='text-[#737373]'>{t('Add_your_first_transaction_to_get_started')}</p>
                </article>
            </div>
        </section>
    )
}




