import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMysql,SiNextdotjs, SiMongodb } from "react-icons/si";
import { FaJava, FaReact,FaNode,FaPython  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);
export default function Skills() {

  const cardsRef = useRef([]);

  const tecnologías = [
    {nombre:"JavaScript", icono:IoLogoJavascript},
    {nombre:"TypeScript", icono:SiTypescript},
    {nombre:"Java", icono:FaJava},
    {nombre:"React", icono:FaReact},
    {nombre:"MYSQL", icono:SiMysql},
    {nombre:"NodeJS", icono:FaNode},
    {nombre:"NextJS", icono:SiNextdotjs},
    {nombre:"Tailwind", icono:RiTailwindCssFill},
    {nombre:"MongoDB", icono:SiMongodb},
    {nombre:"Python", icono:FaPython}
  ]

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentElement,
          start: "top 80%",
        },
      }
    );
  }, []);
  return (
    <div className='mt-3 lg:mt-16 mb-8' id='skills'>
        <h2 className='text-3xl text-center mb-8'>Mis <span className='font-bold'>Habilidades</span></h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold lg:mt-16
        w-full place-items-center gap-y-6 lg:gap-y-12'>
          {tecnologías.map((tecnologia, i)=>(
            <div className='bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black
             rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5' 
             ref={el => cardsRef.current[i] = el}
             key={tecnologia.nombre}>
             <tecnologia.icono className='h-12 w-12 lg:h-24 lg:w-24'/>
             <p>{tecnologia.nombre}</p>
             </div>
          ))}
            
        </div>
      
    </div>
  )
}

