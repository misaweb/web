import React from 'react';
import { Container } from './container';

export const Breadcrumb = ({ children }) => (
  <div className="flex items-center w-full py-3">
    <Container>
      <h2 className="text-3xl text-white sm:ml-8 font-light font-lato">
        {children}
      </h2>
    </Container>
  </div>
);
