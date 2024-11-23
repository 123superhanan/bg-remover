import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonial = () => {


  return (
    <>
      <div className='mx-4 py-20 xl:py-40 lg:mx-44'>
    {/* -----------Title------------ */}
    <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Customer Testimonials
    </h1>

    <div className='grid grid-cols-1 md:grid-cols-2  gap-8 mt-16 xl:mt-24'>
        {testimonialsData.map((item, index) => (
            <div key={index} className=' bg-white border drop-shadow-md p-6 rounded-md hover:scale-105 transition-transform duration-500'>
                <p className='text-4xl text-gray-500'>”</p>
                <p className='text-sm text-center text-gray-700 mt-4 mb-6'>{item.text}</p>
                <div className=' flex  items-center gap-3 mt-5 '>
                    <img className=' w-9 rounded-full object-cover' src={item.image} alt={item.author} />
              
                <div >
                    <p className='text-lg font-semibold'>{item.author}</p>
                    <p className='text-sm text-gray-500'>{item.jobTitle}</p>
                </div>
            </div>
            </div>
        ))}
    </div>
</div>

    </>
  )
}

export default Testimonial
