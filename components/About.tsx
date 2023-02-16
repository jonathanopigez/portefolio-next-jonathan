import React from 'react'
import { FcReadingEbook } from "react-icons/fc";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import Image from 'next/image';

type Props = {
 pageInfos: PageInfo
}


const About = ({pageInfos}: Props) => {
  return (
    <div className=' flex flex-col relative h-screen md:text-left md:flex-row max-x7xl px-10 justify-evenly mx-auto items-center md:max-w-[80%]'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-5'>A propos</h3>
        <motion.div
        initial={{
          x:-200,
          opacity:0
        }}
        transition={{
          duration:1.2
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        viewport={{once:true}}
        
        
        >
        <Image 
    
           alt=""
           width="3000" height="3000"
           src={urlFor(pageInfos?.profilPic).url()}
        
        className="  mt-11 relative  -mb-20 flex-shrink-0 md:rounded-lg " />
        </motion.div>
        <motion.div 
          initial={{
            x:200,
            opacity:0
          }}
          transition={{
            duration:1.2
          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          viewport={{once:true}}
        
        className='space-y-10 md:px-10 md:max-w-[60%]'>
          <h4 className='pt-2 text-3xl font-semibold md:text-5xl text-center'>Une présentation <span className='text-[#6E61Ca]'>s&apos;impose !</span> </h4>
          <p className='text-sm tracking-wider text-[1.2em] text-left  md:text-lg'>{pageInfos?.backgroundInformation} &quot;<Link href="#contact" className=' underline decoration-[#6E61Ca] hover:text-[#6E61Ca] hover:decoration-transparent' >Contactez-moi</Link>&quot;.</p>
        </motion.div>
   

       
    </div>
  )
}
export default About;
