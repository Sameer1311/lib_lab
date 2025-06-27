"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../utils/cart";
import Product_details from "../utils/product_details";

const Home__ = () => {
  const [Data, setData] = useState([]);
  const [SelectedBooks, setSelectedBooks] = useState(null);
  const [Cart_Open, setCart_Open] = useState(false);
  const [Card_items, setCard_items] = useState([]);
  const [Total_Items, setTotal_Items] = useState(0);

  const API_KEY = process.env.NEXT_PUBLIC_BOOKS_API_KEY;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=a&maxResults=40&key=${API_KEY}`
      );
      const data = await response.json();
      setData(data.items || []);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("Product");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      setCard_items(parsed);
      setTotal_Items(parsed.length);
    }
    fetchData();
  }, []);

  const Open_Item = (book) => {
    setSelectedBooks((prev) => (prev?.id === book.id ? null : book));
  };

  const Cart_Page = () => {
    setCart_Open((prev) => !prev);
  };

  return (
    <div className="w-full px-4 py-6">
      {/* Header with Cart */}
      <div className="flex items-center justify-around mb-10">
        <h1 className="text-3xl font-bold text-center dark:text-white">
          Explore Books
        </h1>

        <span className="relative inline-block">
          <Button
            className="border-2 border-black dark:border-white p-2"
            onClick={Cart_Page}
          >
            <FaCartPlus className="w-5 h-5" />
          </Button>
          {Total_Items > -1 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {Total_Items}
            </span>
          )}
        </span>
      </div>

      {/* Cart Popup */}
      {Cart_Open && (
        <div
         className="fixed inset-0 z-40 bg-black bg-opacity-60 flex items-center justify-center">
        <Cart
          set_card={(items) => {
            setCard_items(items);
            setTotal_Items(items.length);
          }}
          cart={Card_items}
          card_Open={Cart_Page}
          total_item={setTotal_Items}
        />
        </div>
      )}

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {Data.map((ele) => (
          <div
            key={ele.id}
            className="flex flex-col md:flex-row items-center justify-between space-y-3 transition-all duration-300 p-4 border-b-2 md:border-r-2 border-black dark:border-white"
          >
            {ele.volumeInfo?.imageLinks?.thumbnail && (
              <Image
                width={300}
                height={300}
                src={ele.volumeInfo.imageLinks.thumbnail}
                alt={ele.volumeInfo.title}
                className="rounded-lg object-contain max-h-[240px] border-2 border-black dark:border-white mb-4 hover:scale-105 transition-transform duration-300 w-fit"
              />
            )}

            <div className="w-full text-center flex flex-col items-center justify-between space-y-4">
              <h2 className="text-lg font-semibold dark:text-white line-clamp-2">
                {ele.volumeInfo?.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 mb-2">
                {ele.volumeInfo?.authors?.join(", ") || "Unknown Author"}
              </p>
              <p className="text-center">
                {(ele.volumeInfo.description || "No description available").slice(0, 200) +
                  "...."}
              </p>
              <span className="w-full flex justify-evenly items-center">
                <p>
                  {ele.saleInfo?.listPrice?.amount
                    ? `₹ ${ele.saleInfo.listPrice.amount}`
                    : "₹200"}
                </p>
                <p className="text-red-400">{ele.saleInfo.country}</p>
              </span>
              <Button onClick={() => Open_Item(ele)} className="md:w-2/4 w-full">
                {SelectedBooks?.id === ele.id ? "Hide" : "Show Book"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Product Details Modal */}
      {SelectedBooks && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-60 flex items-center justify-center">
          <Product_details
            book={SelectedBooks}
            onClose={() => setSelectedBooks(null)}
            cart_page={Cart_Page}
            addTOCart={(book) => {
              const updated = [...Card_items, book];
              setCard_items(updated);
              setTotal_Items(updated.length);
              localStorage.setItem("Product", JSON.stringify(updated));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home__;
