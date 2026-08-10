import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

const SideBar = () => {
  return (
    <div
      className="fixed top-32 z-40 hidden h-[calc(100vh-8rem)] flex-col items-center justify-center gap-6 md:flex lg:gap-8"
      style={{ right: 'max(1.5rem, calc((100vw - 1600px) / 2 + 1.5rem))' }}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-gray-900 hover:opacity-60"
        >
          <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
        </motion.a>
      ))}
    </div>
  )
}

export default SideBar