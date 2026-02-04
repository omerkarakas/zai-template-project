'use client'

import React from 'react'
import { ChevronRight, Circle } from 'lucide-react'

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

        {/* Process Flow - Horizontal Cards */}
        <div className="relative">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {steps.map((step, index) => (
                <React.Fragment key={step.step}>
                  {/* Process Card */}
                  <div className="relative group">
                    {/* Card with Arrow Shape */}
                    <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 w-56 shadow-lg hover:shadow-xl">
                      {/* Step Indicator */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {step.step}
                      </div>

                      {/* Content */}
                      <div className="pt-2">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {step.description}
                        </p>
                      </div>

                      {/* Status Dot */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                        <Circle className="w-2 h-2 fill-primary text-primary" />
                        <span className="text-xs text-muted-foreground">Adım</span>
                      </div>
                    </div>

                    {/* Connecting Chevron (except last) */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Flow Line Background */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2 -z-10" />
          </div>

          {/* Tablet: 2-Column Grid */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {/* Step Badge */}
                    <div className="absolute -top-2 -left-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className="pt-3">
                      <h3 className="text-base font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow to next (odd items only) */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2">
                      <ChevronRight className="w-10 h-10 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Cards with Flow */}
          <div className="md:hidden">
            <div className="max-w-md mx-auto space-y-4">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-all shadow-lg">
                    {/* Step Number */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                      {step.description}
                    </p>
                  </div>

                  {/* Down Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent" />
                        <ChevronRight className="w-6 h-6 text-primary/40 rotate-90" />
                        <div className="w-0.5 h-6 bg-gradient-to-t from-primary/50 to-transparent" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Summary Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full">
            <div className="flex items-center gap-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 0
                      ? 'bg-primary'
                      : i === 1
                      ? 'bg-primary/70'
                      : i === 2
                      ? 'bg-primary/50'
                      : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
            <span className="font-medium text-sm">{steps.length} Adımlık Süreç</span>
          </div>
        </div>
      </div>
    </section>
  )
}
