"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "SkalezInc NFT Minting website",
    description:
      "An Nft minting site that allows minting of SkalezInc Nfts on the goerli network. Fully inspired by LearnWeb3Dao",
    image: "/images/projects/project-1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Horizon Portfolio Tracker",
    description:
      "An intuitive portfolio tracking dapp specifically created to track your portfolio across the arbitrum blockchain, retrieve your recent transactions and accumulating the total amount of tokens you have across all arbitrum dapps",
    image: "/images/projects/horizon-dapp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Simple Savings Dapp",
    description:
      "A simple dapp that allows you save in the contract and allows withdrawal anytime",
    image: "/images/projects/project-4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Wallet Dapp",
    description:
      "A dapp that allows you transfer funds from the website to the designated address with better User Interface, check for your recent transactions made from the dapp in a more engaging and user friendly interface.",
    image: "/images/projects/project-2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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

  return (
    <>
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
      <div className="grid md:grid-cols-3 gap-3 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            imgUrl={project.image}
            key={project.id}
            description={project.description}
            title={project.title}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
