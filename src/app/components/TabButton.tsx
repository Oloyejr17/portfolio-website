"use client";
import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  selectTab: () => void;
  active: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ children, selectTab, active }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-colors duration-300 ${
        active
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
