import withOptimizedImages from 'next-export-optimize-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for PHP hosting deployment
  output: 'export',

  // Clean URLs without trailing slashes
  trailingSlash: false,

  // Image optimization configuration
  images: {
    // next-export-optimize-images handles optimization at build time
    unoptimized: false,
    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow images from any domain (configure specific domains in production)
    remotePatterns: [],
  },
};

// Wrap config with next-export-optimize-images plugin
export default withOptimizedImages(nextConfig);
