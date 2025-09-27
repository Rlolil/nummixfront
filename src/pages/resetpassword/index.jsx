import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function ResetPassword() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false); 
      navigate("/login");
    }, 2000);
  };
  return (
    <div className='max-w-[1320px] mx-auto'>
        <div className='rounded-2xl shadow-2xl border border-gray-200 p-10 mt-20 max-w-[500px] mx-auto space-y-6'>
            <div className='text-center'>
                <h2 className='text-[black] font-bold text-[26px]'>Nummix ERP</h2>
                <p className='text-gray-600'>Reset your password</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='space-y-6 mt-6'>
                    <div>
                        <label className='text-sm font-medium text-gray-700'>Email</label>
                        <input required type="email" className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter your email' />
                    </div>
                    <div>
                        <button type='submit' className='w-full bg-[black] text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition' style={{ backgroundColor: isSubmitting ? 'gray' : 'black' }} disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Reset Password'}
                        </button>
                    </div>
                </form>
            </div>
            <div className='space-y-4'>
                <p className='text-center text-gray-400'>Don't have an account? <Link to="/register" className='text-black font-medium'>Sign up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword