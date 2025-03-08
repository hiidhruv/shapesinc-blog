"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, LogIn } from "lucide-react"

export default function Header(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="md:hidden mr-4" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-500" />
              ) : (
                <Menu className="h-6 w-6 text-gray-500" />
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center font-medium text-gray-900">
              <div className="w-8 h-8 mr-2 rounded-md flex items-center justify-center">
                <Image
                  src="https://imgur.com/qHGWcJZ.png"
                  alt="Shapes.inc logo"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <span>Shapes.inc</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center">
            <Link
              href="https://shapes.inc/login"
              className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-white bg-[#5865F2] hover:bg-[#4752C4] border-0 rounded-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(88,101,242,0.5)]"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 mr-1.5 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="https://shapes.inc/login"
              className="flex items-center px-3 py-2 text-base text-[#5865F2] hover:text-[#4752C4] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 mr-2 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

