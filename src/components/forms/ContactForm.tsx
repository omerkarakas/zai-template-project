"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2 } from "lucide-react"

export interface ContactFormProps {
  serviceName?: string
  onSubmit?: (data: FormData) => void | Promise<void>
  loading?: boolean
  success?: boolean
  error?: string
}

export function ContactForm({
  serviceName,
  onSubmit,
  loading = false,
  success = false,
  error,
}: ContactFormProps) {
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current && onSubmit) {
      const formData = new FormData(formRef.current)
      await onSubmit(formData)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden service field for lead tracking */}
      {serviceName && (
        <input type="hidden" name="service" value={serviceName} />
      )}

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-card/80 backdrop-blur-sm">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {/* Success message */}
      {success && (
        <div className="flex items-center gap-2 rounded-md bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
          </p>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Form fields grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* İsim (required) */}
        <div className="space-y-2">
          <Label htmlFor="isim">
            İsim <span className="text-destructive">*</span>
          </Label>
          <Input
            id="isim"
            name="isim"
            type="text"
            placeholder="Adınız Soyadınız"
            required
            disabled={loading || success}
          />
        </div>

        {/* Telefon (required) */}
        <div className="space-y-2">
          <Label htmlFor="telefon">
            Telefon <span className="text-destructive">*</span>
          </Label>
          <Input
            id="telefon"
            name="telefon"
            type="tel"
            placeholder="05XX XXX XX XX"
            required
            disabled={loading || success}
          />
        </div>

        {/* Email (required) */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            required
            disabled={loading || success}
          />
        </div>

        {/* Şirket Adı (required) */}
        <div className="space-y-2">
          <Label htmlFor="sirket">
            Şirket Adı <span className="text-destructive">*</span>
          </Label>
          <Input
            id="sirket"
            name="sirket"
            type="text"
            placeholder="Şirketinizin adı"
            required
            disabled={loading || success}
          />
        </div>

        {/* Şirket Web Sitesi (optional) */}
        <div className="space-y-2">
          <Label htmlFor="website">Şirket Web Sitesi</Label>
          <Input
            id="website"
            name="website"
            type="url"
            placeholder="https://example.com"
            disabled={loading || success}
          />
        </div>

        {/* Mesaj (optional) - full width on mobile, takes second column on desktop */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="mesaj">Mesaj</Label>
          <Textarea
            id="mesaj"
            name="mesaj"
            placeholder="Size nasıl yardımcı olabiliriz?"
            className="min-h-[120px]"
            disabled={loading || success}
          />
        </div>
      </div>

      {/* Gizlilik checkbox (required) */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="gizlilik"
          name="gizlilik"
          required
          disabled={loading || success}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-input text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Label
          htmlFor="gizlilik"
          className="flex-start flex flex-wrap gap-1 text-sm font-normal text-muted-foreground"
        >
          <span>
            <span className="text-destructive">*</span>{" "}
            <a
              href="/gizlilik"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gizlilik politikası
            </a>{" "}
            nı okudum, kabul ediyorum.
          </span>
        </Label>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={loading || success}
      >
        {loading ? "Gönderiliyor..." : "Gönder"}
      </Button>
    </form>
  )
}
