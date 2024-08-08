import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="w-max"></div>
    <div className='text-[#2c3e50] h-[90vh] pt-10'>
        <div className="container mx-auto">
      <h2 className="text-5xl font-semibold uppercase ">conatct section</h2>
      <div className="h-1 w-20 bg-[#2c3e50] inline-block -translate-y-1/2"></div>
      <i className="fa-solid fa-star mx-5"></i>
      <div className="h-1 w-20 bg-[#2c3e50] inline-block"></div>
      <div className='w-[60%] mx-auto'>
        <input type="text" placeholder='userName' className='bg-white border border-gray-300 border-t-0 border-e-0 border-s-0 border-b-1 outline-none w-full px-3 py-4 mb-6' />
        <input type="text" placeholder='userAge' className='bg-white border border-gray-300 border-t-0 border-e-0 border-s-0 border-b-1 outline-none w-full px-3 py-4 mb-6' />
        <input type="text" placeholder='userEmail' className='bg-white border border-gray-300 border-t-0 border-e-0 border-s-0 border-b-1 outline-none w-full px-3 py-4 mb-6' />
        <input type="text" placeholder='userPassword' className='bg-white border border-gray-300 border-t-0 border-e-0 border-s-0 border-b-1 outline-none w-full px-3 py-4 mb-6' />
        <button  className='bg-[#1abc9c] text-white font-thin me-auto block border-0 focus:outline-none'>Send Message</button>
      </div>

        </div>
    </div>
    </>
  )
}
