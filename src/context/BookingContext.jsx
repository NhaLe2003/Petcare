import { createContext, useContext, useState, useEffect } from 'react'
import { getBookings, saveBookings, generateId } from '../utils/storage'
import { useAuth } from './AuthContext'

const BookingContext = createContext(null)

const DEMO_BOOKINGS = [
  {
    id: 'demo_1',
    fullName: 'Demo User',
    petName: 'Buddy',
    service: 'Grooming & Haircut',
    date: '2026-05-20',
    timeSlot: '10:00 AM',
    status: 'completed',
    createdAt: '2026-05-10T10:00:00Z',
  },
  {
    id: 'demo_2',
    fullName: 'Demo User',
    petName: 'Buddy',
    service: 'Pet Spa Treatments',
    date: '2026-05-28',
    timeSlot: '2:00 PM',
    status: 'confirmed',
    createdAt: '2026-05-18T14:00:00Z',
  },
]

export function BookingProvider({ children }) {
  const { user } = useAuth()
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const stored = getBookings()
    if (stored.length === 0) {
      saveBookings(DEMO_BOOKINGS)
      setBookings(DEMO_BOOKINGS)
    } else {
      setBookings(stored)
    }
  }, [])

  const addBooking = (bookingData) => {
    const newBooking = {
      id: generateId(),
      ...bookingData,
      status: 'pending',
      userId: user?.id || null,
      createdAt: new Date().toISOString(),
    }
    const updated = [newBooking, ...bookings]
    setBookings(updated)
    saveBookings(updated)
    return newBooking
  }

  const updateBookingStatus = (id, status) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b))
    setBookings(updated)
    saveBookings(updated)
  }

  const getUserBookings = () => {
    if (!user) return bookings
    return bookings.filter(
      (b) => b.userId === user.id || b.email === user.email,
    )
  }

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, updateBookingStatus, getUserBookings }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBookings() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBookings must be used within BookingProvider')
  return ctx
}
