"use client";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <div>
      <div className="flex justify-center content-center my-10 flex-col gap-8 h-screen backdrop-blur-xl bg-gradient-to-r from-secondary-9 to-secondary-7 ">
        <div className="mx-auto text-center">
          <p className="text-xl">
            What are you waiting for? Join us and make your life easier.
          </p>
        </div>
        <div className="mx-auto">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-secondary-6 text-primary-0 hover:bg-secondary-4 px-4 py-2 rounded-md"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
