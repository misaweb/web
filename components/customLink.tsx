import Link from 'next/link';

import React from 'react';

interface Props {
  href: string
}

export const CustomLink: React.FC<Props> = ({ children, href }) => (href.startsWith('/') || href === '' ? (
  <Link href={href}>
    <a>
      {children}
    </a>
  </Link>
) : (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
));
