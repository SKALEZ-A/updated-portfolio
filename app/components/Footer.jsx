import React from "react";
import Image from "next/image";
import logo from "../../public/images/skalez_logo.png";

const Footer = () => {
  return (
    <footer className="border footer z-10 border-t-[#33353F] ">
      <div className="container p-3 flex justify-between items-center">
        <span className="">
          <Image src={logo} className="cursor-pointer w-28" />
        </span>
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
