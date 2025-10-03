import React from 'react'
import { useTranslation } from 'react-i18next';
import { LuCreditCard } from 'react-icons/lu'

export default function Tabs() {
    const { t } = useTranslation();
    return (
        <section>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab h-10" aria-label={t('All_Payments')} />

                <input type="radio" name="my_tabs_1" className="tab" aria-label={t('Completed')} defaultChecked />

                <input type="radio" name="my_tabs_1" className="tab" aria-label={t('Pending')} />
            </div>
            <div className="border border-zinc-300/50 rounded-2xl shadow-md p-10">
                <article className='flex flex-col justify-center items-center gap-y-3'>
                    <span className='text-[3rem] text-[#737373]'><LuCreditCard /></span>
                    <h3 className='text-lg font-semibold mb-2'> {t('No_payments_found')} </h3>
                    <p className='text-[#737373]'>{t('Create_your_first_payment_to_get_started')}</p>
                </article>
            </div>
        </section>
    )
}
