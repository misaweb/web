import { FaPhoneAlt } from 'react-icons/fa';
import React from 'react';

export const Phone = () => (
  <a href="tel:+420730102484" className="flex items-center m-2">
    <FaPhoneAlt />
    <p className="ml-2">Phone: +420 730 102 484</p>
  </a>
);
