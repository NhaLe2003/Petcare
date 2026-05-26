import { useState } from 'react'
import PageHero from '../components/layout/PageHero'
import Button from '../components/ui/Button'
import { FormField, Input, Textarea } from '../components/ui/FormField'
import { validateContactForm } from '../utils/validation'
import { IconCheck } from '../components/ui/Icons'

const contactInfo = [
  { label: 'Address', value: '123 Paw Street, Petville, CA 90210' },
  { label: 'Phone', value: '(555) 123-PETS', href: 'tel:+15551237387' },
  { label: 'Email', value: 'hello@petcarebooking.com', href: 'mailto:hello@petcarebooking.com' },
  { label: 'Hours', value: 'Mon–Sat: 8AM – 7PM · Sun: 9AM – 5PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in Touch"
        subtitle="Questions, feedback, or special requests — we'd love to hear from you."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Visit Us</h2>
              <div className="mt-6 space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-semibold text-primary">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-700 hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-700">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl shadow-lg">
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-beige to-primary/20">
                  <div className="text-center p-6">
                    <p className="text-4xl">📍</p>
                    <p className="mt-2 font-semibold text-slate-700">Google Maps</p>
                    <p className="text-sm text-slate-500">123 Paw Street, Petville, CA</p>
                    <p className="mt-1 text-xs text-slate-400">Map placeholder — embed your Google Maps iframe here</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              {sent ? (
                <div className="py-12 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <IconCheck className="w-8 h-8" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold">Message Sent!</h3>
                  <p className="mt-2 text-slate-600">We&apos;ll get back to you within 24 hours.</p>
                  <Button onClick={() => setSent(false)} variant="outline" className="mt-6">
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                  <div className="mt-6 space-y-5">
                    <FormField label="Name" required error={errors.name}>
                      <Input name="name" value={form.name} onChange={handleChange} error={errors.name} />
                    </FormField>
                    <FormField label="Email" required error={errors.email}>
                      <Input name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
                    </FormField>
                    <FormField label="Subject">
                      <Input name="subject" value={form.subject} onChange={handleChange} />
                    </FormField>
                    <FormField label="Message" required error={errors.message}>
                      <Textarea name="message" value={form.message} onChange={handleChange} error={errors.message} />
                    </FormField>
                  </div>
                  <Button type="submit" variant="primary" className="mt-6 w-full" loading={loading}>
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
