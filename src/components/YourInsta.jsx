"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import Insta1 from "../assets/images/insta1.webp";
import Insta2 from "../assets/images/insta2.webp";
import Insta3 from "../assets/images/insta3.webp";
import Insta4 from "../assets/images/insta4.webp";
import Insta5 from "../assets/images/insta5.webp";
import { Button } from "./ui/button";
import { FaInstagram } from "react-icons/fa";

const insta = [
 Insta1, Insta2, Insta3, Insta4, Insta5
];

export default function YourInsta() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  return (
    <div className="bg-gray-100">
      <div className="text-center container mx-auto py-10 px-10 mt-10">
      <h2 className="text-3xl font-semibold font-serif mb-2">
       <span className="font-bold">@</span>Yourinstagram
      </h2>
      <p className="text-xs text-gray-600 mb-6">
        Inspire and let yourself be inspired, from one unique fashion to another.
      </p>

      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full container"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {insta.map((items , index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center gap-5 p-4 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative w-[311px] h-[311px]  rounded-xl  group ">
               <div className=" realative rounded-4xl flex justify-center items-center transition-opacity duration-300 ">
                 <Image
                  src={items}
                  alt={"instaImage" + index}
                  width={311}
                    height={311}
                  className="object-cover px-3 rounded-4xl transition-transform duration-500 group-hover:scale-102"
                />
              <div className="absolute -translate-y-1.5 -translate-x-0.5 opacity-0 group-hover:opacity-100 bg-white rounded-full p-4 transition-all fade-in duration-1000 "><FaInstagram size={20} /></div>
               </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="!opacity-100 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100" />
        <CarouselNext className="!opacity-100 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100" />
      </Carousel>

      <div className="text-center">
        <Button
        className={"px-5 rounded-full"}
        >
            Follow us @milano
        </Button>
      </div>
    </div>
    </div>
  );
}
