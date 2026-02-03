import { Metadata } from 'next'
import { HOMEPAGE_METADATA } from '@/lib/metadata'
import HomePageClient from '@/components/home/HomePageClient'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com'

  return {
    title: HOMEPAGE_METADATA.title,
    description: HOMEPAGE_METADATA.description,
    keywords: HOMEPAGE_METADATA.keywords,
    openGraph: {
      title: HOMEPAGE_METADATA.title,
      description: HOMEPAGE_METADATA.description,
      url: baseUrl,
      siteName: 'Moka Dijital',
      locale: 'tr_TR',
      type: 'website',
      images: [
        {
          url: HOMEPAGE_METADATA.ogImage,
          width: 1200,
          height: 630,
          alt: 'Moka Dijital - Dijital Pazarlama Ajansı',
        },
      ],
    },
    alternates: {
      canonical: baseUrl,
    },
  }
}

export default function HomePage() {
  return <HomePageClient />
}
