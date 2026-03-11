import { useForm } from 'react-hook-form'
import { useEmailJS } from '../../hooks/useEmailJS'

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
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Zpráva odeslána!</h3>
        <p className="text-green-700">
          Děkujeme za váš zájem. Ozveme se vám co nejdříve.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
          Jméno a příjmení *
        </label>
        <input
          id="from_name"
          type="text"
          autoComplete="name"
          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.from_name ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="Jan Novák"
          {...register('from_name', { required: 'Zadejte prosím jméno' })}
        />
        {errors.from_name && (
          <p className="text-red-500 text-xs mt-1">{errors.from_name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail *
        </label>
        <input
          id="from_email"
          type="email"
          autoComplete="email"
          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.from_email ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="jan@example.cz"
          {...register('from_email', {
            required: 'Zadejte prosím e-mail',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Neplatný formát e-mailu' },
          })}
        />
        {errors.from_email && (
          <p className="text-red-500 text-xs mt-1">{errors.from_email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefon
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="+420 123 456 789"
          {...register('phone')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Zpráva *
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
            errors.message ? 'border-red-400' : 'border-gray-300'
          }`}
          placeholder="Popište prosím váš požadavek..."
          {...register('message', { required: 'Napište prosím zprávu', minLength: { value: 10, message: 'Zpráva je příliš krátká' } })}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full btn-primary text-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Odesílám...' : 'Odeslat poptávku'}
      </button>
    </form>
  )
}
