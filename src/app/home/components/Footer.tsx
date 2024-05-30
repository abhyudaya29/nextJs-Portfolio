"use client";

import React from "react";
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Stay Connected</h2>
          <p className="text-gray-400 mt-2">Follow us on social media and stay updated</p>
        </div>
        <div className="flex space-x-8">
          <a href="https://x.com/chaiwalahacoder" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://github.com/abhyudaya29" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaGithub size={30} />
          </a>
          <a href="mailto:abhyudayadev123@gmail.com" className="hover:text-gray-400 transition-colors duration-300">
            <MdEmail size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
