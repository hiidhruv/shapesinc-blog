"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, LogIn, ExternalLink } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="https://shapes.inc/login"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 flex items-center"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </Link>
            <Link
              href="https://discord.gg/shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Discord
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="https://shapes.inc/login"
              className="flex items-center px-3 py-2 text-base text-gray-500 hover:text-gray-900 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
            <Link
              href="https://discord.gg/shapes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-base text-gray-500 hover:text-gray-900 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Discord
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

