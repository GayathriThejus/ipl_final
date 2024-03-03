import React from 'react'
import ipl_logo from '../assets/ipl_logo.png'
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
const About = () => {
  return (
    <div className='w-[95%] mx-auto py-16 px-4 bg-neutral-900 border-top rounded-2xl mt-[116px]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
        <motion.div 
        variants={fadeIn("down",0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.7}}>
            <img className='w-[500px] bg-transparent mb-6  'src={ipl_logo} alt='/'/></motion.div>
            <motion.div 
            className='flex flex-col justify-center sm:py-4 'variants={fadeIn("right",0.03)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:true,amount:0.7}}>
               
                <h1 className='font-bold text-4xl md:text-5xl gradient-text py-3'>About IPL</h1>
                <p className='text-gray-400 text-[17px] md:text-[20px]  '> Innovators' Premier League (IPL) is an initiative of the Kerala Startup Mission (KSUM) to bring out the best talents from the Kerala
                     Innovation Hubs. IPL aims to bring awareness and sensitization of IEDC & its activities among students, building a competitive &
                      entrepreneurial mindset among innovators, and create the pipeline of startups.
                </p><br/>
                <p className='text-gray-400 text-[17px] md:text-[20px]'> During IPL, the students in the institution will compete with each other at the College level, followed by Regional level and at the 
                    State level challenges under the 3 major pillars - Innovation, Technology & Entrepreneurship. The league competition runs on a point 
                    scale where institutions and students can achieve points by organizing and taking part in boot camps, workshops, ideathons, hackathons, 
                    etc. under various categories.
                </p>
                
            </motion.div>
        </div>

    </div>
  )
}

export default About