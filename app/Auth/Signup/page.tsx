"use client";
import { createNewUser } from "@/utility/utility";
import { IconBrandGoogle, IconEye, IconEyeClosed } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-0 dark:bg-primary-10 p-5 my-4">
        <div className="h-full w-full bg-gradient-to-r from-secondary-4 to-secondary-9 rounded-xl"></div>
        <div className="flex flex-col">
          <span className="block mx-auto font-bold text-2xl">Sign up</span>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-primary-10 dark:border-primary-0 flex flex-row gap-8 p-2 my-8 justify-center items-center rounded-sm mx-auto"
          >
            <IconBrandGoogle /> <span>Sign up with Google</span>
          </motion.button>
          <div className="form-container p-4 flex flex-col">
            <label htmlFor="firstName">
              <span className="block text-lg mb-2">First Name*</span>
              <input
                type="text"
                placeholder="John"
                id="firstName"
                className="p-2 w-full text-primary-10 dark:text-primary-0 rounded-sm mb-4 focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </label>
            <label htmlFor="lastName">
              <span className="block text-lg mb-2">Last Name*</span>
              <input
                type="text"
                placeholder="Doe"
                id="lastName"
                className="p-2 w-full text-primary-10 dark:text-primary-0 rounded-sm mb-4 focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </label>
            <label htmlFor="email">
              <span className="block text-lg mb-2">Email*</span>
              <input
                type="text"
                placeholder="Your Email"
                id="email"
                className="p-2 w-full text-primary-10 dark:text-primary-0 rounded-sm mb-4 focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </label>
            {/* put errors here */}
            {/* <span className=" text-error-0 block text-sm">error</span> */}
            <label htmlFor="username">
              <span className="block text-lg mb-2">Username*</span>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="p-2 w-full text-primary-10 dark:text-primary-0 rounded-sm mb-4 focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </label>
            <label>
              <span className="block text-lg mb-2">Password*</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                id="password"
                className="p-2 w-full text-primary-10 dark:text-primary-0 rounded-sm focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <div className="-mt-8 text-primary-10 dark:text-primary-0 flex mr-5 justify-end">
                {showPassword ? (
                  <IconEye
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IconEyeClosed
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </label>
            <label htmlFor="repeat" className="mt-6">
              <span className="block text-lg mb-2">Repeat Password*</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Repeat Your Password"
                id="repeat"
                className="p-2 w-full text-primary-10 dark:text-primary-0 rounded-sm mb-4 focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
              />
            </label>
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-secondary-6 w-full text-primary-0 p-2 my-6 rounded-sm hover:bg-secondary-4"
              onClick={() => createNewUser(user)}
            >
              Sign up
            </motion.button>
            <Link href="/Auth/Login" className="mx-auto">
              <div className="mx-auto text-secondary-6">
                Already a member? Login here
              </div>
            </Link>
            * Required fields
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
