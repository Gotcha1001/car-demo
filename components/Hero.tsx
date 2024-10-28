"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-white">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <motion.div
          className="hero__image"
          whileHover={{
            scale: 0.8,
            transition: { type: "spring", stiffness: 800 },
          }}
          whileTap={{
            scale: 0.1,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
