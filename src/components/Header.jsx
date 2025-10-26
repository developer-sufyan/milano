"use client";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  FacebookIcon,
  Icon,
  Instagram,
  LucideFacebook,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Header = () => {
  const icons = [
    {
      name: "facebook",
      url: "https://www.facebook.com",
      Icon: <FaFacebook size={20} />,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com",
      Icon: <FaInstagram size={20} />,
    },
    {
      name: "tik tok",
      url: "https://www.tiktok.com",
      Icon: <FaTiktok size={20} />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com",
      Icon: <FaYoutube size={20} />,
    },
    {
      name: "pinterest",
      url: "https://www.pinterest.com",
      Icon: <FaPinterest size={20} />,
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <header className="flex flex-row items-center justify-between p-4 bg-orange-600 text-white max-h-[25px]">
      <div className="grid grid-cols-3 gap-x-4 w-full items-center">
        <div className="col-span-1 flex flex-row space-x-4">
          <h1 className="text-md font-light text-start">
            Welcome to Milano store
          </h1>
          {icons.map(({ name, url, Icon }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Tooltip>
                <TooltipTrigger asChild>{Icon}</TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex justify-center  space-x-4">
          <div className="lead flex gap-3">
            <Carousel
              opts={{
                loop: true,
                auto: true,
              }}
              plugins={[plugin.current]}
              className="w-full max-w-xs"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="w-70">
                <CarouselItem>
                  <p>Signup for 10% off your first order</p>
                </CarouselItem>
                <CarouselItem>
                  <p>Free shipping on orders over $50</p>
                </CarouselItem>
                <CarouselItem>
                  <p>Exclusive access to new products</p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious
                className={
                  "bg-transparent border-none hover:bg-transparent hover:text-gray-400"
                }
              />
              <CarouselNext
                className={
                  "bg-transparent border-none hover:bg-transparent hover:text-gray-400"
                }
              />
            </Carousel>
          </div>
        </div>
        <div className="col-span-1 flex justify-end space-x-4 gap-3 lead text-sm">
          <Link href="#">Contact Us</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Services</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
