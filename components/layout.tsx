import React from 'react';
import { Breadcrumb } from './breadcrumb';
import { Contact } from './contact';
import { Container } from './container';
import { Header } from './header';
import { Link } from './Navigation';

interface Props {
  links: Link[];
  pageTitle: string;
}

export const Layout: React.FC<Props> = ({ children, pageTitle, links }) => (
  <div className="flex flex-col min-h-screen">
    <div className="container mx-auto">
      <Header links={links} />
      <Breadcrumb>
        {pageTitle}
      </Breadcrumb>
      <Container>
        <main className="sm:mx-2 md:mx-8 my-4 sm:my-12 font-open-sans text-white sm:text-sm w-full">
          {children}
        </main>
      </Container>
    </div>
    <div className="flex flex-col flex-1 justify-end">
      <Contact />
    </div>
  </div>
);
