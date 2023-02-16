import React from 'react'
import { useState } from "react";
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { competence, experience } from '@/typings';
import Swipe from 'react-easy-swipe';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type Props = {
  experiences: experience[];

}

const WorkExperience = ({experiences}: Props) => {
// carousel

const [currentSlide, setCurrentSlide] = useState(0);

const handleNextSlide = () => {
  let newSlide = currentSlide === experiences.length - 1 ? 0 : currentSlide + 1;
  setCurrentSlide(newSlide);
};

const handlePrevSlide = () => {
  let newSlide = currentSlide === 0 ? experiences.length - 1 : currentSlide - 1;
  setCurrentSlide(newSlide);
};
// carousel


  return (
   <motion.div 
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:1.5
        }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
    
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Expériences</h3>

          <div className='p-10 ' >
          {/* //carousel */}
          <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-40 md:left-5 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20 hover:text-6xl transition-all duration-75 hover:text-[#C282FA]/40"
      />
<div className="w-full h-full flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
            

          {experiences?.map((experience, index)=> {
            if(index === currentSlide){
              return(
                <ExperienceCard key={experience._id} experience={experience}/>
              );
            }
          }
           
          )}


        </Swipe>
          </div>
          <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-40 md:right-5 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20 hover:text-6xl transition-all duration-75 hover:text-[#C282FA]/40"
      />

<div className="relative flex justify-center p-2">
        {experiences.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb- mt-4 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 mt-4 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>


          </div>

 
   </motion.div>
  )
}

export default WorkExperience