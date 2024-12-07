import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    reactCompiler: true,
  },
  redirects: async () => {
    return [
      {
        destination: '/todo',
        permanent: true,
        source: '/',
      },
    ];
  },
};

module.exports = nextConfig;
