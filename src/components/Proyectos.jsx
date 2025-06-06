import React from 'react'
import { motion } from "framer-motion";

export default function Proyectos() {
  return (
    <div className='bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16'>
        <h2 className='text-2xl lg:text-4xl text-center text-white'>Mis <span className='font-extrabold'>Proyectos</span></h2>
        <div className='lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3'>
            <div className='flex justify-between items-center flex-col lg:flex-row'>
                <div className='lg:w-[500px] w-full rounded-2xl overflow-hidden'>
                    <motion.img  className='h-64' src='/corporacion_capsula.png'
                   
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeIn" }}/>
                </div>
                <div className='lg:w-1/2 lg:space-y-6 space-y-4'>
                <h2 className='font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl'>1</h2>
                <p className='font-bold text-white text-xl lg:text-3xl'>Corporación Cápsula</p>
                <motion.p className='font-light text-sm/6 lg:text-base text-[#71717A]'
                initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.4 }}>
                Es una plataforma que permite a los usuarios reservar una cápsula por uno o varios días incluyendo servicios.
                La plataforma cuenta con autenticación con Google, base de Datos en Supabase y esta desarrollada en Next Js. Entre sus funcionalidades se encuentran
                filtros según la capacidad, reservas por periodos de tiempo, gestión de perfil de usuarios y de las reseñas, rutas públicas 
                y privadas.</motion.p>
                <a className='text-white mt-3 block'  target='_blank' href='https://github.com/Alejandrogv2304/corporacion-capsula-website' rel='noopener noreferrer'>
                <img className='w-4 h-4 invert' src="https://img.icons8.com/glyph-neue/64/link.png" alt="link"/>
                </a>
                </div>
            </div>
            <div className='flex justify-between items-center flex-col lg:flex-row'>
                
                <div className='lg:w-1/2 lg:space-y-6 space-y-4'>
                <h2 className='font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl'>2</h2>
                <p className='font-bold text-white text-xl lg:text-3xl'>Roomies U</p>
                <motion.p className='font-light text-sm/6 lg:text-base text-[#71717A]'
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.4 }}
                >
                Roomies U, es una plataforma creada con el fin de centralizar el proceso de búsqueda y arriendo de
                habitaciones a estudiantes universitarios. Cuenta con dos roles: administrador o dueño de pensión y estudiante.
                En ella los administradores pueden publicar pensiones, aceptar solicitudes, reseñar el comportamiento de los estudiantes
                y tener un panel con estadísticas. Mientras que los estudiantes pueden buscar y aplicar a las habitaciones.
                Fue desarrollada con React y Node JS, cuenta con funcionalidades como sistema de autenticación, carga de imágenes,
                envio de correos, recuperación de contraseñas entre otras. En el repositorio se puede apreciar un ejemplo de su uso
                </motion.p>
                <a className='text-white mt-3 block'  target='_blank' href='https://github.com/JxxnDx/RoomiesU' rel='noopener noreferrer'>
                <img className='w-4 h-4 invert' src="https://img.icons8.com/glyph-neue/64/link.png" alt="link"/>
                </a>
                </div>
                <div className='lg:w-[500px] w-full rounded-2xl overflow-hidden'>
                    <motion.img  className='h-72' src='/roomies_u.jpeg'
                     initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeIn" }}/>
                </div>
            </div>
        </div>
        <motion.p className='font-light text-lg text-white'
         initial={{ opacity: 0, y: 70 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, amount: 0.3 }}
         transition={{ duration: 1, delay: 0.5 }}
        >Estos son los proyectos más complejos que he desarrollador, algunos otros son la construcción de una API RestFul para
            la visualización de estadísticas de varias escuelas, landing pages empresariales, blogs entre otros que pueden encontrar
            en mi perfil de Github donde podrán ver la descripción de cada proyecto más a detalle en el Readme.
        </motion.p>
      
    </div>
  )
}
