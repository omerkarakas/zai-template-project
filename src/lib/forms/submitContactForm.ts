import { ContactFormData } from './contactSchema'

/**
 * Result type for form submission
 */
export interface SubmitResult {
  success: boolean
  message: string
}

/**
 * Metadata that will be sent with the form submission
 * Helps track where the lead came from
 */
export interface SubmissionMetadata {
  page?: string
  source?: string
  userAgent?: string
}

/**
 * Extended payload sent to n8n webhook
 * Includes form data plus tracking metadata
 */
interface WebhookPayload {
  // Form fields
  name: string
  phone: string
  email: string
  company: string
  website?: string
  message?: string
  gizlilik: true
  service?: string
  // Metadata for lead tracking
  metadata: {
    timestamp: string
    page: string
    source: string
    userAgent: string
    referrer: string
  }
}

/**
 * n8n webhook configuration
 * Webhook URL should be set in NEXT_PUBLIC_N8N_WEBHOOK_URL environment variable
 *
 * To get your webhook URL:
 * 1. Go to https://ai.mokadijital.com
 * 2. Create a new workflow
 * 3. Add a Webhook trigger node
 * 4. Set method to POST
 * 5. Copy the "Production URL" (not "Test URL")
 * 6. Add to .env.local as NEXT_PUBLIC_N8N_WEBHOOK_URL
 */
const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

/**
 * Submit contact form data to n8n webhook
 *
 * @param data - Validated form data from ContactForm component
 * @param metadata - Optional metadata for lead tracking
 * @returns Promise with success status and user-friendly message
 *
 * @example
 * ```ts
 * const result = await submitContactForm(formData, {
 *   page: '/hizmetler/google-isletme',
 *   source: 'contact_form'
 * })
 * if (result.success) {
 *   // Show success message
 * }
 * ```
 */
export async function submitContactForm(
  data: ContactFormData,
  metadata?: SubmissionMetadata
): Promise<SubmitResult> {
  // Validate webhook URL is configured
  if (!WEBHOOK_URL) {
    console.error('NEXT_PUBLIC_N8N_WEBHOOK_URL is not defined')
    return {
      success: false,
      message: 'Bir sorun oluştu, lütfen tekrar deneyin'
    }
  }

  // Normalize phone number to 905XX format
  let normalizedPhone = data.phone.replace(/\D/g, '') // Remove all non-digits
  if (normalizedPhone.startsWith('90')) {
    // Already has 90 prefix, keep it
  } else if (normalizedPhone.startsWith('9')) {
    // Starts with 9 but not 90, add 0
    normalizedPhone = '9' + normalizedPhone
  } else if (normalizedPhone.startsWith('0')) {
    // Starts with 0, replace with 90
    normalizedPhone = '90' + normalizedPhone.slice(1)
  } else {
    // No prefix, add 90
    normalizedPhone = '90' + normalizedPhone
  }

  // Prepare payload with form data and metadata
  const payload: WebhookPayload = {
    name: data.name,
    phone: normalizedPhone,
    email: data.email,
    company: data.company,
    website: data.website || undefined,
    message: data.message || undefined,
    gizlilik: data.gizlilik,
    service: data.service || undefined,
    metadata: {
      timestamp: new Date().toISOString(),
      page: metadata?.page || (typeof window !== 'undefined' ? window.location.pathname : ''),
      source: metadata?.source || 'contact_form',
      userAgent: metadata?.userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : ''),
      referrer: typeof document !== 'undefined' ? document.referrer : ''
    }
  }

  try {
    // Send POST request to n8n webhook
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return {
      success: true,
      message: 'Mesajınız başarıyla gönderildi'
    }
  } catch (error) {
    // Log full error for development debugging
    console.error('Form submission error:', error)

    // Return user-friendly error message
    return {
      success: false,
      message: 'Bir sorun oluştu, lütfen tekrar deneyin'
    }
  }
}
