import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[3rem] text-white'>
      <h1 className='font-bold text-4xl md:text-5xl text-white  mx-auto text-center mb-[90px] gradient-text'>Event Tracks</h1>
        <div className='max-w-[800px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='sm:w-full w-[85%] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mx-auto border border-purple-700'>
          <img className='w-20 mx-auto mt-[-3rem]' src='' alt='/'/>
          <h2 className='text-2xl font-bold text-center py-8 text-gray-300'>Innovation</h2>
         
          </div>


          <div className='sm:w-full w-[85%]  shadow-xl bg-gray-800  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mx-auto'>
          <img className='bg-transparent w-20 mx-auto mt-[-3rem]'src='' alt='/'/>
          <h2 className='text-2xl font-bold text-center py-8 text-gray-300'>Technology</h2>

          </div>

            <div className='sm:w-full w-[85%]  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-purple-900 mx-auto'>
            <img className='w-20 mx-auto mt-[-3rem]'src='' alt='/'/>
            <h2 className='text-2xl font-bold text-center py-8 text-gray-300'>Entrepreneurship</h2>
         
            </div>
        </div>

    </div>
  )
}

export default Cards