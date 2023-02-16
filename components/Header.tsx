import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

import Contactbtn from './Contactbtn';

type Props = {}

 function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity: 1,
            scale:1
        }}
        transition={{
            duration: 1.5
        }}
         className='flex flex-row items-center'>
            {/* Reseaux sociaux */}

            <SocialIcon url="https://linkedin.com/in/jonathanopigez/" 
            fgColor="grey"
            bgColor="transparent"
            target="_blank"
            
             />

            <SocialIcon url="https://github.com/jonathanopigez"
            fgColor="grey"
            bgColor="transparent"
            target="_blank"
             />

        </motion.div>

        {/*Contactez-moi*/}
       
        <motion.div
        initial={{
            x: 500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity: 1,
            scale:1
        }}
        transition={{
            duration: 1.5
        }} 
        className='flex flex-row items-center text-grey-300 cursor-pointer' >
           
      <Contactbtn/>
           
        </motion.div>
      
        </header>
  )
}
export default Header