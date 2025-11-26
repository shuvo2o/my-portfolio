import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { CgMail } from "react-icons/cg";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
<header className='flex justify-between items-center p-6 relative'>
   <div className='flex items-center gap-2'> <span><CgMail /></span>
   <span>eng.shuvo03@gmail.com</span>
   </div>

   {/* mobile menu */}
<div
  className="md:hidden z-50"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <div
    className={`w-6 h-0.5 bg-gray-400 transition-all ${
      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
    }`}
  ></div>
  <div
    className={`w-6 h-0.5 bg-gray-400 my-1.5 transition-all ${
      isMenuOpen ? 'opacity-1.5' : ''
    }`}
  ></div>
  <div
    className={`w-6 h-0.5 bg-gray-400  transition-all ${
      isMenuOpen ? '-rotate-60 -translate-y-1.5' : ''
    }`}
  ></div>
</div>


   {/* desktop menu */}
    <nav className='hidden md:block'>
    <ul className='flex space-x-1'>
        <li><a href="#" className='text-gray-400 hover:text-red-400'>Linkedin</a></li>
        <span className='ml-2 text-gray-300'>/</span>
        <li><a href="#" className='text-gray-400 hover:text-red-400'>Instagram</a></li>
         <span className='ml-2 text-gray-300'>/</span>
        <li><a href="#" className='text-gray-400 hover:text-red-400'>Whatsapp</a></li>
    </ul>
    </nav>

    {/* mobile navigation menu */}
<nav
  className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } flex items-center justify-center z-40`}
>
    <ul className='flex flex-col space-y-8 text-center'>
        <li><a onClick={()=>setIsMenuOpen(false)} href="#" className='text-gray-400 hover:text-red-400'>LinkedIn</a></li>
        <li><a href="#" className='text-gray-400 hover:text-red-400'>Instagram</a></li>
        <li><a href="#" className='text-gray-400 hover:text-red-400'>Whatsapp</a></li>
    </ul>
</nav>
{/* overlay */}
{
    isMenuOpen && (
        <div className='fixed md:hidden inset-0 bg-black/50 z-30' onClick={()=> setIsMenuOpen(false)}> </div>
    )
}

</header>
  )
}

export default Navbar
