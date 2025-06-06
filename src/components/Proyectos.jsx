import React from 'react'

export default function Proyectos() {
  return (
    <div className='bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16'>
        <h2 className='text-2xl lg:text-4xl text-center text-white'>Mis <span className='font-extrabold'>Proyectos</span></h2>
        <div className='lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3'>
            <div className='flex justify-between items-center flex-col lg:flex-row'>
                <div className='lg:w-[500px] w-full rounded-2xl overflow-hidden'>
                    <img  className='h-64' src='/corporacion_capsula.png'/>
                </div>
                <div className='lg:w-1/2 lg:space-y-6 space-y-4'>
                <h2 className='font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl'>1</h2>
                <p className='font-bold text-white text-xl lg:text-3xl'>Corporación Cápsula</p>
                <p className='font-light text-sm/6 lg:text-base text-[#71717A]'>
                Es una plataforma que permite a los usuarios reservar una cápsula por uno o varios días incluyendo servicios.
                La plataforma cuenta con autenticación con Google, base de Datos en Supabase. Entre sus funcionalidades se encuentran
                filtros según la capacidad, reservas por periodos de tiempo, gestión de perfil de usuarios y de las reseñas, rutas públicas 
                y privadas.</p>
                <a className='text-white mt-3 block'  target='_blank' href='https://github.com/Alejandrogv2304/corporacion-capsula-website' rel='noopener noreferrer'>
                <img className='w-4 h-4 invert' src="https://img.icons8.com/glyph-neue/64/link.png" alt="link"/>
                </a>
                </div>
            </div>
            <div className='flex justify-between items-center flex-col lg:flex-row'></div>
        </div>
      
    </div>
  )
}
