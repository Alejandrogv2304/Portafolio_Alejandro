import React from 'react'
import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <div className='px-5 lg:px-28 flex justify-between flex-col lg:flex-row mb-8'>
        <div className='lg:w-1/2 grid place-items-center'>
        <motion.img
          src="Foto_Portafolio_2.jpeg"
          alt="Alejandro"
          className="w-100 h-100 rounded-2xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        />
          {/* Nota para el futuro: Viewport y animation no se usan juntos, toca con whileInView  */}
        </div>
        
       {/* Texto con animación */}
      <div className='lg:w-1/2'>
  <motion.h2
    className='lg:text-4xl text-2xl mt-4 lg:mt-0'
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    Sobre <span className='font-extrabold'>Mí</span>
  </motion.h2>

  <motion.p
    className='text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 1, delay: 0.4 }}
  >
    Soy Alejandro Gómez, desarrollador web fullstack con sólida formación técnica en Sistemas (SENA)
    y actualmente estudiante de Ingeniería de Sistemas en la Universidad Industrial de Santander.
    Me especializo en tecnologías modernas como <strong>React, Node.js, MySQL y TailwindCSS</strong>, construyendo aplicaciones eficientes, escalables y con un enfoque centrado en el usuario.
  </motion.p>

  <motion.p
    className='text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    Inicié mi trayectoria en 2022 trabajando con lenguajes como C++ y Java. Desde entonces,
    he desarrollado múltiples proyectos personales y académicos, integrando tecnologías backend y frontend,
    así como conceptos de IoT y Machine Learning. Me apasiona resolver problemas reales a través del software, combinando lógica, diseño y experiencia de usuario.
    Actualmente, busco oportunidades para seguir creciendo en equipos de desarrollo que valoren la calidad,
    la colaboración y la innovación constante.
  </motion.p>
        </div>
      
    </div>
  )
}
