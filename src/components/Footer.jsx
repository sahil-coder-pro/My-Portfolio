import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      
      <motion.h1 
      initial={{opacity: 0, y: -100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="my-10 text-center text-4xl">Contact Me </motion.h1>

      <motion.div 
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='text-center tracking-tight'>
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className = "text-white" href={`mailTo:${CONTACT.email}`}>{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Footer
