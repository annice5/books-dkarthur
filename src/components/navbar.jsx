import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Reviews', href: '/reviews' },
  { label: ' D.K. Arthur Canon', href: '/theDkArthurCanon' },
  { label: 'Contact', href: '/contact' },
]

const linkClass = ({ isActive }) =>
  `text-[15px] transition-colors duration-150 lg:text-base ${
    isActive ? 'text-gray-400' : 'text-gray-800 hover:text-gray-500'
  }`

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative w-full bg-white">
      <div className="flex items-center justify-center pt-6 pb-3 lg:pt-8 lg:pb-4">
        <NavLink
          to="/"
          className="font-serif text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl"
        >
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
      <nav className="hidden items-center justify-center gap-10 pb-5 md:flex lg:gap-14 lg:pb-6">
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

      {/* Mobile nav — dropdown, animated open/close */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-6 overflow-hidden pb-8 md:hidden"
          >
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
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="h-px w-full bg-gray-100" />
    </header>
  )
}

export default Navbar