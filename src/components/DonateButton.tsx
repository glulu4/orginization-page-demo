import React from 'react'

interface DonateButtonProps {
    href?: string;
    text?: string;
    onClick?: () => void;
}

export default function DonateButton({href = '/',
    text = 'Donate now',
    onClick, }: DonateButtonProps) {
  return (
      <div className="flex justify-center">
          <a
              href={href}
              onClick={onClick}
              className="inline-block border-2 hover:border-blue-700 border-blue-900 bg-blue-900 hover:bg-blue-700 transition-colors duration-200 text-white font-serif text-md font-medium px-11 py-4 rounded-full"
          >
              {text}
          </a>
      </div>
  )
}
