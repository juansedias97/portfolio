import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    console.log(router.asPath);
    if (
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/property" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 150 ? setShadow(true) : setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? `fixed w-full h-20 shadow-lg z-[100] bg-[${navBg}] z-11`
          : `fixed w-full h-20 z-[100] bg-[${navBg}] z-11`
      }
    >
      <div className="flex justify-start lg:justify-center items-center w-full h-full px-4">
        <div>
          <ul style={{ color: `${linkColor}` }} className={`hidden lg:flex`}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={toggleNav} className="lg:hidden ">
            <AiOutlineMenu
              size={25}
              className="cursor-pointer"
              style={{ color: `${linkColor}` }}
            />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed  left-0 top-0 w-[75%] sm:w-[60%] md:w-[50%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 flex flex-col justify-between"
              : "fixed  left-[-100%] top-0 h-screen p-10 ease-in duration-500 flex flex-col justify-between"
          }
        >
          <div>
            <div className="flex justify-end items-center w-full">
              <div
                onClick={toggleNav}
                className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-10 pb-2">
              <p className="w-[85%] md:w-[90%] font-bold">
                Let's Build Better Things Together
              </p>
            </div>
            <div>
              <ul className="uppercase">
                <Link href="/" on>
                  <li onClick={toggleNav} className="ml-0 py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={toggleNav} className="ml-0 py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={toggleNav} className="ml-0 py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={toggleNav} className="ml-0 py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={toggleNav} className="ml-0 py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let's Connect
            </p>
            <div className="flex justify-between my-4 sm:w-[75%] md:w-[60%] lg:w-[50%]">
              <div className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
