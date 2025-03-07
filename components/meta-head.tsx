import Head from "next/head"

interface MetaHeadProps {
  title: string
  description: string
  image: string
  url: string
  type?: string
  author?: string
  date?: string
}

export default function MetaHead({ title, description, image, url, type = "website", author, date }: MetaHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Shapes.inc Blog" />
      {author && <meta property="article:author" content={author} />}
      {date && <meta property="article:published_time" content={date} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content="@shapes_inc" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  )
}
```  />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  )
}

