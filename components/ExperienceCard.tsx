import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import {experience} from '@/typings';
import { urlFor } from '@/sanity';


type Props = {
    experience: experience;

}

function ExperienceCard({experience}: Props) {
   
    
  return (
    <motion.div
    initial={{
      x: -1000,
         opacity:0
        }}
        animate={{
           x: -0,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
       
    
    >
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[800px] md:h-[650px] xl:w-[900px] xl:h-[500px] sm:mt-[110px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-x-hidden cursor-pointer scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#C282FA]/40'>
    
        <motion.img
        initial={{
       y: -100,
          opacity:0
         }}
         animate={{
            y: -0,
             opacity:1
         }}
         transition={{
             duration:1.2
         }}
         viewport={{once: true}}
        className='w-32 h-32 md:h-60 md:w-60 xl:h-80 xl:w-80 object-center' src={urlFor(experience?.companyImage).url()} width="500" height="500" alt="" />
     
        <section className='px-0 md:px-10 space-y-4'>
            <h4 className='text-3xl text-center uppercase mb-10 font-semibold'>{experience?.jobTitle}</h4>
            <p className='font-bold text-1xl mt-1 text-gray-500 '>{experience?.company}</p>
            <div className='flex space-x-5 my-2'>
              
            {experience?.technologies.map(technology=>(
                
            <Image key={technology?._id} 
                alt=""
                width="40" height="40"
                className="w-12 h-12"
                src={urlFor(technology?.image).url()}
               />
          ))}

            </div>
            <p className='uppercas text-gray-500'>Début {experience?.dateStarted} fin {experience?.dateEnded} </p>
            
            {experience?.points.map(point=>(
             
             
                <ul id={point?.title} key={point?.title} className='uppercase font-semibold text-sm text-[#C282FA]' >{point?.title}
                <li id={point?._id} key={point?._id} className='uppercas py-5 text-sm text-gray-500'>{point?.points}</li>
                </ul>
  
                  
                  
                  
             
              
            ))}
            
            </section>
    </article>
    </motion.div> 
  )
}

export default ExperienceCard