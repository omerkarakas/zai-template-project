'use client'

import React from 'react'
import { CheckCircle } from 'lucide-react'

interface Benefit {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ServiceBenefitsProps {
  benefits: Benefit[]
  title?: string
}

export default function ServiceBenefits({
  benefits,
  title = "Faydalar"
}: ServiceBenefitsProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl gradient-bg">
                {benefit.icon ? (
                  <div className="text-primary-foreground">{benefit.icon}</div>
                ) : (
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                )}
              </div>

              {/* Benefit Title */}
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>

              {/* Benefit Description */}
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-tl-3xl bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}