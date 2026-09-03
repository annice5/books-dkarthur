import React, { useState } from "react";
import Reveal from "./reveal";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // wire this up to your actual newsletter service (Mailchimp, ConvertKit, etc.)
    console.log("Subscribing:", email, subscribed);
  };

  return (
    <footer className="mx-auto max-w-[1600px] bg-[#161616] px-6 py-12 text-gray-100 sm:px-8 md:px-16 md:py-16 md:pr-32 lg:px-20 lg:py-20 xl:px-28">
      <div className="grid grid-cols-1 gap-12 text-center sm:gap-14 md:grid-cols-3 md:gap-12 lg:gap-16">

        <Reveal className="flex items-center justify-center md:justify-start">
          <img
            src={logo}
            alt="D.K. Arthur"
            className="h-20 w-auto object-contain sm:h-24 lg:h-28"
          />
        </Reveal>

   <Reveal delay={0.12}>
  <p className="font-serif text-sm sm:text-base lg:text-lg">
    Sign up for news and updates from D.K. Arthur — Enter your email here *
  </p>

  <form
    onSubmit={handleSubscribe}
    className="mx-auto mt-4 max-w-xs text-left lg:max-w-sm md:mx-0"
  >
    <input
      id="footer-email"
      type="email"
      required
      aria-label="Enter your email here"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="mt-2 w-full border-b border-gray-500 bg-transparent pb-2 text-sm text-gray-100 outline-none focus:border-gray-100 lg:text-base"
    />

    <label className="mt-5 flex items-start gap-2 text-sm lg:text-base">
      <input
        type="checkbox"
        required
        checked={subscribed}
        onChange={(e) => setSubscribed(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 border-gray-500 bg-transparent"
      />
      Yes, subscribe me to your newsletter. *
    </label>

    <button
      type="submit"
      className="mt-5 w-full border border-gray-100 py-2.5 text-sm hover:bg-gray-100 hover:text-gray-900 transition-colors lg:text-base"
    >
      Subscribe
    </button>
  </form>
</Reveal>
        <Reveal delay={0.24}>
          <p className="font-serif text-sm sm:text-base lg:text-lg">
            Find more information about
          </p>
          <p className="font-serif text-sm sm:text-base lg:text-lg">
            our online store &amp; policies below
          </p>
          <p className="mt-6 text-sm lg:text-base">
            <a href="/faq" className="text-blue-300 hover:text-blue-200">
              FAQ
            </a>
            {" | "}
            <a
              href="/shipping-returns"
              className="text-blue-300 hover:text-blue-200"
            >
              Shipping &amp; Returns
            </a>
          </p>
          <p className="text-sm lg:text-base">
            <a
              href="/store-policy"
              className="text-blue-300 hover:text-blue-200"
            >
              Store Policy
            </a>
            {" | "}
            
             <a href="/payment-methods"
              className="text-blue-300 hover:text-blue-200"
            >
              Payment Methods
            </a>
          </p>
        </Reveal>
      </div>

      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-300 md:mt-16 lg:mt-20 lg:text-base">
        © 2026 by D.K. Arthur. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;