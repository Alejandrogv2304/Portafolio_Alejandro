import React from 'react'

export default function Experiencia() {
  return (
    <div className='bg-black w-full my-8 py-8 lg:my-16 lg:py-16'>
        <h2 className='text-2xl lg:text-4xl text-center text-white'>Mi <span className='font-extrabold'>Experiencia</span></h2>
        <div className='px-5 lg:px-28 my-8 lg:mt-16 space-y-10'>
            <div className='bg-black p-5 border border-[#D4D4D8] rounded-md 
            hover:bg-[#27272A] transition-all cursor-pointer'>
                <div className='flex justify-between flex-col items-start lg:flex-row lg:items-center'>
                    <div className='flex items-center gap-5'>
                        <img className='w-7' src='/freelancer-1.svg'/>
                        <h2 className='font-semibold text-white text-lg lg:text-xl'> Desarrollador Freelance</h2>

                    </div>
                    <span className='text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base'> 2024 - Presente</span>
                </div>
                <p className='text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light'>
                    Como desarrollador freelance, he liderado y participado en diversos proyectos que incluyen 
                    el desarrollo de APIs robustas para dashboards de gestión de asistencia escolar, sistemas completos
                     de reservas de habitaciones y gestión de clientes, así como la creación de landing pages, blogs y 
                     sitios web responsivos. En cada proyecto, he aplicado principios sólidos de ingeniería de software, 
                     asegurando escalabilidad, rendimiento óptimo y una experiencia de usuario fluida.

                    Mi stack incluye el uso de herramientas clave como Git para control de versiones,
                    Postman y Swagger para pruebas y documentación de APIs, y un enfoque centrado en
                    el diseño y modelado eficiente de bases de datos. Además, me destaco por desarrollar
                    soluciones innovadoras que responden a necesidades reales, priorizando siempre la
                    calidad del código, la mantenibilidad del sistema y la satisfacción del usuario final.
                </p>
            </div>
        </div>
      
    </div>
  )
}
