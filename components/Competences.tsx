import React from 'react'
import { motion } from "framer-motion";
import Competence from './Competence';
import { skill } from '@/typings';

type Props = {
  skills:skill[];
}

function Compétence({skills}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='h-screen flex  relative flex-col text-center md:text-left xl:flew-row max-w-[2000px] xl:pc-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>
       <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Compétences</h3>
       <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Survolez les compétences pour plus de détails</h3>


       <div className='grid grid-cols-4 gap-5 '>

       {skills?.slice(0, skills.length / 2).map((skill)=>(
            <Competence key={skill?._id} skills={skill}/>
          ))}
       {skills?.slice(skills.length / 2, skills.length).map((skill)=>(
            <Competence key={skill?._id} skills={skill} directionLeft/>
          ))}

       </div>


    </motion.div>
  )
}

export default Compétence