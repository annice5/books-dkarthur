import React from 'react'

const Logo = ({ compact = false }) => {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="44"
        height="44"
        viewBox="0 0 52 52"
        className="shrink-0 lg:h-12 lg:w-12"
      >
        <circle cx="26" cy="26" r="24.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text
          x="26"
          y="33"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontWeight="700"
          fontSize="17"
          fill="currentColor"
        >
          DKA
        </text>
      </svg>

      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
            D.K. Arthur
          </span>
          <span className="mt-1 font-body text-[9px] uppercase tracking-[0.3em] text-gray-500 lg:text-[10px]">
            Author
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo