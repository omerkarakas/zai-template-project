"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm, ContactFormProps } from "./ContactForm"

export interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceName?: string
  title?: string
}

export function ContactModal({
  open,
  onOpenChange,
  serviceName,
  title = "İletişim Formu",
}: ContactModalProps) {
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | undefined>(undefined)

  // Reset states when modal opens
  React.useEffect(() => {
    if (open) {
      setLoading(false)
      setSuccess(false)
      setError(undefined)
    }
  }, [open])

  const handleSubmit: ContactFormProps["onSubmit"] = async (_data) => {
    setLoading(true)
    setError(undefined)

    try {
      // TODO: Integrate with n8n webhook in plan 03-02
      // For now, just simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSuccess(true)

      // Auto-close modal after 3 seconds on success
      setTimeout(() => {
        onOpenChange(false)
      }, 3000)
    } catch (err) {
      setError("Bir sorun oluştu, lütfen tekrar deneyin.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-card p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          {/* Header with title and close button */}
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">
              {title}
            </DialogTitle>
            <DialogPrimitive.Close asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Kapat</span>
              </Button>
            </DialogPrimitive.Close>
          </div>

          {/* ContactForm with relative positioning for loading overlay */}
          <div className="relative mt-4">
            <ContactForm
              serviceName={serviceName}
              onSubmit={handleSubmit}
              loading={loading}
              success={success}
              error={error}
            />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
