"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabItem {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabItem[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nextjs</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg md:text-xl">Codebase Technologies Limited</h3>
          <ul className="list-disc pl-6 text-base md:text-base">
            <li>Full-Stack Web Development</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl">University of Benin, Benin City</h3>
          <ul className="list-disc pl-6 text-base md:text-base">
            <li>Bachelor of Engineering (Structural)</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Portrait Hero Image with blurred edges */}
        <div className="relative w-[400px] h-[600px]">
          <Image
            src="/images/Hero.png"
            alt="About me"
            fill
            className="object-cover rounded-xl"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        {/* About content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend Web Developer and Freelance Software Engineer. I
            craft scalable and efficient web and mobile applications using
            React.js, React Native, and modern JavaScript technologies. My focus
            is on delivering high-performance, visually engaging, and
            user-centric digital experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          </div>
          <div className="mt-8">{activeContent}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
