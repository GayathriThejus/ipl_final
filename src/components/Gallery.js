import React from 'react';
import ksum_img2 from '../assets/images/ksum_img2.png';
import ksum_img3 from '../assets/images/ksum_img3.png';
import ksum_img4 from '../assets/images/ksum_img4.png';
import ksum_img5 from '../assets/images/ksum_img5.png'; // Import additional images
import ksum_img6 from '../assets/images/ksum_img6.png'; // Import additional images
import ksum_img7 from '../assets/images/ksum_img7.png'; // Import additional images
import '../components/Gallery.css';
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'

function Gallery() {
  return (
    <div className='mx-auto'>
       <motion.div 
        variants={fadeIn("up",0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:true,amount:0.7}}>
      <div className='marquee  rounded-lg w-[85%] flex items-center mx-auto justify-center relative scrollbar-hide'>
        <div className='track'>
        <div className='content flex mx-4 relative '>
            <img src={ksum_img2} className='w-[500px] h-[250px] '/>
            <img src={ksum_img3} className='w-[500px] h-[250px]  '/>
            <img src={ksum_img4} className='w-[500px] h-[250px] '/>
            <img src={ksum_img5} className='w-[500px] h-[250px] '/>
            <img src={ksum_img6} className='w-[500px] h-[250px] '/>
            <img src={ksum_img7} className='w-[500px] h-[250px] '/>
        </div>
        </div>

      </div></motion.div>
      
    </div>
  );
}

export default Gallery;
