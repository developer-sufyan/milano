import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import logo from "../assets/images/imgi_90_logo.webp";
import Image from "next/image";
import { icons } from "lucide-react";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaShoppingCart,
  FaTiktok,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function Navbar() {
  const icons = [
   {name: "Search", url: "/", Icon: <FaSearch size={18}  />},
    {name: "Wishlist", url: "/", Icon: <FaHeart size={18} />},
   {name: "User Account", url: "/", Icon: <FaUser size={18} />},
   {name: "Shopping Cart", url: "/", Icon: <FaShoppingCart size={18} />},
  ];
  return (
    <>
      <div className="grid grid-cols-3 items-center sticky top-0 z-10 justify-center w-full h-16 bg-white">
        <div className="col-span-1 items-center justify-center flex">
          <Image src={logo} width={100} alt={"logo"} height={100} />
        </div>

        <div className="col-span-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={"hover:text-orange-600"}>
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to Home Page</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to About Page</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to Product Page</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"hover:text-orange-600"}>
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="product">All Product</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to About Page</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to Product Page</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"hover:text-orange-600"}>
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to Home Page</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to About Page</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to Product Page</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"hover:text-orange-600"}>
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/contact">Contact Us </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to About Page</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to Product Page</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={"hover:text-orange-600"}>
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/about">About Us</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to About Page</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className={"min-w-[400px]"}>
                    <Link href="/">Go to Product Page</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="col-span-1 ">
          <div className="flex flex-row justify-end space-x-4 mr-4">
            {icons.map((icon, index) => (
              <Link
                key={icon.name}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 "
              >
                <Tooltip>
                  <TooltipTrigger asChild>{icon.Icon}</TooltipTrigger>
                  <TooltipContent>
                    <p>{icon.name}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
