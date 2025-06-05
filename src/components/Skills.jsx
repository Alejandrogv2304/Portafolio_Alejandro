import React from 'react'

export default function Skills() {

  const tecnologías = [
    {nombre:"JavaScript", ruta:'/javascript-1.svg'},
    {nombre:"TypeScript", ruta:"/typescript (1).svg"},
    {nombre:"Java", ruta:"/java-4.svg"},
    {nombre:"React", ruta:"/react-2.svg"},
    {nombre:"MYSQL", ruta:"/mysql-3.svg"},
    {nombre:"NodeJS", ruta:"/nodejs-1.svg"},
    {nombre:"NextJS", ruta:"/next-js.svg"},
    {nombre:"Tailwind", ruta:"/tailwind-css-2.svg"},
    {nombre:"MongoDB", ruta:"/mongodb-icon-2.svg"},
    {nombre:"Python", ruta:"/python-5.svg"}
  ]
  return (
    <div className='mt-3 lg:mt-16 mb-8'>
        <h2 className='text-3xl text-center mb-8'>Mis <span className='font-bold'>Habilidades</span></h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold lg:mt-16
        w-full place-items-center gap-y-6 lg:gap-y-12'>
          {tecnologías.map((tecnologia)=>(
            <div className='bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black
             rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5' key={tecnologia.nombre}>
             <img src={tecnologia.ruta} className='h-12 w-12 lg:h-24 lg:w-24 hover:invert '></img>
             <p>{tecnologia.nombre}</p>
             </div>
          ))}
            
        </div>
      
    </div>
  )
}

