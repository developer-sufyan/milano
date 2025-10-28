"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
    const {id} = useParams();

     const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            setError(false);
    
            const res = await axios.get("https://api.escuelajs.co/api/v1/products");
            const filter = res.data.filter((item) => item.id == id);
            console.log("filter wale product ",filter);
            setData(filter);
          } catch (err) {
            setError(true);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, [id]);

  return (
    <>
      {data.map((items)=> {
        return (
          <div className='max-w-6xl mx-auto my-10 flex flex-row gap-10'>
            <div className='flex-1'>
              <Carousel
              opts={
               { loop:true}
              }
              className={"w-full  "}
              >
                <CarouselContent>
                  {
                    items.images.map((image, index) => (
                    <CarouselItem>
                      <img key={index} src={image} alt={items.title} className='rounded-lg' />
                    </CarouselItem>
                    ))
                  }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </div>
            <div className='flex-1 flex-col gap-5 flex  px-5'>
              <h2 className='text-lg font-bold'>{items.title}</h2>
             
              <p className='text-lg'>{items.description}</p>
              <p className='text-lg font-bold'>${items.price}</p>
              <button className='bg-blue-500 text-white py-2 px-4 rounded'>Add to Cart</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

