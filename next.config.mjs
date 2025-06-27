/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'books.google.com',
    },
    {
      protocol: 'https',
      hostname: 'books.google.com',
    },
    {
      protocol: 'http',
      hostname: 'books.googleusercontent.com',
    },
    {
      protocol: 'https',
      hostname: 'books.googleusercontent.com',
    },
  ]
}

};

export default nextConfig;
