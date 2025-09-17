"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Dashboard",
    description: "A responsive dashboard built with Next.js and modern UI.",
    image: "/images/projects/dashboard1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Oloyejr17/nextjs-dashboard-with-extensive-features.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Banking Web App",
    description: "Secure banking app built with Next.js and TypeScript.",
    image: "/images/projects/bankapp.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A responsive e-commerce platform with cart & checkout.",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering App",
    description: "Cross-platform food delivery app with live tracking.",
    image: "/images/projects/foodapp.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((p) => p.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-screen-lg px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
          My Projects
        </h2>

        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {["All", "Web", "Mobile"].map((t) => (
            <ProjectTag
              key={t}
              name={t}
              onClick={setTag}
              isSelected={tag === t}
            />
          ))}
        </div>

        {/* Grid */}
        <ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
