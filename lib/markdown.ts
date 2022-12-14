import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export interface Page {
  markdown: string;
  slug: string;
  title: string;
}

/**
 * _pages and _pages/dynamic directory where the markdown content will live
 * _pages will have the home.md (aka index or /)
 * _pages/dynamic will be home to all other pages (aka [slug].js)
 */
const pagesDirectory = join(process.cwd(), '_pages');
const dynamicPagesDirectory = join(pagesDirectory, 'dynamic');

/**
 * Gets all the files (slugs) in a directory
 */
export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

/**
 * Gets the contents of a file
 * The gray-matter (metadata at the top of the file) will be
 * added to the item object, the content will be in
 * item.content and the file name (slug) will be in item.slug.
 */
export function getBySlug(dir, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: { [key: string]: unknown } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field] !== undefined) {
      items[field] = data[field];
    }
  });

  return items;
}

/**
 * Returns contents of a page in the _pages directory
 */
export function getPageContentBySlug(slug, fields:string[] = []) {
  return getBySlug(pagesDirectory, slug, fields);
}

/**
 * Returns contents of a page in the _pages/dynamic directory
 */
export function getDynamicPageContentBySlug(slug, fields:string[] = []) {
  return getBySlug(dynamicPagesDirectory, slug, fields);
}

/**
 * Returns a list of all the pages in the _pages/dynamic directory
 */
export function getAllDynamicPages(fields: string[] = []) {
  const slugs = getSlugsFromDirectory(dynamicPagesDirectory);

  return slugs.map((slug) => getDynamicPageContentBySlug(slug, fields));
}
