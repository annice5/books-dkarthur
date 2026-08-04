import React from 'react'
import { ShoppingBag, MessageCircle } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
]

const SideBar = () => {
  const cartCount = 0

  return (
    <div className="fixed right-6 top-32 z-40 hidden h-[calc(100vh-8rem)] flex-col items-center justify-between py-12 md:flex">
      <a href="/cart" className="relative text-gray-900 hover:opacity-70 transition-opacity">
        <ShoppingBag className="h-6 w-6" strokeWidth={1.75} />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white">
          {cartCount}
        </span>
      </a>

      <div className="flex flex-col items-center gap-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          
           <a key={label}
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

      <button
        type="button"
        aria-label="Open chat"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
      </button>
    </div>
  )
}

export default SideBar