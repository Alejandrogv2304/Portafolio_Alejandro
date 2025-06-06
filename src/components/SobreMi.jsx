import React from 'react'
import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <div className='px-5 lg:px-28 flex justify-between flex-col lg:flex-row mb-4'>
        <div className='lg:w-1/2 grid place-items-center'>
        <motion.img
          src="Foto_Portafolio_2.jpeg"
          alt="Alejandro"
          className="w-100 h-100 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        /> 
        </div>
        <div className='lg:w-1/2'>
        <h2 className='lg:text-4xl text-2xl mt-4 lg:mt-0'>Sobre <span className='font-extrabold'>Mí</span></h2>
        <p className='text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10'>
   Soy Alejandro Gómez, desarrollador web fullstack con sólida formación técnica en Sistemas (SENA) 
   y actualmente estudiante de Ingeniería de Sistemas en la Universidad Industrial de Santander. 
   Me especializo en tecnologías modernas como <strong>React, Node.js, MySQL y TailwindCSS</strong>, construyendo aplicaciones eficientes, escalables y con un enfoque centrado en el usuario.
  </p>

  <p className='text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10'>
   Inicié mi trayectoria en 2022 trabajando con lenguajes como C++ y Java. Desde entonces,
    he desarrollado múltiples proyectos personales y académicos, integrando tecnologías backend y frontend,
    así como conceptos de IoT y Machine Learning. Me apasiona resolver problemas reales a través del software, combinando lógica, diseño y experiencia de usuario. 
   Actualmente, busco oportunidades para seguir creciendo en equipos de desarrollo que valoren la calidad, 
   la colaboración y la innovación constante.
  </p>

        </div>
      
    </div>
  )
}
