if (process.env.CANONICAL_URL === undefined) {
  throw new Error('Define CANONICAL_URL');
}

export const baseUrl = process.env.CANONICAL_URL;
