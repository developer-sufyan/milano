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

import GraphicTees from "../assets/images/GraphicTees.webp";
import OutGear from "../assets/images/OutTheGear.webp";
import ShortsPants from "../assets/images/ShortsPants.webp";
import KnitsBasics from "../assets/images/Knits&Basics.webp";
import Accessories from "../assets/images/Accessories.webp";
import Shirts from "../assets/images/Shirts.webp";

const categories = [
  { name: "Graphics & tees", image: GraphicTees },
  { name: "Out the gear", image: OutGear },
  { name: "Shorts & pants", image: ShortsPants },
  { name: "Knits & basics", image: KnitsBasics },
  { name: "Accessories", image: Accessories },
  { name: "Shirts", image: Shirts },
];

export default function ShopByCategory() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  );

  return (
    <div className="bg-gray-100">
      <div className="text-center container mx-auto py-10 px-10">
      <h2 className="text-3xl font-semibold font-serif mb-2">
        Shop By Category
      </h2>
      <p className="text-xs text-gray-600 mb-6">
        Unmatched design — superior performance and customer satisfaction in one.
      </p>

      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full container"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem
              key={category.name}
              className="flex flex-col items-center justify-center gap-3 p-4 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative w-[280px] h-[380px] overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-md font-medium">{category.name}</h3>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="!opacity-100 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100" />
        <CarouselNext className="!opacity-100 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100" />
      </Carousel>
    </div>
    </div>
  );
}
