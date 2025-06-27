import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link"
import { FaGithub, FaLinkedin, FaGlobe, FaCode  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-t-2  rounded-md py-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {/* Main */}
        <div className="flex flex-col items-center  text-center  space-y-2">
          <h1 className="md:text-3xl text-2xl font-semibold text-center">
            Ready to elevate your book reading experience?
          </h1>
          <span className="text-gray-600 text-center flex items-center justify-center space-x-3 ">
            <Link href="/"><p className="hover:cursor-pointer font-bold md:text-3xl text-2xl ">Lib_lab : </p></Link>
            <p className="font-bold">Fixing your library</p>
          </span>
        </div>
        {/* Links & Actions */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex space-x-3 mb-4 md:mb-0">
            <Link href="/component/Login"><Button>Sign up</Button></Link>
            <Link href="https://sameer106.netlify.app"><Button>Visit</Button></Link>
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2 items-center">
              <Link href="/component/About"><span className="hover:cursor-pointer  font-medium">About</span></Link>
              <Link href="/"><span className="hover:cursor-pointer  font-medium">Home</span></Link>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <Link href="/component/Creator"><span className="font-medium">Creator</span></Link>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <span className="font-medium">{"Let's chat"}</span>
              <span className="text-gray-500">Lib_lab</span>
                 <div className="flex gap-4 mt-6 items-center ">
                <Link href="https://github.com/Sameer1311" target="_blank" rel="noreferrer">
                  <FaGithub className="w-6 h-6 dark:hover:text-gray-300" />
                </Link>
                <Link href="https://linkedin.com/in/sameer-negi" target="_blank" rel="noreferrer">
                  <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
                </Link>
                <Link href="https://sameer106.netlify.app" target="_blank" rel="noreferrer">
                  <FaGlobe className="w-6 h-6 hover:text-green-400" />
                </Link>
                <Link href="https://leetcode.com/u/Codesameer" target="_blank" rel="noreferrer">
                  <FaCode className="w-6 h-6 hover:text-yellow-400" />
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
