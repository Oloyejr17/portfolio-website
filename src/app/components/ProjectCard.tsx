import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  gitUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  gitUrl,
}) => {
  const isClickable = gitUrl && gitUrl !== "/";

  const CardContent = () => (
    <div className="rounded-xl overflow-hidden bg-[#181818] flex flex-col h-full hover:scale-105 transition-transform duration-300 relative">
      {/* Image */}
      <div
        className="relative h-48 sm:h-56 md:h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {!isClickable && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
            Coming Soon
          </span>
        )}
      </div>

      {/* Text */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h5 className="text-lg sm:text-xl font-semibold text-white mb-2">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm sm:text-base flex-1">
          {description}
        </p>
      </div>
    </div>
  );

  return isClickable ? (
    <a href={gitUrl} target="_blank" rel="noopener noreferrer">
      <CardContent />
    </a>
  ) : (
    <CardContent />
  );
};

export default ProjectCard;
