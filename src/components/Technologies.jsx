import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { FaGit } from 'react-icons/fa' 
import { SiGit } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiPostman } from 'react-icons/si'
import {animate, motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10} ,
  animate:{y:[10, -10], 
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  
})

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      initial={{opacity: 0, y: 100, filter:"blur(15px)"}}
      whileInView={{opacity: 1, y: 0, filter: "blur(0px)"}}
      transition={{duration: 1.5}}

      className='my-20 text-center text-4xl'>Skills</motion.h2>

      <motion.h2 
        initial={{opacity: 0, x: 100, filter:"blur(15px)"}}
        whileInView={{opacity: 1, x: 0, filter: "blur(0px)"}}
        transition={{duration: 1.5}}

        className='my-20 text-center text-2xl text-neutral-400'>Frontend
      </motion.h2>

      <motion.div 
      initial={{opacity: 0, x: -100, filter:"blur(15px)"}}
      whileInView={{opacity: 1, x: 0, filter: "blur(0px)"}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        



        

        

        <motion.div 
        
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiHtml5 className='text-7xl text-orange-700'/>
        </motion.div>

        <motion.div 
        
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiCss3 className='text-7xl text-[#2929af]'/>
        </motion.div>

        

        <motion.div 
        
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiJavascript className='text-7xl text-yellow-400'/>
        </motion.div>

        <motion.div 
        
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
        
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiTailwindcss className='text-7xl text-[#1880e2]'/>
        </motion.div>

        <motion.div 
        
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiGit className='text-7xl text-orange-600'/>
        </motion.div>
        
      </motion.div>

      <motion.h2 
        initial={{opacity: 0, x: 100, filter:"blur(15px)"}}
        whileInView={{opacity: 1, x: 0, filter: "blur(0px)"}}
        transition={{duration: 1.5}}

        className='my-20 text-center text-2xl text-neutral-400'>Backend 
      </motion.h2>

      <motion.div 
      initial={{opacity: 0, x: -100, filter:"blur(15px)"}}
      whileInView={{opacity: 1, x: 0, filter: "blur(0px)"}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        

        <motion.div 
        
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-600'/>
        </motion.div>

        <motion.div 
        
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className='text-7xl text-gray-400'/>
        </motion.div>
        
        <motion.div 
        
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-700'/>
        </motion.div>

        

        <motion.div 
        
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"

          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiPostman className='text-7xl text-orange-700'/>
        </motion.div>
      </motion.div>

      

      

      
    </div>
  )
}

export default Technologies
