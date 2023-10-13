import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay  hidden items-center justify-center top-0 absolute left-0 w-full h-full bg-[#181818] bg-opacity-0  group-hover:flex group-hover:bg-opacity-80 transition-all duration-500  ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 absolute cursor-pointer hover:white text-[#ADB7BE] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 absolute cursor-pointer hover:white text-[#ADB7BE] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#18181880] py-6 px-4 ">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ABD7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
