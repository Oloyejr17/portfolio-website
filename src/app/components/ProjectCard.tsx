import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#181818] flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-64 group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            href={gitUrl}
            className="h-12 w-12 sm:h-14 sm:w-14 mr-2 border-2 rounded-full flex items-center justify-center border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-6 w-6 sm:h-8 sm:w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 sm:h-14 sm:w-14 border-2 rounded-full flex items-center justify-center border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-[#ADB7BE] group-hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Text */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h5 className="text-lg sm:text-xl font-semibold text-white mb-2">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm sm:text-base flex-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
