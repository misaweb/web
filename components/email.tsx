import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

export const Email = () => (
  <a href="mailto:michaela@somolova.cz" className="flex items-center m-2">
    <FaEnvelope />
    <p className="ml-2">
      Email: michaela@somolova.cz
    </p>
  </a>
);
