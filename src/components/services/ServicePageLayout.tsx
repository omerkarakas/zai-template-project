'use client'

import React from 'react'
import { WavyBackground } from '@/components/ui/wavy-background'

interface ServicePageLayoutProps {
  title: string
  description: string
  icon?: React.ReactNode
  children: React.ReactNode
}

export default function ServicePageLayout({
  title,
  description,
  icon,
  children
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section with Wavy Background */}
      <div className="relative overflow-hidden">
        <WavyBackground
          containerClassName="h-[50vh]"
          className="container mx-auto px-4 text-center"
          backgroundFill="#020817"
          colors={["#7c3aed", "#6366f1", "#818cf8", "#a78bfa", "#3b82f6"]}
          waveOpacity={0.5}
          blur={10}
          speed="slow"
          waveWidth={50}
        >
          {/* Icon */}
          {icon && (
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-xl gradient-bg text-primary-foreground">
              {icon}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal mb-4 text-white drop-shadow-md">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            {description}
          </p>
        </WavyBackground>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
