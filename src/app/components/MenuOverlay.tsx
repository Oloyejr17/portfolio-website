"use client";
import React from "react";

interface LinkItem {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#0d0d0d] z-40 flex flex-col items-center justify-center md:hidden">
      <ul className="flex flex-col space-y-6 text-center">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(link.path);
                section?.scrollIntoView({ behavior: "smooth" });
                onClose();
              }}
              className="text-white text-2xl hover:text-primary-500"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
