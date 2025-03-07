import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BlogPostCard from "@/components/blog-post-card"
import { getAllBlogPosts, getAllCategories, getBlogsByCategory } from "@/lib/blog"
import type { Metadata } from "next"

// Generate metadata for the home page
export const metadata: Metadata = {
  title: "Blog - Shapes.inc",
  description: "Creating AI-powered interactions that are engaging, safe, and trustworthy.",
  openGraph: {
    title: "Blog - Shapes.inc",
    description: "Creating AI-powered interactions that are engaging, safe, and trustworthy.",
    url: "https://shapes-inc-blog.vercel.app",
    siteName: "Shapes.inc Blog",
    images: [
      {
        url: "https://i.imgur.com/2C9MF0l.png",
        width: 1200,
        height: 630,
        alt: "Shapes.inc",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Shapes.inc",
    description: "Creating AI-powered interactions that are engaging, safe, and trustworthy.",
    images: ["https://i.imgur.com/2C9MF0l.png"],
    creator: "@shapes_inc",
  },
}

export default function Home() {
  try {
    const categories = getAllCategories()
    const featuredPosts = getAllBlogPosts().slice(0, 3)

    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Shapes.inc</h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              Creating AI-powered interactions that are engaging, safe, and trustworthy.
            </p>
          </header>

          <main>
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <BlogPostCard key={post.slug} post={post} index={index} />
                ))}
              </div>
            </section>

            {categories.map((category) => {
              const posts = getBlogsByCategory(category).slice(0, 3)
              if (posts.length === 0) return null

              return (
                <section key={category} className="mb-16">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold capitalize">{category}</h2>
                    <Link
                      href={`/category/${category}`}
                      className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-300 group"
                    >
                      View all
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                      <BlogPostCard key={post.slug} post={post} index={index} />
                    ))}
                  </div>
                </section>
              )
            })}
          </main>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error rendering Home page:", error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Shapes.inc</h1>
          <p>Something went wrong. Please try again later.</p>
        </div>
      </div>
    )
  }
}

