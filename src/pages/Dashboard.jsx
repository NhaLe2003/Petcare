import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import Button from '../components/ui/Button'
import StatusBadge from '../components/ui/StatusBadge'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { useAuth } from '../context/AuthContext'
import { useBookings } from '../context/BookingContext'
import { IconCalendar, IconPaw } from '../components/ui/Icons'

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth()
  const { getUserBookings, bookings } = useBookings()
  if (authLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  const userBookings = user ? getUserBookings() : bookings
  const upcoming = userBookings.filter((b) => b.status === 'pending' || b.status === 'confirmed')
  const past = userBookings.filter((b) => b.status === 'completed' || b.status === 'cancelled')

  return (
    <>
      <PageHero
        badge="Dashboard"
        title={user ? `Hello, ${user.fullName.split(' ')[0]}!` : 'Your Appointments'}
        subtitle={user ? 'Manage your bookings and appointment history.' : 'View demo appointments below. Log in to see your personal bookings.'}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          {!user && (
            <div className="mb-8 rounded-2xl bg-primary/10 p-6 text-center">
              <p className="text-slate-700">
                <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link>
                {' '}or{' '}
                <Link to="/register" className="font-semibold text-primary hover:underline">create an account</Link>
                {' '}to link bookings to your profile.
              </p>
            </div>
          )}

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-900">Appointment History</h2>
            <Button to="/booking" variant="accent" size="sm">
              + New Booking
            </Button>
          </div>

          {userBookings.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center shadow-md">
              <IconPaw className="mx-auto h-12 w-12 text-primary/40" />
              <p className="mt-4 text-slate-600">No appointments yet.</p>
              <Button to="/booking" variant="primary" className="mt-6">
                Book Your First Visit
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {upcoming.length > 0 && (
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Upcoming
                  </h3>
                  <div className="space-y-4">
                    {upcoming.map((booking) => (
                      <BookingRow key={booking.id} booking={booking} />
                    ))}
                  </div>
                </div>
              )}

              {past.length > 0 && (
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Past
                  </h3>
                  <div className="space-y-4">
                    {past.map((booking) => (
                      <BookingRow key={booking.id} booking={booking} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function BookingRow({ booking }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md sm:flex-row sm:items-center sm:justify-between card-hover">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <IconCalendar className="w-6 h-6" />
        </span>
        <div>
          <p className="font-bold text-slate-900">{booking.service}</p>
          <p className="text-sm text-slate-600">
            {booking.petName} · {booking.date} at {booking.timeSlot}
          </p>
          {booking.fullName && (
            <p className="text-xs text-slate-400 mt-1">{booking.fullName}</p>
          )}
        </div>
      </div>
      <StatusBadge status={booking.status} />
    </div>
  )
}
