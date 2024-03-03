import React,{useState} from 'react'
import CountUp from 'react-countup'
import '../components/Counter.css'
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {
    const [counterOn,setCounterOn]=useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className='container max-w-[1300px] grid md:grid cols-3 lg:grid-cols-5 lg:flex lg:justify-center lg:items-center md:mt-3 mx-auto'>
   
        <div className=' gradient-text relative w-230 h-180 m-10 shadow-2xl  bg-opacity-10 flex justify-center items-center shadow-lg shadow-purple-900'>

        <div className='content p-[20px] text-center'>
        <p><span className='text-5xl font-bold '>{ counterOn && <CountUp start={0} end={375} duration={3} delay={0}   />}+</span> <br/>
          <h6>IEDCs</h6></p>
        </div>
        </div>
        <div className=' gradient-text relative w-230 h-180 m-10 shadow-2xl  bg-opacity-10 flex justify-center items-center shadow-lg shadow-purple-900'>
        <div className='content p-[20px] text-center'>
                <p ><span  className='text-5xl font-bold'>{ counterOn && <CountUp start={29675} end={30000} duration={3} delay={0}   />}+</span>
                <h6>Innovators</h6></p>
        </div>
        </div>
        <div className=' gradient-text relative w-230 h-180 m-10 shadow-2xl  bg-opacity-10 flex justify-center items-center shadow-lg shadow-purple-900'>
        <div className='p-[20px] text-center'>
                <p> <span  className='text-5xl font-bold'>{ counterOn && <CountUp start={2675} end={3000} duration={3} delay={0}   />}+</span>
                <h6> Changemakers</h6></p>
        </div>
        </div>
        <div className=' gradient-text relative w-230 h-180 m-10 shadow-2xl  bg-opacity-10 flex justify-center items-center shadow-lg shadow-purple-900'>
        <div className='p-[20px] text-center'>
                <p ><span  className='text-5xl font-bold'>{ counterOn && <CountUp start={0} end={100} duration={3} delay={0}   />}+</span>
                 <h6>Days</h6></p>
        </div>
        </div>
        <div className=' gradient-text relative w-230 h-180 m-10 shadow-2xl  bg-opacity-10 flex justify-center items-center shadow-lg shadow-purple-900'>
        <div className='p-[20px] text-center'>
                <p ><span  className='text-5xl font-bold'>{ counterOn && <CountUp start={0} end={3} duration={3} delay={0}   />}+</span>
                <h6>Challenges</h6></p>
        </div>
        </div>
    </div>
    </ScrollTrigger>
  )
}

export default Counter