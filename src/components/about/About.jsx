import React from 'react'

export default function About() {
  return (
    <div className='bg-[#1abc9c] h-[85vh] flex items-center'>
      <div className="container mx-auto w-[70%]">
        <h2 className='text-5xl font-semibold uppercase'>about component</h2>
        <div className='h-1 w-20 bg-white inline-block -translate-y-1/2'></div>
        <i className='fa-solid fa-star mx-5'></i>
        <div className='h-1 w-20 bg-white inline-block'></div>
        <div className='grid grid-col-1 md:grid-cols-2 gap-2 text-left mx-auto mt-5'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

      </div>
    </div>
  )
}
