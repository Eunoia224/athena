"use client";
import Logo from "@/public/logo.svg";
import { getRandomHexColor, retrieveSession } from "@/utility/utility";
import {
  IconLogout,
  IconMenu, IconMoon, IconPlus,
  IconProgress,
  IconSunHigh,
  IconUser,
  IconX
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  const [userSession, setUserSession] = useState();
  const session = Promise.resolve(retrieveSession());
  useEffect(() => {
    session.then((value: any) => {
      setUserSession(value);
    });
  }, [retrieveSession]);

  const navItemsSession = [
    {
      name: "Projects",
      icon: <IconProgress />,
      link: "/Projects/",
      toolTipId: "projects",
      toolTipContent: "Access your projects",
    },
    {
      name: "Create Project",
      icon: <IconPlus />,
      link: "#",
      toolTipId: "add",
      toolTipContent: "Create a new projects",
    },
  ];
  const navItems = [
    {
      name: "Login",
      link: "/Auth/Login",
      classes: "px-4 rounded-md text-primary-6 dark:text-primary-0",
    },
    {
      name: "Sign up",
      link: "/Auth/Signup",
      classes:
        "bg-secondary-6 px-4 py-1 rounded-md hover:bg-secondary-4 text-primary-0",
    },
  ];
  const navLinksNoSession = navItems.map((item, index) => {
    return (
      <Link href={item.link} key={index}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className={`${item.classes}`}
        >
          {item.name}
        </motion.button>
      </Link>
    );
  });

  const navLinksRenderWithSession = navItemsSession.map((item, index) => {
    return (
      <>
        <Link href={item.link} key={index}>
          <div
            className="flex flex-row gap-2 justify-between cursor-pointer text-primary-0"
            data-tooltip-id={item.toolTipId}
          >
            {" "}
            {item.icon}
          </div>
        </Link>

        <Tooltip
          id={item.toolTipId}
          content={item.toolTipContent}
          variant="light"
        />
      </>
    );
  });

  return (
    <nav>
      <div className="flex justify-between content-center md:gap-8 gap-20">
        {/* TODO add theme toggler here */}
        <div className="mt-2">
          {theme ? (
            <IconSunHigh
              onClick={() => setTheme(false)}
              className="cursor-pointer"
              stroke={1}
            />
          ) : (
            <IconMoon
              onClick={() => setTheme(true)}
              className="cursor-pointer"
              stroke={1}
            />
          )}
        </div>
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex flex-row content-center gap-4 mx-auto">
            <Image src={Logo} alt="Athena's logo" width={60} />
            <span className="text-secondary-5 font-bold text-4xl my-auto">
              Athena
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div>
          <div className="list-none sm:flex hidden justify-end items-center flex-1">
            <div className="flex flex-row gap-8 justify-center mt-2">
              {userSession ? (
                <>
                  <div
                    className={`rounded-full p-2 cursor-pointer `}
                    style={{
                      background: `linear-gradient(to top left, ${getRandomHexColor()}, ${getRandomHexColor()})`,
                    }}
                    onClick={() => setToggleUserMenu(!toggleUserMenu)}
                  >
                    {toggleUserMenu ? <IconX /> : <IconUser />}
                  </div>
                  {toggleUserMenu && (
                    <div className="absolute right-6 mt-12 bg-primary-10 rounded-xl p-5 flex flex-col gap-y-4">
                      {navLinksRenderWithSession}
                      <div
                        className="flex flex-row gap-2 justify-between cursor-pointer text-primary-0"
                        data-tooltip-id="logout"
                        data-tooltip-content="logout"
                      >
                        <IconLogout />
                      </div>
                      <Tooltip id="logout" variant="light" />
                    </div>
                  )}
                </>
              ) : (
                <>{navLinksNoSession}</>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle && userSession ? (
            <IconX
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer"
            />
          ) : (
            <IconMenu
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer"
            />
          )}
          {/* TODO add a way to have the  user avatar instead of the icons when logged in*/}

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 rounded-xl sidebar mr-2`}
          >
            <div className="list-none flex justify-end items-start flex-1  flex-col">
              <div className="flex flex-col gap-8 justify-center mt-2">
                {userSession ? (
                  <>
                    <div className="absolute right-2 top-1 rounded-xl p-5 flex flex-col bg-primary-10 gap-y-4">
                      {navLinksRenderWithSession}
                      <div
                        className="flex flex-row gap-2 justify-between cursor-pointer text-primary-0"
                        data-tooltip-id="logout"
                        data-tooltip-content="logout"
                      >
                        <IconLogout />
                      </div>
                      <Tooltip id="logout" variant="light" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-6 bg-primary-10">{navLinksNoSession}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
