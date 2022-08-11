import { GetStaticProps } from 'next';
import React from 'react';
import { DynamicLayout } from '../components/dynamicLayout';
import { Link } from '../components/Navigation';
import { getPageContentBySlug, Page } from '../lib/markdown';
import { getNavigationLinks } from '../lib/navigation';

interface Props {
  links: Link[]
  page: Page
}

const IndexPage: React.FC<Props> = ({ page, links }) => (
  <DynamicLayout page={page} links={links} />
);

export default IndexPage;

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const links = getNavigationLinks();

  const page = getPageContentBySlug('home', [
    'title',
    'image',
    'slug',
    'content',
  ]);

  return {
    props: {
      links,
      page: {
        ...page,
        markdown: page.content,
      },
    },
  };
};
