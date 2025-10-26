import React from "react";
import Image from "next/image";
import logo from "../assets/images/milanowhite.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaMapPin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";

const socialIcons = [
  { name: "Facebook", icon: <FaFacebook size={16} />, url: "#" },
  { name: "Instagram", icon: <FaInstagram size={16} />, url: "#" },
  { name: "TikTok", icon: <FaTiktok size={16} />, url: "#" },
  { name: "YouTube", icon: <FaYoutube size={16} />, url: "#" },
  { name: "Pinterest", icon: <FaPinterest size={16} />, url: "#" },
];

const paymentSvgs = [
  `<svg width="28" height="18" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#fff"/><path d="M7.5 14L9.2 6H11.1L12.8 14H11.1L10.8 12.7H8.5L8.2 14H7.5ZM8.7 11.5H10.6L9.7 7.5L8.7 11.5ZM13.7 14L15.4 6H17.3L19 14H17.3L17 12.7H14.7L14.4 14H13.7ZM14.9 11.5H16.8L15.9 7.5L14.9 11.5ZM20.2 14V6H21.9V14H20.2ZM22.7 14V6H24.4V14H22.7Z" fill="#1A1F71"/></svg>`,
  `<svg width="28" height="18" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#fff"/><circle cx="12" cy="10" r="5" fill="#EB001B"/><circle cx="20" cy="10" r="5" fill="#F79E1B"/><path d="M16 15a5 5 0 0 0 0-10 5 5 0 0 0 0 10Z" fill="#FF5F00"/></svg>`,
  `<svg width="28" height="18" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#fff"/><path d="M10 14L11.2 6H14.5C16.5 6 17.5 7.2 17.2 9.1C17 10.2 16.2 11 15.1 11H12.7L12.2 14H10ZM13.2 9.5H15.1C15.6 9.5 16 9.1 16.1 8.6C16.2 8.1 15.9 7.7 15.4 7.7H13.5L13.2 9.5Z" fill="#003087"/><path d="M18.5 14L19.7 6H23C25 6 26 7.2 25.7 9.1C25.5 10.2 24.7 11 23.6 11H21.2L20.7 14H18.5ZM21.7 9.5H23.6C24.1 9.5 24.5 9.1 24.6 8.6C24.7 8.1 24.4 7.7 23.9 7.7H22L21.7 9.5Z" fill="#009CDE"/></svg>`,
  `<svg width="28" height="18" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#fff"/><rect x="7" y="6" width="18" height="8" rx="2" fill="#2E77BC"/><text x="16" y="13" text-anchor="middle" fill="#fff" font-size="5" font-family="Arial">AMEX</text></svg>`,
  `<svg width="28" height="18" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#fff"/><circle cx="16" cy="10" r="5" fill="#F58220"/><text x="16" y="13" text-anchor="middle" fill="#fff" font-size="5" font-family="Arial">DISC</text></svg>`,
];

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-neutral-100 pt-14 pb-6 px-6  text-[13px] leading-relaxed ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 border-b border-neutral-700 pb-10 p-10">
        {/* Logo and About */}
        <div className="flex-1 min-w-[220px] space-y-3">
          <Image src={logo} width={120} alt="milano logo" />
          <p className="text-xs md:text-[13px] text-neutral-300">
            We only carry designs we believe in ethically and aesthetically – original, authentic pieces that are made to last.<br />
            <a href="#" className="underline font-medium text-orange-400 hover:text-orange-500">Learn more</a>
          </p>
          <div className="text-xs flex flex-col gap-1 mt-3 text-neutral-400">
            <span className="flex items-center gap-2"><FaMapPin /> 2571 Oakridge Ave</span>
            <span className="flex items-center gap-2"><FaPhone /> +1 (973) 435-3638</span>
            <span className="flex items-center gap-2"><FaEnvelope /> info@fashionwomen.com</span>
          </div>
        </div>

        {/* Our Company */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2 text-neutral-200 text-sm uppercase">Our Company</h4>
          <ul className="space-y-1 text-xs text-neutral-400">
            <li><a href="#" className="hover:text-white transition">About us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Store</a></li>
            <li><a href="#" className="hover:text-white transition">Store location</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2 text-neutral-200 text-sm uppercase">Quick Links</h4>
          <ul className="space-y-1 text-xs text-neutral-400">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Sale</a></li>
            <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
            <li><a href="#" className="hover:text-white transition">Wishlist</a></li>
            <li><a href="#" className="hover:text-white transition">Compare</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="font-semibold mb-2 text-neutral-200 text-sm uppercase">Newsletter</h4>
          <p className="text-xs text-neutral-400 mb-3">Subscribe for store updates and discounts.</p>
          <form className="flex mb-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="rounded-l px-3 py-2 text-sm text-white border border-orange-500 bg-neutral-800 focus:outline-none"
            />
            <Button className="bg-orange-500 text-xs rounded-none text-white px-4 py-2 font-medium hover:bg-orange-600 transition">
              Sign Up
            </Button>
          </form>
          <p className="text-[11px] text-neutral-500">
            ***By entering the e-mail you accept the{" "}
            <a href="#" className="font-medium underline">terms and conditions</a> and the{" "}
            <a href="#" className="font-medium underline">privacy policy</a>.
          </p>

          <div className="flex gap-3 mt-4">
            {socialIcons.map(({ name, icon, url }) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-neutral-600 rounded-full p-2 hover:bg-neutral-800 transition"
                  >
                    {icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{name}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 pt-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-[11px] text-neutral-500">
          <span>🇺🇸 United States (USD $)</span>
          <span>© 2025 Milano Store. All rights reserved, Made By Sufyan with ❤️</span>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          {paymentSvgs.map((svg, idx) => (
            <span key={idx} dangerouslySetInnerHTML={{ __html: svg }} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
