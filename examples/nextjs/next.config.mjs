/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@eliseoeric/actions',
    '@eliseoeric/primitives',
    '@eliseoeric/forms',
    '@eliseoeric/feedback',
    '@eliseoeric/layout',
    '@eliseoeric/navigation',
    '@eliseoeric/typography',
    '@eliseoeric/data-display',
    '@eliseoeric/tokens',
    '@eliseoeric/styles',
  ],
};

export default nextConfig;
