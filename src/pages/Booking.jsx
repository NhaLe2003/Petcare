import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import Button from '../components/ui/Button'
import { FormField, Input, Select, Textarea } from '../components/ui/FormField'
import { services } from '../data/services'
import { validateBookingForm } from '../utils/validation'
import { useBookings } from '../context/BookingContext'
import { useAuth } from '../context/AuthContext'
import { IconCheck } from '../components/ui/Icons'

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
]

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  petName: '',
  petType: '',
  breed: '',
  weight: '',
  service: '',
  date: '',
  timeSlot: '',
  notes: '',
}

export default function Booking() {
  const [searchParams] = useSearchParams()
  const { addBooking } = useBookings()
  const { user } = useAuth()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    const serviceId = searchParams.get('service')
    if (serviceId) {
      const found = services.find((s) => s.id === serviceId)
      if (found) setForm((f) => ({ ...f, service: found.id }))
    }
    if (user) {
      setForm((f) => ({
        ...f,
        fullName: user.fullName || f.fullName,
        email: user.email || f.email,
      }))
    }
  }, [searchParams, user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateBookingForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))

    const selectedService = services.find((s) => s.id === form.service)
    const booking = addBooking({
      ...form,
      service: selectedService?.name || form.service,
      email: form.email,
    })

    setLoading(false)
    setSuccess(booking)
    setForm(initialForm)
  }

  if (success) {
    return (
      <>
        <PageHero badge="Success" title="Booking Confirmed!" subtitle="We can't wait to meet your furry friend." />
        <section className="section-padding">
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <IconCheck className="w-10 h-10" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">Thank You, {success.fullName}!</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Your appointment for <strong>{success.petName}</strong> has been received. We&apos;ll
              confirm your <strong>{success.service}</strong> booking on{' '}
              <strong>{success.date}</strong> at <strong>{success.timeSlot}</strong> shortly via
              email.
            </p>
            <p className="mt-2 text-sm text-slate-500">Booking ID: {success.id}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/dashboard" variant="primary">View Dashboard</Button>
              <Button to="/" variant="outline">Back to Home</Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  const minDate = new Date().toISOString().split('T')[0]

  return (
    <>
      <PageHero
        badge="Book Now"
        title="Schedule Your Appointment"
        subtitle="Fill in the details below and we'll take care of the rest."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 shadow-xl sm:p-10"
          >
            <h2 className="text-xl font-bold text-slate-900">Your Information</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <FormField label="Full Name" required error={errors.fullName}>
                <Input name="fullName" value={form.fullName} onChange={handleChange} error={errors.fullName} placeholder="John Smith" />
              </FormField>
              <FormField label="Phone Number" required error={errors.phone}>
                <Input name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="(555) 123-4567" />
              </FormField>
              <FormField label="Email" required error={errors.email} className="sm:col-span-2">
                <Input name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@email.com" />
              </FormField>
            </div>

            <h2 className="mt-10 text-xl font-bold text-slate-900">Pet Details</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <FormField label="Pet Name" required error={errors.petName}>
                <Input name="petName" value={form.petName} onChange={handleChange} error={errors.petName} placeholder="Buddy" />
              </FormField>
              <FormField label="Pet Type" required error={errors.petType}>
                <Select name="petType" value={form.petType} onChange={handleChange} error={errors.petType}>
                  <option value="">Select type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </Select>
              </FormField>
              <FormField label="Breed">
                <Input name="breed" value={form.breed} onChange={handleChange} placeholder="Golden Retriever" />
              </FormField>
              <FormField label="Weight (lbs)">
                <Input name="weight" type="number" value={form.weight} onChange={handleChange} placeholder="45" />
              </FormField>
            </div>

            <h2 className="mt-10 text-xl font-bold text-slate-900">Appointment</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <FormField label="Service" required error={errors.service} className="sm:col-span-2">
                <Select name="service" value={form.service} onChange={handleChange} error={errors.service}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} — from ${s.priceFrom}
                    </option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Preferred Date" required error={errors.date}>
                <Input name="date" type="date" min={minDate} value={form.date} onChange={handleChange} error={errors.date} />
              </FormField>
              <FormField label="Preferred Time" required error={errors.timeSlot}>
                <Select name="timeSlot" value={form.timeSlot} onChange={handleChange} error={errors.timeSlot}>
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Additional Notes" className="sm:col-span-2">
                <Textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Allergies, special requests, temperament notes..." />
              </FormField>
            </div>

            <Button type="submit" variant="accent" size="lg" className="mt-10 w-full" loading={loading}>
              Submit Booking
            </Button>

            {!user && (
              <p className="mt-4 text-center text-sm text-slate-500">
                Have an account?{' '}
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Log in
                </Link>{' '}
                to track your appointments.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
