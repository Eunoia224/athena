"use client";
import { loginUser } from "@/utility/utility";
import { IconBrandGoogle, IconEye, IconEyeClosed } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-0 dark:bg-primary-10 p-5 my-4 ">
        <div className="flex flex-col">
          <span className="block mx-auto font-bold text-2xl">Login</span>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="border border-primary-10 dark:border-primary-0 flex flex-row gap-8 p-2 my-6 justify-center items-center rounded-sm mx-auto"
          >
            <IconBrandGoogle /> <span>Login with Google</span>
          </motion.button>
          <div className="form-container p-4 flex flex-col">
            <label htmlFor="email">
              <span className="block text-lg mb-2">Email*</span>
              <input
                type="text"
                placeholder="Your Email"
                id="email"
                className="p-2 w-full text-primary-10 rounded-sm mb-4 focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </label>
            {/* put errors here */}
            {/* <span className=" text-error-0 block text-sm">error</span> */}
            <label htmlFor="password">
              <span className="block text-lg mb-2">Password*</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                id="password"
                className="p-2 w-full text-primary-10 rounded-sm mb-4 focus:outline-none focus:border-secondary-6 focus:ring-2 focus:ring-secondary-6"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <div className="-mt-12 text-primary-10 dark:text-primary-0 flex mr-5 justify-end">
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
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-secondary-6 w-full text-primary-0 p-2 my-6 rounded-sm hover:bg-secondary-4"
              onClick={() => loginUser(user)}
            >
              Login
            </motion.button>
            <div className="mx-auto text-secondary-6">
              Forgot your password?
            </div>
            <Link href="/Auth/Signup" className="mx-auto">
              <div className="mx-auto text-secondary-6">
                Not a member yet? Join Us
              </div>
            </Link>
            * Required fields
          </div>
        </div>
        <div className="h-full w-full bg-gradient-to-r from-secondary-9 to-secondary-4 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Login;
