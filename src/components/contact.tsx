import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="md:h-screen container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">Please feel free to contact us for any inquiries or feedback:</p>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <FiMail className="w-6 h-6 mr-2" />
          <span>Email: rajavarun216@gmail.com</span>
        </div>
        <div className="flex items-center mb-2">
          <FiPhone className="w-6 h-6 mr-2" />
          <span>Phone: 7339635360</span>
        </div>
        <div className="flex items-center mb-2">
          <FaLinkedin className="w-6 h-6 mr-2 text-blue-500" />
          <a href="https://www.linkedin.com/in/varun-raja-6a9756252/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="flex items-center mb-2">
          <FaTwitter className="w-6 h-6 mr-2 text-blue-400" />
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="flex items-center">
          <FaGithub className="w-6 h-6 mr-2 text-gray-800" />
          <a href="https://github.com/Varunpavi" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}
