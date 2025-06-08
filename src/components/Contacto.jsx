import React,{useRef, useState} from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt,FaGithubSquare,FaLinkedin  } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contacto() {

  const form = useRef();
  const [mensaje, setMensaje] = useState('');
const [tipoMensaje, setTipoMensaje] = useState(''); 

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_6zr933i', 'template_9hbump5', form.current, 'fXfxce7HqG5lVwIqp')
    .then((result) => {
        setMensaje('✅ Mensaje enviado correctamente');
        setTipoMensaje('exito');
        form.current.reset();
        setTimeout(() => {
        setMensaje('');
        }, 2000);
    }, (error) => {
        setMensaje('❌ Ocurrió un error al enviar el mensaje');
        setTipoMensaje('error');
        console.log(error.text);
        setTimeout(() => {
        setMensaje('');
        }, 2000);
    });
};

 
  return (
    <div className='lg:my-16 lg:px-28 my-8 px-5' id='contacto'>
      <h2 className='text-2xl lg:text-4xl text-center font-extrabold'>Contáctame</h2>
      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <div className='lg:w-[40%]'>
            <form className='w-full space-y-3 lg:space-y-5' ref={form} onSubmit={sendEmail}>
                <input type="text" 
                className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
                placeholder='Tú Nombre' name='Nombre' required/>
                <input type="email" 
                className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
                placeholder='Tú Correo' name='Correo' required/>
                <input type="text" 
                className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
                placeholder='Tú Número'
                name='Numero' required/>
                <textarea className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A]  rounded text-sm w-full'
                 placeholder='¿Cómo puedo ayudarte?' name='Mensaje' required></textarea>
              
              <div className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'>
                <button className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium hover:text-green-400'
                type='submit'
                >Contactáme</button>
                <div className='flex items-center gap-x-2 lg:gap-x-5'>
                    <a href="mailto:alejandrogv1011@example.com" target="_blank" rel="noopener noreferrer" className='bg-white p-2 lg:p-3 rounded border-2 border-black hover:bg-black hover:text-white'>
                        <IoMdMail />
                    </a>
                    <a href="https://linkedin.com/in/alejandro" target="_blank" rel="noopener noreferrer" className='bg-white p-2 lg:p-3 rounded border-2 border-black hover:bg-black hover:text-white'>
                    <FaLinkedin /></a>
                    <a href="https://github.com/AlejandroGv2304" target="_blank" rel="noopener noreferrer" className='bg-white p-2 lg:p-3 rounded border-2 border-black hover:bg-black hover:text-white'>
                    <FaGithubSquare />
                    </a>
                </div>
              </div>
            </form>
            {mensaje && (
  <p className={`mt-3 text-sm font-medium ${tipoMensaje === 'exito' ? 'text-green-600' : 'text-red-600'}`}>
    {mensaje}
  </p>
)}
        </div>
        <div className='lg:w-1/2'>
        <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4 }}
            >Juntos podemos <span className='text-5xl'>construir</span></motion.h2>
            <motion.h2
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            >algo especial</motion.h2>
        </div>
        <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'></p>
        <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <a href="mailto:alejandrogv.1011@gmail.com" className='flex items-center gap-2 group transition-all hover:ml-1'>
                <IoMdMail />
                alejandrogv.1011@gmail.com
            </a>
            <a href="tele:3147195095" className='flex items-center gap-2 group transition-all hover:ml-1'>
               <FaPhoneAlt />
               +57 3147195095
            </a>
        </div>
        </div>

      </div>
    </div>
  )
}
