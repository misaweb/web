import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

export const SocialIcons = () => (
  <div>
    <a
      href="https://www.linkedin.com/in/michaela-somolova/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center m-2 border-2 border-solid border-gray-333 p-2 rounded-full"
    >
      <FaLinkedinIn aria-label="LinkedIn Icon" />
    </a>
  </div>
);
