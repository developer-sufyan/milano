import BestSelling from '@/components/BestSelling'
import DesignForAdventure from '@/components/DesignForAdventure'
import Footer from '@/components/Footer'
import ShopByCategory from '@/components/ShopByCategory'
import StaticCards from '@/components/StaticCards'
import { TopCarousel } from '@/components/TopCarousel.jsx'
import { Button } from '@/components/ui/button'
import PopularPicks from '@/components/PopularPicks'
import Link from 'next/link'
import React from 'react'
import Banner from '@/components/Banner'
import Video from '@/components/Video'
import YourInsta from '@/components/YourInsta'


export default function page() {
  return (
    <div className=''>
      <TopCarousel/>
      <BestSelling/>
      <StaticCards/>
      <ShopByCategory/>
      <DesignForAdventure/>
      <Video/>
      <PopularPicks/>
      <Banner/>
      <YourInsta/>
      <Footer/>
    </div>
  )
}
