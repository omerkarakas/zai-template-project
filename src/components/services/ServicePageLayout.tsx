'use client'

import React from 'react'

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
      {/* Hero Section */}
      <div className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="relative container mx-auto px-4 text-center">
          {/* Icon */}
          {icon && (
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-xl gradient-bg text-primary-foreground">
              {icon}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">{title}</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
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