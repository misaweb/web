import { NextSeo } from 'next-seo';
import { join } from 'path';
import React from 'react';
import { Page } from '../lib/markdown';
import { baseUrl } from '../url';
import { Home } from './content/Home';
import { ProfesniProfil } from './content/ProfesniProfil';
import { Resume } from './content/Resume';
import { Layout } from './layout';
import { Link } from './Navigation';

interface Props {
  links: Link[],
  page: Page
}

const components: { [key: string]: React.FC<{ page: Page }> } = {
  home: Home,
  resume: Resume,
  // eslint-disable-next-line sort-keys
  'profesni-profil': ProfesniProfil,
};

export const DynamicLayout: React.FC<Props> = ({ page, links }) => {
  const { slug, title } = page;
  const canonical = join(baseUrl, slug);
  const Component = components[slug];

  return (
    <Layout pageTitle={title} links={links}>
      <NextSeo
        title={title}
        canonical={canonical}
        openGraph={{
          title: `${title} | Michaela Somolová`,
          url: canonical,
        }}
      />
      <Component page={page} />
    </Layout>
  );
};
