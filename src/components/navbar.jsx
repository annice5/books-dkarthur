import React, { useState } from 'react'
import { User, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (label) => {
    setActive(label)
    setMenuOpen(false)
  }

  return (
    <header className="relative w-full bg-white">
      <div className="flex items-center justify-center pt-6 pb-3">
        <a href="/" className="font-serif text-3xl font-bold tracking-tight text-gray-900">
          Daniel Arthur
        </a>

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

      {/* Desktop nav — unchanged */}
      <nav className="hidden items-center justify-center gap-10 pb-5 md:flex">
        {navLinks.map((link) => (
          
          <a  key={link.label}
            href={link.href}
            onClick={() => setActive(link.label)}
            className={`text-[15px] transition-colors duration-150 ${
              active === link.label
                ? 'text-gray-400'
                : 'text-gray-800 hover:text-gray-500'
            }`}
          >
            {link.label}
          </a>
        ))}

        
         <a href="/login"
          className="flex items-center gap-2 text-[15px] text-gray-800 hover:text-gray-500 transition-colors duration-150"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-800">
            <User className="h-4 w-4" strokeWidth={2} />
          </span>
          Log In
        </a>
      </nav>

      {/* Mobile nav — dropdown, shown only when menuOpen */}
      {menuOpen && (
        <nav className="flex flex-col items-center gap-6 pb-8 md:hidden">
          {navLinks.map((link) => (
            
            <a  key={link.label}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`text-[15px] transition-colors duration-150 ${
                active === link.label
                  ? 'text-gray-400'
                  : 'text-gray-800 hover:text-gray-500'
              }`}
            >
              {link.label}
            </a>
          ))}

          
           <a href="/login"
            className="flex items-center gap-2 text-[15px] text-gray-800 hover:text-gray-500 transition-colors duration-150"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-800">
              <User className="h-4 w-4" strokeWidth={2} />
            </span>
            Log In
          </a>
        </nav>
      )}

      <div className="h-px w-full bg-gray-100" />
    </header>
  )
}

export default Navbar