import React from 'react'
import img1 from '../assets/images/ksum_img2.png'
import img2 from '../assets/images/ksum_img3.png'
import img3 from '../assets/images/ksum_img4.png'
import img4 from '../assets/images/ksum_img5.png'
import img5 from '../assets/images/ksum_img6.png'
import img6 from '../assets/images/ksum_img7.png'
import { Carousel } from "@material-tailwind/react";
import '../components/Events.css'
const Events = () => {
  return (
    
    <div className='w-[95%] mx-auto py-16 px-4 border-top rounded-2xl mt-[116px]'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
        <div className='w-[500px] bg-transparent mb-6 mx-auto'>
            <h1 className='font-bold text-4xl md:text-5xl gradient-text py-3'>Our Events</h1>
            <p className='text-gray-600 text-md md:text-[20px]'>Lorem Ipsum is a generative dummy text for the purpose of creating raw and gnenxh jrbvj hbvbgb vx hxjvjvr.</p>
        </div>
       
        <div className='flex flex-row  sm:py-4 overflow-hidden scrollbar-hide gap-x-3 max-w-[500px]'>
        <Carousel className="rounded-xl">
      <img
        src={img1}
        alt="image 1"
        className="className='w-full h-full  object-cover rounded-bl-3xl rounded-tr-3xl"
      />
      <img
        src={img2}
        alt="image 1"
        className="className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl"
      />
      <img
        src={img3}
        alt="image 1"
        className="className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl"
      />
      <img
        src={img4}
        alt="image 1"
        className="className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl"
      />
      <img
        src={img5}
        alt="image 1"
        className="className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl"
      />
     
    </Carousel>
        {/* <img src={img1} alt='/' className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl'/>
           <img src={img2} alt='/' className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl'/>
           <img src={img3} alt='/' className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl '/>
           <img src={img4} alt='/' className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl'/>
           <img src={img5} alt='/' className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl '/>
           <img src={img6} alt='/' className='w-[350px] h-[300px] object-cover rounded-bl-3xl rounded-tr-3xl'/>
             */}
      
        </div>
    </div>

</div>
)
}


export default Events