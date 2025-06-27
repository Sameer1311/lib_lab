"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Product_details from "./product_details";

const Cart = ({ set_card, cart, card_Open, total_item }) => {
  const [Order_done, setOrder_done] = useState(false);
  const [Total_cost, setTotal_cost] = useState(0);

  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(cart));
    const cost = cart.reduce((acc, item) => {
      const price = item.saleInfo?.listPrice?.amount || 200;
      return acc + price;
    }, 0);

    setTotal_cost(cost);
    total_item(cart.length);
  }, [cart]);

  const Remove_item = (ele) => {
    set_card((prev) => prev.filter((item) => item.id !== ele.id));
  };

  const Order_ = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Total_cost }),
      });

      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Library Project",
        description: "Book Purchase",
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful!");
          setOrder_done(true);
          set_card([]);
        },
        theme: { color: "#22c55e" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Error during payment", err);
    }
  };

  if (Order_done) return <Product_details />;

  return (
    <div className="fixed z-30 top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white dark:bg-black text-black dark:text-white rounded-2xl w-full max-w-lg h-[90vh] overflow-auto shadow-xl p-4 relative">
        <Button
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white p-2 rounded-full"
          onClick={card_Open}
        >
          <X size={24} />
        </Button>

        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-400">No items in cart.</p>
        ) : (
          cart.map((ele) => {
            const price = ele.saleInfo?.listPrice?.amount || 200;
            return (
              <div
                key={ele.id}
                className="flex gap-4 border-b border-gray-300 dark:border-white py-4"
              >
                {ele.volumeInfo?.imageLinks?.thumbnail && (
                  <Image
                    width={80}
                    height={120}
                    src={ele.volumeInfo.imageLinks.thumbnail}
                    alt={ele.volumeInfo.title || "Book image"}
                    className="rounded-lg object-contain border border-gray-300 dark:border-white"
                  />
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="font-semibold line-clamp-2">
                    {ele.volumeInfo?.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-1">
                    {ele.volumeInfo?.authors?.join(", ") || "Unknown Author"}
                  </p>
                  <div className="flex justify-between mt-2">
                    <span>₹ {price}</span>
                    <span className="text-red-500">{ele.saleInfo.country}</span>
                  </div>
                  <Button
                    onClick={() => Remove_item(ele)}
                    className="mt-2 bg-red-500 hover:bg-red-700 text-white"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })
        )}

        <div className="mt-6 text-center">
          <p className="special_font text-lg font-medium mb-4">
            Total: ₹ {Total_cost.toFixed(2)}
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={card_Open} variant="outline">
              {cart.length > 0 ? "Add more" : "Add items"}
            </Button>
            {cart.length > 0 && (
              <Button
                onClick={Order_}
                className="bg-green-600 hover:bg-green-800 text-white"
              >
                Order All
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
