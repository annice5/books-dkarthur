import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.jpg'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Reviews', href: '/reviews' },
  { label: ' D.K. Arthur Canon', href: '/theDkArthurCanon' },
  { label: 'Contact', href: '/contact' },
]

const linkClass = ({ isActive }) =>
  `font-nav text-base tracking-wide [font-variant:small-caps] transition-colors duration-150 lg:text-lg ${
    isActive ? 'text-gray-400' : 'text-gray-800 hover:text-gray-500'
  }`

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-white">
      <div className="flex items-center justify-center gap-4 pt-4 pb-2 lg:gap-5 lg:pt-5 lg:pb-3">
        <NavLink to="/" aria-label="D.K. Arthur — Home" className="flex items-center gap-4 lg:gap-5">
          <img
            src={logo}
            alt=""
            className="h-14 w-auto object-contain sm:h-16 lg:h-20"
          />
          <span className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            D.K. Arthur
          </span>
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
            className="flex flex-col items-center gap-6 overflow-hidden bg-white pb-8 md:hidden"
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