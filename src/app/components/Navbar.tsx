"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#0d0d0d] border-b border-[#33353F]">
      <div className="flex container max-w-screen-xl mx-auto px-4 py-3 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="group">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
