"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/skalez_logo.png";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#0a0a0a] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-0">
        <Link href={"/"} className=" text-white font-semibold">
          <Image src={logo} className="w-28 cursor-pointer" />
        </Link>
        {/* ========== for mobile menu =========== */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text--white"
            >
              <Bars3Icon className="x-5 w-5 rounded-lg" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text--white"
            >
              <XMarkIcon className="x-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block w-auto" id="navbar">
          <ul className="flex p-4 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
