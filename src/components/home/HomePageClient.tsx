'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import ServiceCards from '@/components/home/ServiceCards'
import About from '@/components/home/About'

const ContactModal = dynamic(
  () => import('@/components/forms/ContactModal').then(m => ({ default: m.ContactModal })),
  { ssr: false }
)

export default function HomePageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Hero onContactClick={() => setIsModalOpen(true)} />
      <ServiceCards />
      <About />
      <ContactModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        serviceName="Genel Danışmanlık"
      />
    </>
  )
}
