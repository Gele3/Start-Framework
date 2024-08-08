import React from 'react'
import heroImg from '../../assets/images/avataaars.svg'
export default function Home() {
  return (
    <div className='bg-[#1abc9c] h-[88vh] flex flex-col justify-center items-center'>
        <div className='mb-6'>
        <img src={heroImg} className='w-[250px] rounded-full' alt="heroImg" />
        </div>
        <div>
        <h2 className='text-5xl font-semibold uppercase'>start Framework</h2>
        <div className='h-1 w-20 bg-white inline-block -translate-y-1/2'></div>
        <i className='fa-solid fa-star mx-5'></i>
        <div className='h-1 w-20 bg-white inline-block'></div>
        <h3>Graphic Artist - Web Designer - Illustrator</h3>
        </div>
        </div>
  )
}
