import React from 'react'
import { LuHandshake } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { fadeInUp, transitions } from '../utils/animations'

const Contact = () => {
  return (
    <section className='py-32 px-4 md:px-6 bg-[#0F0F0F]/80'>

      {/* SECTION TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16 
      bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
        Contact Me
      </h2>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>

        {/* LEFT SIDE */}
        <div className='text-center md:text-left'>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...transitions.default }}
            className='mb-12'
          >
            <div className='size-24 mx-auto md:mx-0 mb-8 bg-gray-900 rounded-full flex items-center justify-center'>
              <LuHandshake className='text-5xl text-gray-400' />
            </div>

            <h2 className='md:text-4xl lg:text-5xl text-3xl mb-12 leading-tight'>
              <span className='bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text'>
                Tell me about your next
              </span>
              <br className='md:block hidden' />
              <span className='bg-gradient-to-r from-white via-gray-400 to-gray-500 text-transparent bg-clip-text'>
                project
              </span>
            </h2>

            <div className='flex flex-wrap md:justify-start justify-center gap-4'>
              <a
                href="mailto:shuvodas340985@gmail.com"
                className='inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors'
              >
                Email Me
              </a>

              <a
                href="https://wa.me/+8801776132641"
                target='_blank'
                className='inline-flex items-center px-8 py-3 border border-gray-700 text-white rounded-full font-medium hover:border-gray-500 transition-colors'
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...transitions.default, delay: 0.2 }}
          className='bg-gray-900/40 p-8 rounded-2xl backdrop-blur border border-gray-800'
        >
          <h3 className='text-2xl font-semibold mb-6 text-white'>Send me a message</h3>

          <div className='mb-4'>
            <label className='block text-gray-300 mb-2'>Your Name</label>
            <input
              type="text"
              className='w-full p-3 rounded-lg bg-black/30 border border-gray-700 text-white focus:border-gray-500 outline-none'
              placeholder="Enter your name"
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-300 mb-2'>Your Email</label>
            <input
              type="email"
              className='w-full p-3 rounded-lg bg-black/30 border border-gray-700 text-white focus:border-gray-500 outline-none'
              placeholder="your@email.com"
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-300 mb-2'>Message</label>
            <textarea
              rows="5"
              className='w-full p-3 rounded-lg bg-black/30 border border-gray-700 text-white focus:border-gray-500 outline-none'
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className='w-full py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors'
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  )
}

export default Contact
