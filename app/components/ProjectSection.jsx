"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    title: "SkalezInc NFT Minting website",
    description:
      "An Nft minting site that allows minting of SkalezInc Nfts on the goerli network. Fully inspired by LearnWeb3Dao",
    image: "/images/projects/project-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SKALEZ-A/LW3-Nft-collection/",
    previewUrl: "https://skaleznft.vercel.app/",
  },
  {
    id: 2,
    title: "Horizon Portfolio Tracker",
    description:
      "An intuitive dapp to track your Arbitrum blockchain portfolio, including recent transactions and total token holdings.",
    image: "/images/projects/horizon-dapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SKALEZ-A/horizon-swap",
    previewUrl: "https://horizon-swap.vercel.app/",
  },
  {
    id: 3,
    title: "Simple Savings Dapp",
    description:
      "A simple dapp that allows you save in the contract and allows withdrawal anytime",
    image: "/images/projects/project-4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SKALEZ-A/simple-contract",
    previewUrl: "https://simple-contract.vercel.app/",
  },
  {
    id: 4,
    title: "Wallet Dapp",
    description:
      "A dapp for easy fund transfers with an improved, user-friendly UI and transaction tracking.",
    image: "/images/projects/project-2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SKALEZ-A/Web3-Wallet-sample",
    previewUrl: "https://web3-wallet-sample.vercel.app",
  },
  {
    id: 5,
    title: "Avatar Airdrop Protocol",
    description:
      "A comprehensive real-world project that allows users to claim $avatar token with a fee after completing specific tasks, the token gets sent to their wallet, allowing users to also refer other users and get token rewards.",
    image: "/images/projects/avatarproject.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://avatar-project-ochre.vercel.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleChange}
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
