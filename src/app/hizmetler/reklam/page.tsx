import { Metadata } from 'next'
import { SERVICE_METADATA } from '@/lib/metadata'
import ReklamPageClient from '@/components/services/reklam/ReklamPageClient'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = SERVICE_METADATA['reklam']
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mokadijital.com'
  const url = `${baseUrl}/hizmetler/reklam`

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
      siteName: 'Moka Dijital',
      locale: 'tr_TR',
      type: 'website',
      images: [{ url: metadata.ogImage, width: 1200, height: 630, alt: metadata.title }],
    },
    alternates: { canonical: url },
  }
}

export default function ReklamPage() {
  return <ReklamPageClient />
}
