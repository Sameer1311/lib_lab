"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
const Product_details = ({ book, onClose ,addTOCart, cart_page }) => {

  const [Add_to_Cart, setAdd_to_Cart] = useState([])
  return (
    <div className="z-10 top-0 left-0 w-full h-[90vh] bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-xl relative text-center">
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 text-black dark:text-white hover:text-red-500 text-lg"
        >          ✕
        </Button>
        <div className="flex items-center justify-between flex-col">
        <h3 className="text-xl font-bold dark:text-white mb-2">
          {book.volumeInfo.title}
        </h3>
            {book.volumeInfo?.imageLinks?.thumbnail && (
                      <Image
                        width={300}
                        height={300}
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                        className="rounded-lg object-contain max-h-[240px] border-2 border-black dark:border-white mb-4 hover:scale-105 transition-transform duration-300 w-fit"
                      />
                    )}
        <p className="text-sm dark:text-gray-400">
          {(book.volumeInfo.description || "No description available").slice(0,300)+"...."}
        </p>
        <span className="flex items-center justify-between my-5 w-full">
             <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 mb-2 font-bold">
                {book.volumeInfo?.authors?.join(", ") || "Unknown Author"}
              </p>
                <p>
                  {book.saleInfo?.listPrice?.amount
                    ? `₹ ${book.saleInfo.listPrice.amount}`
                    : "₹200"}
                </p>
        </span>
        <Button onClick={()=>{addTOCart(book) ; cart_page()}}  className="w-full">Add to Card</Button>
        </div>
      </div>
    </div>
  );
};
export default Product_details
