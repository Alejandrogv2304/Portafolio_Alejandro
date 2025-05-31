import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 pr-10 pb-0 pl-20 items-center'>
        <div className='grid items-start grid-cols-1 justify-center'>
        <h1 className='font-semibold text-4xl mb-4'>
            Hola, <span className='font-bold'>Soy Alejandro Gómez Desarrollador Full-Stack</span>
        </h1>
          
        <p className=' mb-4 text-xl text-gray-500'>
            Apasionado por la tecnología, me especializo en el desarrollo web.<br/>
            Me enfocó en contruir soluciones prácticas que ofrezcan una experiencia<br/>
            agradable a los usuarios. Mi meta es crecer en el campo del desarrollo web<br/>
            y su integración con el Internet de las cosas.<br/>
        </p>
        <div className='flex mt-2 gap-2'>
         <a className='hover:bg-black hover:text-white border-2 border-black h-12 w-12 justify-center flex items-center' href="mailto:alejandrogv1011@example.com" target="_blank" rel="noopener noreferrer">
        <MdOutlineEmail className='text-2xl'/>
         </a>
        <a className='hover:bg-black hover:text-white border-2 border-black h-12 w-12 justify-center flex items-center' href="https://linkedin.com/in/alejandro" target="_blank" rel="noopener noreferrer">
        <CiLinkedin className='text-2xl'/>
         </a>
        <a className='hover:bg-black  hover:text-white border-2 border-black h-12 w-12 justify-center flex items-center' href="https://github.com/AlejandroGv2304" target="_blank" rel="noopener noreferrer">
         <FaGithub className='text-2xl'/>
        </a>
   
        </div>
        
        </div>
        <div className='flex justify-center gap-4'>
        <motion.img
  src="Foto_Alejandro.jpeg"
  alt="Alejandro"
  className="mt-8 w-68 h-80 rounded-2xl grayscale-[75%]"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
/> 
        </div>
        
      
    </div>
  )
}
