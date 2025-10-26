import Image from 'next/image'
import React from 'react'
import Card1 from '../assets/images/card1.webp'
import Card2 from '../assets/images/card2.webp'
export default function StaticCards() {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center mt-25 gap-8 mb-10 container mx-auto px-8 overflow-hidden py-3'>
            {/* Card 1 */}
            <div className='flex flex-row gap-4 items-center'>
                <div className="w-[296.56px] h-[395.41px] overflow-hidden rounded-lg shadow-lg group relative flex-shrink-0">
                    <Image 
                        src={Card1} 
                        alt="Static Image 1" 
                        width={296.56} 
                        height={395.41} 
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold mb-4 '>Coastal Classics</h2>
                    <p className='text-gray-600 mb-4 text-[12px]'>Breezy shirts made for barefoot walks <br /> and salty air. Simple, effortless, and  always in style.</p>
                    <a href="#" className='text-sm underline font-bold'>Shop now </a>
                </div>
            </div>
            {/* Card 2 */}
            <div className='flex flex-row gap-4 items-center'>
                <div className="w-[296.56px] h-[395.41px] overflow-hidden rounded-lg shadow-lg group relative flex-shrink-0">
                    <Image 
                        src={Card2} 
                        alt="Static Image 2" 
                        width={296.56} 
                        height={395.41} 
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" 
                    />
                </div>
                <div>
                    <h2 className='text-3xl font-bold mb-4 '>Statement Tees</h2>
                    <p className='text-gray-600 mb-4 text-[12px]'>Make waves with bold back prints and beach-ready comfort. Perfect for laid-back days by the ocean.</p>
                    <a href="#" className='text-sm underline font-bold'>Shop now </a>
                </div>
            </div>
        </div>
    </>
  )
}
