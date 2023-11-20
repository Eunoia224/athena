"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <>
      <hr />
      <div className="mt-8">
        <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1 items-center">
          <Link href={"/"}>
            <div className="flex flex-row content-center md:ml-14">
              <Image
                src={Logo}
                alt="Athena's logo"
                width={40}
                className="mx-auto"
              />
            </div>
          </Link>
          <div className="flex">
            <ul className="mx-auto">
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Link href="#">About Us</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Link href="#">Contact Us</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Link href="#">Developers</Link>
              </motion.li>
            </ul>
          </div>
          <div className="flex">
            <ul className="mx-auto">
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Link href="#">Gallery</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Link href="#">Tools</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Link href="#">Source Code</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <Link href="#">Design</Link>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="flex mt-8">
          <div className="mx-auto text-sm text-primary-2">
            &copy; {year} Designed and Developed by
            <Link
              prefetch
              href={"https://github.com/eunoia224"}
              target="_blank"
              className="text-primary-6 dark:text-primary-1"
            >
              {" "}
              Alazar Michael
            </Link>
            . All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
