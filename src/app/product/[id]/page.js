"use client"
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
    <div className='max-w-7xl mx-auto my-10'>
        {data.map((item) => (
            <div key={item.id} className='flex gap-10'>
                <img src={item.images[0]} alt={item.title} className='w-1/2' />
                <div className='flex flex-col'>
                    <h2 className='text-2xl font-bold'>{item.title}</h2>
                    <p className='text-gray-600'>{item.description}</p>
                    <p className='text-lg font-semibold'>${item.price}</p>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

