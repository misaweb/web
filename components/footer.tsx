// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link';
import React from 'react';
import { Container } from './container';
import { Link } from './Navigation';

interface Props {
  links: Link[]
}

export const Footer: React.FC<Props> = ({ links }) => {
  const footerLinks = links.filter(({ footer }) => footer);

  return (
    <footer className="w-screen bg-black-27">
      <Container>
        <div className="flex items-center justify-between w-full p-8 font-open-sans text-white text-sm flex-col md:flex-row">
          <div>
            <a
              href="https://www.linkedin.com/in/michaela-somolova/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-a1 transition-colors ease-linear duration-100 my-2 md:my-0 block"
            >
              Connect on linkedin
            </a>
          </div>
          <ul className="flex flex-col md:flex-row items-center">
            {footerLinks.map(({ title, href }) => (
              <li key={href} className="my-2 md:my-0 mx-4 hover:text-gray-a1 transition-colors ease-linear duration-100">
                <NextLink href={href}>
                  <a>
                    {title}
                  </a>
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
