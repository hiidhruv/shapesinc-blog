import { NextResponse } from "next/server"

export function middleware(request) {
  // This is a simple middleware that can be expanded as needed
  // It currently just passes through all requests
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static, etc)
    "/((?!_next/|api/|static/|public/|favicon.ico).*)",
  ],
}

