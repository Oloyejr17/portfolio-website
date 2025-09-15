import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] border-t border-t-[#33353F] text-[#ADB7BE] text-sm py-4 text-center">
      &copy; {new Date().getFullYear()} oloyejr. All rights reserved.
    </footer>
  );
};

export default Footer;
