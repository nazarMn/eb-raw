/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
