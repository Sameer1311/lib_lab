"use client";
import {  useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// 3D Library Model Component
function Library(props) {
  const ref = useRef(null);
  const { scene } = useGLTF("/models/4cf98a40c33b4732a8d99eae346c6412.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.004, 0.005, 0.003]}
      position={[-1, -1, -2]}
      {...props}
    />
  );
}

useGLTF.preload("/models/4cf98a40c33b4732a8d99eae346c6412.glb");

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// About Section
const About = () => {
  return (
    <motion.section
    id="about"
      className="about h-full flex justify-center pb-20 pt-10 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="md:w-[80vw] w-[90vw] text-center">
        <motion.h2
          className="text-5xl font-bold mb-6 md:mb-10"
          variants={itemVariants}
        >
          About Our System
        </motion.h2>

        <motion.p className="text-lg md:text-xl mb-6" variants={itemVariants}>
          One library, all your books — beautifully organized, instantly accessible.
        </motion.p>

        <motion.p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" variants={itemVariants}>
          Our Book Management System is a modern and intuitive platform designed
          to help users manage their book collections with ease. Whether you’re
          a casual reader or a librarian, this system simplifies how you track,
          organize, and interact with your library.
        </motion.p>

        <motion.h1
          className="md:text-4xl text-3xl my-10 font-bold"
          variants={itemVariants}
        >
          Key Features
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left px-4 md:px-12"
          variants={containerVariants}
        >
          {[
            {
              title: "📖 Add & Organize Books",
              desc: "Add books with details like title, author, genre, year, and ISBN. Organize with categories or shelves.",
            },
            {
              title: "🔍 Powerful Search",
              desc: "Search books by title, author, or genre to find exactly what you need.",
            },
            {
              title: "📊 Reading Status Tracking",
              desc: "Mark books as unread, in progress, or completed to keep track of your reading habits.",
            },
            {
              title: "📝 Personal Notes & Reviews",
              desc: "Add your own notes and reviews to remember your thoughts or share with others.",
            },
            {
              title: "📥 Import & Export",
              desc: "Easily import/export your library data for backup or migration.",
            },
            {
              title: "📅 Due Dates & Reminders",
              desc: "Track borrowed books and reading deadlines with smart reminders.",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="w-full h-[80vh] mt-16" variants={itemVariants}>
          <Canvas>
            <ambientLight intensity={0.6} />
            <directionalLight intensity={1} position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <Library />
            </Suspense>
          </Canvas>
        </motion.div>
      <span className="block text-lg md:text-xl mb-2">
  For developer inquiries, collaboration opportunities, or if you have any questions related to our system —
</span>
<span className="block text-lg md:text-xl mb-4">
  we’d love to hear from you! Whether {"you'"}re a user, developer, or partner interested in working together, feel free to reach out.
</span>
  <Link href="/component/Contact">
  <Button>Contact-me</Button>
  </Link>

      </div>
    </motion.section>
  );
};

export default About;
