import assert from 'assert';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { DynamicLayout } from '../components/dynamicLayout';
import { Link } from '../components/Navigation';
import { getAllDynamicPages, getDynamicPageContentBySlug, Page } from '../lib/markdown';
import { getNavigationLinks } from '../lib/navigation';

interface Props {
  links: Link[];
  page: Page;
}

const DynamicPage: React.FC<Props> = ({ page, links }) => (
  <DynamicLayout page={page} links={links} />
);
export default DynamicPage;

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const links = getNavigationLinks();
  assert(params !== undefined);
  const { slug } = params;
  const page = getDynamicPageContentBySlug(slug, [
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllDynamicPages(['slug']);
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    fallback: false,
    paths,
  };
};
