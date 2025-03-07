import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog"
import BlogPostCard from "@/components/blog-post-card"

export default function ArchivePage() {
  try {
    const posts = getAllBlogPosts()

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to home
          </Link>

          <header className="mb-12 animate-fade-in">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">All Posts</h1>
            <p className="text-lg text-gray-500">Browse our complete collection of articles</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error rendering ArchivePage:", error)
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

