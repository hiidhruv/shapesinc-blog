"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/blog"
import Head from "next/head"

interface BlogPostCardProps {
  post: BlogPost
  index: number
}

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Create a description from the content
  const description = post.content.substring(0, 160).replace(/#/g, "").trim() + "..."

  // Create structured data for this post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.thumbnail,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Shapes.inc",
      logo: {
        "@type": "ImageObject",
        url: "https://imgur.com/qHGWcJZ.png",
      },
    },
    datePublished: post.date,
    description: description,
  }

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link
          href={`/category/${post.category}/${post.slug}`}
          className="group block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-lg mb-4 relative aspect-[16/9]">
            <Image
              src={post.thumbnail || "/placeholder.svg"}
              alt={post.title}
              fill
              className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
            />
            <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium capitalize">
              {post.category}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm text-gray-400">{post.date}</div>
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
              {post.title}
            </h2>
            <div className="flex items-center mt-3">
              <div className="h-8 w-8 rounded-full overflow-hidden relative mr-3">
                <Image src={post.authorPfp || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div className="text-sm text-gray-500">{post.author}</div>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  )
}

