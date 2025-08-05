/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // Pixabay's image CDN
        pathname: '**', // Match all paths
      },
    ],
    unoptimized: true,
  },
  output: 'export', // Static export for Next.js
}

export default {
  output: 'export',
}
