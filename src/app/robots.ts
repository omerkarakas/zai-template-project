import { MetadataRoute } from 'next';

/**
 * Build-time robots.txt generation
 * Allows all bots with sitemap reference
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
