import React, { useState } from 'react';
import { IconDownload } from '@tabler/icons-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className='bg-white flex justify-around p-4 font-system text-md font-semibold items-center fixed top-0 w-full z-50'>
        {/* Logo - igual que antes */}
        <img src="https://img.icons8.com/ios/50/artstation.png" alt="logo-web"/>
        
        <nav className='flex'>
            <ul className='text-black hidden lg:flex gap-4 '>
                <li><a className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110' href="#skills">Inicio</a></li>
                <li><a className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110'href="#sobremi">Sobre mí</a></li>
                <li><a className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110' href="#proyectos">Proyectos</a></li>
                <li><a className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110' href="#contacto">Contacto</a></li>
            </ul>
        </nav>

        <a className="hidden lg:inline relative text-black no-underline border-2 border-black shadow-[6px_4px_0px_#000] px-4 py-2
         hover:bg-black hover:text-white" href="/hoja_de_vida_Alejandro_Gomez.pdf" download>Resume <IconDownload className="inline w-5 h-5 ml-2" /></a>
        

        {/* Botón Hamburguesa (nuevo) */}
        <button 
          className='lg:hidden text-2xl z-50'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Menú Móvil (nuevo) - MANTIENE tu estructura de li */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-start space-y-6 mt-16">
            <ul className='text-center space-y-6'>
              <li><a className='hover:border-b-2 text-xl py-2 block transform transition duration-200 hover:scale-110' href="#skills" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
              <li><a className='hover:border-b-2 text-xl py-2 block transform transition duration-200 hover:scale-110' href="#sobremi" onClick={() => setIsMenuOpen(false)}>Sobre mí</a></li>
              <li><a className='hover:border-b-2 text-xl py-2 block transform transition duration-200 hover:scale-110' href="#proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</a></li>
              <li><a className='hover:border-b-2 text-xl py-2 block transform transition duration-200 hover:scale-110' href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
            
            <a 
              className="relative text-black no-underline border-2 border-black shadow-[6px_4px_0px_#000] px-6 py-2 hover:bg-black hover:text-white mt-4" 
              href="/hoja_de_vida_Alejandro_Gomez.pdf" download
              onClick={() => setIsMenuOpen(false)}
            >
              Resume <IconDownload className="inline w-10 h-10 ml-2" />
            </a>
          </div>
        )}
      </header>
    </>
  );
}