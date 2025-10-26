import React from 'react';
import { Button } from './ui/button';


export default function Banner() {
  return (
    <>
       <div className="bg-[url('/banner.webp')] bg-cover bg-center h-[460px] w-[1370px] container bg-black mt-10  mx-auto relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="mt-2 text-[12px] mb-3 font-bold uppercase text-white">Authentic Connections</p>
          <h2 className="text-4xl font-bold text-white">Share Stories, Build Community</h2>
          <Button className="mt-4 bg-white rounded-2xl text-black text-xs  hover:text-white px-6">Start Now</Button>
        </div>
      </div>
    </>
  )
}
