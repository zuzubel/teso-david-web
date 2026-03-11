import { useState } from 'react'
import emailjs from '@emailjs/browser'

export type SendStatus = 'idle' | 'sending' | 'success' | 'error'

interface EmailData {
  from_name: string
  from_email: string
  phone: string
  message: string
}

export function useEmailJS() {
  const [status, setStatus] = useState<SendStatus>('idle')

  async function sendEmail(data: EmailData) {
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
        {
          from_name: data.from_name,
          from_email: data.from_email,
          phone: data.phone,
          message: data.message,
          to_email: 'z.belaskova@gmail.com',
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '' },
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setStatus('idle')
  }

  return { sendEmail, status, reset }
}
