"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left sm:pr-5 justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hello, I&apos;m Skalez,
            </span>
            a<br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially

                "frontend (reactjs) developer.",
                1000,
                "web3 (solidity) engineer.",
                1000,
                "defi analyst.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE]  lg:text-xl mb-6 sm:text-lg text-base">
            Freelancer providing services for programming, web2 and web3 needs
            in general. Building and learning in the web3 and blockchain
            ecosystem. Looking forward to our collaboration.
          </p>
          <div className="">
            <button className="px-6 py-3 sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              {" "}
              Hire Me
            </button>
            <button className=" sm:w-fit  px-1 py-1 rounded-full bg-transparent hover:bg-slate-700  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mt-3">
              {/* <Link href="/CVPage.jsx"> */}
              <span className="text-white block bg-[#121212] hover:bg-slate-800 rounded-full py-2 px-5  ">
                Download CV{" "}
              </span>
              {/* </Link> */}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar_pfp.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={320}
              height={320}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
