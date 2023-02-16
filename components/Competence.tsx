import React from 'react'
import { motion } from "framer-motion";
import { skill } from '@/typings';
import { urlFor } from '@/sanity';


type Props = {
  directionLeft?: boolean;
  skills:skill;
}

function Competence({directionLeft, skills}: Props) {


  return (
   
    <div className='group relative flex cursor-pointer '>
      <motion.img src={urlFor(skills?.image).url()} alt=""
      initial={{x: directionLeft ? -150 : 150}}
      whileInView={{opacity:1,x:0}}
      transition={{duration: 1}}
      className="rounded-full border border-gray-500 object-center w-20 h-20 md:h-20 md:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/70 h-24 w-24 md:h-20 md:w-20 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skills?.progress}%</p>
        </div>
      </div>
    </div>
  )
}
export default Competence

