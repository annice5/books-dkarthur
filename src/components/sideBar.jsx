import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

const SideBar = () => {
  return (
    <div className="fixed right-6 top-32 z-40 hidden h-[calc(100vh-8rem)] flex-col items-center justify-center gap-6 md:flex">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-900 hover:opacity-60 transition-opacity"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}

export default SideBar