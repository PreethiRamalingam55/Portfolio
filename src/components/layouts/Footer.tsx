import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Changed FaXTwitter to FaTwitter

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-darksecondary text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-center md:text-left">© 2024 Varunraja Portfolio</p>
        <div className="flex space-x-4">
          <a href="https://github.com/Varunpavi" target="_blank" rel="noopener noreferrer" className="text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/varun-raja-6a9756252/" target="_blank" rel="noopener noreferrer" className="text-xl">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl">
            <FaTwitter /> {/* Changed to FaTwitter */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
