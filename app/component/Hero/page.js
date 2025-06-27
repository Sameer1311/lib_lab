"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="w-[100vw] h-[80vh] flex flex-col items-center justify-center text-center px-4  ">
      <div className="flex flex-col items-center justify-center max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold">Your Library, All in One Place</h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 1
          }}
          className="text-xl space-y-2"
        >
          Effortlessly manage your personal collection of books, board games, movies, music, and video games — all from one easy-to-use platform. Track your inventory, organize by genre or category, and never lose sight of what you love again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
        <Link href="component/Home">
          <Button className="relative w-fit px-6 py-2 overflow-hidden  border-2 dark:border-white border-black group">
  <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
  <span className="relative z-10 font-bold">Explore Now</span>
</Button>
  </Link>
        </motion.div>
      </div>
    </div>
    
  );
};

export default Hero;
