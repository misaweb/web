// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Hamburger } from './hamburger';
import styles from './Navigation.module.css';

export interface Link {
  footer: boolean,
  href: string,
  navigation: boolean,
  title: string
}

interface Props {
  links: Link[]
}

export const Navigation: React.FC<Props> = ({ links }) => {
  const { asPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(! mobileMenuOpen);
  const menuStyles = mobileMenuOpen ? 'flex' : 'hidden';
  const navLinks = links.filter(({ navigation }) => navigation);

  return (
    <>
      <Hamburger toggleMenu={toggleMenu} />
      <nav className={`${menuStyles} sm:flex ${styles.container}`}>
        <div className="flex flex-col sm:flex-row">
          {navLinks.map(({ title, href }) => {
            const active = asPath === href ? 'active-link' : '';

            return (
              <NextLink href={href} key={href}>
                <a className={`${styles.link} ${active} px-4 py-4 sm:py-0 sm:h-full flex justify-center items-center sm:border-b-4 hover:border-theme-blue transition-colors ease-linear duration-100 text-center`}>
                  {title}
                </a>
              </NextLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};
