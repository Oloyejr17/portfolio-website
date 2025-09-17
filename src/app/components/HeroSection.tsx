"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16">
      <div className="container mx-auto max-w-screen-lg px-4 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 text-center lg:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-snug">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Oloye", 1000, "Web Developer.", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Transforming concepts into scalable, pixel-perfect interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/#contact"
              className="px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-full sm:w-auto"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1s6qPaPFXUEJXrDnP_OiIzqsO5wHTbIlc/view"
              target="_blank"
              className="px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-full sm:w-auto"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] aspect-square rounded-full bg-[#181818] overflow-hidden">
            <Image
              src="/images/HeroCartoon.png"
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
