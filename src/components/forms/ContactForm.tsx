"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema, type ContactFormData } from "@/lib/forms/contactSchema"
import { submitContactForm } from "@/lib/forms/submitContactForm"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ContactFormProps {
  serviceName?: string
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function ContactForm({
  serviceName,
  onSuccess,
  onError,
}: ContactFormProps) {
  const [internalSuccess, setInternalSuccess] = React.useState(false)
  const [internalError, setInternalError] = React.useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // Show errors when user leaves field for better UX
    defaultValues: {
      isim: "",
      telefon: "",
      email: "",
      sirket: "",
      website: "",
      mesaj: "",
      gizlilik: false,
      service: serviceName || "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setInternalError("")

    try {
      const result = await submitContactForm(data, {
        page: typeof window !== "undefined" ? window.location.pathname : "",
        source: "contact_form",
      })

      if (result.success) {
        // Show success state
        setInternalSuccess(true)
        // Clear form
        reset()
        // Call parent success callback
        onSuccess?.()
        // Auto-hide success message after 5 seconds
        setTimeout(() => setInternalSuccess(false), 5000)
      } else {
        // Show error message
        setInternalError(result.message)
        onError?.(result.message)
      }
    } catch (error) {
      const errorMessage = "Bir sorun oluştu, lütfen tekrar deneyin"
      setInternalError(errorMessage)
      onError?.(errorMessage)
    }
  }

  const isDisabled = isSubmitting || internalSuccess

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Hidden service field for lead tracking */}
      <input type="hidden" {...register("service")} />

      {/* Success message */}
      {internalSuccess && (
        <div className="flex items-center gap-2 rounded-md bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
          </p>
        </div>
      )}

      {/* Error message */}
      {internalError && (
        <div className="flex items-start gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>{internalError}</span>
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
            {...register("isim")}
            type="text"
            placeholder="Adınız Soyadınız"
            disabled={isDisabled}
            className={cn(errors.isim && "border-destructive focus-visible:ring-destructive")}
            aria-invalid={errors.isim ? "true" : "undefined"}
          />
          {errors.isim && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.isim.message}
            </p>
          )}
        </div>

        {/* Telefon (required) */}
        <div className="space-y-2">
          <Label htmlFor="telefon">
            Telefon <span className="text-destructive">*</span>
          </Label>
          <Input
            id="telefon"
            {...register("telefon")}
            type="tel"
            placeholder="05XX XXX XX XX"
            disabled={isDisabled}
            className={cn(errors.telefon && "border-destructive focus-visible:ring-destructive")}
            aria-invalid={errors.telefon ? "true" : "undefined"}
          />
          {errors.telefon && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.telefon.message}
            </p>
          )}
        </div>

        {/* Email (required) */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            {...register("email")}
            type="email"
            placeholder="email@example.com"
            disabled={isDisabled}
            className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
            aria-invalid={errors.email ? "true" : "undefined"}
          />
          {errors.email && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Şirket Adı (required) */}
        <div className="space-y-2">
          <Label htmlFor="sirket">
            Şirket Adı <span className="text-destructive">*</span>
          </Label>
          <Input
            id="sirket"
            {...register("sirket")}
            type="text"
            placeholder="Şirketinizin adı"
            disabled={isDisabled}
            className={cn(errors.sirket && "border-destructive focus-visible:ring-destructive")}
            aria-invalid={errors.sirket ? "true" : "undefined"}
          />
          {errors.sirket && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.sirket.message}
            </p>
          )}
        </div>

        {/* Şirket Web Sitesi (optional) */}
        <div className="space-y-2">
          <Label htmlFor="website">Şirket Web Sitesi</Label>
          <Input
            id="website"
            {...register("website")}
            type="url"
            placeholder="https://example.com"
            disabled={isDisabled}
            className={cn(errors.website && "border-destructive focus-visible:ring-destructive")}
            aria-invalid={errors.website ? "true" : "undefined"}
          />
          {errors.website && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.website.message}
            </p>
          )}
        </div>

        {/* Mesaj (optional) - full width on mobile, takes second column on desktop */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="mesaj">Mesaj</Label>
          <Textarea
            id="mesaj"
            {...register("mesaj")}
            placeholder="Size nasıl yardımcı olabiliriz?"
            className={cn(
              "min-h-[120px]",
              errors.mesaj && "border-destructive focus-visible:ring-destructive"
            )}
            disabled={isDisabled}
            aria-invalid={errors.mesaj ? "true" : "undefined"}
          />
          {errors.mesaj && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.mesaj.message}
            </p>
          )}
        </div>
      </div>

      {/* Gizlilik checkbox (required) */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="gizlilik"
          {...register("gizlilik")}
          disabled={isDisabled}
          className={cn(
            "mt-0.5 h-4 w-4 shrink-0 rounded border-input text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            errors.gizlilik && "border-destructive"
          )}
          aria-invalid={errors.gizlilik ? "true" : "undefined"}
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
      {errors.gizlilik && (
        <p className="text-sm text-destructive flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {errors.gizlilik.message}
        </p>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isDisabled}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          "Gönder"
        )}
      </Button>
    </form>
  )
}
