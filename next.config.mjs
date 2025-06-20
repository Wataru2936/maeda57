/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/maeda-takuho-anniversary' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/maeda-takuho-anniversary' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
