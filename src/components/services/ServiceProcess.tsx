'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  // Track which step is currently being processed
  const [processingStep, setProcessingStep] = useState<number | null>(null)
  const [loopCount, setLoopCount] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Start processing animation after component mounts
    let currentStep = 0

    const processNextStep = () => {
      if (currentStep < steps.length) {
        setProcessingStep(currentStep)
        currentStep++
        // Move to next step after 3 seconds
        timeoutRef.current = setTimeout(processNextStep, 3000)
      } else {
        // All steps processed, restart animation after 2 seconds
        setProcessingStep(null)
        timeoutRef.current = setTimeout(() => {
          setLoopCount(prev => prev + 1)
          currentStep = 0
          processNextStep()
        }, 2000)
      }
    }

    // Start after a short delay
    timeoutRef.current = setTimeout(processNextStep, 500)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [steps.length, loopCount])

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
            <div className="flex items-stretch justify-center gap-8 flex-wrap">
              {steps.map((step, index) => {
                const IconComponent = step.icon || defaultIcons[step.step] || Search
                const isProcessing = processingStep === index
                const isPastStep = processingStep !== null && index < processingStep

                return (
                  <React.Fragment key={`${step.step}-${loopCount}`}>
                    <div className="relative flex items-stretch">
                      {/* Card */}
                      <div
                        className={`
                          relative rounded-xl border transition-all duration-300 w-64 shadow-lg hover:shadow-xl flex flex-col
                          min-h-[180px]
                          ${isProcessing
                            ? 'bg-gradient-to-br from-amber-50/50 to-orange-100/30 dark:from-amber-950/30 dark:to-orange-900/20 border-amber-200/50 dark:border-amber-800/30 animate-processing-shimmer'
                            : isPastStep
                            ? 'bg-gradient-to-br from-green-50/30 to-emerald-100/20 dark:from-green-950/20 dark:to-emerald-900/10 border-green-200/30 dark:border-green-800/20'
                            : 'bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50'
                          }
                        `}
                        style={
                          isProcessing
                            ? {
                                backgroundSize: '400% 400%',
                                backgroundImage: 'linear-gradient(135deg, transparent 0%, rgba(251, 191, 36, 0.1) 25%, transparent 50%, rgba(120, 113, 108, 0.1) 75%, transparent 100%)',
                              }
                            : undefined
                        }
                      >
                        {/* Icon */}
                        <div className={`
                          absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all
                          ${isProcessing
                            ? 'bg-amber-500 text-white animate-pulse'
                            : isPastStep
                            ? 'bg-green-500 text-white'
                            : 'bg-foreground text-background'
                          }
                        `}>
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {/* Content */}
                        <div className="pt-14 pr-14 pb-6 pl-6 h-full flex flex-col">
                          <h3 className="text-lg font-semibold mb-3 text-foreground leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
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
                            className={isPastStep ? "text-green-400" : "text-primary/40"}
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
                const isProcessing = processingStep === index
                const isPastStep = processingStep !== null && index < processingStep

                return (
                  <div key={`${step.step}-${loopCount}`} className="relative flex items-stretch">
                    {/* Arrow from previous (even items to left) */}
                    {index % 2 === 0 && index > 0 && (
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-10">
                        <svg
                          width="60"
                          height="24"
                          viewBox="0 0 60 24"
                          fill="none"
                          className={isPastStep ? "text-green-400" : "text-primary/30"}
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
                    <div
                      className={`
                        relative rounded-xl border transition-all duration-300 shadow-lg hover:shadow-xl flex-grow flex flex-col
                        min-h-[200px]
                        ${isProcessing
                          ? 'bg-gradient-to-br from-amber-50/50 to-orange-100/30 dark:from-amber-950/30 dark:to-orange-900/20 border-amber-200/50 dark:border-amber-800/30 animate-processing-shimmer'
                          : isPastStep
                          ? 'bg-gradient-to-br from-green-50/30 to-emerald-100/20 dark:from-green-950/20 dark:to-emerald-900/10 border-green-200/30 dark:border-green-800/20'
                          : 'bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50'
                        }
                      `}
                      style={
                        isProcessing
                          ? {
                              backgroundSize: '400% 400%',
                              backgroundImage: 'linear-gradient(135deg, transparent 0%, rgba(251, 191, 36, 0.1) 25%, transparent 50%, rgba(120, 113, 108, 0.1) 75%, transparent 100%)',
                            }
                          : undefined
                      }
                    >
                      {/* Icon */}
                      <div className={`
                        absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all
                        ${isProcessing
                          ? 'bg-amber-500 text-white animate-pulse'
                          : isPastStep
                          ? 'bg-green-500 text-white'
                          : 'bg-foreground text-background'
                        }
                      `}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Content */}
                      <div className="pr-12 pt-12 pb-6 pl-6 h-full flex flex-col">
                        <h3 className="text-base font-semibold mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
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
                          className={isPastStep ? "text-green-400" : "text-primary/30"}
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
                const isProcessing = processingStep === index
                const isPastStep = processingStep !== null && index < processingStep

                return (
                  <div key={`${step.step}-${loopCount}`} className="relative">
                    {/* Card */}
                    <div
                      className={`
                        relative rounded-xl border transition-all shadow-lg flex flex-col
                        min-h-[160px]
                        ${isProcessing
                          ? 'bg-gradient-to-br from-amber-50/50 to-orange-100/30 dark:from-amber-950/30 dark:to-orange-900/20 border-amber-200/50 dark:border-amber-800/30 animate-processing-shimmer'
                          : isPastStep
                          ? 'bg-gradient-to-br from-green-50/30 to-emerald-100/20 dark:from-green-950/20 dark:to-emerald-900/10 border-green-200/30 dark:border-green-800/20'
                          : 'bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50'
                        }
                      `}
                      style={
                        isProcessing
                          ? {
                              backgroundSize: '400% 400%',
                              backgroundImage: 'linear-gradient(135deg, transparent 0%, rgba(251, 191, 36, 0.1) 25%, transparent 50%, rgba(120, 113, 108, 0.1) 75%, transparent 100%)',
                            }
                          : undefined
                      }
                    >
                      {/* Header with Title and Icon */}
                      <div className="flex items-center justify-between px-4 pt-4 pb-2">
                        <h3 className="text-base font-semibold pr-3">
                          {step.title}
                        </h3>
                        <div className={`
                          w-9 h-9 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 transition-all
                          ${isProcessing
                            ? 'bg-amber-500 text-white animate-pulse'
                            : isPastStep
                            ? 'bg-green-500 text-white'
                            : 'bg-foreground text-background'
                          }
                        `}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed px-4 pb-4">
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
                          className={isPastStep ? "text-green-400" : "text-primary/30"}
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
                  key={`${i}-${loopCount}`}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    processingStep === null
                      ? 'bg-primary'
                      : i < processingStep!
                      ? 'bg-green-500'
                      : i === processingStep
                      ? 'bg-amber-500 animate-pulse'
                      : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
            <span className="font-medium text-sm">
              {processingStep === null
                ? 'Süreç Tamamlandı'
                : `Adım ${processingStep + 1} İşleniyor...`
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
