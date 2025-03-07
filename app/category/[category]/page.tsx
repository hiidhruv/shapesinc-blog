import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getBlogsByCategory, getAllCategories } from "@/lib/blog"
import BlogPostCard from "@/components/blog-post-card"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Generate metadata for each category page
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const posts = getBlogsByCategory(params.category)

  if (posts.length === 0) {
    return {
      title: "Category Not Found - Shapes.inc",
      description: "The requested category could not be found.",
    }
  }

  // Use the first post's thumbnail as the category thumbnail
  const thumbnail = posts[0]?.thumbnail || "https://i.imgur.com/2C9MF0l.png"

  return {
    title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} - Shapes.inc Blog`,
    description: `Browse all posts in the ${params.category} category on Shapes.inc Blog.`,
    openGraph: {
      title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} - Shapes.inc Blog`,
      description: `Browse all posts in the ${params.category} category on Shapes.inc Blog.`,
      url: `https://shapes-inc-blog.vercel.app/category/${params.category}`,
      siteName: "Shapes.inc Blog",
      images: [
        {
          url: thumbnail,
          width: 1200,
          height: 630,
          alt: `${params.category} category`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} - Shapes.inc Blog`,
      description: `Browse all posts in the ${params.category} category on Shapes.inc Blog.`,
      images: [thumbnail],
      creator: "@shapes_inc",
    },
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()

  return categories.map((category) => ({
    category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  try {
    const posts = getBlogsByCategory(params.category)

    if (posts.length === 0) {
      notFound()
    }

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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 capitalize">
              {params.category}
            </h1>
            <p className="text-lg text-gray-500">Browse all posts in the {params.category} category</p>
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
    console.error("Error rendering CategoryPage:", error)
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

