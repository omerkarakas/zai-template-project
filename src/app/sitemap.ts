import { MetadataRoute } from 'next';
import { HOMEPAGE_METADATA, SERVICE_METADATA } from '@/lib/metadata';

/**
 * Build-time sitemap generation
 * Returns all 7 static routes: homepage + 6 service pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com';

  // Homepage entry
  const homepageEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: HOMEPAGE_METADATA.changeFrequency as const,
    priority: HOMEPAGE_METADATA.priority,
  };

  // Service entries - spread SERVICE_METADATA values and map to sitemap entries
  const serviceEntries = Object.values(SERVICE_METADATA).map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: service.changeFrequency as const,
    priority: service.priority,
  }));

  return [homepageEntry, ...serviceEntries];
}
