import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { BsFileText } from "react-icons/bs";

function Navbar() {
  return (
    <nav className=' mb-20 flex gap-y-5 flex-wrap items-center justify-between py-6 px-4 '>
        <div className=' flex-wrap items-center'>
            {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
            <span className='text-3xl font-medium text-white/70 tracking-wide '>Sg</span>
        </div>
        <div className='text-3xl font-medium  text-white/70 hover:text-white'>
            {/* <a href="https://drive.google.com/file/d/16tUcGXiA3rw78FrXBhw-gpfmSu_6ZINg/view?usp=sharing" target='_blank'>Resume</a> */}
            <a className='hover:text-white' href="https://drive.google.com/file/d/1pRuh6x4NipYk5CmNJJBVNowUk5X_Ndhf/view?usp=sharing" target='_blank'><BsFileText /></a>
        </div>
        <div className='flex items-center justify-center gap-4 text-3xl text-white/70'>
            <a className='hover:text-white' href="https://www.linkedin.com/in/sahil-gupta-617116216/" target='_blank'><FaLinkedin /></a>
            <a className='hover:text-white' href="https://github.com/sahil-coder-pro" target='_blank'><FaGithub /></a>
            
        </div>
    </nav>
  )
}

export default Navbar
