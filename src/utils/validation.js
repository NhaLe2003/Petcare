export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone) {
  return /^[\d\s\-+()]{10,}$/.test(phone.replace(/\s/g, ''))
}

export function validateBookingForm(data) {
  const errors = {}

  if (!data.fullName?.trim()) errors.fullName = 'Full name is required'
  if (!data.phone?.trim()) errors.phone = 'Phone number is required'
  else if (!validatePhone(data.phone)) errors.phone = 'Enter a valid phone number'
  if (!data.email?.trim()) errors.email = 'Email is required'
  else if (!validateEmail(data.email)) errors.email = 'Enter a valid email address'
  if (!data.petName?.trim()) errors.petName = 'Pet name is required'
  if (!data.petType) errors.petType = 'Select a pet type'
  if (!data.service) errors.service = 'Select a service'
  if (!data.date) errors.date = 'Select a preferred date'
  else {
    const selected = new Date(data.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selected < today) errors.date = 'Date cannot be in the past'
  }
  if (!data.timeSlot) errors.timeSlot = 'Select a time slot'

  return errors
}

export function validateLogin(data) {
  const errors = {}
  if (!data.email?.trim()) errors.email = 'Email is required'
  else if (!validateEmail(data.email)) errors.email = 'Invalid email'
  if (!data.password?.trim()) errors.password = 'Password is required'
  else if (data.password.length < 6) errors.password = 'Password must be at least 6 characters'
  return errors
}

export function validateRegister(data) {
  const errors = validateLogin(data)
  if (!data.fullName?.trim()) errors.fullName = 'Full name is required'
  if (!data.confirmPassword) errors.confirmPassword = 'Confirm your password'
  else if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords do not match'
  return errors
}

export function validateContactForm(data) {
  const errors = {}
  if (!data.name?.trim()) errors.name = 'Name is required'
  if (!data.email?.trim()) errors.email = 'Email is required'
  else if (!validateEmail(data.email)) errors.email = 'Invalid email'
  if (!data.message?.trim()) errors.message = 'Message is required'
  return errors
}
