/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@tabler/icons-react'],
  },
};

export default nextConfig;
