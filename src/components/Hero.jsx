import React from 'react'
import profileImg from "../assets/profile.avif"
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] text-center'>
     {/* image and animation */}
    <div className='relative'>
        <div className='relative mb-8'>
            <div className='absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-xl'>
                {/* gradient effect */}
            </div>
          

            {/* static image */}
            <div>
                <img src={profileImg} alt="profile image" className='w-32 h-32 rounded-full relative z-10' />
            </div>
            {/* animated name */}
            <div
            className="absolute top-3 -right-6 sm:top-8 sm:-right-40 md:top-5 md:-right-34 bg-white text-black px-4 py-1  rounded-full shadow-lg z-20 whitespace-nowrap"
            >
            <p className="text-sm md:text-base font-medium">Shuvo Chandra Das</p>
            </div>
        </div>
    </div>

     {/* heading and title */}

        <h1 className='md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl'>
            <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>Building Digital</span> <br />

            <span className='bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text'>
             Products, Brands, and </span> <br />

            <span className='bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 text-transparent bg-clip-text'> experience.</span></h1>
    

     {/* button */}

        <button className='mt-8 py-4 px-12 border border-gray-600 bg-[#A1A1A] text-gray-600 hover:border-gray-400 hover:text-white transition-colors rounded-full cursor-pointer' >Latest Shots</button>
     
    </div>
  )
}

export default Hero
