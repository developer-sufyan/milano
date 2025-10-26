"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Design from "../assets/images/DesignImage.webp";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { FaEye, FaHeart, FaLayerGroup, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Spinner } from "./ui/spinner";

export default function DesignForAdventure() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        const filter = res.data.slice(21 , 31);
        setData(filter);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center my-10 container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold font-serif mb-2">
        Design For Adventure
      </h2>
      <p className="text-xs text-gray-600 mb-6">
        Unmatched design — superior performance and customer satisfaction in one.
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Image Sticky */}
        <div className="lg:w-1/2 w-full lg:max-w-[50%] h-[300px] lg:h-[100vh] rounded-2xl overflow-hidden sticky top-10 self-start flex-shrink-0 ">
            <div className="rounded-2xl">
                <Image
              src={Design}
              alt="Design For Adventure"
              className="object-cover w-full h-full p-8 rounded-xl"
              style={{ height: '100%', width: '100%' }}
            />
            </div>
        </div>

        {/* Right Grid Scrollable */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2">
          {loading && <div className="flex justify-center"><Spinner/></div>}
          {error && <p className="text-red-500">Failed to load data.</p>}
          {!loading && !error && data.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 flex flex-col item-center">
              <Card className={"col-span-1 w-[250px] text-center border-none shadow-none"} >
                  <CardContent>
                    <div className="relative group">
                      <img
                        src={item.images[0]}
                        alt=""
                        className="rounded "
                        width={600}
                        height={400}
                      />
                      <div className="flex flex-col gap-2">
                        <Button className={"absolute top-1 right-1 bg-orange-500 p-0 rounded-full shadow-md hover:scale-102 hover:bg-black  transition-all    opacity-100"}>
                            <FaHeart  />
                        </Button>
                         <Button className={"absolute top-11 right-1 bg-orange-500 p-0 rounded-full shadow-md hover:scale-102 hover:bg-black translate-x-10 group-hover:translate-x-0 transition-all duration-1000 ease-out   opacity-0 group-hover:opacity-100"}>
                            <FaLayerGroup />
                        </Button>
                         <Button className={"absolute top-21 right-1 bg-orange-500 p-0 rounded-full shadow-md hover:scale-102 hover:bg-black translate-x-10 group-hover:translate-x-0 transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100"}>
                            <FaEye  />
                        </Button>


                      </div>
                      <div>
                        <Button
                          className="bg-orange-500 text-white py-3 px-8 rounded-full font-semibold text-base
                            cursor-pointer absolute -bottom-4 left-1/2 -translate-x-1/2
                            hover:bg-black opacity-0 group-hover:opacity-100
                            transition-all duration-1000 shadow-md hover:scale-102"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-col flex-wrap justify-center">
                      <h2 className="text-sm font-semibold text-center">
                        {item?.title}
                      </h2>
                      <div className="flex flex-row text-center text-yellow-500 justify-center mt-3">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <FaStar size={15} key={index} />
                        ))}
                        <FaStarHalfAlt size={15} />
                      </div>
                      <p className="text-center text-sm font-semibold mt-2">
                        ${item?.price.toFixed(2)}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
