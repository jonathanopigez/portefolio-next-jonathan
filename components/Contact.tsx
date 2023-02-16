import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
type Inputs = {
    nom: string,
    email: string,
    sujet: string,
    message: string,
  };
type Props = {}

function Contact({}: Props) {
    const { 
        register,
        handleSubmit, 
         } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href= `mailto:opigezjonathan@gmail.com?subject=${formData.sujet}&body=Bonjour, je m'appelle ${formData.nom}. ${formData.message} (${formData.email})`
    };

  return (
<div className='h-screen flex relative  flex-col text-center md:text-left   md:flex-row max-x-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contactez-moi</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-lg font-semibold text-center'>Une question ? Un projet ?  <span className='decoration-[#C282FA]/50 underline'>N&apos;hésitez pas</span> !
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-2 justify-center'>
                    <PhoneIcon className='text-[#C282FA] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>+33783943712</p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <MapPinIcon className='text-[#C282FA] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>Normandie</p>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                    <EnvelopeIcon className='text-[#C282FA] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>opigezjonathan@gmail.com</p>
                </div>
            </div>
    
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register("nom")} placeholder='Nom' className='contactInput' type="text" />
                        <input {...register("email")}placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register("sujet")}  placeholder='Sujet'  className='contactInput' type="text" />
                    <textarea {...register("message")}  placeholder='Message' className='contactInput' />
                    <button type='submit' 
                    className='bg-[#C282FA] py-5 px-10 rounded-md text-black font-bold text-lg'>Envoyer</button>
                </form>

        </div>
</div>
  )
}

export default Contact