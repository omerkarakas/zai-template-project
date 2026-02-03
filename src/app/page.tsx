'use client'

import { useState } from 'react'
import Hero from '@/components/home/Hero'
import ServiceCards from '@/components/home/ServiceCards'
import About from '@/components/home/About'
import { ContactModal } from '@/components/forms/ContactModal'

export default function HomePage() {
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
