'use client'

import React from 'react'
import {
  Search,
  Settings,
  Rocket,
  CheckCircle2,
  BarChart3,
  Trophy,
  type LucideIcon
} from 'lucide-react'

interface ProcessStep {
  step: number
  title: string
  description: string
  icon?: LucideIcon
}

interface ServiceProcessProps {
  steps: ProcessStep[]
  title?: string
}

// Default icons for each step position
const defaultIcons: Record<number, LucideIcon> = {
  1: Search,
  2: Settings,
  3: Rocket,
  4: CheckCircle2,
  5: BarChart3,
  6: Trophy,
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
          {/* Desktop: Horizontal Flow with Arrow Connectors */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {steps.map((step, index) => {
                const IconComponent = step.icon || defaultIcons[step.step] || Search

                return (
                  <React.Fragment key={step.step}>
                    <div className="relative flex items-center">
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 w-64 shadow-lg hover:shadow-xl">
                        {/* Icon */}
                        <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background shadow-lg">
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {/* Content */}
                        <div className="pr-14">
                          <h3 className="text-lg font-semibold mb-3 text-foreground leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Arrow to Next (only if not last) */}
                      {index < steps.length - 1 && (
                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 ml-8">
                          <svg
                            width="60"
                            height="24"
                            viewBox="0 0 60 24"
                            fill="none"
                            className="text-primary/40"
                          >
                            <path
                              d="M0 12 L50 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M40 6 L54 12 L40 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>

          {/* Tablet: 2-Column Grid with Arrows */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
              {steps.map((step, index) => {
                const IconComponent = step.icon || defaultIcons[step.step] || Search

                return (
                  <div key={step.step} className="relative flex items-center">
                    {/* Arrow from previous (even items to left) */}
                    {index % 2 === 0 && index > 0 && (
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-10">
                        <svg
                          width="60"
                          height="24"
                          viewBox="0 0 60 24"
                          fill="none"
                          className="text-primary/30"
                        >
                          <path
                            d="M0 12 L50 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M40 6 L54 12 L40 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl flex-grow">
                      {/* Icon */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-foreground flex items-center justify-center text-background shadow-md">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Content */}
                      <div className="pr-12">
                        <h3 className="text-base font-semibold mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow to Next (even items that have next in same row) */}
                    {index % 2 === 0 && index < steps.length - 1 && (
                      <div className="absolute -right-12 top-1/2 -translate-y-1/2 z-10">
                        <svg
                          width="60"
                          height="24"
                          viewBox="0 0 60 24"
                          fill="none"
                          className="text-primary/30"
                        >
                          <path
                            d="M0 12 L50 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M40 6 L54 12 L40 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile: Vertical Cards with Arrow Connectors */}
          <div className="md:hidden">
            <div className="max-w-md mx-auto space-y-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon || defaultIcons[step.step] || Search

                return (
                  <div key={step.step} className="relative">
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-all shadow-lg">
                      {/* Header with Title and Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold pr-3">
                          {step.title}
                        </h3>
                        <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center text-background shadow-md flex-shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Down Arrow Connector (except last) */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center">
                        <svg
                          width="40"
                          height="60"
                          viewBox="0 0 40 60"
                          fill="none"
                          className="text-primary/30"
                        >
                          {/* Vertical line */}
                          <path
                            d="M20 0 L20 50"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          {/* Arrowhead */}
                          <path
                            d="M12 40 L20 55 L28 40"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                )
              })}
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
