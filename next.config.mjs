/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'demowebsite.codingclave.org',
            port: '',
            pathname: '/laser-hair-removal/img/**',
          },
        ],
      },
};

export default nextConfig;
