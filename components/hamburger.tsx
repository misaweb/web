import React from 'react';
import { FaBars } from 'react-icons/fa';

interface Props {
  toggleMenu: () => void
}

/* eslint-disable max-len */
export const Hamburger: React.FC<Props> = ({ toggleMenu }) => (
  <button
    onClick={toggleMenu}
    type="button"
    className="block sm:hidden fixed top-0 right-0 text-dark-blue bg-theme-yellow p-2 text-4xl rounded-sm mt-4 mr-4 z-50 outline-none focus:outline-none"
  >
    <FaBars />
  </button>
);
