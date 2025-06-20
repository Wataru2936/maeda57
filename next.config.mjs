/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/maeda57/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/maeda57' : '',
};

export default nextConfig;
