"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaGlobe, FaCode  } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiNextdotjs, SiMongodb, SiNodedotjs } from "react-icons/si";
import Image from "next/image";
import Link from "next/link"
const Creator = function () {
  return (
    <div className="min-h-screen px-6 py-12  bg-white text-black dark:bg-black dark:text-white  ">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">👨‍💻 About the Creator</h1>
          <p className="mt-4 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Hi, {"I'm"} Sameer Negi — a passionate Full Stack Developer who loves building clean, modern web applications that solve real-world problems.
          </p>
        </div>

        {/* Profile Card */}
        <Card className=" border-2 border-black dark:border-white shadow-2xl rounded-2xl">
          <CardContent className="p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/images/Sameer.jpg" 
              width={200}
              height={50}
              alt="Creator"
              className="w-40 h-40 rounded-full object-cover border-4 border-black  dark:border-white"
            />
            <div>
              <h2 className="text-3xl font-semibold">Sameer Negi</h2>
              <p className="dark:text-gray-400 mt-2">Full Stack Developer | JavaScript Enthusiast | 3D UI Explorer</p>
              <p className="mt-4 dark:text-gray-300 leading-relaxed">
                With a love for clean UI and powerful backend systems, I created this Book Management System to demonstrate how organization meets technology. 
                When I’m not coding, you’ll find me experimenting with 3D animations, exploring new stacks, or refining UI transitions.
              </p>

              {/* Socials */}
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
                <Link href="https://sameer106.netlify.app"><Button>Visit</Button></Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">🛠 Tech Stack</h2>
          <div className="flex justify-center gap-8 text-4xl dark:text-gray-300">
            <SiReact className="hover:text-cyan-400" />
            <SiTailwindcss className="hover:text-teal-300" />
            <SiNextdotjs className="hover:text-white" />
            <SiNodedotjs className="hover:text-green-500" />
            <SiMongodb className="hover:text-green-400" />
          </div>
        </div>

        {/* Mission */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">🎯 My Mission</h2>
          <p className="dark:text-gray-400 max-w-2xl mx-auto">
            To craft intuitive, scalable applications that enhance user experience and simplify everyday workflows.
            This platform is just one step in that journey — thank you for being a part of it.
          </p>
        </div>

        {/* Quote or fun outro */}
        <div className="text-center italic dark:text-gray-500 text-lg">
          {"Code is like a book — if it's well written, anyone can read it."}
        </div>
      </div>
    </div>
  );
};

export default Creator;
