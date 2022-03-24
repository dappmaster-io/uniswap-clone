import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'f0ljb287',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skS2nQ7Od187BTEuHjOqaQnow6F9VciOoQ81Xz9FbgeMamexYSIqvJwsC9lEXErw4XnjX5c9FJzISxYirPBxTVyO3zrL8bZ5v7zbtOvIEPq2AqN6qc5YKCwg16dyLdR3ilIhbbqD6y7fgtBwWYGvLjjVuPpOm211ynfbPLL2GiWlGw3k95k7',
  useCdn: false,
})
