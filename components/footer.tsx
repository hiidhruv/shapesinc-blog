"use client"

import * as React from "react"
import Link from "next/link"

export default function Footer(): React.JSX.Element {
  return (
    <footer className="mx-4 sm:mx-8 lg:mx-16 mb-4 bg-[#F8F9FC]">
      <div className="bg-[#F8F9FC] border border-gray-200 max-w-5xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://x.com/shapes_inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <svg 
                  className="w-5 h-5"
                  aria-hidden="true" 
                  focusable="false" 
                  role="img" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512"
                >
                  <path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </Link>
              <Link
                href="https://discord.gg/shapes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 127.14 96.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
              </Link>
            </div>

            {/* Navigation links */}
            <nav className="flex items-center">
              <Link
                href="https://wiki.shapes.inc"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 px-3"
              >
                Wiki
              </Link>
              <Link
                href="https://status.shapes.inc"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 px-3"
              >
                Status
              </Link>
              <div className="flex items-center space-x-1 px-3">
                <Link
                  href="https://shapes.inc/jobs"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  Jobs
                </Link>
                <span className="text-sm text-pink-600 bg-pink-50 px-1.5">5</span>
              </div>
              <Link
                href="https://shapes.inc/privacy"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 px-3"
              >
                Privacy
              </Link>
              <Link
                href="https://shapes.inc/terms"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 px-3"
              >
                Terms
              </Link>
              <Link
                href="https://shapes.inc/help"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 px-3"
              >
                Help
              </Link>
              <Link
                href="https://shapes.inc/report"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 px-3"
              >
                Report
              </Link>
              <Link
                href="https://shapes.inc/safety"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 px-3"
              >
                Safety
              </Link>
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">© 2025 Shapes, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

