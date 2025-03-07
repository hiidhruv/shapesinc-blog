import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Gets the base URL for the application
 * Tries to determine it from the request headers or falls back to defaults
 */
export function getBaseUrl(): string {
  // For client-side code, use the browser's location
  if (typeof window !== "undefined") {
    return window.location.origin
  }

  // Default fallback
  return "https://shapes-inc-blog.vercel.app"
}

/**
 * Converts a relative URL to an absolute URL
 */
export function toAbsoluteUrl(relativeUrl: string): string {
  const baseUrl = getBaseUrl()

  // If the URL is already absolute, return it as is
  if (relativeUrl.startsWith("http://") || relativeUrl.startsWith("https://")) {
    return relativeUrl
  }

  // Ensure the relative URL starts with a slash
  const normalizedRelativeUrl = relativeUrl.startsWith("/") ? relativeUrl : `/${relativeUrl}`

  return `${baseUrl}${normalizedRelativeUrl}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

