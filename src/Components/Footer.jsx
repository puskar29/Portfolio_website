import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-white/6 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
        © {year} Puskar Thapa Magar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;