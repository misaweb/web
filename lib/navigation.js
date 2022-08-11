/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { join } from 'path';
import { getAllDynamicPages, getPageContentBySlug } from './markdown';

// eslint-disable-next-line import/prefer-default-export
export function getNavigationLinks() {
  const fields = ['title', 'slug', 'navigation', 'footer'];
  const dynamicPages = getAllDynamicPages(fields);

  const home = getPageContentBySlug('home', fields);

  const links = [{ ...home, slug: '/' }, ...dynamicPages]
    .map(({ title, slug, navigation, footer }) => ({
      footer: footer || false,
      href: join('/', slug),
      navigation: navigation || false,
      title,
    }));

  return links;
}
