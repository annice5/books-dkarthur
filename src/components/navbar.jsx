import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'The D.K. Arthur Canon', href: '/theDkArthurCanon' },
  { label: 'Contact', href: '/contact' },
]

const linkClass = ({ isActive }) =>
  `text-[15px] transition-colors duration-150 ${
    isActive ? 'text-gray-400' : 'text-gray-800 hover:text-gray-500'
  }`

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative w-full bg-white">
      <div className="flex items-center justify-center pt-6 pb-3">
        <NavLink to="/" className="font-serif text-3xl font-bold tracking-tight text-gray-900">
          D.K. Arthur
        </NavLink>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="absolute right-6 top-6 text-gray-900 md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden items-center justify-center gap-10 pb-5 md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            end={link.href === '/'}
            className={linkClass}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile nav — dropdown, shown only when menuOpen */}
      {menuOpen && (
        <nav className="flex flex-col items-center gap-6 pb-8 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === '/'}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}

      <div className="h-px w-full bg-gray-100" />
    </header>
  )
}

export default Navbar