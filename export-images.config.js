/**
 * next-export-optimize-images configuration
 * Optimizes images for static export with best practices
 * @see https://next-export-optimize-images.vercel.app/
 */

module.exports = {
  // Image format conversion
  // WebP provides better compression than JPEG/PNG
  convertFormat: [
    ['png', 'webp'],
    ['jpg', 'webp'],
    ['jpeg', 'webp'],
  ],

  // Quality settings for different formats
  // 75-80 is optimal balance between quality and file size
  sharpOptions: {
    // JPEG optimization
    jpg: {
      quality: 80,
      mozjpeg: true, // Use mozjpeg for better compression
    },
    // PNG optimization
    png: {
      quality: 80,
      compressionLevel: 9, // Maximum compression
    },
    // WebP optimization (recommended for web)
    webp: {
      quality: 80,
      effort: 6, // 0-6, higher = better compression but slower
    },
  },

  // Generate filename with quality and width info
  // Example: image-640w-q80.webp
  filenameGenerator: ({ path, name, width, quality, extension }) => {
    const fileName = name.replace(/\.[^/.]+$/, ''); // Remove original extension
    return `${fileName}-${width}w-q${quality}.${extension}`;
  },

  // Output directory for optimized images
  // Keep in _next/static for proper Next.js handling
  outputDir: '_next/static/chunks/images',

  // Cache directory to speed up rebuilds
  // Prevents re-optimization of unchanged images
  cacheDir: 'node_modules/.cache/next-export-optimize-images',

  // Download directory for external images
  downloadDir: '_next/static/media',

  // Ignore certain files from optimization if needed
  // publicDir: {
  //   exclude: ['favicon.ico', 'robots.txt'],
  // },
};
