const USERS_KEY = 'petcare_users'
const SESSION_KEY = 'petcare_session'
const BOOKINGS_KEY = 'petcare_bookings'

export function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
  } catch {
    return null
  }
}

export function setSession(user) {
  if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  else localStorage.removeItem(SESSION_KEY)
}

export function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveBookings(bookings) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
}

export function generateId() {
  return `bk_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}
