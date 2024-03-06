import React from 'react'
import ipl_logo from '../assets/ipl_logo.png'
import '../components/Hero.css'
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
const Hero = () => {
  return (
    <div className='text-white' >
    <div className=' max-w-[800px] flex flex-col w-full text-center mt-[196px] h-screen mx-auto'>
        <div className='w-[390px] h-[400px] bg-purple-800 rounded-[100%] absolute z-1 top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[210px] '></div>
        <motion.div 
        variants={fadeIn("left",0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.7}}>
        <img className='w-[300px] mx-auto items-center py-3 relative z-10 'src={ipl_logo} alt='/'/>
        <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold  md:py-6  py-3'><span className='gradient-text'>Innovator's Premier League</span> <span className='text-white neon'>3.0</span></h1>

        <div className='flex justify-center'>

        </div>
        <p className='md:2xl text:xl font-light text-gray-500 pt-5 '>Ignite your entrepreneurial spirit.</p>
        </motion.div>
        <div className='grid sm:grid cols-3 md:grid-cols-1 md:flex md:justify-center md:mt-3 '>
       
        <div className='box bg-[#ebebeb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><span></span><p>Compete</p></div>
       
           <div className='box bg-[#ebebeb] w-[200px] rounded-md font-medium md:my-6 mx-auto py-3 text-black'><span></span><p>Collaborate</p></div>
        
          <div className='box bg-[#ebebeb] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><span></span><p>Celebrate</p></div>
       
        </div>

    </div>
</div>
  )
}

export default Hero

