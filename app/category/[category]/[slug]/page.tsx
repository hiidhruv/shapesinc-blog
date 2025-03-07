import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import Markdown from "@/components/markdown"
import type { Metadata } from "next"

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.category, params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Shapes.inc",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - Shapes.inc`,
    description: post.content.substring(0, 160).replace(/#/g, "").trim() + "...",
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/#/g, "").trim() + "...",
      url: `https://shapes-inc-blog.vercel.app/category/${params.category}/${params.slug}`,
      siteName: "Shapes.inc Blog",
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content.substring(0, 160).replace(/#/g, "").trim() + "...",
      images: [post.thumbnail],
      creator: "@shapes_inc",
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()

  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { category: string; slug: string } }) {
  try {
    const post = getBlogPost(params.category, params.slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href={`/category/${params.category}`}
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to {params.category}
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

            <Markdown content={post.content} />
          </article>
        </div>
      </div>
    )
  } catch (error) {
    console.error(`Error rendering BlogPost for ${params.slug}:`, error)
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

