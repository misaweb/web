import React from 'react';
import { Container } from './container';
import { Email } from './email';
import { Phone } from './phone';
import { SocialIcons } from './socialIcons';

export const SocialBar = () => (
  <div className="hidden md:block bg-gray-fb w-screen border-b border-gray-e9">
    <Container>
      <div className="flex items-center justify-between px-8 text-gray-333 text-sm font-open-sans w-full">
        <div className="flex">
          <Phone />
          <Email />
        </div>
        <div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  </div>
);
