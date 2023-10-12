import React from "react";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          Im currently looking for new opportunities, my inbox is always open.
          Whether you have a question or you just want to say hi, I'll try my
          best to get back to you.
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="github.com">Github</Link>
          <Link href="linkedin.com">LinkedIn</Link>
        </div>
      </div>
      <div className="">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg clock w-full p-2.5"
              type="email"
              placeholder="hello.skalez@gmail.com"
              id="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block  text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg clock w-full p-2.5"
              type="email"
              placeholder=""
              id="subject"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block  text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg clock w-full p-2.5 mb-3"
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
