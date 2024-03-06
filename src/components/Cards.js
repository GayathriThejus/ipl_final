import React from 'react'
import idea from '../assets/images/innovation (1).png'
import mind from '../assets/images/mind.png'
import nano from '../assets/images/nanotechnology.png'
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
const Cards = () => {
  return (
    <div className='w-full py-[3rem] text-white'>
      <h1 className='font-bold text-4xl md:text-5xl text-white  mx-auto text-center mb-[90px] gradient-text'>Event Tracks</h1>
     
        <div className='max-w-[800px] mx-auto grid md:grid-cols-3 gap-8'>
        <motion.div 
        variants={fadeIn("down",0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.7}}>
          <div className='sm:w-full w-[85%] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mx-auto bg-gray-900'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={idea} alt='/'/>
          <h2 className='text-2xl font-bold text-center py-8 text-gray-300'>Innovation</h2>
          
          </div></motion.div>
          <motion.div 
        variants={fadeIn("up",0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.7}}>
          <div className='sm:w-full w-[85%]  shadow-xl bg-gray-900  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mx-auto'>
          <img className='bg-transparent w-20 mx-auto mt-[-3rem]'src={nano} alt='/'/>
          <h2 className='text-2xl font-bold text-center py-8 text-gray-300'>Technology</h2>

          </div></motion.div>
          <motion.div 
        variants={fadeIn("down",0.9)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.7}}>
            <div className='sm:w-full w-[85%]  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-900  mx-auto'>
            <img className='w-20 mx-auto mt-[-3rem]'src={mind}alt='/'/>
            <h2 className='text-2xl font-bold text-center py-8 text-gray-300'>Entrepreneurship</h2>
         
            </div></motion.div>
        </div>

    </div>
  )
}

export default Cards