"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import profile from "../../public/images/profile.jpg";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Solidity</li>
        <li>Hardhat</li>
        <li>React JS/Next</li>
        <li>Ethers JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>LearnWeb3 DAO</li>
        <li>Ophir Institute</li>
        <li>Dapp University</li>
        <li>Alchemy University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Ophir Developer</li>
        <li>Gnosis Chain Advocate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-8 py-6">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image src={profile} className="w-[250px] h-[250px] rounded-2xl" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-sm md:text-md text=[#ADB7BE] lg:text-lg">
            👋I'm [Your Name], a blockchain developer and DeFi enthusiast with a
            knack for building secure smart contracts and Crafting intuitive and
            captivating user interfaces is my forte, ensuring smooth
            interactions with blockchain systems.. I'm passionate about DeFi's
            potential and eager to collaborate with startups and fellow devs to
            shape the future. Let's connect! 🌐
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-5">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
