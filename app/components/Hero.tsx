"use client";
import Image from "next/image";
import React from "react";
import Athena from "@/public/logo.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main>
      <div className="flex justify-center content-center my-10 flex-col gap-8">
        <Image
          src={Athena}
          alt="Athena's logo"
          width={300}
          className="mx-auto"
        />

        <div className="mx-auto text-center">
          <p className="text-xl">
            Athena, is the one stop solution to log and track any issue with
            your projects and help you organize everything with ease.
          </p>
        </div>
        <div className="mx-auto">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-primary-0 bg-secondary-6 px-4 py-2 rounded-md"
          >
            Get Started
          </motion.button>
        </div>
      </div>

      <hr className="bg-primary-10" />
    </main>
  );
};

export default Hero;
