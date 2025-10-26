"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imageOne from "../assets/images/men_s1.webp";
import imageTwo from "@/assets/images/men_s2.webp";
import imageThree from "@/assets/images/sur_s1.webp";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function TopCarousel() {
  const images = [
    imageOne,
    imageTwo,
    // imageThree
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="w-full flex items-center justify-between container mx-auto ">
        <Carousel
          opts={{
            loop: true,
            auto: true,
          }}
          plugins={[plugin.current]}
          className=" h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] rounded-lg"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className={"md:basis-1/1 lg:basis-1/1"}>
                <Image
                  className="object-cover  rounded-lg"
                  src={image}
                  alt="My Photo"
                  width={"100%"}
                  height={"100%"}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-1 z-10 flex items-center justify-center w-10 h-10 bg-transparent text-white rounded-full shadow-md" />
          <CarouselNext className="absolute right-1 z-10 flex items-center justify-center w-10 h-10 bg-transparent text-white rounded-full shadow-md" />
        </Carousel>
      </div>
    </>
  );
}
