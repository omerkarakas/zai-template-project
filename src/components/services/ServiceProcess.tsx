'use client'

import React from 'react'
import { ArrowRight, Check } from 'lucide-react'

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ServiceProcessProps {
  steps: ProcessStep[]
  title?: string
}

export default function ServiceProcess({
  steps,
  title = "Süreç"
}: ServiceProcessProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        {/* Process Steps - Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/50 to-transparent h-full hidden md:block" />

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={step.step} className="mb-12 lg:mb-16">
              {/* Step Content */}
              <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                {/* Step Number - Left side */}
                <div className="flex-shrink-0 order-2 md:order-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Step Details - Center */}
                <div className="flex-grow text-center md:text-left">
                  <div className="bg-card/70 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow - Right side (except last step) */}
                {index < steps.length - 1 && (
                  <div className="flex-shrink-0 order-3 md:order-2">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group">
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Connecting Line */}
              <div className="md:hidden flex justify-center my-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Completed Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full">
            <Check className="w-4 h-4" />
            <span className="font-medium">Tamamlanmış Süreç</span>
          </div>
        </div>
      </div>
    </section>
  )
}