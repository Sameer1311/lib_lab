import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
    <div className="hidden md:flex items-center justify-center w-fit h-full  mr-4">
        <Image
            alt="logo"
            src="/images/logo.jpeg"
            width={40}
            height={40}
            className="rounded-full border-2 "
        />
    </div>
      <div className="md:w-[80vw] w-[100vw] h-full flex md:flex-row flex-col justify-between space-y-10 p-2">
        <div className="flex flex-col items-center justify-around border-l-2 border-r-2 border-b-2 border-black dark:border-white shadow h-full">
          <h1 className="md:text-[5rem] text-[3rem] font-bold  text-center">{"Let's"} get in touch </h1>
          <p className="md:text-3xl text-xl text-center">{"Don't"} be afraid to say hello with us </p>
          <div className="flex flex-col space-y-2">
            <span className="dark:text-gray-500 text-gray-400">Phone</span>
            <b className="special_font">+919058420228</b>
            <span className="dark:text-gray-500 text-gray-500">Email</span>
            <b className="special_font">negisameer72@gmail.com</b>

          </div>

          {/* left */}
        </div>
        <div className="flex flex-col items-center justify-center  text-center">
          <p className="md:text-2xl text-xl  " >
            Great {"we're"} excited to hear from you and {"let's"} start
            something special together contact us for any inquiry
          </p>
          <Link href="/component/Creator"><Button className="border-2 border-black dark:border-white mt-3">For more</Button></Link>
          {/* Right  */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
{
  /* https://in.pinterest.com/pin/60587557482824484/ */
}
