import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IconPaw, IconMenu, IconClose } from '../ui/Icons'
import Button from '../ui/Button'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-slate-600'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white transition-transform group-hover:scale-105">
            <IconPaw className="w-6 h-6" />
          </span>
          <span className="text-xl font-bold text-slate-900">
            Pet<span className="text-primary">Care</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <Button to="/dashboard" variant="ghost" size="sm">
                Dashboard
              </Button>
              <button
                onClick={logout}
                className="text-sm font-medium text-slate-600 hover:text-primary"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Button to="/login" variant="ghost" size="sm">
                Login
              </Button>
              <Button to="/register" variant="outline" size="sm">
                Register
              </Button>
            </>
          )}
          <Button to="/booking" variant="accent" size="sm">
            Book Now
          </Button>
        </div>

        <button
          className="rounded-xl p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-6 shadow-lg lg:hidden animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            <hr className="border-slate-100" />
            {user ? (
              <>
                <NavLink to="/dashboard" className={linkClass}>
                  Dashboard
                </NavLink>
                <button onClick={logout} className="text-left text-sm font-medium text-slate-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>
                <NavLink to="/register" className={linkClass}>
                  Register
                </NavLink>
              </>
            )}
            <Button to="/booking" variant="accent" size="md" className="w-full">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
