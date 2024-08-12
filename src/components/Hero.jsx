import React, { useEffect } from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/profile1.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

function Hero() {

  // const subHeadings = ["Full Stack Developer", "Software Developer", "Web Developer"] ;
  // let i = 0 ;

  const subHeading = "Full Stack Developer" ;

  // const [subHeadingIdx, setSubHeadingIdx] = useState(subHeadings[i].length) ;
  const [subHeadingIdx, setSubHeadingIdx] = useState(subHeading.length) ;

  
  useEffect(() => {

    const delayTime = setTimeout(() => {}, 2000);

    const typeWriter = setInterval(() => {
      setSubHeadingIdx(prev => {
        // console.log(i) ;
        return prev === subHeading.length ? 1 : prev+1 ;
        // if (prev === subHeadings[i].length)  {
        //   i = (i+1)%subHeadings.length ;
        //   return 1 ;
        // }
        // else {
        //   return prev + 1 ;
        // }
      }) ;
    }, 250);

    return () => {
      clearTimeout(delayTime) ;
      clearInterval(typeWriter) ;
    }

  }, [])

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 px-4'>
      
      <div className='flex flex-wrap'>

        <div className='w-full lg:w-1/2 '>

            <div className='flex flex-col  items-center lg:items-start'>

                <motion.h1 
                variants={container(0)}
                initial = "hidden"
                animate = "visible"

                className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Sahil Gupta</motion.h1>

                <motion.span 
                variants={container(0.5)}
                initial = "hidden"
                animate = "visible"

                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight'>{
                  // subHeadings[i].substring(0, subHeadingIdx)
                  subHeading.substring(0, subHeadingIdx)
                }</motion.span>

                <motion.p 
                variants={container(1)}
                initial = "hidden"
                animate = "visible"
                className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <motion.img 
              initial={{x: 100, opacity:0}}
              animate= {{x:0, opacity: 1}}
              transition={{duration:1, delay:0.5}}
              src={profilePic} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
