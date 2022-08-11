import React from 'react';
import { Container } from './container';
import { Email } from './email';
import { Phone } from './phone';

export const Contact = () => (
  <div className="text-dark-blue border-b border-theme-light-blue bg-theme-yellow text-sm p-8 flex justify-between w-screen">
    <Container>
      <div className="flex flex-col md:flex-row-reverse w-full xl:mx-8">
        <div className="w-full md:w-1/3">
          <Phone />
          <Email />
          {/* <Address /> */}
        </div>
      </div>
    </Container>
  </div>
);
