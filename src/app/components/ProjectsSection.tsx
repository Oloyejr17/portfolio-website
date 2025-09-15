"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Next.js Dashboard",
    description:
      "A fully-featured, responsive dashboard built with Next.js and modern frontend technologies. Users can monitor data and manage resources efficiently.",
    image: "/images/projects/dashboard1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Oloyejr17/nextjs-dashboard-with-extensive-features.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Banking web app",
    description:
      "Built with Next.js and TypeScript, this app provides a secure and modern banking experience with account management and real-time transactions.",
    image: "/images/projects/bankapp.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "A responsive e-commerce platform built with React. Users can browse products, filter items, add to cart, and checkout seamlessly.",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description:
      "A responsive food delivery platform built with React Native/Next.js. Users can browse menus, customize orders, and track deliveries in real-time.",
    image: "/images/projects/foodapp.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Tags */}
      <div className="flex justify-center items-center gap-2 py-6">
        {["All", "Web", "Mobile"].map((t) => (
          <ProjectTag
            key={t}
            name={t}
            onClick={handleTagChange}
            isSelected={tag === t}
          />
        ))}
      </div>

      {/* Projects Grid */}
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
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

export default ProjectsSection;
