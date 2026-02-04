import { z } from 'zod'

/**
 * Turkish phone validation regex
 * Accepts formats: +905551234567, 05551234567, 5551234567
 * - Optional +90 prefix
 * - Optional leading 0
 * - Exactly 10 digits required
 */
const turkishPhoneRegex = /^(\+90|0)?[0-9]{10}$/

/**
 * Contact form validation schema
 * Uses Zod for runtime type validation and TypeScript inference
 */
export const contactSchema = z.object({
  name: z.string()
    .min(2, 'İsim en az 2 karakter olmalıdır')
    .max(50, 'İsim en fazla 50 karakter olabilir'),

  phone: z.string()
    .regex(turkishPhoneRegex, 'Geçerli bir Türk telefon numarası giriniz'),

  email: z.string()
    .email('Geçerli bir e-posta adresi giriniz'),

  company: z.string()
    .min(2, 'Şirket adı en az 2 karakter olmalıdır')
    .max(100, 'Şirket adı en fazla 100 karakter olabilir'),

  website: z.string()
    .url('Geçerli bir web sitesi adresi giriniz')
    .optional()
    .or(z.literal('')),

  message: z.string()
    .max(500, 'Mesaj en fazla 500 karakter olabilir')
    .optional(),

  gizlilik: z.literal(true, {
    errorMap: () => ({ message: 'Gizlilik politikasını kabul etmeniz gerekmektedir' })
  }),

  service: z.string().optional() // Hidden field for lead tracking
})

/**
 * TypeScript type inferred from the Zod schema
 * Use this for form data typing throughout the app
 */
export type ContactFormData = z.infer<typeof contactSchema>
