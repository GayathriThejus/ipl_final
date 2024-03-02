import React,{useState} from 'react'
import CountUp from 'react-countup'
import '../components/Counter.css'
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {
    const [counterOn,setCounterOn]=useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className='container max-w-[1000px] grid md:grid cols-3 lg:grid-cols-5 lg:flex lg:justify-center lg:items-center md:mt-3 mx-auto'>
   
        <div className='gradient-text relative w-230 h-180 m-10  rounded-lg  flex justify-center items-center border border-gray-400 border-t-0 border-l-0 border-b-rose-900 border-r-violet-500   '>

        <div className='content p-[20px] text-center'>
        <p  ><span className='text-5xl font-bold '>{ counterOn && <CountUp start={0} end={375} duration={3} delay={0}   />}+</span> <br/>
          <h6>IEDCs</h6></p>
        </div>
        </div>
        <div className='gradient-text relative w-230 h-180 m-10 shadow-2xl rounded-lg bg-opacity-10 flex justify-center items-center border border-solid border-gray-300 border-t-0 border-l-0 border-b-rose-900 border-r-violet-500 '>
        <div className='content p-[20px] text-center'>
                <p ><span  className='text-5xl font-bold'>{ counterOn && <CountUp start={29675} end={30000} duration={3} delay={0}   />}+</span>
                <h6>Innovators</h6></p>
        </div>
        </div>
        <div className='gradient-text relative w-230 h-180 m-10 shadow-2xl rounded-lg bg-opacity-10 flex justify-center items-center border border-solid border-gray-300 border-t-0 border-l-0 border-b-rose-900 border-r-violet-500 '>
        <div className='p-[20px] text-center'>
                <p> <span  className='text-5xl font-bold'>{ counterOn && <CountUp start={2675} end={3000} duration={3} delay={0}   />}+</span>
                <h6> Changemakers</h6></p>
        </div>
        </div>
        <div className='gradient-text relative w-230 h-180 m-10 shadow-2xl rounded-lg bg-opacity-10 flex justify-center items-center border border-solid border-gray-300 border-t-0 border-l-0 border-b-rose-900 border-r-violet-500 '>
        <div className='p-[20px] text-center'>
                <p ><span  className='text-5xl font-bold'>{ counterOn && <CountUp start={0} end={100} duration={3} delay={0}   />}+</span>
                 <h6>Days</h6></p>
        </div>
        </div>
        <div className='gradient-text relative w-230 h-180 m-10 shadow-2xl rounded-lg bg-opacity-10 flex justify-center items-center border border-solid border-gray-300 border-t-0 border-l-0 border-b-rose-900 border-r-violet-500 '>
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