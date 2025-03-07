"use client"

import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from "next/head"

interface MarkdownProps {
  content: string
}

export default function Markdown({ content }: MarkdownProps) {
  // Extract the first image URL from the markdown content for embeds
  const imageMatch = content.match(/!\[.*?\]$$(.*?)$$/)
  const firstImageUrl = imageMatch ? imageMatch[1] : null

  return (
    <>
      {firstImageUrl && (
        <Head>
          <meta property="og:image" content={firstImageUrl} />
          <meta property="twitter:image" content={firstImageUrl} />
        </Head>
      )}
      <div className="prose prose-gray max-w-none">
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => {
              return (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                  {...props}
                />
              )
            },
            img: ({ node, src, alt, ...props }) => {
              if (!src) return null

              return (
                <div className="my-8 overflow-hidden rounded-lg">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={alt || ""}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              )
            },
            h1: ({ node, ...props }) => (
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mt-10 mb-4"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mt-8 mb-4"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold mt-6 mb-3"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="list-disc pl-6 mb-4"
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <motion.ol
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="list-decimal pl-6 mb-4"
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <motion.blockquote
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-l-4 border-gray-200 pl-4 italic my-6"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
            em: ({ node, ...props }) => <em className="italic" {...props} />,
            a: ({ node, ...props }) => (
              <a className="text-blue-600 hover:text-blue-800 transition-colors duration-200" {...props} />
            ),
            hr: ({ node, ...props }) => <hr className="my-8 border-t border-gray-200" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}

