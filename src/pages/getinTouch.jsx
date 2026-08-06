import React, { useState } from 'react'

const CONTACT_EMAIL = 'contact@my-domain.com'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Message from ${form.name} via website`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="bg-white px-6 py-16 text-center sm:px-8 md:px-16 md:py-24 md:pr-32">
      <div className="mx-auto h-0.5 w-4 bg-gray-900" />
      <h2 className="mt-5 font-serif text-3xl font-bold tracking-[0.15em] text-gray-900 sm:text-4xl sm:tracking-[0.25em] md:text-5xl md:tracking-[0.3em]">
        Contact
      </h2>

      <p className="mx-auto mt-6 max-w-xs font-body text-sm text-gray-600 sm:max-w-sm sm:text-base">
        Have a question for D.K. Arthur? Send a message below and it'll open directly in your email.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-xs text-left sm:max-w-sm"
      >
        <label htmlFor="name" className="block text-sm text-gray-800">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="mt-1 w-full border-b border-gray-400 bg-transparent pb-2 text-sm text-gray-900 outline-none focus:border-gray-900"
        />

        <label htmlFor="email" className="mt-6 block text-sm text-gray-800">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full border-b border-gray-400 bg-transparent pb-2 text-sm text-gray-900 outline-none focus:border-gray-900"
        />

        <label htmlFor="message" className="mt-6 block text-sm text-gray-800">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full resize-none border-b border-gray-400 bg-transparent pb-2 text-sm text-gray-900 outline-none focus:border-gray-900"
        />

        <button
          type="submit"
          className="mt-8 w-full bg-gray-900 py-3 text-sm text-white hover:bg-gray-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      <p className="mt-10 text-sm text-gray-500">
        Or reach out directly at{' '}
        
         <a href={`mailto:${CONTACT_EMAIL}`}
          className="text-blue-700 underline hover:text-blue-500 break-all"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </section>
  )
}

export default Contact