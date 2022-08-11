const isProd = process.env.NODE_ENV === 'production'

const basePrefix = process.env.BASE_PREFIX ?? '/web';
const baseUrl = process.env.BASE_URL ?? 'https://misaweb.github.io';

const env = {
  CANONICAL_URL: `${baseUrl}${basePrefix}`,
};

module.exports = {
  basePath: basePrefix,
  env,
  images: {
    loader: 'akamai',
    path: '',
  },
  // images: {
  //   disableStaticImages: true
  // }
};
