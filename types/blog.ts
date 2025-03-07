export interface Author {
  name: string
  role: string
  avatar: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  coverImage: string
  author: Author
  content: string[]
}

