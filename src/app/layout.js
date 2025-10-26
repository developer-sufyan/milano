export const metadata = {
  title: "Milano - Your Fashion Destination",
  description: "Shop the latest in fashion at Milano.",
};
import {DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href={fav} type="image/x-icon" />
      </head> */}
      <body
        className={`${dmSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <Navbar/>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
