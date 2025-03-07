import "./globals.css"
import "./basic-styles.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Blog | Shapes.inc",
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
  icons: {
    icon: "https://imgur.com/qHGWcJZ.png",
    shortcut: "https://imgur.com/qHGWcJZ.png",
    apple: "https://imgur.com/qHGWcJZ.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://imgur.com/qHGWcJZ.png" />
      </head>
      <body>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'