"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Twitter, Users } from "lucide-react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  // Only show the footer when the user reaches the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (window.scrollY > scrollTotal - 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <footer
      className={`border-t border-gray-200 py-8 mt-12 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Social links on the left */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Connect with us</h3>
            <div className="space-y-2">
              <Link
                href="https://x.com/shapes_inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <Twitter className="h-4 w-4 mr-2" />X
              </Link>
              <Link
                href="https://discord.gg/shapes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <Users className="h-4 w-4 mr-2" />
                Discord
              </Link>
            </div>
          </div>

          {/* Site links on the right */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <Link
              href="https://wiki.shapes.inc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Wiki
            </Link>
            <Link
              href="https://status.shapes.inc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Status
            </Link>
            <Link
              href="https://shapes.inc/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Jobs
            </Link>
            <Link
              href="https://shapes.inc/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="https://shapes.inc/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="https://shapes.inc/help"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Help
            </Link>
            <Link
              href="https://shapes.inc/report"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Report
            </Link>
            <Link
              href="https://shapes.inc/safety"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Safety
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Shapes.inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

