import React from 'react'
import { Button } from './ui/button'

export default function Video() {
  return (
    <div>
        <div className='flex flex-row justify-center items-center  my-20'>
           <div className='bg-[#333333] w-full h-[500px] flex-1/2  justify-start ps-10 items-center  flex'>
               <div className='flex flex-col gap-4'>
                 <p className='text-[12px] uppercase text-white '>Feel the summer energy</p>
                <h2 className='capitalize text-5xl leading-[60px] font-bold text-white '>rides the wave in style</h2>
                <span className='text-[14px] text-gray-200 leading-relaxed'>discover vibrant swimwear and beach essentials desgined for a sun- <br/>soaked adventures and unforgettable moments by the sea</span>
                <Button className='bg-orange-500 rounded-2xl text-white text-xs  hover:text-white px-6 w-[120px]'>Shop Now</Button>
               </div>
           </div> 
       <div className='bg-gray-600 w-full h-[500px] flex-1/2'>
    <video
      className="w-full h-[500px] object-cover "
      src="/beach.mp4"
      autoPlay
      muted
      loop
      playsInline
    //   controls
    >
      Your browser does not support the video tag.
    </video>
        <p className='text-[12px] uppercase text-white text-center'>Feel the summer energy</p>
       </div>


        </div>

    </div>
  )
}

