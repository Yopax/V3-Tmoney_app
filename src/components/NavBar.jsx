"use client";
import React from "react";
import ButtonLogin from "./01-LandingPage/Navbar/ButtonLogin";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <>
      <header className="bg-[#0a1a4a] h-[70px] text-white w-full ease-in duration-300 fixed top-0 left-0 z-10">
        <nav className="max-w-[1366px] mx-auto h-[60px] mt-2 flex justify-between items-center px-6">
          <div>
            <Link href="/" onClick={handleSmallerScreenNavigation}>
            <Image
              priority
              src="./logo.svg"
              width={1000}
              height={1000}
              alt="logotmoney"
              className="w-28 h-[60px] max-sm:w-40"
            />
            </Link>
          </div>
          {/* larger screens navigation */}

          <ul className="hidden md:flex uppercase font-semibold text-1xl lg: text-[20px] text-slate-800">
            <li className="mr-4 lg:mr-8 hover: text-lg text-white font-[Objective]">
              <Link href="/">HOME</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover: text-lg text-white font-[Objective]">
              <Link href="/about">PLANS</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover: text-lg text-white font-[Objective]">
              <Link href="/contact">INGLES</Link>
            </li>
          </ul>
          <div className="hidden md:flex">
            <div className="flex">
              <ButtonLogin />
            </div>
          </div>
          <div
            onClick={handleSmallerScreenNavigation}
            className="flex md:hidden"
          >
            {menuIcon ? (
              <AiOutlineClose size={25} className="text-white" />
            ) : (
              <AiOutlineMenu size={25} className="text-white" />
            )}
          </div>
          <div
            className={
              menuIcon
                ? "md:hidden absolute top-[60px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#f39d2f] text-white text-center ease-in duration-300"
                : "md:hidden absolute top-[60px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#f39d2f] text-white text-center ease-in duration-300"
            }
          >
            <div className="w-full">
              <ul className="uppercase font-bold text-2x1">
                <li
                  onClick={handleSmallerScreenNavigation}
                  className="py-2 hover:text-lg text-5xl text-[#0a1a4a] font-[ObjectiveExtraBold] cursor-pointer"
                >
                  <Link href="/">HOME</Link>
                </li>
                <li
                  onClick={handleSmallerScreenNavigation}
                  className="py-2 hover:text-lg text-5xl font-black text-[#0a1a4a] font-[ObjectiveExtraBold] cursor-pointer"
                >
                  <Link href="/about">PLANS</Link>
                </li>
                <li
                  onClick={handleSmallerScreenNavigation}
                  className="py-2 hover:text-lg text-5xl font-black text-[#0a1a4a] font-[ObjectiveExtraBold] cursor-pointer"
                >
                  <Link href="/contact">INGLES</Link>
                </li>
              </ul>
              <div className="flex flex-col justify-center items-center mt-16">
                <Link target="_blank" href="/plans" onClick={handleSmallerScreenNavigation}>
                  <button  className="text-[#f39d2f] text-lg border-2 bg-[#0a1a4a] border-[#0a1a4a] px-6 rounded-lg py-[3px] font-[ObjectiveBold] max-sm:px-[60px] ">
                    LOGIN
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
