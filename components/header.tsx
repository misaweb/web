import Image from 'next/image';
import React from 'react';
import logo from '../images/logo.svg';
import { Container } from './container';
import { Link, Navigation } from './Navigation';

interface Props {
  links: Link[];
}

export const Header: React.FC<Props> = ({ links }) => (
  <div className="w-full mb-4">
    <Container>
      <div className="flex items-center font-open-sans justify-between h-24 w-full">
        <div className="flex h-full justify-between items-center">
          <div className="flex pt-2 h-full w-32">
            <Image
              alt="Michaela Somolová"
              className="h-full w-32 sm:ml-8 sm:pr-8"
              src={logo as string}
            />
          </div>
        </div>
        <Navigation links={links} />
      </div>
    </Container>
  </div>
);
