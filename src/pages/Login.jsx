import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import Button from '../components/ui/Button'
import { FormField, Input } from '../components/ui/FormField'
import { validateLogin } from '../utils/validation'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [authError, setAuthError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) navigate('/dashboard')
  }, [user, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setAuthError('')
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateLogin(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    const result = login(form.email, form.password)
    setLoading(false)
    if (result.success) navigate('/dashboard')
    else setAuthError(result.error)
  }

  return (
    <>
      <PageHero badge="Account" title="Welcome Back" subtitle="Sign in to manage your appointments and booking history." />

      <section className="section-padding">
        <div className="mx-auto max-w-md">
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-xl">
            {authError && (
              <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{authError}</div>
            )}
            <FormField label="Email" required error={errors.email}>
              <Input name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@email.com" />
            </FormField>
            <FormField label="Password" required error={errors.password}>
              <Input name="password" type="password" value={form.password} onChange={handleChange} error={errors.password} placeholder="••••••••" />
            </FormField>
            <Button type="submit" variant="primary" className="mt-6 w-full" loading={loading}>
              Sign In
            </Button>
            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="font-medium text-primary hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
