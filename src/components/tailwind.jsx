import React from 'react'

const Tailwind = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-slate-800'>
      <div className='w-[400px] rounded-xl border-white border-solid border-2 p-5 flex flex-col gap-6 bg-slate-600'>
        <div >
            <h1 className='text-2xl font-bold'>Sign in to your account</h1>
        </div>
        <div>
            <p className='font-bold pb-2'>Your email</p>
            <input type="email" placeholder='name@company.com' className='bg-slate-300  p-2 w-full rounded-lg'/>
        </div>
        <div>
            <p className='font-bold pb-2'>Password</p>
            <input type="password" className='bg-slate-300 p-2 w-full rounded-lg' placeholder='******' />
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <input type="checkbox" />
                <p>Remember me</p>
            </div>
            <a href="# " className='text-blue-600'>Forgot password?</a>
        </div>
        <button className='w-full h-10 rounded-xl bg-blue-800 rounded-lg border-solid '>Sign in</button>
        <div>
            <p>Don’t have an account yet?   <a href="# " className='text-blue-600 text-center'>Sign up</a></p>
        </div>
      </div>
    </div>
  )
}

export default Tailwind
