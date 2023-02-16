import React from 'react'
import { motion } from "framer-motion";
import { projet } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  projets:projet[];
}

function Projets({projets}: Props) {
// const projets = [1, 2, 3, 4, 5];

  return (
    <motion.div 
    
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
         <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projets</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#C282FA]/40'>
            {projets.map((projet,i) => (
                <article key={projet?._id} className='w-screen flex-shrink-0 snap-end flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                     
                    initial={{opacity:0,y:-300}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.2}}
                    viewport={{once: true}}

                    className='h-[250px] w-[380px]'
                    src={urlFor(projet?.image).url()} alt="" />
                    <div className='space-y-10 pc-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl font-semibold text-center'>
                            <span className='underline decoration-[#C282FA]/50'> Projet { i + 1 } sur {projets.length}</span> : {projet?.title}  
                            </h4>
                            <div className='uppercase space-x-5 flex justify-center'>
                            {projet?.technologies.map(technology =>(
                                <span key={technology?._id} className='uppercase text-gray-500'>
                                  
                                  {technology?.title}

                                </span>
                            ))}
                            
                            </div>
                            <p className='text-md text-center md:text-left'>{projet?.summary}</p>
                    </div>
                </article>
            ))}
           
        </div>




         <div className='w-full absolute top-[30%] bg-[#C282FA]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}
export default Projets

