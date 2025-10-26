"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "./ui/spinner";
import { Card, CardContent, CardFooter } from "./ui/card";
import {
  FaEye,
  FaHeart,
  FaLayerGroup,
  FaStar,
 
  FaStarHalfAlt,
} from "react-icons/fa";
import { Button } from "./ui/button";

export default function ProductAll() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setData(res.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="justify-center items-center">
        <Spinner />
      </div>
    );

  if (error) return <div className="text-red-700">Error fetching data</div>;

  return (
    <>
      <div className="text-center container mx-auto ">
        <h2 className="text-3xl  text-center font-semibold font-serif ">All Products</h2>
        <span className="text-xs leading-relaxed text-gray-600">
          Unmatched design—superior performance and customer satisfaction in one
        </span>
      </div>
      <div className="w-full mt-5 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {data.map((items) => (
            <Card className={"col-span-1 w-full text-center border-none shadow-none"} key={items.id}>
              <CardContent>
                <div className="relative group">
                  <img
                    src={items.images[0]}
                    alt=""
                    className="rounded w-full h-56 object-cover"
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
                    {items?.title}
                  </h2>
                  <div className="flex flex-row text-center text-yellow-500 justify-center mt-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <FaStar size={15} key={index} />
                    ))}
                    <FaStarHalfAlt size={15} />
                  </div>
                  <p className="text-center text-sm font-semibold mt-2">
                    ${items?.price.toFixed(2)}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
