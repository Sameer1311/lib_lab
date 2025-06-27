"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "../utils/mode";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const {data :session} = useSession() ; 
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutExist, setaboutExist] = useState(false);
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      setaboutExist(true);
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = (()=>{
    signOut({callbackUrl:"/component/Login"})
  })

  return (
    <nav className="border-b border-red-500 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              lib_lab
            </span>
            <Image
              alt="logo"
              src="/images/logo.jpeg"
              width={40}
              height={40}
              className="rounded-full border-2"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/component/Creator"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:underline"
          >
            Creator
          </Link>
          <Link
            href={aboutExist ? "#about" : "/component/About"}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:underline"
          >
            About
          </Link>
          <Link
            href="/component/Contact"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:underline"
          >
            Contact
          </Link>
             {session?.user ? (
            <Button variant="ghost" onClick={handleLogout}>
              {session.user.name}
            </Button>
          ) : (
            <Link href="/component/Login">
              <Button>Login</Button>
            </Link>
          )}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={toggleMenu}
            variant="outline"
            size="icon"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XIcon width={24} height={24} />
            ) : (
              <MenuIcon width={24} height={24} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link
            href="/component/Creator"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:underline"
          >
            Creator
          </Link>
          <Link
            href={aboutExist ? "#about" : "/component/About"}
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:underline"
          >
            About
          </Link>
          <Link
            href="/component/Contact"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:underline"
          >
            Contact
          </Link>
          <div className="py-2">
               {session?.user ? (
            <Button variant="ghost" onClick={handleLogout}>
              {session.user.name}
            </Button>
          ) : (
            <Link href="/component/Login">
              <Button>Login</Button>
            </Link>
          )}
          </div>
          <div className="py-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
