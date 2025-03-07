import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getBlogPost } from "@/lib/blog"
import { notFound } from "next/navigation"

export default function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = getBlogPost("", params.slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to home
          </Link>

          <article className="animate-fade-in">
            <header className="mb-8">
              <div className="text-sm text-gray-400 mb-2">{post.date}</div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden relative mr-3">
                  <Image src={post.authorPfp || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-500">{post.role}</div>
                </div>
              </div>
            </header>

            <div className="relative aspect-[16/9] mb-8">
              <Image
                src={post.thumbnail || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="prose prose-gray max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    )
  } catch (error) {
    console.error(`Error rendering BlogPost for ${params.slug}:`, error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">shapes.inc</h1>
          <p>Something went wrong. Please try again later.</p>
        </div>
      </div>
    )
  }
}

