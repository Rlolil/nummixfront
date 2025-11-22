import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { forgotPassword } from '../../services';
import { useTranslation } from 'react-i18next';

function ResetPassword() {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    try {
        await forgotPassword({ email });
        setIsSubmitting(false);
        navigate("/reset-password-verify", { state: { email } });
    } catch (error) {
        console.error(error);
        setIsSubmitting(false); 
    }
  };
  return (
    <div className='max-w-[1320px] mx-auto'>
        <div className='rounded-2xl shadow-2xl border border-gray-200 p-10 mt-20 max-w-[500px] mx-auto space-y-6'>
            <div className='text-center'>
                <h2 className='text-[black] font-bold text-[26px]'>Nummix ERP</h2>
                <p className='text-gray-600'>{t('auth.reset.subtitle')}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='space-y-6 mt-6'>
                    <div>
                        <label className='text-sm font-medium text-gray-700'>{t('common.email')}</label>
                        <input onChange={(e)=> {setEmail(e.target.value)}} required type="email" className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder={t('placeholders.email')} />
                    </div>
                    <div>
                        <button type='submit' className='w-full bg-[black] text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition' style={{ backgroundColor: isSubmitting ? 'gray' : 'black' }} disabled={isSubmitting}>
                            {isSubmitting ? t('auth.reset.submitting') : t('auth.reset.submit')}
                        </button>
                    </div>
                </form>
            </div>
            <div className='space-y-4'>
                <p className='text-center text-gray-400'>{t('auth.common.noAccount')} <Link to="/register" className='text-black font-medium'>{t('auth.common.signUp')}</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword