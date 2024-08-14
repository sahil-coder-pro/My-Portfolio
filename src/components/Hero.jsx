import React, { useEffect } from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/profile1.png'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

function Hero() {

  const subHeadings = ["Full Stack Developer   ", "Software Developer   ", "Web Developer   "] ;
  // extra space in front in first because till the time page is loaded it gets updated multiple times
  // extra spaces in end, so that one can read the full word or else it the word will start to remove, which makes it unreadable

  const i = useRef(0) ;
  const wordIter = useRef(1) ;
  const reverse = useRef(false); 

  // let subHeading =   subHeadings[i.current] ;


  // console.log(i) ;
  // console.log(subHeading) ;
  // console.log(subHeading.length) ;

  // const [subHeadingIdx, setSubHeadingIdx] = useState(subHeadings[i].length) ;
  // const [subHeadingIdx, setSubHeadingIdx] = useState(subHeading.length) ;
  const [subHeading, setSubHeading] = useState(subHeadings[i.current]) ;

  
  // useEffect(() => {
    
  //   let typeWriter ;
  //   // setSubHeadingIdx(1) ;

  //   const delayTime = setTimeout(() => {
      
  //     console.log("\n\nNew Entry \n\n")
      
  //     typeWriter = setInterval(() => {
  //       setSubHeadingIdx(prev => {
  //         // console.log(i) ;
  //         console.log(subHeading) ;
  //         console.log(subHeading.length) ;
  //         console.log(subHeadings)
  //         console.log(prev, "prev") ;
  //         console.log(i.current)
  //         // return prev === subHeading.length ? 1 && ++i.current : prev+1 ;
  //           if (prev === subHeading.length)  {
    //             i.current = (i.current+1)%subHeadings.length ;
    //             return 1 ;
    //           }
    //           else {
      //               return prev + 1 ;
      //             }
      //           }) ;
      //       }, 250);
      //     }, 0);
      
      //   return () => {
        //     if (delayTime) clearTimeout(delayTime) ;
        //     if (typeWriter) clearInterval(typeWriter) ;
        //   }
        
        // }, [i])
        
  useEffect(() => {


    let typeWriterTimeOut = setTimeout(() => {

      // console.log("i", i.current) ;
      // console.log("wordIter", wordIter.current) ;
      // console.log(reverse.current) ;

      setSubHeading(subHeadings[i.current].substring(0, wordIter.current)) ;
      
      if (wordIter.current === 0 && reverse.current) {
        i.current = (i.current+1) % subHeadings.length ;
        reverse.current = false ;
      }

      if (wordIter.current === subHeadings[i.current].length) {
        reverse.current = true ;
      }

      if (reverse.current) {
        wordIter.current-- ;
      }
      else wordIter.current++ ;

    }, reverse.current ? 80 : 180);
  
    return () => {
      clearTimeout(typeWriterTimeOut) ;
    }
  }, [subHeading])
  

  return (
    <div className='border-b border-neutral-800  pb-8 lg:mb-35 px-4'>
      
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
                  // subHeading.substring(0, subHeadingIdx)
                  subHeading ? subHeading : <p className='invisible'>a</p>
                }   </motion.span>

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
