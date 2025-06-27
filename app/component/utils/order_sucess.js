"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const Order_success = () => {
  return (
    <div  className="fixed z-50 flex flex-col items- center justify-center min-h-screen w-[100vw] ">
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 ">
      <CheckCircle className="text-green-600 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        Order Successful!
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link
        href="/component/Home"
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
    </div>
  );
};

export default Order_success
