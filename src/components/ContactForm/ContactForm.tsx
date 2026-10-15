import { useForm } from 'react-hook-form'
import { useEmailJS } from '../../hooks/useEmailJS'
import { CheckCircle2, Send } from 'lucide-react'

interface FormValues {
  from_name: string
  from_email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>()
  const { sendEmail, status } = useEmailJS()

  async function onSubmit(data: FormValues) {
    await sendEmail(data)
    if (status !== 'error') reset()
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={28} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Zpráva odeslána!</h3>
        <p className="text-green-700 text-sm">
          Děkujeme za váš zájem. Ozveme se vám co nejdříve.
        </p>
      </div>
    )
  }

  const inputClass = (hasError: boolean) =>
    `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors ${
      hasError ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300'
    }`

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Jméno a příjmení *
        </label>
        <input
          id="from_name"
          type="text"
          autoComplete="name"
          className={inputClass(!!errors.from_name)}
          placeholder="Jan Novák"
          {...register('from_name', { required: 'Zadejte prosím jméno' })}
        />
        {errors.from_name && (
          <p className="text-red-500 text-xs mt-1.5">{errors.from_name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1.5">
          E-mail *
        </label>
        <input
          id="from_email"
          type="email"
          autoComplete="email"
          className={inputClass(!!errors.from_email)}
          placeholder="jan@example.cz"
          {...register('from_email', {
            required: 'Zadejte prosím e-mail',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Neplatný formát e-mailu' },
          })}
        />
        {errors.from_email && (
          <p className="text-red-500 text-xs mt-1.5">{errors.from_email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass(false)}
          placeholder="+420 123 456 789"
          {...register('phone')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Zpráva *
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClass(!!errors.message) + ' resize-none'}
          placeholder="Popište prosím váš požadavek..."
          {...register('message', { required: 'Napište prosím zprávu', minLength: { value: 10, message: 'Zpráva je příliš krátká' } })}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full btn-primary text-center py-4 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        <Send size={16} />
        {status === 'sending' ? 'Odesílám...' : 'Odeslat poptávku'}
      </button>
    </form>
  )
}
