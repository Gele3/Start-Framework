import React from 'react'

export default function () {
  return (
    <footer>
    <div className=' grid grid-cols-1 sm:grid-cols-3 gap-5 bg-[#2c3e50] p-20'>
        <div>
            <h2 className='text-[1.75rem] font-semibold mb-5'>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div>
            <h2 className='text-[1.75rem] font-semibold mb-5'>AROUND THE WEB</h2>
            <div className='flex items-center justify-center space-x-3'>
                <span className='flex items-center justify-center border w-8 h-8 border-white p-5 rounded-full'><i className='fa-brands fa-facebook'></i></span>
                <span className='flex items-center justify-center border w-8 h-8 border-white p-5 rounded-full'><i className='fa-brands fa-twitter'></i></span>
                <span className='flex items-center justify-center border w-8 h-8 border-white p-5 rounded-full'><i className='fa-brands fa-linkedin-in'></i></span>
                <span className='flex items-center justify-center border w-8 h-8 border-white p-5 rounded-full'><i class="fa-solid fa-globe"></i></span>
            </div>
        </div>
        <div>
            <h2 className='text-[1.75rem] font-semibold mb-5'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed <br/> Bootstrap theme created by Route</p>
        </div>
    </div>
    <div className='bg-[#1a252f] p-5'>
        <p>Copyright © Your Website 2021</p>
    </div>
    </footer>
  )
}
