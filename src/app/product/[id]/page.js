"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {
    const {id} = useParams();

     const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
      const [selectedSize, setSelectedSize] = useState('');
      const [quantity, setQuantity] = useState(1);
    
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

      const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="min-h-screen bg-white">
      {data.map((items)=> {
        return (
          <div key={items.id} className='max-w-6xl mx-auto py-6 px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Image Section */}
              <div className='space-y-4'>
                <Carousel
                  opts={{ loop: true }}
                  className="w-full"
                >
                  <CarouselContent>
                    {items.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${items.title} ${index + 1}`} 
                            className='w-full h-full object-cover' 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                
                {/* Thumbnail Images */}
                <div className="flex gap-2 justify-center">
                  {items.images.slice(0, 4).map((image, index) => (
                    <div key={index} className="w-16 h-16 bg-gray-100 rounded border overflow-hidden cursor-pointer hover:ring-2 hover:ring-gray-300 transition-all">
                      <img src={image} alt={`${items.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details Section */}
              <div className='space-y-6'>
                {/* Product Title */}
                <div className="space-y-2">
                  <h1 className='text-2xl font-bold text-gray-900'>Bucktown Valley Short</h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-sm text-gray-600">(189 reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className='text-3xl font-bold text-gray-900'>${items.price}.00</span>
                  </div>
                  <p className="text-sm text-gray-600">Tax included. Shipping calculated at checkout.</p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    Our premium outdoor shorts are designed for adventure and comfort. Made with durable, 
                    quick-dry fabric that moves with you on every trail and journey.
                  </p>
                </div>

                {/* Size Selection */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">Size</h3>
                    <button className="text-sm text-orange-600 underline">Size guide</button>
                  </div>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        className="w-12 h-10"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-900">Quantity</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border rounded">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="h-10 w-10 p-0 hover:bg-orange-400"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 h-10 text-center border-0 focus-visible:ring-0"
                        min="1"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="h-10 w-10 p-0"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full h-12 text-base font-medium bg-orange-600 hover:bg-orange-500">
                    Add to cart
                  </Button>
                  <Button variant="outline" className="w-full h-12 text-base">
                    Buy it now
                  </Button>
                </div>

                {/* Product Features */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="w-4 h-4" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RotateCcw className="w-4 h-4" />
                    <span>Free returns within 30 days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Information Tabs */}
            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="description" className="border-b">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Description
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6">
                    <div className="space-y-3">
                      <p>
                        The Bucktown Valley Short is crafted from premium outdoor fabric designed for 
                        ultimate comfort and durability. Whether you're hiking mountain trails or 
                        exploring urban landscapes, these shorts move with you.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Quick-dry fabric technology</li>
                        <li>UPF 50+ sun protection</li>
                        <li>Multiple secure pockets</li>
                        <li>Reinforced seams for durability</li>
                        <li>Machine washable</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping" className="border-b">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Shipping Information
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6">
                    <div className="space-y-2 text-sm">
                      <p><strong>Free Standard Shipping:</strong> 5-7 business days on orders over $50</p>
                      <p><strong>Express Shipping:</strong> 2-3 business days for $9.99</p>
                      <p><strong>International:</strong> 7-14 business days, rates calculated at checkout</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="returns" className="border-b">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    Returns & Exchanges
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6">
                    <div className="space-y-2 text-sm">
                      <p>We offer free returns within 30 days of purchase.</p>
                      <p>Items must be unworn, unwashed, and in original condition with tags attached.</p>
                      <p>Exchanges are available for different sizes or colors.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Customer Reviews Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Customer Reviews</h2>
                <Button variant="outline" size="sm">
                  Write a Review
                </Button>
              </div>
              
              <div className="grid gap-4">
                {[
                  { name: "Alex K.", rating: 5, date: "2 weeks ago", review: "Perfect fit and great quality. Love the quick-dry fabric!" },
                  { name: "Sarah M.", rating: 4, date: "1 month ago", review: "Comfortable and durable. Great for hiking and everyday wear." },
                  { name: "Mike R.", rating: 5, date: "3 weeks ago", review: "These shorts are amazing! Highly recommend for outdoor activities." }
                ].map((review, index) => (
                  <Card key={index} className="border">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{review.name}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-700">{review.review}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}