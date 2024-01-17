"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import { Input } from "../ui/input";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Menu from "./menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import clsx from "clsx";

const Header = ({ onInputChange }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={clsx(
        "flex z-10 items-center w-full justify-between px-3 py-4 fixed top-0 transition-all duration-300 ease-in",
        isScroll && "bg-gray-100 shadow-lg",
        !isScroll && "bg-white"
      )}
    >
      <Logo className="text-lime-600 cursor-pointer" />
      <div className="md:w-1/3">
        <Input
          placeholder="Search for recipes..."
          className="bg-gray-200 placeholder:text-gray-400"
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex items-center space-x-5">
          <li className="text-lime-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-400 hover:text-lime-600">
            <Link href="/">Explore</Link>
          </li>
          <li className="text-gray-400 hover:text-lime-600">
            <Link href="/">Help</Link>
          </li>
        </ul>
        <Avatar className="hidden md:block ml-6 hover:bg-black">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Sheet>
          <SheetTrigger>
            <Menu className="md:hidden text-lime-600" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center bg-gray-200">
            <Avatar className="text-right mt-3 cursor-pointer">
              <AvatarImage
                className="cursor-pointer"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
            </Avatar>
            <ul className="flex flex-col space-y-5 mt-5 items-center">
              <li className="text-lime-600">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-400 hover:text-lime-600">
                <Link href="/">Explore</Link>
              </li>
              <li className="text-gray-400 hover:text-lime-600">
                <Link href="/">Help</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
// "use client";
// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items
//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "Company" },
//     { id: 3, text: "Resources" },
//     { id: 4, text: "About" },
//     { id: 5, text: "Contact" },
//   ];

//   return (
//     <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
//       {/* Logo */}
//       <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
//             : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
