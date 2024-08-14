import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { TbExternalLink } from "react-icons/tb";


function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2
      initial={{opacity: 0, y: -100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>

      <div>
        {
            PROJECTS.map((project, index) => (
                <div key = {index} className="mb-8 flex flex-wrap lg:justify-center ">

                    <motion.div 
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/4 ">

                        <img src={project.image} alt="Project Image" width={300} height = {300} className='mb-6 rounded'/>
                    </motion.div>

                    <motion.div 
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                    className='w-full max-w-xl lg:w-3/4 '>
                        <h6 className='mb-2 font-semibold text-xl'>{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <span className="mb-4  text-purple-500 hover:text-purple-700"><a href={project.link} className='' target='_blank'>Checkout Project
                          </a>

                          </span>

                        <div className='flex flex-wrap'>
                          {
                            project.technologies.map((tech, index) => (
                                <span key = {index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>{tech}</span>
                            ))
                          }
                        </div>
                    </motion.div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Projects
